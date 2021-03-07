import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./title.css";
function Title() {
    return (
        <Jumbotron className= "jumbotron" fluid>
        <Container>
          <h1>Employee Directory</h1>
          <p>
            Filter through Employees by name.
          </p>
        </Container>
      </Jumbotron> 
    )

}
export default Title