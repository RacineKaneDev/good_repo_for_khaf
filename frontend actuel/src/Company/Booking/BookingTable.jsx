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
            {[1,1,1,1,1,1,1].map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <ul className="space-y-2">
                    {[1].map((service) => (
                      <div>
                        <li>Terrain Agricole</li>
                      <li>financement atelier de coiffure</li>
                      </div>

                    ))}
                  </ul>
                </StyledTableCell>

                <StyledTableCell className="space-y-2">
                  <p> Date : 05/01/2025</p>
                  <p> Time : 10:00 AM</p>
                </StyledTableCell>
                <StyledTableCell>1200 fr CFA</StyledTableCell>
                <StyledTableCell className="space-y-2">
                  <p>Full Name : Omar Diop</p>
                  <p>Email : omar.diop@example.com</p>
                </StyledTableCell>
                <StyledTableCell >
                  <p className={`text-green-500`}>confirmé</p>
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