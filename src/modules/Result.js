export default function Result(props) {
    // tạo local state lưu giá trị của result
    return (
        <td colspan="4">
            <input type="text" name="display" value={props.value} disabled />
        </td>
    )
}