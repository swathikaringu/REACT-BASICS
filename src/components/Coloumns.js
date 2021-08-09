import React from 'react'

function Coloumns() {
    const items = ['swathi','devi']
    return (
        <React.Fragment>
            {
     items.map(item => (
        <React.Fragment key ={item.id}>
            <h1>Title</h1>
            <p> item.title</p>
            {items}
            </React.Fragment>
     ))
            }
            <td>Name</td>
            <td>Swathi</td>  
        </React.Fragment>
    )
}

export default Coloumns
