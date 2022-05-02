import React from 'react';
import Dail from '../Dail/Dail';

const Display = (props) => {
    return (
        <div style={{ border: '3px solid green', margin: '20px' }}>
            <h2>Name: {props.name}</h2>
            <p>so far today: {props.steps}</p>
            <Dail steps={props.steps}></Dail>
        </div>
    );
};

export default Display;