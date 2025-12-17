import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';



import { useDispatch, useSelector } from 'react-redux';
import { getCompanyBookings } from '../../Redux/Booking/Action';
import { useEffect } from 'react';

const TransactionTable = () => {
  const dispatch = useDispatch();
  const { booking } = useSelector(store => store);

  useEffect(() => {
    dispatch(getCompanyBookings());
  }, [dispatch]);

 return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Details Client</TableCell>
              <TableCell>Reservation d'entretien</TableCell>
              <TableCell align="right">Montant</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booking.bookings.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left">
                  <div className="space-y-1">
                    <h1 className="font-medium">
                      {item.date}
                    </h1>
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="space-y-2">
                    <h1>{item.customer?.fullName || item.customerName}</h1>
                    <h1 className="font-semibold">{item.customer?.email}</h1>
                    <h1 className="font-bold text-gray-600">
                      {item.customer?.phone}
                    </h1>
                  </div>
                </TableCell>
                <TableCell>
                  Booking Id : <strong> {item.id} </strong>
                </TableCell>
                <TableCell align="right">{item.amount || item.price} fr CFA</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TransactionTable