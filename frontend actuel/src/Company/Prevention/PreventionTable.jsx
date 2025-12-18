import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPreventions } from '../../Redux/Prevention/Action';
import { api } from '../../config/api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const PreventionTable = () => {
    const dispatch = useDispatch();
    const { prevention } = useSelector(store => store);

    useEffect(() => {
        dispatch(getAllPreventions());
    }, [dispatch]);

    const handleSendReport = async () => {
        try {
            await api.post('/api/notifications/send-report', "racinekanedev@gmail.com", {
                 headers: { 
                     Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                     'Content-Type': 'text/plain' 
                 }
            });
            alert("Rapport envoyé à racinekanedev@gmail.com");
        } catch (error) {
            console.error("Erreur lors de l'envoi du rapport", error);
            alert("Erreur lors de l'envoi du rapport");
        }
    };

  return (
    <>
      <h1 className="pb-5 font-bold text-xl">Liste des Préventions</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Auteur</StyledTableCell>
              <StyledTableCell>Zone Prévention</StyledTableCell>
              <StyledTableCell>Type Prévention</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Statut</StyledTableCell>
              <StyledTableCell align="right">Annuler</StyledTableCell>ce</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {prevention.preventions.map((item) => (
              <StyledTableRow key={item.id}>

                {/* PREVENU */}
                <StyledTableCell component="th" scope="row">
                  <ul className="space-y-2">
                    <div>
                      <li><strong>Nom :</strong> {item.user?.fullName || "Utilisateur Inconnu"}</li>
                      <li><strong>Email :</strong> {item.user?.email || "N/A"}</li>
                      <li><strong>Adresse :</strong> {item.address || "Dakar, Yoff"}</li>
                      {/* <li><strong>Âge :</strong> {item.age || 28}</li> */}
                    </div>
                  </ul>
                </StyledTableCell>

                {/* ZONE */}
                <StyledTableCell className="space-y-2">
                  <p>{item.zone || "Mbour"}</p>
                </StyledTableCell>

                {/* TYPE */}
                <StyledTableCell className="space-y-2">
                  <p>{item.type || "Sensibilisation"}</p>
                </StyledTableCell>

                {/* DATE */}
                <StyledTableCell className="space-y-2">
                  <p>{item.date || "05/01/2025"}</p>
                </StyledTableCell>

                {/* STATUT */}
                <StyledTableCell>
                  <p className="text-orange-500">{item.status || "En attente"}</p>
                </StyledTableCell>

                {/* ANNULER */}
                <StyledTableCell align="right">
                  <Button variant="outlined" color="error">
                    Annuler
                  </Button>
                </StyledTableCell>

                {/* POLICE */}
                <StyledTableCell align="right">
                  <Button variant="contained" color="secondary" onClick={handleSendReport}>
                    Envoyer rapport prévention
                  </Button>
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PreventionTable