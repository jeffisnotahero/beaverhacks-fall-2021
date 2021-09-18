import React, { useEffect } from 'react';

import Form from '../Form/Form';

// NEED TO BE REMOVED BEFORE PUSHING
const API_KEY = "PUT API KEY HERE"

const Homepage = () => {

    // Test API
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`http://api.airvisual.com/v2/countries?key=${API_KEY}`)
            const data = await response.json();
            const item = data.data
            console.log(item)
        }
        fetchData()
    }, []);


    return (
        <div>
            <div>
                <h1>Homepage</h1>

            </div>
            <div>
                <Form />
            </div>
        </div>

    );
}

export default Homepage;
