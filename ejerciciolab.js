const notas = [8, 9, 2, 7, 6];
const nombre = "Roberto";

function calcularpromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    const promedio = suma / notas.length;
    
    return promedio;

}

const promediofinal = calcularpromedio(notas);
console.log("El promedio de las notas de " + nombre + "es: " + promediofinal);