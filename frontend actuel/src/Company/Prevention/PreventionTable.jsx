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
            {[
              { id: 1, name: "Omar Diop", email: "omar@example.com", address: "Dakar, Yoff", age: 28, zone: "Mbour", type: "Sensibilisation", date: "05/01/2025", status: "En attente", statusColor: "text-orange-500" },
              { id: 2, name: "Fatou Sow", email: "fatou@example.com", address: "Saint-Louis, Ndar", age: 34, zone: "Guet Ndar", type: "Causerie", date: "06/01/2025", status: "Validé", statusColor: "text-green-500" },
              { id: 3, name: "Modou Fall", email: "modou@example.com", address: "Thiès, Cité Lamy", age: 22, zone: "Kayar", type: "Visite Domicile", date: "07/01/2025", status: "Annulé", statusColor: "text-red-500" },
              { id: 4, name: "Aissatou Ba", email: "aicha@example.com", address: "Ziguinchor, Escale", age: 29, zone: "Cap Skirring", type: "Forum", date: "08/01/2025", status: "En cours", statusColor: "text-blue-500" },
              { id: 5, name: "Ibou Ndiaye", email: "ibou@example.com", address: "Kaolack, Centre", age: 40, zone: "Nioro", type: "Caravane", date: "09/01/2025", status: "Terminé", statusColor: "text-gray-500" }
            ].map((item) => (
              <StyledTableRow key={item.id}>

                {/* PREVENU */}
                <StyledTableCell component="th" scope="row">
                  <ul className="space-y-2">
                    <div>
                      <li><strong>Nom :</strong> {item.name}</li>
                      <li><strong>Email :</strong> {item.email}</li>
                      <li><strong>Adresse :</strong> {item.address}</li>
                      <li><strong>Âge :</strong> {item.age}</li>
                    </div>
                  </ul>
                </StyledTableCell>

                {/* ZONE */}
                <StyledTableCell className="space-y-2">
                  <p>{item.zone}</p>
                </StyledTableCell>

                {/* TYPE */}
                <StyledTableCell className="space-y-2">
                  <p>{item.type}</p>
                </StyledTableCell>

                {/* DATE */}
                <StyledTableCell className="space-y-2">
                  <p>{item.date}</p>
                </StyledTableCell>

                {/* STATUT */}
                <StyledTableCell>
                  <p className={item.statusColor}>{item.status}</p>
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