import React from 'react';
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

const Memos = () => {
    const memos = useSelector((state) => state.memos)
    console.log("hello",memos)
    
    return (
        <>
            <h1>Memos</h1>
            {memos.map(function(data, index){
                return(
                    <Typography component="h6" variant="h6" key={index}>{index + 1}: City: {data.city} State: {data.state} AQI: {data.aqi} Title: {data.title} Message: {data.message}</Typography>
                )
            })}
            
        </>

    );
}

export default Memos;