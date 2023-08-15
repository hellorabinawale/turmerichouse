import React from 'react';

const ListView = ({ data, onDelete }) => {
    const handleDelete = (id) => {
        onDelete(id);
    };

    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    {item.name}, {item.age}
                    <Button onDelete={() => handleDelete(item.id)} />
                </li>
            ))}
        </ul>
    );
};

const Button = ({ onDelete }) => {
    return <button onClick={onDelete}>Delete</button>;
};

const View = ({ info, delDatas }) => {
    const handleDelete = (id) => {
        const updatedData = info.filter((data) => data.id !== id);
        delDatas(updatedData);
    };

    return (
        <div>
            <h2>Data:</h2>
            <ListView data={info} onDelete={handleDelete} />
        </div>
    );
};

export default View;
