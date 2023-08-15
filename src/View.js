import React from 'react';
import List from './List';


const View = ({ info, delDatas }) => {

    const removeData = (id) => {
        const removeditem = info.filter(i => i.id !== id);
        delDatas(removeditem);
    }

    return (
        <ul>
            {info.map(i => <List key={i.id} data={i} removedata={removeData} />)}
        </ul>
    )
}
export default View;
// <li key={i.id}>{i.name} {i.age} <button onClick={() => delData(i.id)}>Del</button></li>