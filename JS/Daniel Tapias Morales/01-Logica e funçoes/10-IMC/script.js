function calcularIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error("need two parameters: wwight and height");
    }
    return peso / (altura * altura);
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
console.log(imc);
console.log(classificaIMC(imc));
