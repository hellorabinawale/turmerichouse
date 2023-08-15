import React from 'react';
import Button from './button';
const List = ({ data, removedata }) => {


    return (
        <li>{data.name} {data.age}
            <Button id={data.id} removedata={() => removedata(data.id)} />
        </li>
    )
}

export default List;