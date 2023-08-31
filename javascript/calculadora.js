$(document).ready(function () {
    $('.botao_calculadora').click(function (e) {

        let dados = document.querySelector(".texto_resultado").value

        if (dados === "") {
            let valores_calcular = e.target.value
            document.querySelector(".texto_resultado").value = valores_calcular
        } else {
            valores_calcular = document.querySelector(".texto_resultado").value + "" + e.target.value
            document.querySelector(".texto_resultado").value = valores_calcular
        }
    })

    $('#botao_calculadora_virgula').one("click", function (e) {

        valores_calcular = document.querySelector(".texto_resultado").value + "" + e.target.value
        document.querySelector(".texto_resultado").value = valores_calcular

    })

    $('#botao_calculadora_adicao').click(function (e) {
        debugger
        let dados = document.querySelector(".texto_resultado").value
        let validandopontuacao = dados.includes('.')
        let validandovirgula = dados.includes(',')
        let validadorVazio = document.querySelector(".texto_resultado").value
        if (validadorVazio === "") {

        } else {
            if (document.getElementById("soma").value != "") {
                document.getElementById("soma").style.backgroundColor = "#08f100f2"
                let valor1Receber = document.getElementById("soma").value
                let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                let alterarvalor1 = Number(removendopontos)
                let valor2Receber = document.querySelector(".texto_resultado").value
                let alterarvalor2 = Number(valor2Receber)
                let total = alterarvalor1 + alterarvalor2
                let resultado = total.toLocaleString('pt-BR')
                document.getElementById("soma").value = resultado
                document.querySelector(".texto_resultado").value = ""

            } else {
                if (document.getElementById("soma").value == "" && validandopontuacao == true) {
                    document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                    document.getElementById("soma").style.backgroundColor = "#08f100f2"
                    document.querySelector(".texto_resultado").value = ""
                } else {
                    if (document.getElementById("soma").value == "" && validandovirgula == true) {
                        let dado = document.querySelector(".texto_resultado").value
                        let teste = dado.replace(/,/g, ",")
                        document.getElementById("soma").value = teste
                        document.getElementById("soma").style.backgroundColor = "#08f100f2"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        document.getElementById("soma").style.backgroundColor = "#08f100f2"
                        let configurandoparanumero = Number(dados)
                        let resultado = configurandoparanumero.toLocaleString('pt-BR')
                        document.getElementById("soma").value = resultado
                        document.querySelector(".texto_resultado").value = ""
                    }
                }
            }
        }


    })


    $('#botao_calculadora_subtracao').click(function (e) {
        let dados = document.querySelector(".texto_resultado").value
        let validandopontuacao = dados.includes('.')
        let validadorVazio = document.querySelector(".texto_resultado").value
        if (validadorVazio === "") {

        } else {
            if (document.getElementById("soma").value != "") {
                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                let valor1Receber = document.getElementById("soma").value
                let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                let alterarvalor1 = Number(removendopontos)
                let valor2Receber = document.querySelector(".texto_resultado").value
                let alterarvalor2 = Number(valor2Receber)
                let total = alterarvalor1 - alterarvalor2
                let resultado = total.toLocaleString('pt-BR')
                document.getElementById("soma").value = resultado
                document.querySelector(".texto_resultado").value = ""

            } else {
                if (document.getElementById("soma").value == "" && validandopontuacao == true) {
                    document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                    document.getElementById("soma").style.backgroundColor = "#f10000f2"
                    document.querySelector(".texto_resultado").value = ""
                } else {
                    document.getElementById("soma").style.backgroundColor = "#f10000f2"
                    let configurandoparanumero = Number(dados)
                    let resultado = configurandoparanumero.toLocaleString('pt-BR')
                    document.getElementById("soma").value = resultado
                    document.querySelector(".texto_resultado").value = ""
                }
            }
        }


    })


    $('#botao_calculadora_multiplicacao').click(function (e) {
        let dados = document.querySelector(".texto_resultado").value
        let validandopontuacao = dados.includes('.')
        let validadorVazio = document.querySelector(".texto_resultado").value
        if (validadorVazio === "") {

        } else {
            if (document.getElementById("soma").value != "") {
                document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                let valor1Receber = document.getElementById("soma").value
                let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                let alterarvalor1 = Number(removendopontos)
                let valor2Receber = document.querySelector(".texto_resultado").value
                let alterarvalor2 = Number(valor2Receber)
                let total = alterarvalor1 * alterarvalor2
                let resultado = total.toLocaleString('pt-BR')
                document.getElementById("soma").value = resultado
                document.querySelector(".texto_resultado").value = ""

            } else {
                if (document.getElementById("soma").value == "" && validandopontuacao == true) {
                    document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                    document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                    document.querySelector(".texto_resultado").value = ""
                } else {
                    document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                    let configurandoparanumero = Number(dados)
                    let resultado = configurandoparanumero.toLocaleString('pt-BR')
                    document.getElementById("soma").value = resultado
                    document.querySelector(".texto_resultado").value = ""
                }
            }
        }


    })

    $('#botao_calculadora_divisao').click(function (e) {
        let dados = document.querySelector(".texto_resultado").value
        let validandopontuacao = dados.includes('.')
        let validadorVazio = document.querySelector(".texto_resultado").value
        if (validadorVazio === "") {

        } else {
            if (document.getElementById("soma").value != "") {
                document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                let valor1Receber = document.getElementById("soma").value
                let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                let alterarvalor1 = Number(removendopontos)
                let valor2Receber = document.querySelector(".texto_resultado").value
                let alterarvalor2 = Number(valor2Receber)
                let total = alterarvalor1 / alterarvalor2
                let resultado = total.toLocaleString('pt-BR')
                document.getElementById("soma").value = resultado
                document.querySelector(".texto_resultado").value = ""

            } else {
                if (document.getElementById("soma").value == "" && validandopontuacao == true) {
                    document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                    document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                    document.querySelector(".texto_resultado").value = ""
                } else {
                    document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                    let configurandoparanumero = Number(dados)
                    let resultado = configurandoparanumero.toLocaleString('pt-BR')
                    document.getElementById("soma").value = resultado
                    document.querySelector(".texto_resultado").value = ""
                }
            }
        }


    })

    $('#botao_calculadora_resultado').click(function (e) {
        debugger
        let cor = document.getElementById("soma").style.backgroundColor
        if (document.querySelector(".texto_resultado").value == "" && document.getElementById("soma").value != "") {
            document.querySelector(".texto_resultado").value = document.getElementById("soma").value
            document.getElementById("soma").style.backgroundColor = "#ffffffff"
            document.querySelector(".texto_resultado").value = document.getElementById("soma").value
            document.getElementById("soma").value = ""
        } else {
            if (document.querySelector(".texto_resultado").value != "" && document.getElementById("soma").value == "") {

            } else {
                if (cor == "rgba(241, 0, 0, 0.95)") {
                    let valor1Receber = document.getElementById("soma").value
                    let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                    let valor1Alterado = Number(removendopontos)
                    let valor2Receber = document.querySelector(".texto_resultado").value
                    let valor2Alterado = Number(valor2Receber)
                    let total = valor1Alterado - valor2Alterado
                    let resultado = total.toLocaleString('pt-BR')
                    document.getElementById("soma").style.backgroundColor = "#ffffffff"
                    document.getElementById("soma").value = ""
                    document.querySelector(".texto_resultado").value = resultado

                } else {
                    if (cor == "rgba(255, 238, 0, 0.95)") {
                        let valor1Receber = document.getElementById("soma").value
                        let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                        let valor1Alterado = Number(removendopontos)
                        let valor2Receber = document.querySelector(".texto_resultado").value
                        let valor2Alterado = Number(valor2Receber)
                        let total = valor1Alterado * valor2Alterado
                        let resultado = total.toLocaleString('pt-BR')

                        document.getElementById("soma").style.backgroundColor = "#ffffffff"
                        document.getElementById("soma").value = ""
                        document.querySelector(".texto_resultado").value = resultado
                    } else {
                        if (cor === "rgba(0, 247, 255, 0.95)") {
                            let valor1Receber = document.getElementById("soma").value
                            let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                            let valor1Alterado = Number(removendopontos)
                            let valor2Receber = document.querySelector(".texto_resultado").value
                            let valor2Alterado = Number(valor2Receber)
                            let total = valor1Alterado / valor2Alterado
                            let resultado = total.toLocaleString('pt-BR')
                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                            document.getElementById("soma").value = ""
                            document.querySelector(".texto_resultado").value = resultado
                        } else {
                            let valor1Receber = document.getElementById("soma").value
                            let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                            let valor1Alterado = Number(removendopontos)
                            let valor2Receber = document.querySelector(".texto_resultado").value
                            let valor2Alterado = Number(valor2Receber)
                            let total = valor1Alterado + valor2Alterado
                            let resultado = total.toLocaleString('pt-BR')
                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                            document.getElementById("soma").value = ""
                            document.querySelector(".texto_resultado").value = resultado
                        }
                    }
                }
            }
        }
    })


})