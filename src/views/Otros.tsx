import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { ProductLister } from "../components/ProductLister"
import type { ProductCategory } from "../components/types"

export const Otros = () => {  

  const categories: ProductCategory[] = [
    {
      category: "Lavaplatos",
        products: [
          { name: "Limon", image: "https://placehold.co/1000x1000" },
          { name: "Mandarina", image: "https://placehold.co/1000x1000" }
        ],
    },
    {
      category: "Cera",
        products: [
          { name: "Cera", image: "https://placehold.co/1000x1000" }
        ],
    },
    {
      category: "Suavizantes",
        products: [
          { name: "Floral", image: "https://placehold.co/1000x1000" },
          { name: "Bebe", image: "https://placehold.co/1000x1000" },
        ],
    },
    {
      category: "Desengrasante",
        products: [
          { name: "Desengrasante", image: "https://placehold.co/1000x1000" }
        ],
    },
    {
      category: "Cloro",
        products: [
          { name: "Cloro", image: "https://placehold.co/1000x1000" }
        ],
    },
    {
      category: "Lava baños",
        products: [
          { name: "Limpiador de pocetas", image: "https://placehold.co/1000x1000" }
        ],
    }
  ]
  
  return (
    <>
        <NavBar/>
        <main id='Otros'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-shadow-forest">
              Desinfectantes
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
