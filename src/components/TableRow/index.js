function TableRow(props) {
    return (
<tbody>
<tr>
  <td>{props.name}</td>
  <td>{props.phone}</td>
  <td>{props.email}</td>
  <td>{props.address}</td>
</tr>
</tbody>
    )
}

export default TableRow;