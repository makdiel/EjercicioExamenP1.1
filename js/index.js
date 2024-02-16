function calcular() {
    let a = parseInt(document.getElementById('v1').value)
    let b = parseInt(document.getElementById('v2').value)
    let c = parseInt(document.getElementById('v3').value)
    let d = parseInt(document.getElementById('v4').value)
    let e = parseInt(document.getElementById('v5').value)

    if (a === 0) {
        error("Valor a no debe ser igual a 0")
    } else if (b === 0) {
        error("Valor b no debe ser igual a 0")
    } else if (c === 0) {
        error("Valor c no debe ser igual a 0")
    } else if (d === 0) {
        error("Valor d no debe ser igual a 0")
    } else if (e === 0) {
        error("Valor e no debe ser igual a 0")
    }
    else {
        let operacion = a + b + c + d + e
        let desc = 0

        if (operacion >= 0 && operacion <= 999.99) {
            document.getElementById('sub').value = operacion
            document.getElementById('des').value = "Descuento 0%"
            document.getElementById('tot').value = operacion
        } 
        if (operacion > 999.99 && operacion <= 4999.99) {
            document.getElementById('sub').value = operacion
            document.getElementById('des').value = "Descuento 10%"
            desc =  (operacion * 10 )/100
            document.getElementById('tot').value = operacion - desc
        } 
        if (operacion > 4999.99 && operacion <= 8999.99) {
            document.getElementById('sub').value = operacion
            document.getElementById('des').value = "Descuento 20%"
            desc =  (operacion * 20 )/100
            document.getElementById('tot').value = operacion - desc
        } 
        if (operacion > 8999.99 && operacion <= 12999.99) {
            document.getElementById('sub').value = operacion
            document.getElementById('des').value = "Descuento 30%"
            desc =  (operacion * 30 )/100
            document.getElementById('tot').value = operacion - desc
        } 
        if (operacion > 12999.99 ) {
            document.getElementById('sub').value = operacion
            document.getElementById('des').value = "Descuento 40%"
            desc =  (operacion * 40 )/100
            document.getElementById('tot').value = operacion - desc
        } 
        if (operacion <  0 ) {
            error("debe ingresar valores validos")
        }
    }
}

function limpiar() {
    document.getElementById('v1').value = '0'
    document.getElementById('v2').value = '0'
    document.getElementById('v3').value = '0'
    document.getElementById('v4').value = '0'
    document.getElementById('v5').value = '0'
    document.getElementById('sub').value = '0'
    document.getElementById('des').value = 'Descuento 0%'
    document.getElementById('tot').value = '0'
}

function error(text) {
    Swal.fire({
        icon: "error",
        title: "Error en calcular descuentos",
        text: text
    });
}