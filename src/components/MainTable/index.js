import Table from 'react-bootstrap/Table';
function MainTable(props) {
    return (
      <Table striped bordered hover>
        {props.children}
      </Table>
    )
}

export default MainTable;