function desconto (porcentagem, valor) {
    return ((porcentagem / 100) * valor )
}

function farmacia(valorCompra, convenio, cartao) {
    if (convenio && cartao) {
        valorCompra =  valorCompra - desconto(15, valorCompra)
        return valorCompra
    } else if (convenio || cartao) {
        valorCompra = valorCompra - desconto(10, valorCompra)
        return valorCompra
    } else {
       return valorCompra
    }
}

compra1 = farmacia(300, true, true)
compra2 = farmacia(300, true, false)
compra3 = farmacia(300, false, false)
console.log(compra1)
console.log(compra2)
console.log(compra3)