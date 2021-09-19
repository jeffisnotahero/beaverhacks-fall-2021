import React, { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//  Table style
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const NearestCityData = (passNearestCityData) => {
    const classes = useStyles();

    // Table data
    function createData(name, value) {
        return { name, value };
    }

    // Check AQI status
    const checkAqiStatus = (index) => {
        if (index <= 50){
            return "Good"
        }
        else if (index >= 51 && index <= 100){
            return "Moderate"
        }
        else if (index >= 101 && index <= 150){
            return "Unhealthy for sensitve group"
        }
        else if (index >= 151 && index <= 200){
            return "Unhealthy"
        }
        else if (index >= 201 && index <= 300){
            return "Very Unhealthy"
        }
        else if (index >= 301 && index <= 500){
            return "Hazardous"
        } 
    }

    const [rowData, setRowData] = useState([
        createData('City', passNearestCityData.passNearestCityData.city),
        createData('State', passNearestCityData.passNearestCityData.state),
        createData('AQI', passNearestCityData.passNearestCityData.current.pollution.aqius),
        createData('Humidity', passNearestCityData.passNearestCityData.current.weather.hu),
        createData('Atmospheric pressure in hPa', passNearestCityData.passNearestCityData.current.weather.pr),
        createData('Temperature', passNearestCityData.passNearestCityData.current.weather.tp),
        createData('Windspeed', passNearestCityData.passNearestCityData.current.weather.ws),
        createData('Air quality index, Level of health concern', checkAqiStatus(passNearestCityData.passNearestCityData.current.pollution.aqius)),
    ]);

    return(
        <div>
            <Typography component="h4" variant="h4">Current location climate data</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Data</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">Value</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                            {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.data}</StyledTableCell>
                            <StyledTableCell align="right">{row.value}</StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default NearestCityData;
