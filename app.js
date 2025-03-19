let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero secreto es: ${numeroUsuario}`);
}
else {
        alert("Lo siento, No acertaste el número") 
} 