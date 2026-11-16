import React from 'react';
function Card(props){
    return(
    <div className='card'>
        <h2>{props.id}</h2>
        <p>Name:{props.name}</p>
        <p>Department:{props.dept}</p>
        <p>Year:{props.year}</p>
    </div>
    );
}
export default Card;