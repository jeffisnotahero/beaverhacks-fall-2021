import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core'

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
                    <div>
                        City: {nearestCityData.passNearestCityData.city}
                    </div>
                    <div>
                        State: {nearestCityData.passNearestCityData.state}
                    </div>
                    <div>
                        AQI: {nearestCityData.passNearestCityData.current.pollution.aqius}
                    </div>
                    <div>
                        As of: {nearestCityData.passNearestCityData.current.pollution.ts}
                    </div>
                    <div>
                        Humidity: {nearestCityData.passNearestCityData.current.pollution.hu}
                    </div>
                    <div>
                        Atmospheric pressure in hPa: {nearestCityData.passNearestCityData.current.weather.pr}
                    </div>
                    <div>
                        Temperature: {nearestCityData.passNearestCityData.current.weather.tp}
                    </div>
                    <div>
                        As of: {nearestCityData.passNearestCityData.current.weather.ts}
                    </div>
                    <div>
                        Windspeed: {nearestCityData.passNearestCityData.current.weather.ws}
                    </div>
                </Grid>

                <div>
                    Air quality index, Level of health concern: {checkAqiStatus(nearestCityData.passNearestCityData.current.pollution.aqius)}
                </div>
            </div>
        }
        </div>
    )
}

export default NearestCityData;
