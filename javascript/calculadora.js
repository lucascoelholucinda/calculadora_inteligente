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
            if (data[0] == "Soma") {
                $('td:eq(0)', row).css('color', '#08f100f2');
                $('td:eq(1)', row).css('color', '#08f100f2');
                $('td:eq(2)', row).css('color', '#08f100f2');
            }
            if (data[0] == "Subtração") {
                $('td:eq(0)', row).css('color', '#f10000f2');
                $('td:eq(1)', row).css('color', '#f10000f2');
                $('td:eq(2)', row).css('color', '#f10000f2');
            }

            if (data[0] == "Multiplicação") {
                $('td:eq(0)', row).css('color', '#ffee00f2');
                $('td:eq(1)', row).css('color', '#ffee00f2');
                $('td:eq(2)', row).css('color', '#ffee00f2');
            }

            if (data[0] == "Divisão") {
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
            let teste = brl_comma_dot(valores_calcular)
            if (teste.length <= 21) {
                document.querySelector(".texto_resultado").value = teste
            } else {
            }
        }
    })

    function brl_comma_dot(num) {
        debugger
        var num_1 = Number(num.replace(/,/g, "").replace(/\./g, ""));//Pega a parte inteira do numero
        var num_2 = Math.round((num - num_1) * 100);//Pega a parte nao inteira
        var digits = [];
        while (num_1 >= 1) {//Enquanto a parte inteira for maior igual que 1
            var digit = num_1 % 10;
            digits.push(digit);//Guarda cada digito neste array em ordem contraria
            num_1 = Math.floor(num_1 / 10);
        }
        num_1 = "";
        //Para todos os numeros no array adiciona "." a cada 3 numeros
        for (var i = 0; i < digits.length; i++) {

            if (i % 3 == 0 && i != 0) {
                var comma = '.';
            } else {
                var comma = '';
            }

            num_1 = digits[i] + comma + num_1;

        }
        var num_with_comma = num_1
        return num_with_comma;
    }

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

    $('#botao_calculadora_ponto').click(function (e) {

        let ponto = document.querySelector(".texto_resultado").value + "" + e.target.value
        if (ponto == ".") {
            document.querySelector(".texto_resultado").value = 0 + "" + ponto
        } else {
            document.querySelector(".texto_resultado").value = ponto
        }

    })

    $('#botao_calculadora_adicao').click(function (e) {
        debugger
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandoprimeirocampo = valor1.includes(',')
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
                        let removendopontos = valor2.replace(/,/g, ".").replace(/\./g, ".")
                        let configurandoparanumero = Number(removendopontos)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#08f100f2"
                            document.getElementById("soma").value = valor2
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
        let validandoprimeirocampo = valor1.includes(',')
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
                        let removendopontos = valor2.replace(/,/g, ".").replace(/\./g, ".")
                        let configurandoparanumero = Number(removendopontos)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#f10000f2"
                            document.getElementById("soma").value = valor2
                            document.querySelector(".texto_resultado").value = ""
                        }

                    }
                }
            }
        }


    })


    $('#botao_calculadora_multiplicacao').click(function (e) {
        debugger
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandoprimeirocampo = valor1.includes(',')

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
                let calculo = valor1Receber + " x " + valor2Receber
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
                    /* let resultado = total.toLocaleString('pt-BR') */
                    document.getElementById("soma").value = total
                    document.querySelector(".texto_resultado").value = ""
                    let calculo = valor1Receber + " x " + valor2Receber
                    addNewRow('Multiplicação', calculo, resultado)

                } else {
                    if (document.getElementById("soma").value == "" && validandoprimeirocampo == true) {
                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                        document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        let removendopontos = valor2.replace(/,/g, ".").replace(/\./g, ".")
                        let configurandoparanumero = Number(removendopontos)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                            document.getElementById("soma").value = valor2
                            document.querySelector(".texto_resultado").value = ""
                        }

                    }
                }
            }
        }


    })

    $('#botao_calculadora_divisao').click(function (e) {
        debugger
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandoprimeirocampo = valor1.includes(',')
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
                let calculo = valor1Receber + " / " + valor2Receber
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
                    /* let resultado = total.toLocaleString('pt-BR') */
                    document.getElementById("soma").value = total
                    document.querySelector(".texto_resultado").value = ""
                    let calculo = valor1Receber + " / " + valor2Receber
                    addNewRow('Divisão', calculo, resultado)

                } else {
                    if (document.getElementById("soma").value == "" && validandoprimeirocampo == true) {
                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                        document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        let removendopontos = valor2.replace(/,/g, ".").replace(/\./g, ".")
                        let configurandoparanumero = Number(removendopontos)
                        if (isNaN(configurandoparanumero)) {
                            document.getElementById("soma").value = "Numero Invalido!"
                            document.querySelector(".texto_resultado").value = ""
                        } else {
                            document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                            document.getElementById("soma").value = valor2
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
        let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
        let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
        let validandovirgula = valor1Receber.includes(',')
        let validandoponto = valor1Receber.includes('.')

        if (isNaN(valor1Alterado) == true || isNaN(valor2Alterado) == true || document.getElementById("soma").value) {
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
                    if (cor == "rgba(8, 241, 0, 0.95)" && validandovirgula == true || validandoponto == true) {
                        /* verde */
                        let valor1Receber = document.getElementById("soma").value
                        let valor2Receber = document.querySelector(".texto_resultado").value
                        let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                        let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
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
                            if (cor == "rgba(241, 0, 0, 0.95)" && validandovirgula == true || validandoponto == true) {
                                /* vermelho */
                                let valor1Receber = document.getElementById("soma").value
                                let valor2Receber = document.querySelector(".texto_resultado").value
                                let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                                let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
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
                                    if (cor === "rgba(255, 238, 0, 0.95)" && validandovirgula == true || validandoponto == true) {
                                        /* amarelo  com virgula*/
                                        let valor1Receber = document.getElementById("soma").value
                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                        let valor1Alterado = Number(valor1Receber)
                                        let valor2Alterado = Number(valor2Receber)
                                        let total = valor1Alterado * valor2Alterado
                                        document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                        document.getElementById("soma").value = ""
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Receber + " x " + valor2Receber
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
                                            let calculo = valor1Receber + " x " + valor2Receber
                                            addNewRow('Multiplicação', calculo, resultado)
                                        } else {
                                            if (cor === "rgba(0, 247, 255, 0.95)" && validandovirgula == true || validandoponto == true) {
                                                /* azul */
                                                let valor1Receber = document.getElementById("soma").value
                                                let valor2Receber = document.querySelector(".texto_resultado").value
                                                let valor1Alterado = Number(valor1Receber)
                                                let valor2Alterado = Number(valor2Receber)
                                                let total = valor1Alterado / valor2Alterado
                                                document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                document.getElementById("soma").value = ""
                                                document.querySelector(".texto_resultado").value = ""
                                                let calculo = valor1Receber + " / " + valor2Receber
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
                                                    /* let resultado = total.toLocaleString('pt-BR') */
                                                    document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                    document.getElementById("soma").value = ""
                                                    document.querySelector(".texto_resultado").value = ""
                                                    let calculo = valor1Receber + " / " + valor2Receber
                                                    addNewRow('Divisão', calculo, total)
                                                } else {
                                                    if (document.querySelector(".texto_resultado").value != "" && validandovirgula == true || validandoponto == true) {
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


