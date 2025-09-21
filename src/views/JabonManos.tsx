import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import type { ProductCategory } from "../components/types";
import { ProductLister } from "../components/ProductLister";
import mango from "../assets/Products/manosverde.png"
import cherry from "../assets/Products/manosrojo.png"
import almendra from "../assets/Products/manosblanco.png"

export const JabonManos = () => {

  const categories: ProductCategory[] = [
    {
      category: "Jabones Líquidos para Manos",
        products: [
          { name: "Mango-Limón", image: mango, description: "Energía tropical en tus manos. Cítrico y vibrante: limpia a profundidad y deja un aroma que levanta el ánimo 🥭🍋"  },
          { name: "Cherry", image: cherry, description: "Dulce, suave y encantador. Una fragancia frutal que te hace sonreír en cada lavado 🍒"  },
          { name: "Almendra", image: almendra, description: "Suavidad cremosa que reconforta. Aroma cálido de almendra con espuma delicada que mima tus manos 🌰"  },
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
              Jabones Líquidos para Manos
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
