import { useState } from 'react'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};



export default function TemperatureInput(props) {
    const temperature = props.temperature;

    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    }
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            <input value={temperature}
                onChange={handleChange} />
        </fieldset>
    );
}

