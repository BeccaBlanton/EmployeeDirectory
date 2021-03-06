import React, { Component } from "react";
import Container from "../Container"
import Col from "../Col"
import Row from "../Row"
import Title from "../Title"
import SearchForm from "../SearchForm"
import MainTable from "../MainTable"
import TableRow  from "../TableRow"
import TableHeaders from "../TableHeaders"
import employees from "../../employees.json"

class Wrapper extends Component {
  state = {
    employees,
    search: ""
  };
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  formSubmit = (event) => {
    event.preventDefault()
    const employees = this.state.employees.filter(employee => employee.name === this.state.search);
    this.setState({ employees });
  }

  render() {
    return (
      <Container>
          <Title />
            <SearchForm
            handleInputChange={this.handleInputChange}
            formSubmit={this.formSubmit}/>
        <Row>
          <Col size="md-8">
            <MainTable>
                <TableHeaders/>
              {this.state.employees.map(employee => (
                <TableRow
                key ={employee.id}
                name={employee.name}
                phone={employee.phone}
                email={employee.email}
                address={employee.address}
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
