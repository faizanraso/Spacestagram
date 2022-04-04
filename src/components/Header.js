import React from "react";
import {Navbar, Container} from 'react-bootstrap'

function Header(){
    return(
        <div className="header-div">
            <Navbar className="navbar" variant="dark">
                <Container>
                    <Navbar.Brand className="navbar-brand mx-auto title">
                        SPACESTAGRAM 👨🏼‍🚀
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
