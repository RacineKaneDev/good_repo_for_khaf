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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BookingTable = () => {
  return (
    <>
      <h1 className="pb-5 font-bold text-xl">Reservations d'entretien</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Opportunitée</StyledTableCell>
              <StyledTableCell>Heures & Date</StyledTableCell>
              <StyledTableCell>Frais d'entretien</StyledTableCell>
              <StyledTableCell>Client</StyledTableCell>
              <StyledTableCell>
                Statut
              </StyledTableCell>
              <StyledTableCell align="right">Annuler</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { id: 1, service: "Terrain Agricole", date: "05/01/2025", time: "10:00 AM", price: "1200", customer: "Omar Diop", email: "omar.diop@example.com", status: "Confirmé", statusColor: "text-green-500" },
              { id: 2, service: "Financement Pirogue", date: "06/01/2025", time: "09:30 AM", price: "5000", customer: "Fatou Ndiaye", email: "fatou.ndiaye@example.com", status: "En attente", statusColor: "text-yellow-500" },
              { id: 3, service: "Matériel Couture", date: "07/01/2025", time: "14:00 PM", price: "2500", customer: "Moussa Fall", email: "moussa.fall@example.com", status: "Annulé", statusColor: "text-red-500" },
              { id: 4, service: "Semences", date: "08/01/2025", time: "11:00 AM", price: "3000", customer: "Awa Sy", email: "awa.sy@example.com", status: "Confirmé", statusColor: "text-green-500" },
              { id: 5, service: "Engrais Bio", date: "09/01/2025", time: "16:00 PM", price: "1500", customer: "Cheikh Diop", email: "cheikh.diop@example.com", status: "En attente", statusColor: "text-yellow-500" }
            ].map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <ul className="space-y-2">
                       <div>
                        <li>{item.service}</li>
                       </div>
                  </ul>
                </StyledTableCell>

                <StyledTableCell className="space-y-2">
                  <p> Date : {item.date}</p>
                  <p> Time : {item.time}</p>
                </StyledTableCell>
                <StyledTableCell>{item.price} fr CFA</StyledTableCell>
                <StyledTableCell className="space-y-2">
                  <p>Full Name : {item.customer}</p>
                  <p>Email : {item.email}</p>
                </StyledTableCell>
                <StyledTableCell >
                  <p className={`${item.statusColor}`}>{item.status}</p>
                  </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                  >
                    Annuler
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

export default BookingTable