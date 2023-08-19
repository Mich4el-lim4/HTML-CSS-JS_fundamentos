const pessoa = {
    nome: 'Michael',
    sobreNome: 'Lima',
    idade: 30
};

console.log(pessoa.nome);
console.log(pessoa.idade);

function criaPessoa(nome, sobrenome, idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }
}

const pessoa1 = criaPessoa('Michael', 'Lima', 30);
const pessoa2 = criaPessoa('Ricardo', 'Miranda', 34);
const pessoa3 = criaPessoa('Diego', 'Oliveira', 20);
const pessoa4 = criaPessoa('Mateus', 'Olanda', 22);

console.log(pessoa2.nome, pessoa.idade)
