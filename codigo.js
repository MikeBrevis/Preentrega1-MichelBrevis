//Creacion de alertas en pagina web dando opciones de servicios de customizados 

//Dentro de la base de datos de la "pagina web", Solo hay tres usuarios registrados, Mike, Nicole y Maria

let nombreDeUsuario = prompt("Ingrese su nombre de usuario");
let total = 0; // Variable para guardar el total gastado

while (nombreDeUsuario !== "Mike" && nombreDeUsuario !== "Nicole" && nombreDeUsuario !== "Maria") {
    alert("Nombre invalido, intentelo de nuevo por favor");
    nombreDeUsuario = prompt("Ingrese su nombre de usuario");
}

let Opciones = prompt("Bienvenido " + nombreDeUsuario + "! ¿Qué desea hacer?\n\n1. Cotizar un custom\n2. Comprar algún accesorio");

switch (Opciones) {

    case "1":
        let seleccionarProductos = true;
        let productos = [];

        while (seleccionarProductos) {
            let Customizado = prompt("¡Nos emociona trabajar en tu idea! , cuentanos, ¿que servicio necesitas? \n\n1.Pintura \n2.Cordon personalizado \n3.Botones de colores");

            switch (Customizado) {

                case "1":
                    productos.push("Pintura");
                    alert("Agregaste la opcion de pintura...$ 35000");
                    incrementarTotal(35000); // Llama a la función para actualizar el total
                    break;

                case "2":
                    productos.push("Cordon personalizado");
                    alert("Agregaste la opcion de cordon de color...$ 12000");
                    incrementarTotal(12000); // Llama a la función para actualizar el total
                    break;

                case "3":
                    productos.push("Botones de colores");
                    alert("Agregaste la opcion de botones de colores...$8000");
                    incrementarTotal(8000); // Llama a la función para actualizar el total
                    break;

                default:
                    alert("Opción inválida, inténtelo de nuevo por favor");
                    break;
            }

            let continuar = prompt('¿Desea agregar otro producto? (s-si / n-no)').toLowerCase();
            if (continuar === "n") {
                seleccionarProductos = false;
            }
        }

        // Muestra el total gastado
        
        alert("Productos seleccionados: " + productos.join(", "));
        alert("El total en carrito de compra es de $"+total+" "+"Pronto nos pondremos en contacto contigo!");
        alert("Muchas gracias por preferirnos! =D");
        break;

    case "2":
        alert("Para comprar accesorios para tu consola, ¡visita nuestro Instagram: Kancer.custom");
        break;

    default:
        alert("Opción inválida, inténtelo de nuevo por favor");
}

// Función para incrementar el total gastado
function incrementarTotal(precio) {
    total = total + precio;
}










