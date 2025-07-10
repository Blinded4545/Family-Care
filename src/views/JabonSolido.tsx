import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import type { ProductCategory } from "../components/types";
import { ProductLister } from "../components/ProductLister";

export const JabonSolido = () => {

  const categories: ProductCategory[] = [
    {
      category: "Jabones en Barra",
        products: [
          { name: "Menta-Bamboo", image: "https://placehold.co/1000x1000" },
          { name: "Flores del campo", image: "https://placehold.co/1000x1000" },
          { name: "Brisas de primavera", image: "https://placehold.co/1000x1000" },
        ],
    }
  ];

  return (
    <>
        <NavBar/>
        <main id='Solidos'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-shadow-forest">
              Jabones Solidos
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
