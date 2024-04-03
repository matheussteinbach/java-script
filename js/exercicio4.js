function verificador(numero) {
    console.log(numero)
    let contador = 0
    if (numero > 30 && numero < 50) {
        contador += 1
        console.log(+numero+" está no intervalo [30,50]")
    }
    if (numero > 60 && numero < 100) {
        contador += 1
        console.log(+numero+" está no intervalo [60,100]")
    }
    if (contador == 0) {
        console.log("O número informado não está em nenhum dos dois intervalos.")
    }
}

function tratadorDeCliqueExercicio4() {
    let numero1 = parseInt(window.prompt("Insira um valor numérico: ")) 
    verificador(numero1)
    let numero2 = parseInt(window.prompt('Insira um valor numérico:'))
    verificador(numero2)
}
