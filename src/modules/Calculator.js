import ButtonCalculator from "./ButtonCalculator"
import Result from "./Result"
import {useState} from 'react'

export default function Calculator(props) {
const [value,setValue] = useState('');
const handleOnClick = (valueOnScreen) =>{
    if(valueOnScreen === '=') {
        setValue( eval(value));
        console.log("aaaa");

    }else {
        setValue( value + valueOnScreen);
    }
    console.log("===="+value);
}
    return (
        <div>
            <form name="calculator" border="1px">
                <table>
                    <tr>
                        <Result value={value}/>
                    </tr>
                    <tr>
                        <ButtonCalculator name="one" value="1" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="two" value="2" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="three" value="3" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="mulltiply" value="*" handleOnClick={handleOnClick}/>
                    </tr>
                   <tr>
                        <ButtonCalculator name="four" value="4" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="five" value="5" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="six" value="6" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="minus" value="-" handleOnClick={handleOnClick}/>
                    </tr>
                    <tr>
                        <ButtonCalculator name="seven" value="7" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="eight" value="8" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="nine" value="9" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="plus" value="+" handleOnClick={handleOnClick}/>
                    </tr>
                    <tr>
                        <ButtonCalculator name="delete" value="C" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="zero" value="0" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="equal" value="=" handleOnClick={handleOnClick}/>
                        <ButtonCalculator name="divice" value="/" handleOnClick={handleOnClick}/>
                    </tr>
                </table>
            </form>
        </div>
    )



}