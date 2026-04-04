let Venda = {
    produto: "Mouse", 
    quantidade: 2,
    precoUnitario: 100,
    desconto: 0.05,
    calcularTotal: function(){
        totalBruto = this.quantidade * this.precoUnitario
        totalComDesconto = totalBruto - (totalBruto * this.desconto)
        return totalComDesconto
    }
}
console.log(Venda.calcularTotal())