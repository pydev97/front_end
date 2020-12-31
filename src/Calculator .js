import { useState } from 'react'
import TemperatureInput from './TemperatureInput '
import BoilingVerdict from './BoilingVerdict'
export default function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature );
        setCelsius(temperature);
        setFahrenheit(tryConvert(temperature, toFahrenheit))
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setFahrenheit(temperature);
        setCelsius(tryConvert(temperature, toCelsius))
    }
    return (

        <div>
            <TemperatureInput scale="c" temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    )
}




function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}