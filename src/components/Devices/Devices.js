import React from 'react';
import Devicedetails from '../Devicedetails/Devicedetails';

const Devices = (props) => {
    return (
        <div >
            <h2>I have: {props.name}</h2>
            <Devicedetails price='16000'></Devicedetails>

        </div>
    );
};

export default Devices;