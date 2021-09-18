import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Memos from './components/Memos/Memos'
import Form from './components/Form/Form'

const App = () => {
    return (
        <div>

            <div>
                <Memos />
            </div>

            <div>
                <Form />
            </div>

        </div>
    );
}
export default App;