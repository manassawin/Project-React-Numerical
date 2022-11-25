import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom';
import Home from'./Home';
import Bisection from './Bisection';
import False_position from './False_position';
import Newtonraphson from './Newtonraphson';
import Gauss_elimination from'./Gauss_elimination';
import Secant from './Secant';
import Newton_divided from './Newton_divided'
import Lagrange from './Lagrange';

function CollapsibleExample() {
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
      <Container>
        <Navbar.Brand href="#home">Numerical_Method</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as = {Link} to = {"/Home"}>Home</Nav.Link>
            <NavDropdown title="Root of Equation" id="collasible-nav-dropdown">
              <NavDropdown.Item as = {Link} to = {"/Bisection"}>Bisection</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = {"/False_position"}>False_position</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = {"/Newtonraphson"}>Newtonraphson</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = {"/Secant"}>Secant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item as = {Link} to = {"/Newton_divided"}>Newton_Divided_Iterpolation</NavDropdown.Item>
            <NavDropdown.Item as = {Link} to = {"/Lagrange"}>Lagrange</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path = "/Bisection" element={<Bisection/>}></Route>
        <Route path = "/False_position" element={<False_position/>}></Route>
        <Route path = "/Home" element={<Home/>}></Route>
        <Route path = "/Newtonraphson" element={<Newtonraphson/>}></Route>
        <Route path = "/Gauss_elimination" element={<Gauss_elimination/>}></Route>
        <Route path = "/Secant" element={<Secant/>}></Route>
        <Route path = "/Newton_divided" element={<Newton_divided/>}></Route>
        <Route path = "/Lagrange" element={<Lagrange/>}></Route>
    </Routes>
    </Router>
  );
}
export default CollapsibleExample;