const nome = 'Michael';
const sobrenome = 'Lima'
const idade = 30;
const peso = 62;
const alturaEmM = 1.75;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log("-----------------------------------------------------");
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
