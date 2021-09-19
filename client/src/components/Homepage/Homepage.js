import React, { useEffect, useState } from 'react';
import { getMemos } from '../../actions/memos';
import { useDispatch } from 'react-redux';

import Form from '../Form/Form';
import NearestCityData from '../NearestCityData/NearestCityData'
import Memos from '../Memos/Memos';

import { Grid, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// AirVisual API
// http://api.airvisual.com/v2/nearest_city?key={{YOUR_API_KEY}}
const API_KEY = "YOUR API KEY HERE"


// Style
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Homepage = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [renderCreateMemo, setRenderCreateMemo] = useState(false)

    // Nearest city data
    const [nearestCityData, setNearestCityData] = useState([]);
    const [nearestCityDataLoading, setNearestCityDataLoading] = useState(true)

    // Fetch Nerest City Data
    async function fetchNearestCityData(){
        const response = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`)
        const data = await response.json();
        const item = data.data;
        setNearestCityData(item);
        setNearestCityDataLoading(false);
    }

    // useEffect
    useEffect(() => {
        dispatch(getMemos());
        fetchNearestCityData();
    }, [dispatch]);

    // Show or Hide CreateMemoView
    const renderCreateMemoView = () => {
        setRenderCreateMemo(true)
    }

    const unrenderCreateMemoView = () => {
        setRenderCreateMemo(false)
    }

    // Show or Hide current location climate data
    const[currentClimateDataView, setRenderCurrentClimateData] = useState(true)

    const renderCurrentClimateData = () => {
        setRenderCurrentClimateData(true)
    }

    const unrenderCurrentClimateData = () => {
        setRenderCurrentClimateData(false)
    }

    // Render
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h1" className={classes.paper}>Local weather</Typography>
                </Grid>

                {currentClimateDataView ? 
                    <Grid item xs={12}>
                        {!renderCreateMemo ? 
                            <Paper className={classes.paper}>{nearestCityDataLoading ? <div>Loading...</ div> : <NearestCityData passNearestCityData={nearestCityData}/>}</Paper>
                            : <div></div> }
                    </Grid>
                : <div></div>}

                {!currentClimateDataView ? 
                    <Grid item xs={12}>
                        {!renderCreateMemo ? 
                            <Paper className={classes.paper}><Memos /></Paper>
                            : <div></div> }
                    </Grid>
                    :<div></div>}

            </Grid>

            {currentClimateDataView && !renderCreateMemo ? 
            <Grid align="center">
                <Button 
                    onClick={unrenderCurrentClimateData}
                    color="primary" 
                    variant="contained" 
                    >
                    Show Memo
                </Button>
            </Grid>      
            :
            <div></div>}

            {!currentClimateDataView ? 
            <Grid align="center">
                <Button 
                    onClick={renderCurrentClimateData}
                    color="primary" 
                    variant="contained" 
                    >
                    Back
                </Button>
            </Grid>
            :
            <div></div>}

            <Grid align="center">
                {!renderCreateMemo ?
                    <Button 
                        onClick={renderCreateMemoView}
                        color="primary" 
                        variant="contained" 
                        >
                        Create Memo
                    </Button>

                :<div></div>}
            </Grid>

             <Grid align="center">
                {renderCreateMemo ?
                    <Button 
                        onClick={unrenderCreateMemoView}
                        color="secondary" 
                        variant="contained" 
                        >
                        Back
                    </Button>

                    :<div></div>}
            </Grid>

            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    {renderCreateMemo ? 
                        <Paper className={classes.paper}>{nearestCityDataLoading ? <div>Loading...</div> : <Form passNearestCityData={nearestCityData}/>}</Paper> 
                        : <div></div> }
                </Grid>
            </Grid>
      </div>        
    
    );
}

export default Homepage;
