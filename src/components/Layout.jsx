
import { Container, Col, Row, Stack, Image, Nav, ListGroup } from "react-bootstrap"
import {Link, Outlet} from "react-router-dom"

import Icon from '@mdi/react';
import { mdiWhatsapp, mdiGmail } from '@mdi/js';
import "../css/Layout.css"
import logo from "../assets/Logo.png"

const Layout = ()=>{
    return (
        <>
            <Nav className="px-5 py-2 gap-5" id="mainNav">
                <Nav.Item className="navItem">
                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Link to="/catalogo" className="text-white text-decoration-none">Catálogo</Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Link to="/about" className="text-white text-decoration-none">Sobre nosotros</Link>
                </Nav.Item>
            </Nav>

            <Outlet/>

            <Container fluid className="text-white px-4 py-3 mx-0" id="footerContainer">
                <Row className="w-100">
                    <Col className="mx-2" id="imageCol">
                        <Stack className="d-flex align-items-center">
                            <Image src={logo} id="logoImage" rounded/>
                        </Stack>
                    </Col>
                    <Col id="linkCol" className="d-flex flex-column justify-content-center">
                        <Nav className="flex-column fs-6" id="linkList">
                            <h4>Links</h4>
                            <Link className="text-white text-decoration-none linkItem" to="/">Inicio</Link>
                            <Link className="text-white text-decoration-none linkItem" to="/Catalogo">Catalogo</Link>
                            <Link className="text-white text-decoration-none linkItem" to="/About">Sobre nosotros</Link>
                        </Nav>
                    </Col>
                    <Col id="contactCol" className="d-flex flex-column justify-content-center">
                        <h4>Contactanos!</h4>
                        <ListGroup className="d-flex align-items-center">
                            <ListGroup.Item className="d-flex gap-2 bg-transparent border-0 text-white">
                                <Icon color="white" path={mdiWhatsapp} size={1} className="footerIcon"/>
                                <p>04144540890</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex gap-2 bg-transparent border-0 text-white">
                                <Icon color="white" path={mdiGmail} size={1} className="footerIcon"/>
                                <p>familycare@gmail.com</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Layout;