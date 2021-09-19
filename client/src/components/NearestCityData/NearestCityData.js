import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core'

const NearestCityData = (passNearestCityData) => {

    const [nearestCityData, setNearestCityData] = useState([]);
    const [nearestCityDataLoading, setNearestCityDataLoading] = useState(true)

    useEffect( async () => { 
        await setNearestCityData(passNearestCityData)
        setNearestCityDataLoading(false)

    }, [])

    console.log("nearestCityData1", nearestCityData)

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

    return(
        <div>
        {nearestCityDataLoading ? <div>loading</div> : 
            <div>
                <Grid align="center">
                    <Typography component="h4" variant="h4">
                        Nearest City Climate Data
                    </Typography>
                    <Typography component="h6" variant="h6">
                        City: {nearestCityData.passNearestCityData.city}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        State: {nearestCityData.passNearestCityData.state}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        AQI: {nearestCityData.passNearestCityData.current.pollution.aqius}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        As of: {nearestCityData.passNearestCityData.current.pollution.ts}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Humidity: {nearestCityData.passNearestCityData.current.weather.hu}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Atmospheric pressure in hPa: {nearestCityData.passNearestCityData.current.weather.pr}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Temperature: {nearestCityData.passNearestCityData.current.weather.tp}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        As of: {nearestCityData.passNearestCityData.current.weather.ts}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Windspeed: {nearestCityData.passNearestCityData.current.weather.ws}
                    </Typography>
                </Grid>

                <Typography component="h6" variant="h6">
                    Air quality index, Level of health concern: {checkAqiStatus(nearestCityData.passNearestCityData.current.pollution.aqius)}
                </Typography>
            </div>
        }
        </div>
    )
}

export default NearestCityData;
