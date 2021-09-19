import React from 'react';
import { useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Memos = () => {
    const memos = useSelector((state) => state.memos)
    console.log("hello",memos)

    const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        },
    }));
    const classes = useStyles();
    
    return (
        <div>
             <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">Memo</Typography>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item xs={12} align="center">
                <List component="nav" fullwidth="true" className={classes.root}  aria-label="mailbox folders">
            {memos.map(function(data, index){
                return(
                    <Grid item xs={12}  align="center" key={index}>
                        <ListItem>
                        <ListItemText primary={data.city} secondary={'State: ' + data.state + " " + 'AQI: ' + data.aqi + " " + 'Title: '+ data.title + " " + 'Message:'  + data.message }/>
                        </ListItem>
                        <Divider />
                    </Grid>
                )
            })}
                </List>
            </Grid>
            
        </div>

    );
}

export default Memos;