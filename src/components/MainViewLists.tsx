
import type { Testimonio } from "../components/types";

//Productos
import mango from "../assets/Products/manosverde.png"
import cherry from "../assets/Products/manosrojo.png"
import almendra from "../assets/Products/manosblanco.png"
import kiwi from "../assets/Products/corporalverde.png"
import floral from "../assets/Products/corporalrojo.png"
import coco from "../assets/Products/corporalblanco.png"
import todos from "../assets/Products/todos.png"
import todosverdes from "../assets/Products/todosverdes.png"
import todosrojos from "../assets/Products/todosrojos.png"
import todosblancos from "../assets/Products/todosblancos.png"

// Testimonios
import Daniel from "../assets/Comentarios/Daniel.jpg"
import Maria from "../assets/Comentarios/Maria.jpg"
import Javier from "../assets/Comentarios/Javier.jpg"
import Andreina from "../assets/Comentarios/Andreina.jpg"
import Camilo from "../assets/Comentarios/Camilo.jpg"
import Jose from "../assets/Comentarios/Jose.jpg"

export const productos = [
{
    nombre: "Todos verdes",
    imagen: todosverdes,
},
{
    nombre: "Todos",
    imagen: todos,
},{
    nombre: "Todos rojos",
    imagen: todosrojos,
},
{
    nombre: "Todos blancos",
    imagen: todosblancos,
},
{
    nombre: "Corporal rojo",
    imagen: floral,
},
{
    nombre: "Corporal verde",
    imagen: kiwi,
},
{
    nombre: "Corporal blanco",
    imagen: coco,
},
{
    nombre: "Manos rojo",
    imagen: cherry,
},
{
    nombre: "Manos verde",
    imagen: mango,
},
{
    nombre: "Manos blanco",
    imagen: almendra,
},
{
    nombre: "Todos blancos",
    imagen: todosblancos,
},
];

export const testimonios: (Testimonio | undefined)[] = [
{
    nombre: "Camilo Herrera",
    ciudad: "Aragua - Venezuela",
    texto: "Que aroma tan delicioso y suave tienen. ¡Mis manos nunca estuvieron tan limpias y suaves!",
    imagen: Camilo,
},
{
    nombre: "José Castillo",
    ciudad: "Caracas - Venezuela",
    texto: "Me fascina su aroma dulce. Hace buena espuma y deja la piel hidratada y suave",
    imagen: Jose,
},,
{
    nombre: "Daniel Figueroa",
    ciudad: "Valencia - Venezuela",
    texto: "Me parecieron jabones ideales para mi piel sensible. Limpian sin resecar, los adoro.",
    imagen: Daniel,
},,
{
    nombre: "Andreína Márquez",
    ciudad: "Valencia - Venezuela",
    texto: "Increíble calidad y presentación. Deja las manos suaves, limpias y perfumadas tras cada lavado.",
    imagen: Andreina,
},,
{
    nombre: "Javier Rivas",
    ciudad: "Aragua - Venezuela",
    texto: "Un producto excelente y rendidor. Aporta suavidad, buen aroma y una limpieza súper profunda.",
    imagen: Javier,
},,
{
    nombre: "María González",
    ciudad: "Barquisimeto - Venezuela",
    texto: "Siento mi piel fresca y limpia. El olor perdura bastante y me hace sentir bien.",
    imagen: Maria,
}
];

export const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed:2000,
responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 2,
    },
    },
    {
    breakpoint: 640,
    settings: {
        slidesToShow: 1,
        arrows: false
    },
    },
],
};


