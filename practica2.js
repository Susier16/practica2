// Función que crea el Mapa y cuenta cuántas veces aparece cada palabra
const contarPalabras = (arrayPalabras) => {
    let mapa = new Map(); 

    for (let i = 0; i < arrayPalabras.length; i++) {
        let palabraActual = arrayPalabras[i];

        // Comprobamos si la palabra ya está en el mapa para sumar 1, o añadirla con valor 1
        if (mapa.has(palabraActual)) {
            let cantidad = mapa.get(palabraActual);
            mapa.set(palabraActual, cantidad + 1);
        } else {
            mapa.set(palabraActual, 1);
        }
    }
    
    return mapa;
};

const ejecutarPractica2 = () => {
    // Usamos la función pedirPalabras()
    let palabras = pedirPalabras();
    
    // Pasamos el array de palabras a nuestra función para obtener el mapa
    let mapaResultados = contarPalabras(palabras);
    
    // Mostramos los resultados por pantalla
    document.write("<h2>Resultado Práctica 2:</h2><ul>");
    for (let [palabra, cantidad] of mapaResultados) {
        document.write("<li>" + palabra + ": " + cantidad + "</li>");
    }
    document.write("</ul>");
};