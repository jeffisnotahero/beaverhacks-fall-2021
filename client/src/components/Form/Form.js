import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles';

import { useDispatch } from 'react-redux'
import { createMemo } from '../../actions/memos'

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [memoData, setMemoData] = useState({
        title: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(memoData)

        dispatch(createMemo(memoData));

    }

    const clear = () => {
        setMemoData({title: "", message: ""})
    
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Memo</Typography>
                <TextField className={classes.textfield} name="title" variant="outlined" label="Title" fullWidth value={memoData.title} onChange={(e) => setMemoData({...memoData, title:e.target.value})}/>
                <TextField className={classes.textfield} name="message" variant="outlined" label="Message" fullWidth value={memoData.message} onChange={(e) => setMemoData({...memoData, message:e.target.value})}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="large" type="submit" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    

    );
}

export default Form;