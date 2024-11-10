// Configuración
const imageCount = 14; // Número total de imágenes en la carpeta
const listaProducto = document.getElementById("listaProducto");
const filtroBtns = document.querySelectorAll(".filtrador");

// Función para crear un producto (tarjeta) en la lista
function crearProductos(imgSrc, actividad, descripcion, dificultad) {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("item");
    cardProduct.setAttribute("data-dificultad", dificultad);

    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("pic");

    const descProduct = document.createElement("div");
    descProduct.classList.add("text");

    const actividadesSpan = document.createElement("span");
    actividadesSpan.textContent = actividad;
    actividadesSpan.classList.add("name");

    const descripSpan = document.createElement("span");
    descripSpan.textContent = descripcion;

    // Etiqueta de dificultad con clase específica
    const dificultadSpan = document.createElement("span");
    dificultadSpan.textContent = dificultad.charAt(0).toUpperCase() + dificultad.slice(1);
    dificultadSpan.classList.add("dificultad", dificultad); // Agregar clase según la dificultad

    // Agregar elementos a la tarjeta
    cardProduct.appendChild(dificultadSpan);
    cardProduct.appendChild(img);
    descProduct.appendChild(actividadesSpan);
    descProduct.appendChild(descripSpan);
    cardProduct.appendChild(descProduct);

    return cardProduct;
}

// Arrays de actividades y descripciones
const actividades = [
    "Futbol", "Baloncesto", "Tenis", "Voleibol", "Natación", "Atletismo", 
    "Ciclismo", "Rugby", "Karate", "Golf", "Esqui", "Surf", "Escalada", 
    "Gimnasia"
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
    "Ejercicios de flexibilidad y equilibrio para desarrollar habilidades 🤸‍♀️"
];

// Dificultades posibles
const dificultades = ["facil", "medio", "dificil"];

// Inyectar productos en el contenedor
for (let i = 0; i < imageCount; i++) {
    const imgSrc = `assets/img/${i + 1}.webp`;
    const actividad = actividades[i];
    const descripcionTexto = descripcion[i];
    const dificultad = dificultades[i % dificultades.length]; // Asignar dificultad cíclicamente

    const producto = crearProductos(imgSrc, actividad, descripcionTexto, dificultad);
    listaProducto.appendChild(producto);
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

// Función de filtro por dificultad
filtroBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dificultadSeleccionada = btn.getAttribute("data-dificultad");

        // Mostrar todas las tarjetas si se selecciona "todos"
        document.querySelectorAll(".item").forEach((item) => {
            const dificultad = item.getAttribute("data-dificultad");
            if (dificultadSeleccionada === "todos" || dificultad === dificultadSeleccionada) {
                item.style.display = "block"; // Mostrar el producto
            } else {
                item.style.display = "none"; // Ocultar el producto
            }
        });
    });
});
