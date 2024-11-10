// Configuración
const imageCount = 14; // Número total de imágenes en la carpeta
const listaProducto = document.getElementById("listaProducto");

// Función para crear un producto (tarjeta) en la lista
function crearProductos(imgSrc, actividad, descripcion) {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("item");

    // Usar una etiqueta img con src en vez de div con background-image
    const img = document.createElement("img");
    img.src = imgSrc; // Aquí agregamos el src de la imagen
    img.classList.add("pic");

    const descProduct = document.createElement("div");
    descProduct.classList.add("text");

    const actividadesSpan = document.createElement("span");
    actividadesSpan.textContent = actividad;
    actividadesSpan.classList.add("name");

    const descripSpan = document.createElement("span");
    descripSpan.textContent = descripcion;

    cardProduct.appendChild(img);
    cardProduct.appendChild(descProduct);
    descProduct.appendChild(actividadesSpan);
    descProduct.appendChild(descripSpan);

    return cardProduct;
}

const actividades = [
    "Futbol", "Baloncesto", "Tenis", "Voleibol", "Natación", "Atletismo", 
    "Ciclismo", "Rugby", "Karate", "Golf", "Esqui", "Surf", "Escalada", 
    "Gimnasia", "Kayak", "PumpTrack"
];

const descripcion = [
    "Divertido juego en equipo para aprender a pasar y anotar goles ⚽️", 
    "Actividad en grupo para lanzar, driblar y encestar como un profesional 🏀", 
    "Clase de iniciación a este juego de raqueta con actividades para niños 🎾", 
    "Juego de equipo para aprender a pasar y lanzar el balón sobre la red 🏐", 
    "Clase de nado con diferentes juegos y técnicas adaptadas para niños 🏊", 
    "Competencias y juegos de velocidad para todos los niveles 🏃‍♀️", 
    "Paseos en bicicleta para explorar y disfrutar en grupo 🚴", 
    "Juego de equipo donde los niños aprenden a correr con el balón 🏉", 
    "Introducción al karate con ejercicios seguros y divertidos 🥋", 
    "Minigolf divertido para aprender precisión y control 🏌️", 
    "Esquí sobre nieve o simulador para principiantes 🎿", 
    "Clase de surf con seguridad para aprender a montar pequeñas olas 🏄", 
    "Actividad de escalada en muros adaptados con supervisión segura 🧗", 
    "Ejercicios de flexibilidad y equilibrio para desarrollar habilidades 🤸‍♀️", 
    "Paseos en kayak en agua segura para aprender técnicas básicas 🚣‍♂️", 
    "Diversión en circuito de bombeo con seguridad para niños 🚴‍♂️"
];

// Inyectar productos en el contenedor
for (let i = 1; i <= imageCount; i++) {
    const imgSrc = `assets/img/${i}.webp`; // Ruta de la imagen normal
    console.log(`Ruta de imagen: ${imgSrc}`); // Para depurar

    const actividad = actividades[i - 1]; // Ajustar el índice para el array
    const descripcionTexto = descripcion[i - 1]; // Ajustar el índice para el array

    const productos = crearProductos(imgSrc, actividad, descripcionTexto);
    listaProducto.appendChild(productos);
}

// Cambiar la imagen al hacer hover sobre la imagen
document.querySelectorAll('.pic').forEach((pic, i) => {
    pic.addEventListener('mouseover', () => {
        pic.src = `assets/img/${i + 1}a.webp`; // Cambia la imagen a la versión "a"
    });
    pic.addEventListener('mouseout', () => {
        pic.src = `assets/img/${i + 1}.webp`; // Restaura la imagen original
    });
});