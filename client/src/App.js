import React, { useEffect } from 'react';

import Homepage from './components/Homepage/Homepage';
import { Container, Typography, Grid} from '@material-ui/core'

// import { useDispatch } from 'react-redux';
// import { getMemos } from './actions/memos';


const App = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getMemos());

    // }, [dispatch]);

    return (

            <div className="center">
                <div>
                    <Homepage />
                </div> 
            </div>
    );
}
export default App;