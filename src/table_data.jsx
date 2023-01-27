import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

const Table_data = (props) => {
    const  rows=props.data.prediction
    const sliderValue=props.data.sliderValue
  //   console.log(sliderValue,parseFloat(rows.insult));
  //  if(parseFloat(rows.insult)>sliderValue)
  //  {
  //   console.log('success');
  //  }

console.log('in table data');
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
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    return ( 
        <>
         <TableContainer component={Paper}>
      <Table stickyHeader  sx={{ minWidth: 340 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          
            <StyledTableCell align="left">Features</StyledTableCell>
            <StyledTableCell >Result</StyledTableCell>
            <StyledTableCell >Score</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               Identity Hate
              </StyledTableCell>
              <StyledTableCell >{parseFloat(rows.identity_hate)>sliderValue?
              <Button variant="outlined" color="success">
                      Positive
                  </Button>:
                  <Button variant="outlined" color="error">
                  negative
                </Button>
}</StyledTableCell>
              
              <StyledTableCell >{rows.identity_hate}</StyledTableCell>
            </StyledTableRow>

                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                Insult
                </StyledTableCell>
                <StyledTableCell >{parseFloat(rows.insult)>sliderValue?
              <Button variant="outlined" color="success">
                      Positive
                  </Button>:
                  <Button variant="outlined" color="error">
                  negative
                </Button>
          }</StyledTableCell>
                <StyledTableCell >{rows.insult}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                Obscene
                </StyledTableCell>
                <StyledTableCell >{parseFloat(rows.obscene)>sliderValue?
              <Button variant="outlined" color="success">
                      Positive
                  </Button>:
                  <Button variant="outlined" color="error">
                  negative
                </Button>
          }</StyledTableCell>
                <StyledTableCell >{rows.obscene}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                Severe Toxic
                </StyledTableCell>

                <StyledTableCell >{parseFloat(rows.severe_toxic)>sliderValue?
              <Button variant="outlined" color="success">
                      Positive
                  </Button>:
                  <Button variant="outlined" color="error">
                  negative
                </Button>
          }</StyledTableCell>
                <StyledTableCell >{rows.severe_toxic}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                Threat
                </StyledTableCell>


                <StyledTableCell >{parseFloat(rows.threat)>sliderValue?
              <Button variant="outlined" color="success">
                      Positive
                  </Button>:
                  <Button variant="outlined" color="error">
                  negative
                </Button>
          }</StyledTableCell>

                <StyledTableCell >{rows.threat}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                Toxic
                </StyledTableCell>
                <StyledTableCell >{parseFloat(rows.toxic)>sliderValue?
              <Button variant="outlined" color="success">
                      Positive
                  </Button>:
                  <Button variant="outlined" color="error">
                  negative
                </Button>
          }</StyledTableCell>
                <StyledTableCell >{rows.toxic}</StyledTableCell>
                </StyledTableRow>
            
         
        </TableBody>
      </Table>
    </TableContainer>
        </>
     );

}
 
export default Table_data;