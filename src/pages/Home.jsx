
import { Image, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "../css/home.css"

const Home = ()=>{

    const RPH = ()=>{

    }
    
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1920 },
        items: 8
        },
        desktop: {
        breakpoint: { max: 1919, min: 1024 },
        items: 8
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

    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    const customAnimation = {
        // Define your custom animation styles here
        transform: 'translateX(-50%)',
        transition: 'transform .5s ease-in-out',
    };
    
    
    return (

        <>
            <div className="w-100">

                <Stack gap={0} className="">
                    <div id="homeBannerCol" className="shadow">
                        <div className="d-flex justify-content-center w-100 my-5">
                            <div className="border rounded-3 border-1 w-75 m-5 p-5" id="homeCenterDiv">
                                <h3 className="fs-1 fst-italic" id="familyTitle">Family Care</h3>
                                <p className="fst-italic fs-5" id="familySlogan">Que el cuidado de tu piel sea tu mejor presentación</p>
                                <Link to="/Catalogo">
                                    <Button variant="primary" id="gotoButton" size="lg">
                                        Ver Catalogo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 p-0 m-0">
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            ssr={true}
                            customTransition="transform .5s ease-in-out"
                            transitionDuration={500}
                            //deviceType={this.props.deviceType}
                        >
                            {
                                items.map((e)=>{
                                    return ( 
                                        <Image src={`https://picsum.photos/seed/${e}/200/200`} width={175} className="carouselImage" style={customAnimation}/>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </Stack>
            </div>
        </>

    )
}

export default Home;