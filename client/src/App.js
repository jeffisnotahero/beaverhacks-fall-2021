import React, { useEffect } from 'react';

import Homepage from './components/Homepage/Homepage';
import Memos from './components/Memos/Memos'
import { Container, Typography, Grid} from '@material-ui/core'

// import { useDispatch } from 'react-redux';
// import { getMemos } from './actions/memos';


const App = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getMemos());

    // }, [dispatch]);

    return (
        <Container maxidth="lg">
            <div>
                <div>
                    <Homepage />
                </div>
                <div>
                    <Memos />
                </div>    
            </div>
        </Container>
    );
}
export default App;