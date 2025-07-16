import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { ProductLister } from "../components/ProductLister"
import type { ProductCategory } from "../components/types"

import deterverde from "../assets/Products/detergenteverde.png"
import determorado from "../assets/Products/detergentemorado.png"
import deterrojo from "../assets/Products/detergenterojo.png"
import determarron from "../assets/Products/detergentemarron.png"
import deterazul from "../assets/Products/detergenteazul.png"

export const Detergente = () => {  

  const categories: ProductCategory[] = [
    {
      category: "Detergentes",
        products: [
          { name: "Cherry", image: deterrojo },
          { name: "Rocio", image: deterazul },
          { name: "Lavanda", image: determorado },
          { name: "Manzana-Canela", image: determarron },
          { name: "Citronella", image: deterverde },
        ],
    },
  ]
  
  return (
    <>
        <NavBar/>
        <main id='Detergentes'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-shadow-forest">
              Detergentes
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
