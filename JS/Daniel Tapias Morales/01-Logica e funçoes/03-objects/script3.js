const produto = {
    nome: 'caneta',
    quantidade: 10,
    comprar: function(n){
        console.log(this)
        if(n > this.quantidade){
            return 'quantidade não disponivel'
        }
        this.quantidade -= n;
    }
}

produto.comprar(3);
console.log(produto);
