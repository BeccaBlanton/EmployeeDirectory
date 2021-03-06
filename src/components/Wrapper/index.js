import React, { Component } from "react";
import Container from "../Container"
import Col from "../Col"
import Row from "../Row"
//import Title from "../Title"
import MainTable from "../MainTable"
import TableRow  from "../TableRow"
import TableHeaders from "../TableHeaders"
import employees from "../../employees.json"
class Wrapper extends Component {
  state = {
    employees
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <MainTable>
                <TableHeaders/>
              {this.state.employees.map(employees => (
                <TableRow
                key ={employees.id}
                name={employees.name}
                phone={employees.phone}
                email={employees.email}
                address={employees.address}
                />
                ))}
            </MainTable>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Wrapper;
