import CardComponent from "../components/cardComponent"
import FilterTab from "../components/filtertab"
import { productList, categories } from "../components/lists"

const Catalogo = ()=>{
    
    // const renderList = titles.map((e,idx)=>
    //     <cardComponent title={e} price={idx} description="Prueba" group="jabon"/>
    // )
    
    return (
        <>
            <div className="d-flex flex-row">
                <div className="m-5 p-3 fs-4">
                    <FilterTab/>
                </div>
                <div className="border border-2 border-secondary rounded-3 w-75 d-flex">
                    <div className="p-5 d-flex flex-wrap flex-row w-100 justify-content-center align-items-center gap-4">
                        {
                            categories.map((e)=>{
                                return(
                                    <>
                                        <h2>{e}</h2>
                                        <div className="d-flex flex-row justify-content-center align-items-center gap-4 px-5">
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
                                    </>
                                )
                            })
                            // titles.map((e,idx)=>{
                            //         return(<CardComponent title={e} price={idx} description="Prueba" group="jabon"/>)
                            //     }
                            // )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalogo