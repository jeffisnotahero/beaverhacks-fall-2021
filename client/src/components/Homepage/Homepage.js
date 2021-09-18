import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core'

import Form from '../Form/Form';

// NEED TO BE REMOVED BEFORE PUSHING
const API_KEY = "YOUR API KEY HERE"

const Homepage = () => {

    // Test API
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`)
            const data = await response.json();
            const item = data.data
            console.log(item)
        }
        fetchData()
    }, []);


    return (
        <div>
            <div>
                <h1>Homepage</h1>

            </div>
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} align="center">    
                        <Form />
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}

export default Homepage;
