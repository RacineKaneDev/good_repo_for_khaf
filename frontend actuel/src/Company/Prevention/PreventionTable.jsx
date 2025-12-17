import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';





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
              <StyledTableCell align="right">Annuler</StyledTableCell>
              <StyledTableCell align="right">Police</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 1, 1, 1, 1].map((item) => (
              <StyledTableRow key={item.id}>

                {/* PREVENU */}
                <StyledTableCell component="th" scope="row">
                  <ul className="space-y-2">
                    <div>
                      <li><strong>Nom :</strong> Omar Diop</li>
                      <li><strong>Email :</strong> omar@example.com</li>
                      <li><strong>Adresse :</strong> Dakar, Yoff</li>
                      <li><strong>Âge :</strong> 28</li>
                    </div>
                  </ul>
                </StyledTableCell>

                {/* ZONE */}
                <StyledTableCell className="space-y-2">
                  <p>Mbour</p>
                </StyledTableCell>

                {/* TYPE */}
                <StyledTableCell className="space-y-2">
                  <p>Sensibilisation</p>
                </StyledTableCell>

                {/* DATE */}
                <StyledTableCell className="space-y-2">
                  <p>05/01/2025</p>
                </StyledTableCell>

                {/* STATUT */}
                <StyledTableCell>
                  <p className="text-orange-500">En attente</p>
                </StyledTableCell>

                {/* ANNULER */}
                <StyledTableCell align="right">
                  <Button variant="outlined" color="error">
                    Annuler
                  </Button>
                </StyledTableCell>

                {/* POLICE */}
                <StyledTableCell align="right">
                  <Button variant="contained" color="secondary">
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