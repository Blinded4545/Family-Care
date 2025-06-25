import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { ProductLister } from "../components/ProductLister"
import type { ProductCategory } from "../components/types"

export const Limpiadores = () => {  

  const categories: ProductCategory[] = [
    {
      category: "Desinfectantes",
        products: [
          { name: "Jabon Verde", image: "https://placehold.co/1000x1000" },
          { name: "Jabon Rosa", image: "https://placehold.co/1000x1000" },
          { name: "Jabon Azul", image: "https://placehold.co/1000x1000" },
        ],
    }
  ]
  
  return (
    <>
        <NavBar/>
        <main id='DeterMain'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-6xl font-bold drop-shadow-lg text-shadow-forest">
              Desinfectantes y Limpiadores
            </h2>
          </section>
          <section className="my-10 bg-bgf0 py-15">
            <ProductLister categories={categories}></ProductLister>
          </section>
        </main>
        <Footer/>
    </>
  )
}
