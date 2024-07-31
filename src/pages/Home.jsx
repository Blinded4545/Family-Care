
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "../css/home.css"

const Home = ()=>{

    
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };
    
    return (

        <>
            <div className="h-100 w-100">
                <Container fluid className="w-100 h-100 p-0 m-0">
                    <Row className="shadow-sm w-100 p-0 m-0">
                        <Col className="p-0 m-0" id="homeBannerCol">
                            <div className="d-flex justify-content-center w-100">
                                <div className="border rounded-3 border-1 w-75 m-5 p-5" id="homeCenterDiv">
                                    <h3 className="fs-1 fst-italic" id="familyTitle">Family Care</h3>
                                    <p className="fst-italic fs-5" id="familySlogan">Que el cuidado de tu piel sea tu mejor presentación</p>
                                    <Button variant="primary" size="lg" onClick={() => console.log("Primary")}>
                                        Ver Catalogo
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col className="w-100 p-0 m-0">
                            <Carousel
                                responsive={responsive}
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={1500}
                                keyBoardControl={true}
                                customTransition="all .4"
                                transitionDuration={500}
                                //deviceType={this.props.deviceType}
                            >
                                <Image src="https://placehold.co/200" width={200}/>
                                <Image src="https://placehold.co/300" width={200}/>
                                <Image src="https://placehold.co/400" width={200}/>
                                <Image src="https://placehold.co/500" width={200}/>
                                <Image src="https://placehold.co/600" width={200}/>
                                <Image src="https://placehold.co/700" width={200}/>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default Home;