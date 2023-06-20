
let velocidadMaximaCamaro = 100;

let velocidadMaximaMustang = 100;

let velocidadMaximaChallenger = 100;

let velocidadCamaro = Math.ceil(Math.random ()*100);

let velocidadMustang = Math.ceil(Math.random ()*100);

let velocidadChallenger = Math.ceil(Math.random ()*100);


console.log ("El Camaro avanza a una velocidad de " + (velocidadCamaro) + "millas por hora");

console.log ("El Mustang avanza a una velocidad de " + (velocidadMustang) + "millas por hora");

console.log ("El Challenger avanza a una velocidad de " + (velocidadChallenger) + "millas por hora");

console.log ("-------------------------------------------------------------------------")

if(velocidadCamaro>velocidadMustang && velocidadCamaro>velocidadChallenger) {
    console.log ("El Camaro toma la delantera y es el ganador")
} else if (velocidadMustang>velocidadCamaro && velocidadMustang>velocidadChallenger) {
    console.log ("El Mustang toma la delantera y es el ganador")
}else {console.log ("El Challenger toma la delantera y es el ganador")} 
