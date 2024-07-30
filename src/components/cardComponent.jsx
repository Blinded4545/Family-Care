import { Card, ListGroup } from "react-bootstrap";

const CardComponent = ({title, price, description, group}) => {
    return (
        <>            
            <Card>
                <Card.Img  variant="top" src="https://placehold.co/300"/>
                <Card.Body>
                    <Card.Title className="fs-3">{title}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <Card.Text>${price}</Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{group}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardComponent;