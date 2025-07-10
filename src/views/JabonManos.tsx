import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import type { ProductCategory } from "../components/types";
import { ProductLister } from "../components/ProductLister";

export const JabonManos = () => {

  const categories: ProductCategory[] = [
    {
      category: "Jabones Liquidos para Manos",
        products: [
          { name: "Mango-Limón", image: "https://placehold.co/3000x3000" },
          { name: "Cherry", image: "https://placehold.co/3000x3000" },
          { name: "Almendra", image: "https://placehold.co/3000x3000" },
        ],
    }
  ];

  return (
    <>
        <NavBar/>
        <main id='Manos'>
          <section
            id='MainSection'
            className="h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
          >
            <h2 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg text-shadow-forest">
              Jabones Liquidos para Manos
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
