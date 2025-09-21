import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import type { ProductCategory } from "../components/types";
import { ProductLister } from "../components/ProductLister";
import menta from "../assets/Products/solidoVerde.png"
import flores from "../assets/Products/solidoRojo.png"
import brisa from "../assets/Products/solidoBlanco.png"

export const JabonSolido = () => {

  const categories: ProductCategory[] = [
    {
      category: "Jabones en Barra",
        products: [
          { name: "Menta-Bamboo", image: menta, description: "Frescura revitalizante en cada pasada. Notas de menta y bamboo que despiertan tus sentidos y dejan la piel fresca 🍃"  },
          { name: "Flores del campo", image: flores, description: "Un toque floral que enamora. Aroma alegre y femenino con espuma cremosa que limpia sin resecar 🌺"  },
          { name: "Brisas de primavera", image: brisa, description: "Limpieza suave que se siente desde el primer uso. Un aroma limpio y delicado que acompaña tu día con frescura y calma. 🌼"  },
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
              Jabones Sólidos
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
