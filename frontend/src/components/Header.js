import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'lightblue'
}

const Header = ({ title }) => {
    return (
        <Navbar style={ navbarStyle} bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;