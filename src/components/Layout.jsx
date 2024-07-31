
import { Container, Col, Row, Stack, Image, Nav, ListGroup } from "react-bootstrap"
import {Link, Outlet} from "react-router-dom"

import Icon from '@mdi/react';
import { mdiWhatsapp, mdiGmail } from '@mdi/js';
import "../css/Layout.css"
import logo from "../assets/Logo.png"

const Layout = ()=>{
    return (
        <>
            <Nav className="px-5 py-2 gap-4 bg-primary" id="mainNav">
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

            <Container fluid className="bg-primary text-white px-4 py-3 mx-0">
                <Row className="w-100">
                    <Col className="mx-2">
                        <Stack className="d-flex align-items-center">
                            <Image src={logo} width={150} height={150} rounded/>
                            <p>Compania familiar</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-6">
                            <h4>Links</h4>
                            <Link className="text-white text-decoration-none" to="/">Inicio</Link>
                            <Link className="text-white text-decoration-none" to="/Catalogo">Catalogo</Link>
                            <Link className="text-white text-decoration-none" to="/About">Sobre nosotros</Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Contactanos!</h4>
                        <ListGroup className="d-flex align-items-center">
                            <ListGroup.Item className="d-flex gap-2 bg-transparent border-0 text-white">
                                <Icon color="white" path={mdiWhatsapp} size={1}/>
                                <p>04144540890</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex bg-transparent border-0 text-white">
                                <Icon color="white" path={mdiGmail} size={1}/>
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