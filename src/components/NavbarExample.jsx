import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

function NavbarExample({ isLogin, onClickLogin }) {
  let navigate = useNavigate();
  function onClickMyCart() {
    navigate(`/cart`);
  }
  return (
    <>
      {[false].map((expand) => (
  <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
    <Container fluid>
      <Navbar.Brand href="/">Blog Example</Navbar.Brand>

      <div className="ms-auto d-flex align-items-center">
        <Button className="login-button me-2" onClick={onClickLogin}>
          {isLogin ? "Logout" : "Login"}
        </Button>
        {isLogin && (
          <div>
            <Profile isLogin={isLogin} _onClick={onClickLogin} />
            <Button className="my-cart-button" onClick={onClickMyCart}>My Cart</Button>
          </div>
        )}
      </div>

      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
))}


    </>
  );
}

function Profile({ isLogin, _onClick }) {
  if (isLogin) {
    return (
      <Button className="user-profile">Profile</Button>
    );
  }
  return null;
}

export default NavbarExample;