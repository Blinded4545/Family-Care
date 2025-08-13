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
      category: "Jabones Líquidos Corporales",
        products: [
          { name: "Kiwi", image: kiwi, description: "Nuestro jabón corporal de kiwi combina una espuma suave con un aroma fresco que revitaliza tu piel desde la primera gota 🥝"},
          { name: "Floral", image: floral, description: "Nuestro jabón corporal Floral te envuelve en una fragancia delicada y floral que permanece en tu piel 🌷" },
          { name: "Coco Cream", image: coco, description: "Con el delicioso aroma tropical del coco y una textura cremosa, nuestro jabón corporal Coco Cream deja tu piel nutrida, suave y con un aroma irresistible 🥥" },
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
              Jabones Líquidos Corporales
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
