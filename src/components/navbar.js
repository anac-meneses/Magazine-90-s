import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/magazine.svg';
import '../App.css'


function NavBar() {
    return (
        <Navbar id='navbg'>
            <Container fluid sticky="top">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="200"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ms-auto" >
                        <Nav.Link id='navItem' href="/">Contato</Nav.Link>
                        <Nav.Link id='navItem' href="/">Produtos</Nav.Link>
                        <Nav.Link id='navItem' href="/">Nós</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    );
}

export default NavBar;