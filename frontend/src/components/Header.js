import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg'

const Header = ({ title }) => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Logo style={{ maxWidth: '12rem', maxHeight: '3rem' }}/>
            </Container>
        </Navbar>
    )
}

export default Header;