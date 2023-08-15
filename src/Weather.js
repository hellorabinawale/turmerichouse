import React, { Fragment, useState, useEffect } from 'react';
import UseInput from './UserInput';
import Table from './Table';
const Weather = () => {

    const [data, userSubmitted] = useState(null);
    const [apidata, updateApidata] = useState([]);


    const userSub = (v) => {
        userSubmitted(v);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const jsonData = await response.json();
                updateApidata(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            <UseInput fomsubmiteed={userSub} />

            <Table data={apidata} />
        </div>
    )
}
export default Weather;