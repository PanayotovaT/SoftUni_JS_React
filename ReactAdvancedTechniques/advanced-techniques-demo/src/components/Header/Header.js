import { Nav, Navbar, Container, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Alexios</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Dashboard</Nav.Link>
              <NavDropdown title="Collection" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">First Collection</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Second Collection</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Profile
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="/login" as={Link}>Login</Nav.Link>
              <Nav.Link to="/register" as={Link}>Register</Nav.Link>
              <Nav.Link to="/logout" as={Link}>Logout</Nav.Link>

              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;