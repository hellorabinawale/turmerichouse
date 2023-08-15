import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState(0);
    const [clock, setclock] = useState(0);
    const fetchData = async () => {
        const response = await fetch('https://api.example.com/data');
        const data = response.json();
    }

    useEffect(() => {



        fetchData();
        return () => {
            console.log('cleaned');
        }
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Clock: {clock}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setclock((prevClock) => prevClock + 1)}>Increment</button>
        </div>
    );
}
export default ExampleComponent;