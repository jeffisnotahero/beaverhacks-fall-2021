import React, { useEffect, useState } from 'react';

import { Grid, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Form from '../Form/Form';
import NearestCityData from '../NearestCityData/NearestCityData'
import Memos from '../Memos/Memos';

import { getMemos } from '../../actions/memos';
import { useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';

// NEED TO BE REMOVED BEFORE PUSHING
const API_KEY = "YOUR_API_KEY"

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

    // Show / Hide CreateMemoView
    const renderCreateMemoView = () => {
        setRenderCreateMemo(true)
    }

    const unrenderCreateMemoView = () => {
        setRenderCreateMemo(false)
    }

    // Render
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h2" className={classes.paper}>Homepage</Typography>
                </Grid>

                <Grid item xs={12}>
                    {!renderCreateMemo ? <Paper className={classes.paper}>{nearestCityDataLoading ? <div>Loading...</ div> : <NearestCityData passNearestCityData={nearestCityData}/>}</Paper>: <div></div> }
                </Grid>

                <Grid item xs={12}>
                    {!renderCreateMemo ? <Paper className={classes.paper}><Memos /></Paper>: <div></div> }
                </Grid>
            </Grid>

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

            <Grid spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    {renderCreateMemo ? <Paper className={classes.paper}>{nearestCityDataLoading ? <div>Loading...</div> : <Form passNearestCityData={nearestCityData}/>}</Paper> : <div></div> }
                </Grid>
            </Grid>
      </div>        
    
    );
}

export default Homepage;
