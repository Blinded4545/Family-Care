
import type { Testimonio } from "../components/types";

export const productos = [
{
    nombre: "Jabon en barra rojo",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon en barra verde",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon en barra azul",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon liquido corporal rojo",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon liquido corporal verde",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon liquido corporal azul",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon liquido para manos rojo",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon liquido para manos verde",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "Jabon liquido para manos azul",
    imagen: "https://placehold.co/1000x1000",
},
];

export const testimonios: (Testimonio | undefined)[] = [
{
    nombre: "Camilo Herrera",
    ciudad: "Aragua - Venezuela",
    texto: "Que aroma tan delicioso y suave tienen. ¡Mis manos nunca estuvieron tan limpias y suaves!",
    imagen: "https://placehold.co/1000x1000",
},
{
    nombre: "José Castillo",
    ciudad: "Caracas - Venezuela",
    texto: "Me fascina su aroma dulce. Hace buena espuma y deja la piel hidratada y suave",
    imagen: "https://placehold.co/1000x1000",
},,
{
    nombre: "Daniela Figueroa",
    ciudad: "Valencia - Venezuela",
    texto: "Me parecieron jabones ideales para mi piel sensible. Limpian sin resecar, los adoro.",
    imagen: "https://placehold.co/1000x1000",
},,
{
    nombre: "Andreína Márquez",
    ciudad: "Valencia - Venezuela",
    texto: "Increíble calidad y presentación. Deja las manos suaves, limpias y perfumadas tras cada lavado.",
    imagen: "https://placehold.co/1000x1000",
},,
{
    nombre: "Javier Rivas",
    ciudad: "Aragua - Venezuela",
    texto: "Un producto excelente y rendidor. Aporta suavidad, buen aroma y una limpieza súper profunda.",
    imagen: "https://placehold.co/1000x1000",
},,
{
    nombre: "María González",
    ciudad: "Barquisimeto - Venezuela",
    texto: "Siento mi piel fresca y limpia. El olor perdura bastante y me hace sentir bien.",
    imagen: "https://placehold.co/1000x1000",
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


