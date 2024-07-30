import { Button, Card, ListGroup } from "react-bootstrap";

const CardComponent = ({title, price, description, group}) => {
    return (
        <>            
            <Card className="d-flex align-items-center">
                <Card.Img variant="top" src="https://placehold.co/150" className="w-75"/>
                <Card.Body>
                    <Card.Title className="fs-4">{title}</Card.Title>
                    <Card.Subtitle><p className="lh-1 fw-normal">{description}</p></Card.Subtitle>
                    <Card.Text className="fs-5 fw-bold">${price}</Card.Text>
                    <Button variant="outline-primary w-100" onClick={() => console.log("Success")}>
                        Ver mas
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardComponent;