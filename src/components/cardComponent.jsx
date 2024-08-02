
import { Button, Card } from "react-bootstrap";
import "../css/cardComponent.css"

const CardComponent = ({title, price, description, url}) => {
    return (
        <>            
            <Card id="cardComp" className="d-flex align-items-center shadow-sm" style={{"min-width": "min-content"}}>
                <Card.Img variant="top" src={url} className="w-75"/>
                <Card.Body>
                    <Card.Title className="fs-4">{title}</Card.Title>
                    <Card.Subtitle><p className="lh-1 fw-normal text-break">{description}</p></Card.Subtitle>
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