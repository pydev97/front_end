import ButtonCalculator from "./ButtonCalculator"
import Result from "./Result"

export default function Calculator(props) {

    return (
        <div>
            <form name="calculator" border="1px">
                <table>
                    <tr>
                        <Result />
                    </tr>
                    <tr>
                        <ButtonCalculator name="one" value="1" />
                        <ButtonCalculator name="two" value="2" />
                        <ButtonCalculator name="three" value="3" />
                        <ButtonCalculator name="mulltiply" value="*" />
                    </tr>
                    <tr>
                        <ButtonCalculator name="four" value="4" />
                        <ButtonCalculator name="five" value="5" />
                        <ButtonCalculator name="six" value="6" />
                        <ButtonCalculator name="minus" value="-" />
                    </tr>
                    <tr>
                        <ButtonCalculator name="seven" value="7" />
                        <ButtonCalculator name="eight" value="8" />
                        <ButtonCalculator name="nine" value="9" />
                        <ButtonCalculator name="plus" value="+" />
                    </tr>
                    <tr>
                        <ButtonCalculator name="delete" value="C" />
                        <ButtonCalculator name="zero" value="0" />
                        <ButtonCalculator name="equal" value="=" />
                        <ButtonCalculator name="divice" value="/" />
                    </tr>
                </table>
            </form>
        </div>
    )



}