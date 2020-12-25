export default function Calculator(props) {

    return (
        <div>
            <form name="calculator" border="1px">
                <table>
                    <tr>
                        <td colspan="4">
                            <input type="text" name="display" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td><input type="button" name="one" value="1" /></td>
                        <td><input type="button" name="two" value="2" /></td>
                        <td><input type="button" name="three" value="3" /></td>
                        <td><input type="button" class="operator" name="plus" /></td>
                    </tr>
                    <tr>
                        <td><input type="button" name="four" value="4" /></td>
                        <td><input type="button" name="five" value="5" /></td>
                        <td><input type="button" name="six" value="6" /></td>
                        <td><input type="button" class="operator" name="minus" value="-" /></td>
                    </tr>
                    <tr>
                        <td><input type="button" name="seven" value="7" /></td>
                        <td><input type="button" name="eight" value="8" /></td>
                        <td><input type="button" name="nine" value="9" /></td>
                        <td><input type="button" class="operator" name="times" value="x" /></td>
                    </tr>
                    <tr>
                        <td><input type="button" class="operator" id="clear" name="clear" value="C" /></td>
                        <td><input type="button" class="operator" name="zero" value="0" /></td>
                        <td><input type="button" class="operator" name="doit" value="=" /></td>
                        <td><input type="button" class="operator" name="div" value="/" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )



}