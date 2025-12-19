import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';



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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CategoryTable = () => {
   return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Titre</StyledTableCell>

              <StyledTableCell align="right">Mettre à jour</StyledTableCell>
              {/* <StyledTableCell align="right">Delete</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { id: 1, name: "Agriculture", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60" },
              { id: 2, name: "Élevage", image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=500&auto=format&fit=crop&q=60" },
              { id: 3, name: "Pêche", image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?w=500&auto=format&fit=crop&q=60" },
              { id: 4, name: "Artisanat", image: "https://images.unsplash.com/photo-1606744881471-1f3d891f74b6?w=500&auto=format&fit=crop&q=60" },
              { id: 5, name: "Commerce", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&auto=format&fit=crop&q=60" }
            ].map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <div className="flex gap-1 flex-wrap">
                    <img className="w-20 rounded-md" src={item.image} alt={item.name} />
                  </div>
                </StyledTableCell>
                <StyledTableCell>{item.name}</StyledTableCell>

                <StyledTableCell align="right">
                  <IconButton
                    
                    color="primary"
                    className="bg-primary-color"
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                {/* <StyledTableCell align="right">
                  <IconButton
                    onClick={() => console.log("delete servcie")}
                    color="error"
                  >
                    <Delete />
                  </IconButton>
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   </>
  )
}

export default CategoryTable