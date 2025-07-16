import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import type { ProductCategory } from "../components/types";
import { ProductLister } from "../components/ProductLister";
import kiwi from "../assets/Products/corporalverde.png"
import floral from "../assets/Products/corporalrojo.png"
import coco from "../assets/Products/corporalblanco.png"

export const JabonCorporal = () => {

  const categories: ProductCategory[] = [
    {
      category: "Jabones Liquidos Corporales",
        products: [
          { name: "Kiwi", image: kiwi },
          { name: "Floral", image: floral },
          { name: "Coco Cream", image: coco },
        ],
    }
  ];

  return (
    <>
        <NavBar/>
        <main id='Corporal'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-shadow-forest">
              Jabones Liquidos Corporales
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
