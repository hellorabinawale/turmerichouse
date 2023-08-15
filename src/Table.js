import React from "react";

const Table = ({ data }) => {
    return (
        <table style={Tablestyle}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {data.map(i =>
                    <tr key={i.id}>
                        <td style={tds}>{i.title}</td><td style={tds}>{i.body}</td>
                    </tr>)}
            </tbody>
        </table >

    )
}

const Tablestyle = {
    fontFamily: 'arial, sans - serif',
    borderCollapse: 'collapse',
    width: '100%'
}
const tds = {
    border: ' 1px solid #dddddd',
    textAlign: 'left',
    padding: '8px'
}

export default Table;