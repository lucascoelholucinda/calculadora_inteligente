$(document).ready(function () {
    $('#tabelaCalculadora').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json"
        },
        "lengthMenu": [
            [5, 10, 15],
            [5, 10, 15]
        ],
        "order": false,
        rowCallback: function (row, data) {
            if(data[0] == "Soma"){
                $('td:eq(0)', row).css('color', '#08f100f2');
                $('td:eq(1)', row).css('color', '#08f100f2');
                $('td:eq(2)', row).css('color', '#08f100f2');
            }
            if(data[0] == "Subtração"){
                $('td:eq(0)', row).css('color', '#f10000f2');
                $('td:eq(1)', row).css('color', '#f10000f2');
                $('td:eq(2)', row).css('color', '#f10000f2');
            }

            if(data[0] == "Multiplicação"){
                $('td:eq(0)', row).css('color', '#ffee00f2');
                $('td:eq(1)', row).css('color', '#ffee00f2');
                $('td:eq(2)', row).css('color', '#ffee00f2');
            }

            if(data[0] == "Divisão"){
                $('td:eq(0)', row).css('color', '#00f7fff2');
                $('td:eq(1)', row).css('color', '#00f7fff2');
                $('td:eq(2)', row).css('color', '#00f7fff2');
            }
        }
    })

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

    $('#botao_calculadora_limpar_historico').click(function (e) {

        document.querySelector(".texto_resultado").value = ""
        document.getElementById("soma").style.backgroundColor = "#ffffffff"
        document.getElementById("soma").value = ""
        const table = $('#tabelaCalculadora').DataTable();
        table.rows().remove().draw();

    })

    $('#botao_calculadora_limpar_campo').click(function (e) {

        document.querySelector(".texto_resultado").value = ""
    })

    $('#botao_calculadora_virgula').click(function (e) {

        let virgula = document.querySelector(".texto_resultado").value + "" + e.target.value
        if (virgula == ",") {
            document.querySelector(".texto_resultado").value = 0 + "" + virgula
        } else {
            document.querySelector(".texto_resultado").value = virgula
        }

    })

    $('#botao_calculadora_adicao').click(function (e) {
        debugger
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandoprimeirocampo = valor1.includes('.')
        if (valor2 === "") {

        } else {
            if (document.getElementById("soma").value != "" && validandoprimeirocampo == true) {
                let valor1Receber = document.getElementById("soma").value
                let valor2Receber = document.querySelector(".texto_resultado").value
                let valor1Alterado = Number(valor1Receber)
                let valor2Alterado = Number(valor2Receber)
                let total = valor1Alterado + valor2Alterado
                document.getElementById("soma").style.backgroundColor = "#08f100f2"
                document.getElementById("soma").value = total
                document.querySelector(".texto_resultado").value = ""
                let calculo = alterarvalor1 + " + " + alterarvalor2
                addNewRow('Soma', calculo, resultado)
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
                    let calculo = alterarvalor1 + " + " + alterarvalor2
                    addNewRow('Soma', calculo, resultado)

                } else {
                    if (document.getElementById("soma").value == "" && validandoprimeirocampo == true) {
                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                        document.getElementById("soma").style.backgroundColor = "#08f100f2"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        let configurandoparanumero = Number(valor2)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#08f100f2"
                            document.getElementById("soma").value = configurandoparanumero
                            document.querySelector(".texto_resultado").value = ""
                        }

                    }
                }
            }
        }


    })


    $('#botao_calculadora_subtracao').click(function (e) {
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandoprimeirocampo = valor1.includes('.')
        if (valor2 === "") {

        } else {
            if (document.getElementById("soma").value != "" && validandoprimeirocampo == true) {
                let valor1Receber = document.getElementById("soma").value
                let valor2Receber = document.querySelector(".texto_resultado").value
                let valor1Alterado = Number(valor1Receber)
                let valor2Alterado = Number(valor2Receber)
                let total = valor1Alterado - valor2Alterado
                let resultado = total.toLocaleString('pt-BR')
                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                document.getElementById("soma").value = resultado
                document.querySelector(".texto_resultado").value = ""
                let calculo = alterarvalor1 + " - " + alterarvalor2
                addNewRow('Subtração', calculo, resultado)
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
                    let calculo = alterarvalor1 + " - " + alterarvalor2
                    addNewRow('Subtração', calculo, resultado)

                } else {
                    if (document.getElementById("soma").value == "" && validandoprimeirocampo == true) {
                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                        document.getElementById("soma").style.backgroundColor = "#f10000f2"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        let configurandoparanumero = Number(valor2)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#f10000f2"
                            document.getElementById("soma").value = configurandoparanumero
                            document.querySelector(".texto_resultado").value = ""
                        }

                    }
                }
            }
        }


    })


    $('#botao_calculadora_multiplicacao').click(function (e) {
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandoprimeirocampo = valor1.includes('.')
        if (valor2 === "") {

        } else {
            if (document.getElementById("soma").value != "" && validandoprimeirocampo == true) {
                let valor1Receber = document.getElementById("soma").value
                let valor2Receber = document.querySelector(".texto_resultado").value
                let valor1Alterado = Number(valor1Receber)
                let valor2Alterado = Number(valor2Receber)
                let total = valor1Alterado * valor2Alterado
                document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                document.getElementById("soma").value = total
                document.querySelector(".texto_resultado").value = ""
                let calculo = alterarvalor1 + " x " + alterarvalor2
                addNewRow('Multiplicação', calculo, total)
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
                    let calculo = alterarvalor1 + " x " + alterarvalor2
                    addNewRow('Multiplicação', calculo, resultado)

                } else {
                    if (document.getElementById("soma").value == "" && validandoprimeirocampo == true) {
                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                        document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        let configurandoparanumero = Number(valor2)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                            document.getElementById("soma").value = configurandoparanumero
                            document.querySelector(".texto_resultado").value = ""
                        }

                    }
                }
            }
        }


    })

    $('#botao_calculadora_divisao').click(function (e) {

        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandoprimeirocampo = valor1.includes('.')
        if (valor2 === "") {

        } else {
            if (document.getElementById("soma").value != "" && validandoprimeirocampo == true) {
                let valor1Receber = document.getElementById("soma").value
                let valor2Receber = document.querySelector(".texto_resultado").value
                let valor1Alterado = Number(valor1Receber)
                let valor2Alterado = Number(valor2Receber)
                let total = valor1Alterado / valor2Alterado
                document.getElementById("soma").style.backgroundColor = "00f7fff2"
                document.getElementById("soma").value = total
                document.querySelector(".texto_resultado").value = ""
                let calculo = alterarvalor1 + " / " + alterarvalor2
                addNewRow('Divisão', calculo, total)
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
                    let calculo = alterarvalor1 + " / " + alterarvalor2
                    addNewRow('Divisão', calculo, resultado)

                } else {
                    if (document.getElementById("soma").value == "" && validandoprimeirocampo == true) {
                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                        document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        let configurandoparanumero = Number(valor2)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                            document.getElementById("soma").value = configurandoparanumero
                            document.querySelector(".texto_resultado").value = ""
                        }

                    }
                }
            }
        }

    })

    $('#botao_calculadora_resultado').click(function (e) {
        debugger
        let cor = document.getElementById("soma").style.backgroundColor
        let valor1Receber = document.getElementById("soma").value
        let valor2Receber = document.querySelector(".texto_resultado").value
        let valor1Alterado = Number(valor1Receber)
        let valor2Alterado = Number(valor2Receber)
        let validandocampo1 = valor1Receber.includes('.')

        if (isNaN(valor1Alterado) == true || isNaN(valor2Alterado) == true) {
            document.getElementById("soma").style.backgroundColor = "#ffffffff"
            document.getElementById("soma").value = "Numero Invalido!"
            document.querySelector(".texto_resultado").value = ""
        } else {
            if (document.querySelector(".texto_resultado").value == "" && document.getElementById("soma").value != "") {
                document.querySelector(".texto_resultado").value = document.getElementById("soma").value
                document.getElementById("soma").style.backgroundColor = "#ffffffff"
                document.querySelector(".texto_resultado").value = document.getElementById("soma").value
                document.getElementById("soma").value = ""
            } else {
                if (document.querySelector(".texto_resultado").value != "" && document.getElementById("soma").value == "") {

                } else {
                    if (cor == "rgba(8, 241, 0, 0.95)" && validandocampo1 == true) {
                        /* verde */
                        let valor1Receber = document.getElementById("soma").value
                        let valor2Receber = document.querySelector(".texto_resultado").value
                        let valor1Alterado = Number(valor1Receber)
                        let valor2Alterado = Number(valor2Receber)
                        let total = valor1Alterado + valor2Alterado
                        document.getElementById("soma").style.backgroundColor = "#ffffffff"
                        document.getElementById("soma").value = ""
                        document.querySelector(".texto_resultado").value = ""
                        let calculo = valor1Alterado + " + " + valor2Alterado
                        addNewRow('Soma', calculo, total)
                    } else {
                        if (cor == "rgba(8, 241, 0, 0.95)") {
                            /* verde */
                            let valor1Receber = document.getElementById("soma").value
                            let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                            let valor1Alterado = Number(removendopontos)
                            let valor2Receber = document.querySelector(".texto_resultado").value
                            let valor2Alterado = Number(valor2Receber)
                            let total = valor1Alterado + valor2Alterado
                            let resultado = total.toLocaleString('pt-BR')
                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                            document.getElementById("soma").value = ""
                            document.querySelector(".texto_resultado").value = ""
                            let calculo = valor1Alterado + " + " + valor2Alterado
                            addNewRow('Soma', calculo, resultado)

                        } else {
                            if (cor == "rgba(241, 0, 0, 0.95)" && validandocampo1 == true) {
                                /* vermelho */
                                let valor1Receber = document.getElementById("soma").value
                                let valor2Receber = document.querySelector(".texto_resultado").value
                                let valor1Alterado = Number(valor1Receber)
                                let valor2Alterado = Number(valor2Receber)
                                let total = valor1Alterado - valor2Alterado
                                let resultado = total.toLocaleString('pt-BR')
                                document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                document.getElementById("soma").value = ""
                                document.querySelector(".texto_resultado").value = ""
                                let calculo = valor1Alterado + " - " + valor2Alterado
                                addNewRow('Subtração', calculo, resultado)
                            } else {
                                if (cor == "rgba(241, 0, 0, 0.95)") {
                                    /* vermelho */
                                    let valor1Receber = document.getElementById("soma").value
                                    let valor2Receber = document.querySelector(".texto_resultado").value
                                    let valor1Alterado = Number(valor1Receber)
                                    let valor2Alterado = Number(valor2Receber)
                                    let total = valor1Alterado - valor2Alterado
                                    document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                    document.getElementById("soma").value = ""
                                    document.querySelector(".texto_resultado").value = ""
                                    let calculo = valor1Alterado + " - " + valor2Alterado
                                    addNewRow('Subtração', calculo, total)
                                } else {
                                    if (cor === "rgba(255, 238, 0, 0.95)" && validandocampo1 == true) {
                                        /* amarelo */
                                        let valor1Receber = document.getElementById("soma").value
                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                        let valor1Alterado = Number(valor1Receber)
                                        let valor2Alterado = Number(valor2Receber)
                                        let total = valor1Alterado * valor2Alterado
                                        document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                        document.getElementById("soma").value = ""
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Alterado + " x " + valor2Alterado
                                        addNewRow('Multiplicação', calculo, total)
                                    } else {
                                        if (cor === "rgba(255, 238, 0, 0.95)") {
                                            /* amarelo */
                                            let valor1Receber = document.getElementById("soma").value
                                            let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                                            let valor1Alterado = Number(removendopontos)
                                            let valor2Receber = document.querySelector(".texto_resultado").value
                                            let valor2Alterado = Number(valor2Receber)
                                            let total = valor1Alterado * valor2Alterado
                                            let resultado = total.toLocaleString('pt-BR')
                                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                            document.getElementById("soma").value = ""
                                            document.querySelector(".texto_resultado").value = ""
                                            let calculo = valor1Alterado + " x " + valor2Alterado
                                            addNewRow('Multiplicação', calculo, resultado)
                                        } else {
                                            if (cor === "rgba(0, 247, 255, 0.95)" && validandocampo1 == true) {
                                                /* azul */
                                                let valor1Receber = document.getElementById("soma").value
                                                let valor2Receber = document.querySelector(".texto_resultado").value
                                                let valor1Alterado = Number(valor1Receber)
                                                let valor2Alterado = Number(valor2Receber)
                                                let total = valor1Alterado / valor2Alterado
                                                document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                document.getElementById("soma").value = ""
                                                document.querySelector(".texto_resultado").value = ""
                                                let calculo = valor1Alterado + " / " + valor2Alterado
                                                addNewRow('Divisão', calculo, total)
                                            } else {
                                                if (cor === "rgba(0, 247, 255, 0.95)") {
                                                    /* azul */
                                                    let valor1Receber = document.getElementById("soma").value
                                                    let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                                                    let valor1Alterado = Number(removendopontos)
                                                    let valor2Receber = document.querySelector(".texto_resultado").value
                                                    let valor2Alterado = Number(valor2Receber)
                                                    let total = valor1Alterado / valor2Alterado
                                                    let resultado = total.toLocaleString('pt-BR')
                                                    document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                    document.getElementById("soma").value = ""
                                                    document.querySelector(".texto_resultado").value = ""
                                                    let calculo = valor1Alterado + " / " + valor2Alterado
                                                    addNewRow('Divisão', calculo, resultado)
                                                } else {
                                                    if (document.querySelector(".texto_resultado").value != "" && validandovirgula == true) {
                                                        let valor1Receber = document.getElementById("soma").value
                                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                                        let valor1Alterado = Number(valor1Receber)
                                                        let valor2Alterado = Number(valor2Receber)
                                                        let total = valor1Alterado + valor2Alterado
                                                        document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                        document.getElementById("soma").value = ""
                                                        document.querySelector(".texto_resultado").value = ""
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
                                                        document.querySelector(".texto_resultado").value = ""

                                                    }

                                                }

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })


})


function addNewRow(operacao, calculo, resultado) {
    const table = new DataTable('#tabelaCalculadora');
    table.row.add([operacao, calculo, resultado]).draw(false);
    table.order([1, 'asc']).draw();
    table.order([0, 'asc']).draw();

}


