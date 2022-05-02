import React, { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';
const Watch = () => {
    const [steps, setSteps] = useState(0);


    const stepsCounter = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ border: '2px solid red', margin: '20px' }}>
            <h2>This is my stop watch</h2>
            <h3>My steps is: {steps}</h3>
            <button onClick={stepsCounter}>Steps Counter</button>
            <Display name='Garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;