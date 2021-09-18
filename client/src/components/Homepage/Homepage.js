import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core'

import Form from '../Form/Form';
import NearestCityData from '../NearestCityData/NearestCityData'

import { getMemos } from '../../actions/memos';
import { useDispatch } from 'react-redux';


// NEED TO BE REMOVED BEFORE PUSHING
const API_KEY = "YOUR_API_KEY"

const Homepage = () => {
    const dispatch = useDispatch();

    // Nearest city data
    const [nearestCityData, setNearestCityData] = useState([]);
    const [nearestCityDataLoading, setNearestCityDataLoading] = useState(true)

    async function fetchNearestCityDataData(){
        const response = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`)
        const data = await response.json();
        const item = data.data;
        setNearestCityData(item);
        setNearestCityDataLoading(false);
    }

    useEffect(() => {
        dispatch(getMemos());
        fetchNearestCityDataData();

    }, [dispatch]);

    // TEST
    const handleOnClick = () => {
        console.log(nearestCityData)
        console.log(nearestCityDataLoading)
    }
    
    return (
        <div>
            <div>
                <h1>Homepage</h1>

            </div>

            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} align="center">    
                        {nearestCityDataLoading ? <div>Loading...</div> : <NearestCityData passNearestCityData={nearestCityData}/>}
                    </Grid>
                </Grid>
            </div>

            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} align="center"> 
                        {nearestCityDataLoading ? <div>Loading...</div> : <Form passNearestCityData={nearestCityData}/>}   
                    </Grid>
                </Grid>
            </div>

            <div>
                <Button onClick={handleOnClick}>Check</Button>
            </div>
        </div>

    );
}

export default Homepage;
