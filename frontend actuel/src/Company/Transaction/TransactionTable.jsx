import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';



const TransactionTable = () => {
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
            {[1,1,1,1].map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left">
                  <div className="space-y-1">
                    <h1 className="font-medium">
                      05 Aug, 2025
                    </h1>
                    
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  <div className="space-y-2">
                    <h1>racine kane</h1>
                    <h1 className="font-semibold">racine.kane@example.com</h1>
                    <h1 className="font-bold text-gray-600">
                      +221 77 123 45 67
                    </h1>
                  </div>
                </TableCell>
                <TableCell>
                  Booking Id : <strong> 1 </strong>
                </TableCell>
                <TableCell align="right">1000 fr CFA</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TransactionTable