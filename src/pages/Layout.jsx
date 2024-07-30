
import { Container, Col, Row, Stack, Image, Nav, ListGroup } from "react-bootstrap"
import {Link, Outlet} from "react-router-dom"

import Icon from '@mdi/react';
import { mdiWhatsapp, mdiGmail } from '@mdi/js';
import "../css/Layout.css"

const Layout = ()=>{
    return (
        <>
            <Nav className="px-5 py-2 gap-4 bg-primary" id="mainNav">
                <Nav.Item className="navItem">
                    <Link to="/" className="fs-4 text-white text-decoration-none">Home</Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Link to="/catalogo" className="fs-4 text-white text-decoration-none">Catálogo</Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Link to="/about" className="fs-4 text-white text-decoration-none">Sobre nosotros</Link>
                </Nav.Item>
            </Nav>

            <Outlet/>

            <Container fluid className="bg-primary text-white p-4 mx-0">
                <Row className="w-100">
                    <Col className="mx-5">
                        <Stack className="d-flex align-items-center">
                            <Image src="https://placehold.co/200" width={200} height={200} rounded/>
                            <h2>Family Care</h2>
                            <p>Compania familiar</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-4">
                            <h3>Links</h3>
                            <Link className="text-white text-decoration-none" to="/">Inicio</Link>
                            <Link className="text-white text-decoration-none" to="/Catalogo">Catalogo</Link>
                            <Link className="text-white text-decoration-none" to="/About">Sobre nosotros</Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h3>Contactanos!</h3>
                        <ListGroup className="">
                            <ListGroup.Item className="d-flex flex-row gap-3 justify-content-center bg-transparent border-0 text-white">
                                <Icon color="white" path={mdiWhatsapp} size={1.5}/>
                                <h4>04144540890</h4>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex flex-row gap-3 justify-content-center bg-transparent border-0 text-white">
                                <Icon color="white" path={mdiGmail} size={1.5}/>
                                <h4>familycare@gmail.com</h4>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Layout;