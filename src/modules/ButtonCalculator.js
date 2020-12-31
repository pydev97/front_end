export default function ButtonCalculator(props) {
    const handleOnClick = (e) =>{
        props.handleOnClick(e.target.value)
    }
    return(
        <td><input type="button" name={props.name} value={props.value} onClick ={handleOnClick}/></td>
    )
}