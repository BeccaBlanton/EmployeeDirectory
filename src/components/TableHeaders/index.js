function TableHeaders(props){
    return(
        <thead>
            <tr>
                <th onClick={() => {props.formSort('name')}}>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
    )
}

export default TableHeaders;