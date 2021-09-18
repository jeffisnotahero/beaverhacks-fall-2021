import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles';

import { useDispatch } from 'react-redux'
import { createMemo } from '../../actions/memos'

const Form = (nearestCityData) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [memoData, setMemoData] = useState({
        city: nearestCityData.passNearestCityData.city,
        state: nearestCityData.passNearestCityData.state,
        aqi: nearestCityData.passNearestCityData.current.pollution.aqius,
        humidity: nearestCityData.passNearestCityData.current.weather.hu,
        temperature: nearestCityData.passNearestCityData.current.weather.tp,
        title: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(memoData)

        dispatch(createMemo(memoData));

    }

    const clear = () => {
        setMemoData({...memoData, title: "", message: ""})
    
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Memo</Typography>
                <TextField className={classes.textfield} name="city" variant="outlined" label="City" fullWidth value={memoData.city} onChange={(e) => setMemoData({...memoData, title:e.target.value})}/>
                <TextField className={classes.textfield} name="state" variant="outlined" label="State" fullWidth value={memoData.state} onChange={(e) => setMemoData({...memoData, title:e.target.value})}/>
                <TextField className={classes.textfield} name="aqi" variant="outlined" label="AQI" fullWidth value={memoData.aqi} onChange={(e) => setMemoData({...memoData, title:e.target.value})}/>
                <TextField className={classes.textfield} name="humidity" variant="outlined" label="Humidity" fullWidth value={memoData.humidity} onChange={(e) => setMemoData({...memoData, title:e.target.value})}/>
                <TextField className={classes.textfield} name="temperature" variant="outlined" label="Temperature" fullWidth value={memoData.temperature} onChange={(e) => setMemoData({...memoData, title:e.target.value})}/>
                <TextField className={classes.textfield} name="title" variant="outlined" label="Title" fullWidth value={memoData.title} onChange={(e) => setMemoData({...memoData, title:e.target.value})}/>
                <TextField className={classes.textfield} name="message" variant="outlined" label="Message" fullWidth value={memoData.message} onChange={(e) => setMemoData({...memoData, message:e.target.value})}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="large" type="submit" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    

    );
}

export default Form;