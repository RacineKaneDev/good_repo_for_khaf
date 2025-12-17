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
import { useDispatch, useSelector } from 'react-redux';
import { getUserBookings } from '../../Redux/Booking/Action';




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
  const dispatch = useDispatch();
  const { booking, auth } = useSelector(store => store);

  useEffect(() => {
    if (auth.user?.id) {
       dispatch(getUserBookings(auth.user?.id));
    }
  }, [auth.user?.id, dispatch]);

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
            {booking.bookings.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <ul className="space-y-2">
                      {/* Assuming opportunity is an object or string */}
                      <div>
                        <li>{item.opportunity?.title || item.opportunityName}</li>
                      </div>
                  </ul>
                </StyledTableCell>

                <StyledTableCell className="space-y-2">
                  <p> Date : {item.date}</p>
                  <p> Time : {item.time}</p>
                </StyledTableCell>
                <StyledTableCell>{item.amount || item.price} fr CFA</StyledTableCell>
                <StyledTableCell className="space-y-2">
                  <p>Full Name : {item.customer?.fullName || item.customerName}</p>
                  <p>Email : {item.customer?.email}</p>
                </StyledTableCell>
                <StyledTableCell >
                  <p className={`text-green-500`}>{item.status}</p>
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