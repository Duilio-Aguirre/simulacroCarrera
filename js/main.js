let millasCamaro = 300;

let millasMustang = 300;

let millasChallenger = 300;

while (millasCamaro>0 && millasMustang>0 && millasChallenger>0) {

let velocidadCamaro = Math.ceil(Math.random ()*100);

let velocidadMustang = Math.ceil(Math.random ()*100);

let velocidadChallenger = Math.ceil(Math.random ()*100);

console.log ("El Camaro avanza a una velocidad de " + (velocidadCamaro) + "millas por hora");

console.log ("El Mustang avanza a una velocidad de " + (velocidadMustang) + "millas por hora");

console.log ("El Challenger avanza a una velocidad de " + (velocidadChallenger) + "millas por hora");

console.log ("-------------------------------------------------------------------------")

millasCamaro = millasCamaro - velocidadCamaro;
millasMustang = millasMustang - velocidadMustang;
millasChallenger = millasChallenger - velocidadChallenger

if(velocidadCamaro>velocidadMustang && velocidadCamaro>velocidadChallenger) {
    millasCamaro -= velocidadCamaro
    console.log ("El Camaro toma la delantera y le quedan ", (millasCamaro) , "millas por recorrer");
} else if (velocidadMustang>velocidadCamaro && velocidadMustang>velocidadChallenger) {
    millasMustang -= velocidadMustang
    console.log ("El Mustang toma la delantera y le quedan ", (millasMustang) , "millas por recorrer");
}else {
    millasChallenger -= velocidadChallenger
    console.log ("El Challenger toma la delantera y le quedan ", (millasChallenger), "millas por recorrer");
}

}

if (millasCamaro<=0){
console.log ("El Camaro es el ganador")
} else if (millasMustang<=0) {
    console.log ("El Mustang es el ganador")
} else {
    console.log ("El Challenger es el ganador")
}


