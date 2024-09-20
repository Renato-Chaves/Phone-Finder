import React, { useEffect, useState } from 'react'

function Test(){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8081/devices')
        .then(res => res.json())
        .then(data => setData(data))
        .then(err => console.log(err))
    }, [])

    console.log(data);
    console.log("---");
    console.log(data.err);
    console.log("---");

    return (
        <div>
            <table>
                <thead>
                    <th>ID: </th>
                    <th>Name: </th>
                    <th>Created_at: </th>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td><img src={d.picture} height={80}/></td>
                            <td>{d.released_at}</td>
                            <td>{d.display_resolution}</td>
                            <td>{d.specifications}</td>
                            {/* {console.log(d.specifications)} */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Test