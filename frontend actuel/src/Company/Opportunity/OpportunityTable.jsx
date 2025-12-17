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
            {[1,1,1,1].map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <div className="flex gap-1 flex-wrap">
                    <img className="w-20 rounded-md" src="https://static.wixstatic.com/media/e6fb96_9b9b4f6c0026482f8548a20db60a68ff~mv2.jpg/v1/fit/w_2500,h_1330,al_c/e6fb96_9b9b4f6c0026482f8548a20db60a68ff~mv2.jpg" alt="" />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">Ouverture boutique cosmetique</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  2000 fr CFA
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