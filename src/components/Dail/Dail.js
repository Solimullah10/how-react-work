import React from 'react';

const Dail = (props) => {
    return (
        <div style={{ border: '3px solid blue', margin: '20px' }}>
            <h3>This is Dial</h3>
            <p>steps so far {props.steps}</p>
        </div>
    );
};

export default Dail;