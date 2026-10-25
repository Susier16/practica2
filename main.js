//Pide palabras
const pedirPalabras = () => {
    let palabras = [];
    let seguirPidiendo = true;

    // Pide palabras continuamente hasta que se cancele o se deje vacío
    while (seguirPidiendo) {
        let entrada = prompt("Introduce una palabra (vacío o cancelar para salir):");
        
        // Si el usuario cancela (devuelve null) o lo deja vacío
        if (entrada === null || entrada === "") {
            seguirPidiendo = false; // Rompemos el bucle
        } else {
            palabras.push(entrada); // Guardamos la palabra en el array
        }
    }
    
    return palabras;
};