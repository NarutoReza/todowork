import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
function Nave() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Welcome</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">View</Nav.Link>
                        <Nav.Link href="/add">Add</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            
            <Outlet />
        </>
    );

    }
    
export default Nave;