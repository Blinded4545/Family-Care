
import { Button, Card } from "react-bootstrap";
import "../css/cardComponent.css"

const CardComponent = ({title, description, url}) => {
    return (
        <>            
            <Card id="cardComp" className="d-flex align-items-center shadow-sm" style={{"min-width": "min-content"}}>
                <Card.Img id="cardImage" variant="top" className="w-75" style={{backgroundImage: `url(${url})`}}/>
                <Card.Body>
                    <Card.Title className="fs-4"><p id="titText">{title}</p></Card.Title>
                    <Card.Subtitle><p className="lh-1 fw-normal text-break" id="descriptionText">{description}</p></Card.Subtitle>
                    <Button variant="outline-primary w-100" id="buttonText" onClick={() => console.log("Success")}>
                        Ver mas
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardComponent;