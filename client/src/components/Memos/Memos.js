import React, { memo } from 'react';
import { useSelector } from 'react-redux'
import Memo from './Memo/Memo'

const Memos = () => {
    const memos = useSelector((state) => state.memos)
    console.log("hello",memos)
    
    return (
        <>
            <h1>Memos</h1>
            {memos.map(function(data, index){
                return(
                    <div key={index}>{data.temperature}</div>
                )
                

            })}
            
        </>

    );
}

export default Memos;