
import { Form, Dropdown, DropdownButton } from "react-bootstrap";

import { useState } from "react";

import CardComponent from "../components/cardComponent"
import { productList, categories } from "../components/lists"

import "../css/catalogo.css"

const Catalogo = ()=>{
    
    const [currSearch, setCurrSearch] = useState("")
    const [currFilter, setCurrFilter] = useState("0")
    const [coincidence, setCoincidence] = useState(false)

    return (
        <>
            <div className="container">
                <div className="mx-5 my-4 p-3 fs-4">
                    <div>
                        <Form className="d-flex flex-column gap-4">
                            <Form.Group controlId="form-group-id" className="">
                                <Form.Label className="fs-5">Buscar</Form.Label>
                                <div className="d-flex flex-row">  
                                    <Form.Control type="text" placeholder="Producto" onChange={(e)=>{
                                    setCurrSearch(e.target.value)
                                    console.log(currSearch);
                                }}/>
                                    <DropdownButton title="Tipo de busqueda" id="dropdown-button-example">
                                        <Dropdown.Header>Filtros</Dropdown.Header>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="1" onClick={(e)=>{
                                            setCurrFilter("1")
                                        }}>Titulo</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onClick={(e)=>{
                                            setCurrFilter("2")
                                        }}>Categoria</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className="border border-2 border-secondary rounded-3 d-flex mb-3 shadow-lg">
                    <div className="p-5 d-flex flex-wrap flex-row w-100 justify-content-center align-items-center gap-4">
                        {
                            categories.map((e)=>{
                                if((currFilter==="2" || currFilter==="0") && e.toLowerCase().includes(currSearch)){
                                    return(
                                        <>
                                            <h3>{e}</h3>
                                            <div className="container-fluid justify-content-center align-items-center gap-4">
                                                <div className="row row-cols-4 gap-4 justify-content-center">
                                                    {
                                                        productList.map((e2)=>{
                                                            if(e2.category!==e){
                                                                return
                                                            }
                                                            else{
                                                                return (
                                                                    <CardComponent title={e2.title} price={e2.price} description={e2.description} group={e2.category}/>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                else if(currFilter==="1"){
                                    return (
                                        <>
                                        <div className="container-fluid justify-content-center align-items-center gap-4">
                                            <div className="row row-cols-4 gap-4 justify-content-center">
                                                {
                                                    productList.map((e3)=>{
                                                        if(e3.category!==e){
                                                            return
                                                        }
                                                        else if(e3.title.toLowerCase().includes(currSearch)){
                                                            return (
                                                                <CardComponent title={e3.title} price={e3.price} description={e3.description} group={e3.category}/>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalogo