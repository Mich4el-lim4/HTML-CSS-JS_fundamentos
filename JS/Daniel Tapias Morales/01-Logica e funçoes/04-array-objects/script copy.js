const pessoas = [{
    nome: 'Michael',
    idade: 34
}, {
    nome: 'Marcos',
    idade: 32
}, {
    nome: 'Helen',
    idade: 12
}, {
    nome: 'Diego',
    idade: 35
}];

for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`);
}
