import React, { useState } from 'react';

const Forms = ({ update, data }) => {
    const [formdata, updateFormdata] = useState({ name: '', age: '' });


    const datachange = (e) => {
        updateFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
    const dataSubmitted = (e) => {
        e.preventDefault();
        const newData = {
            id: Date.now().toString(),
            name: formdata.name,
            age: formdata.age
        }
        update([...data, newData]);
        updateFormdata({ name: '', age: '' });

    }
    return (
        <form onSubmit={dataSubmitted}>
            <label>Name</label>
            <input type="name" name="name" value={formdata.name} placeholder='Name' onChange={datachange} />

            <label>Age</label>
            <input type="number" name="age" value={formdata.age} placeholder='Age' onChange={datachange} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Forms;