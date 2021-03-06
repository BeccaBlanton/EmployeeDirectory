import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Title() {
    return (
        <Jumbotron fluid>
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