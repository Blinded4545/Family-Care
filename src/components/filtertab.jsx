
import { Form, Button } from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const FilterTab = ()=>{
    return (
        <>
            <div>
                <Form className="d-flex flex-column gap-4">
                    <Form.Group controlId="form-group-id" className="">
                        <Form.Label className="fs-3">Buscar</Form.Label>
                        <div className="d-flex flex-row">  
                            <Form.Control type="text" placeholder="Producto" />
                            <Button variant="info" onClick={() => console.log("Info")}>
                                <Icon path={mdiMagnify} size={1.5}/>
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default FilterTab;