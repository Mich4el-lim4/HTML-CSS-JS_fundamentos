function calcularIMC(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error("need two parameters: wwight and height");
    }
    let imc = peso / (altura * altura);
    if(typeof callback === "function"){
        return callback(imc);
    } 
    return imc;
}

function classificaIMC(bodyMassIndex){
    if (bodyMassIndex <= 16.9) {
        return 'muito abaixo do peso';
    } else if (bodyMassIndex <= 18.4) {
        return 'abaixo do peso';
    } else if (bodyMassIndex <= 24.9) {
        return 'normal';
    } else if (bodyMassIndex <= 29.9) {
        return 'acima do peso';
    } else if (bodyMassIndex <= 34.9) {
        return 'obesidade 1';
    } else if (bodyMassIndex <= 40) {
        return 'obesidade 2';
    } else {
        return 'obesidade 3';
    }
}

let imc = calcularIMC(62, 1.75);
let imc2 = calcularIMC(62, 1.75, classificaIMC);
console.log(imc);
console.log(imc2);
