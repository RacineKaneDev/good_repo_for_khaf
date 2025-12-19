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
            {[
              { id: 1, date: "05 Aug, 2025", name: "Racine Kane", email: "racine.kane@example.com", phone: "+221 77 123 45 67", amount: "1000" },
              { id: 2, date: "06 Aug, 2025", name: "Mariama Ba", email: "mariama.ba@example.com", phone: "+221 77 234 56 78", amount: "5000" },
              { id: 3, date: "07 Aug, 2025", name: "Ousmane Sonko", email: "ousmane.sonko@example.com", phone: "+221 77 345 67 89", amount: "15000" },
              { id: 4, date: "08 Aug, 2025", name: "Adama Faye", email: "adama.faye@example.com", phone: "+221 77 456 78 90", amount: "2500" },
              { id: 5, date: "09 Aug, 2025", name: "Seynabou Diop", email: "seynabou.diop@example.com", phone: "+221 77 567 89 01", amount: "7500" }
            ].map((item) => (
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
                    <h1>{item.name}</h1>
                    <h1 className="font-semibold">{item.email}</h1>
                    <h1 className="font-bold text-gray-600">
                      {item.phone}
                    </h1>
                  </div>
                </TableCell>
                <TableCell>
                  Booking Id : <strong> {item.id} </strong>
                </TableCell>
                <TableCell align="right">{item.amount} fr CFA</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TransactionTable