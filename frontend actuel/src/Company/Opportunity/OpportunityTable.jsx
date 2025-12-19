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

const OpportunityTable = () => {
  return (
    <>
      <h1 className="pb-5 font-bold text-xl">Opportunités</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Titre</StyledTableCell>
              <StyledTableCell align="right">FRAIS</StyledTableCell>
              {/* <StyledTableCell align="right">Category</StyledTableCell> */}

              <StyledTableCell align="right">Mettre à jour</StyledTableCell>
              {/* <StyledTableCell align="right">Delete</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { id: 1, title: "Financement Boutique Cosmétique", price: "2.000.000", image: "https://images.unsplash.com/photo-1576426863848-c21f5fc67278?w=500" },
              { id: 2, title: "Achat Pirogue Traditionnelle", price: "500.000", image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=500" },
              { id: 3, title: "Projet Aviculture Moderne", price: "1.500.000", image: "https://images.unsplash.com/photo-1516467508483-a721206156e3?w=500" },
              { id: 4, title: "Commerce de Tissus", price: "750.000", image: "https://images.unsplash.com/photo-1604514278489-35c1d686720f?w=500" },
              { id: 5, title: "Transformation de Fruits", price: "1.200.000", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=500" }
            ].map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <div className="flex gap-1 flex-wrap">
                    <img className="w-20 rounded-md" src={item.image} alt={item.title} />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{item.title}</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {item.price} fr CFA
                </StyledTableCell>
                {/* <StyledTableCell align="right">
                  {" "}
                  {item.service.name}
                </StyledTableCell> */}

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
                    onClick={() =>
                      console.log("delete servcie")
                     
                    }
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

export default OpportunityTable