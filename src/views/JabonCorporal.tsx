import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import type { ProductCategory } from "../components/types";
import { ProductLister } from "../components/ProductLister";

export const JabonCorporal = () => {

  const categories: ProductCategory[] = [
    {
      category: "Jabones Liquidos Corporales",
        products: [
          { name: "Jabon Verde", image: "https://placehold.co/2000x2000" },
          { name: "Jabon Rosa", image: "https://placehold.co/2000x2000" },
          { name: "Jabon Azul", image: "https://placehold.co/2000x2000" },
        ],
    }
  ];

  return (
    <>
        <NavBar/>
        <main id='JabonesMain'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-6xl font-bold drop-shadow-lg text-shadow-forest">
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
