
import { Form, Dropdown, DropdownButton } from "react-bootstrap";

import { useState } from "react";

import CardComponent from "../components/cardComponent"
import { productList, categories } from "../components/lists"

import "../css/catalogo.css"

const Catalogo = ()=>{
    
    const [currSearch, setCurrSearch] = useState("")
    const [currFilter, setCurrFilter] = useState("")

    return (
        <>
            <div className="container">
                <div className="mx-5 my-4 p-3 fs-4">
                    <div>
                        <Form className="d-flex flex-column gap-4">
                            <Form.Group>
                                <Form.Label className="fs-5" id="formTitle">Buscar</Form.Label>
                                <div className="d-flex flex-row">  
                                    <Form.Control id="formInput" type="text" placeholder="Producto" onChange={(e)=>{
                                    setCurrSearch(e.target.value)
                                }}/>
                                    <DropdownButton title={currFilter===""?"Tipo de busqueda":currFilter==="1"?"Titulo":"Categoria"} id="formDropdown">
                                        <Dropdown.Header className="dropdownText">Filtros</Dropdown.Header>
                                        <Dropdown.Divider />
                                        <Dropdown.Item className="dropdownText" eventKey="1" onClick={(e)=>{
                                            setCurrFilter("1")
                                        }}>Titulo</Dropdown.Item>
                                        <Dropdown.Item className="dropdownText" eventKey="2" onClick={(e)=>{
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
                            categories.map((e, idx)=>{
                                if((currFilter==="2" || currFilter==="") && e.toLowerCase().includes(currSearch)){
                                    return(
                                        <>
                                            <h3 className="categoryTitle">{e}</h3>
                                            <div key={idx} className="container-fluid justify-content-center align-items-center gap-4">
                                                <div className="row row-cols-4 gap-4 justify-content-center">
                                                    {
                                                        productList.map((e2, idy)=>{
                                                            if(e2.category!==e){
                                                                return
                                                            }
                                                            else{
                                                                return (
                                                                    <CardComponent key={idy} title={e2.title} price={e2.price} description={e2.description} url={e2.url}/>
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
                                                                <CardComponent title={e3.title} price={e3.price} description={e3.description} url={e3.url}/>
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