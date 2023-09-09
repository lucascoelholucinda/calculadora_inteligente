$(document).ready(function () {

    $('#tabelaCalculadora').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json"
        },
        "lengthMenu": [
            [3, 5, 15],
            [3, 5, 15]
        ],
        "order": false,
        "scrollX": true,
        "columnDefs": [
            { "width": "10%", "targets": 0 },
            { "width": "40%", "targets": 1 },
            { "width": "50%", "targets": 2 }

        ],
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
        let validandovirgula1 = dados.includes(',')
        if (dados === "") {
            let valores_calcular = e.target.value
            document.querySelector(".texto_resultado").value = valores_calcular
        } else {
            if (validandovirgula1 == true) {
                document.querySelector(".texto_resultado").value = document.querySelector(".texto_resultado").value + "" + e.target.value
            } else {
                valores_calcular = document.querySelector(".texto_resultado").value + "" + e.target.value
                let teste = brl_comma_dot(valores_calcular)
                if (teste.length <= 21) {
                    document.querySelector(".texto_resultado").value = teste
                } else {
                }
            }
        }
    })

    function brl_comma_dot(num) {

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

    function brl_comma_dot2(num) {
        
        var num_1 = num;//Pega a parte inteira do numero

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

        document.getElementById("soma").style.backgroundColor = "#ffffffff"
        document.getElementById("soma").style.width = "192px"
        document.getElementById("soma").style.margin = "0px 5px 5px 109px"
        document.getElementById("soma").value = ""
        document.querySelector(".texto_resultado").value = ""
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
        document.getElementById("soma").style.color = "#000000"
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandovirgula1 = valor1.includes(',')
        let validandovirgula2 = valor2.includes(',')
        let validandoponto1 = valor1.includes('.')
        let validandoponto2 = valor2.includes('.')
        let validandoPontencia1 = valor1.includes('e+')
        let validandoPontencia2 = valor2.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontencia1 == true) {
            transformandoValorPontencia1 = Number(valor1)
        } if (validandoPontencia2 == true) {
            transformandoValorPontencia2 = Number(valor2)
        } else {

        }

        if (valor1 === "Numero Inválido!") {
            document.getElementById("soma").style.backgroundColor = "#ffffffff"
            document.getElementById("soma").value = ""
        }

        if (valor2 === "") {
            if (document.getElementById("soma").style.backgroundColor != "rgba(8, 241, 0, 0.95)") {
                document.getElementById("soma").style.backgroundColor = "#08f100f2"
                document.querySelector(".texto_resultado").value = ""
            }
        } else {
            if (document.getElementById("soma").value != "" && transformandoValorPontencia1 != "" && validandoponto2 == false) {
                let valor2Receber = document.querySelector(".texto_resultado").value
                let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                let total = transformandoValorPontencia1 + valor2Alterado
                document.getElementById("soma").style.backgroundColor = "#08f100f2"
                document.getElementById("soma").value = total
                document.querySelector(".texto_resultado").value = ""
                let calculo = transformandoValorPontencia1 + " + " + valor2Receber
                addNewRow('Soma', calculo, total)
            } else {
                if (document.getElementById("soma").value != "" && transformandoValorPontencia1 != "" && validandovirgula2 == true) {
                    let valor2Receber = document.querySelector(".texto_resultado").value
                    let valor2Alterado = Number(valor2Receber.replace(/,/g, "."))
                    let total = transformandoValorPontencia1 + valor2Alterado
                    document.getElementById("soma").style.backgroundColor = "#08f100f2"
                    document.getElementById("soma").value = total
                    document.querySelector(".texto_resultado").value = ""
                    let calculo = transformandoValorPontencia1 + " + " + valor2Receber
                    addNewRow('Soma', calculo, total)
                } else {
                    if (document.getElementById("soma").value != "" && validandovirgula2 == true && validandoponto2 == true && validandovirgula1 == true) {
                        document.getElementById("soma").style.backgroundColor = "#f10000f2"
                        document.getElementById("soma").style.width = "300px"
                        document.getElementById("soma").style.margin = "0px 5px 5px 55px"
                        document.getElementById("soma").value = "Não é Possivel Calcular com esses valores!"
                        document.getElementById("soma").style.color = "#ffffffff"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        if (document.getElementById("soma").value != "" && validandovirgula1 == true && validandoponto1 == true && validandovirgula2 == true) {
                            document.getElementById("soma").style.backgroundColor = "#f10000f2"
                            document.getElementById("soma").style.width = "300px"
                            document.getElementById("soma").style.margin = "0px 5px 5px 55px"
                            document.getElementById("soma").value = "Não é Possivel Calcular com esses valores!"
                            document.getElementById("soma").style.color = "#ffffffff"
                            document.querySelector(".texto_resultado").value = ""

                        } else {
                            if (document.getElementById("soma").value != "" && validandovirgula2 == true && validandoponto1 == true) {
                                document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                let valor1Receber = document.getElementById("soma").value
                                let valor2Receber = document.querySelector(".texto_resultado").value
                                let removendopontos1 = valor1Receber.replace(/,/g, "").replace(/\./g, '')
                                let removendopontos2 = valor2Receber.replace(/,/g, ".")
                                let alterarvalor1 = parseFloat(removendopontos1)
                                let alterarvalor2 = parseFloat(removendopontos2)
                                let total = alterarvalor1 + alterarvalor2
                                let valor = total.toLocaleString('pt-BR')
                                document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                document.getElementById("soma").value = valor
                                document.querySelector(".texto_resultado").value = ""
                                let calculo = valor1Receber + " + " + valor2Receber
                                addNewRow('Soma', calculo, valor)
                            } else {
                                if (document.getElementById("soma").value != "" && validandovirgula1 == true && validandoponto2 == true) {
                                    document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                    let valor1Receber = document.getElementById("soma").value
                                    let valor2Receber = document.querySelector(".texto_resultado").value
                                    let removendopontos1 = valor1Receber.replace(/,/g, ".")
                                    let removendopontos2 = valor2Receber.replace(/,/g, "").replace(/\./g, '')
                                    let alterarvalor1 = parseFloat(removendopontos1)
                                    let alterarvalor2 = parseFloat(removendopontos2)
                                    let total = alterarvalor1 + alterarvalor2
                                    let valor = total.toLocaleString('pt-BR')
                                    document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                    document.getElementById("soma").value = valor
                                    document.querySelector(".texto_resultado").value = ""
                                    let calculo = valor1Receber + " + " + valor2Receber
                                    addNewRow('Soma', calculo, valor)
                                } else {
                                    if (document.getElementById("soma").value != "" && validandovirgula1 == true) {
                                        document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                        let valor1Receber = document.getElementById("soma").value
                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                        let removendopontos1 = valor1Receber.replace(/,/g, ".")
                                        let removendopontos2 = valor2Receber.replace(/,/g, ".")
                                        let alterarvalor1 = parseFloat(removendopontos1)
                                        let alterarvalor2 = parseFloat(removendopontos2)
                                        let total = alterarvalor1 + alterarvalor2
                                        let valor = total.toLocaleString('pt-BR')
                                        let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                        document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                        document.getElementById("soma").value = substituindoPontoporVirgula
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Receber + " + " + valor2Receber
                                        addNewRow('Soma', calculo, substituindoPontoporVirgula)
                                    } else {
                                        if (document.getElementById("soma").value != "" && validandovirgula2 == true) {
                                            document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                            let valor1Receber = document.getElementById("soma").value
                                            let valor2Receber = document.querySelector(".texto_resultado").value
                                            let removendopontos2 = valor2Receber.replace(/,/g, ".")
                                            let alterarvalor1 = Number(valor1Receber)
                                            let alterarvalor2 = parseFloat(removendopontos2)
                                            let total = alterarvalor1 + alterarvalor2
                                            let valor = total.toLocaleString('pt-BR')
                                            let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                            document.getElementById("soma").value = substituindoPontoporVirgula
                                            document.querySelector(".texto_resultado").value = ""
                                            let calculo = valor1Receber + " + " + valor2Receber
                                            addNewRow('Soma', calculo, substituindoPontoporVirgula)
                                        } else {
                                            if (document.getElementById("soma").value != "") {
                                                document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                                let valor1Receber = document.getElementById("soma").value
                                                let valor2Receber = document.querySelector(".texto_resultado").value
                                                let removendopontos1 = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                                                let removendopontos2 = valor2Receber.replace(/,/g, "").replace(/\./g, "")
                                                let alterarvalor1 = Number(removendopontos1)
                                                let alterarvalor2 = Number(removendopontos2)
                                                let total = alterarvalor1 + alterarvalor2
                                                let valor = total.toLocaleString('pt-BR')
                                                document.getElementById("soma").value = valor
                                                document.querySelector(".texto_resultado").value = ""
                                                let calculo = valor1Receber + " + " + valor2Receber
                                                addNewRow('Soma', calculo, valor)

                                            } else {
                                                if (document.getElementById("soma").value == "" && validandovirgula2 == true) {
                                                    let removendopontos = valor2.replace(/,/g, ".")
                                                    let configurandoparanumero = Number(removendopontos)
                                                    if (isNaN(configurandoparanumero)) {
                                                        document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                                        document.getElementById("soma").value = "Numero Inválido!"
                                                        document.getElementById("soma").style.color = "#ffffffff"
                                                        document.querySelector(".texto_resultado").value = ""
                                                    } else {
                                                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                                                        document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                                        document.querySelector(".texto_resultado").value = ""
                                                    }
                                                } else {
                                                    document.getElementById("soma").style.backgroundColor = "#08f100f2"
                                                    document.getElementById("soma").value = valor2
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


    })


    $('#botao_calculadora_subtracao').click(function (e) {
        debugger
        document.getElementById("soma").style.color = "#000000"
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandovirgula1 = valor1.includes(',')
        let validandovirgula2 = valor2.includes(',')
        let validandoponto1 = valor1.includes('.')
        let validandoponto2 = valor2.includes('.')
        let validandoPontencia1 = valor1.includes('e+')
        let validandoPontencia2 = valor2.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontencia1 == true) {
            transformandoValorPontencia1 = Number(valor1)
        } if (validandoPontencia2 == true) {
            transformandoValorPontencia2 = Number(valor2)
        } else {

        }

        if (valor1 === "Numero Inválido!") {
            document.getElementById("soma").style.backgroundColor = "#ffffffff"
            document.getElementById("soma").value = ""
        }

        if (valor2 === "") {
            if (document.getElementById("soma").style.backgroundColor != "rgba(241, 0, 0, 0.95)") {
                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                document.querySelector(".texto_resultado").value = ""
            }
        } else {
            if (document.getElementById("soma").value != "" && transformandoValorPontencia1 != "" && validandoponto2 == false) {
                let valor2Receber = document.querySelector(".texto_resultado").value
                let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                let total = transformandoValorPontencia1 - valor2Alterado
                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                document.getElementById("soma").value = total
                document.querySelector(".texto_resultado").value = ""
                let calculo = transformandoValorPontencia1 + " - " + valor2Receber
                addNewRow('Subtração', calculo, total)
            } else {
                if (document.getElementById("soma").value != "" && transformandoValorPontencia1 != "" && validandovirgula2 == true) {
                    let valor2Receber = document.querySelector(".texto_resultado").value
                    let valor2Alterado = Number(valor2Receber.replace(/,/g, "."))
                    let total = transformandoValorPontencia1 - valor2Alterado
                    document.getElementById("soma").style.backgroundColor = "#f10000f2"
                    document.getElementById("soma").value = total
                    document.querySelector(".texto_resultado").value = ""
                    let calculo = transformandoValorPontencia1 + " - " + valor2Receber
                    addNewRow('Subtração', calculo, total)
                } else {
                    if (document.getElementById("soma").value != "" && validandovirgula2 == true && validandoponto2 == true && validandovirgula1 == true) {
                        document.getElementById("soma").style.backgroundColor = "#f10000f2"
                        document.getElementById("soma").style.width = "300px"
                        document.getElementById("soma").style.margin = "0px 5px 5px 55px"
                        document.getElementById("soma").value = "Não é Possivel Calcular com esses valores!"
                        document.getElementById("soma").style.color = "#ffffffff"
                        document.querySelector(".texto_resultado").value = ""
                    } else {
                        if (document.getElementById("soma").value != "" && validandovirgula1 == true && validandoponto1 == true && validandovirgula2 == true) {
                            document.getElementById("soma").style.backgroundColor = "#f10000f2"
                            document.getElementById("soma").style.width = "300px"
                            document.getElementById("soma").style.margin = "0px 5px 5px 55px"
                            document.getElementById("soma").value = "Não é Possivel Calcular com esses valores!"
                            document.getElementById("soma").style.color = "#ffffffff"
                            document.querySelector(".texto_resultado").value = ""

                        } else {
                            if (document.getElementById("soma").value != "" && validandovirgula2 == true && validandoponto1 == true) {
                                let valor1Receber = document.getElementById("soma").value
                                let valor2Receber = document.querySelector(".texto_resultado").value
                                let removendopontos1 = valor1Receber.replace(/,/g, "").replace(/\./g, '')
                                let removendopontos2 = valor2Receber.replace(/,/g, ".")
                                let alterarvalor1 = Number(removendopontos1)
                                let alterarvalor2 = Number(removendopontos2)
                                let total = alterarvalor1 - alterarvalor2
                                let valor = total.toLocaleString('pt-BR')
                                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                document.getElementById("soma").value = valor
                                document.querySelector(".texto_resultado").value = ""
                                let calculo = valor1Receber + " - " + valor2Receber
                                addNewRow('Subtração', calculo, valor)
                            } else {
                                if (document.getElementById("soma").value != "" && validandovirgula1 == true && validandoponto2 == true) {
                                    let valor1Receber = document.getElementById("soma").value
                                    let valor2Receber = document.querySelector(".texto_resultado").value
                                    let removendopontos1 = valor1Receber.replace(/,/g, ".")
                                    let removendopontos2 = valor2Receber.replace(/,/g, "").replace(/\./g, '')
                                    let alterarvalor1 = Number(removendopontos1)
                                    let alterarvalor2 = Number(removendopontos2)
                                    let total = alterarvalor1 + alterarvalor2
                                    let valor = total.toLocaleString('pt-BR')
                                    document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                    document.getElementById("soma").value = valor
                                    document.querySelector(".texto_resultado").value = ""
                                    let calculo = valor1Receber + " + " + valor2Receber
                                    addNewRow('Subtração', calculo, valor)
                                } else {
                                    if (document.getElementById("soma").value != "" && validandovirgula1 == true) {
                                        let valor1Receber = document.getElementById("soma").value
                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                        let removendopontos1 = valor1Receber.replace(/,/g, ".")
                                        let removendopontos2 = valor2Receber.replace(/,/g, ".")
                                        let alterarvalor1 = Number(removendopontos1)
                                        let alterarvalor2 = Number(removendopontos2)
                                        let total = alterarvalor1 - alterarvalor2
                                        let valor = total.toLocaleString('pt-BR')
                                        let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                        document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                        document.getElementById("soma").value = substituindoPontoporVirgula
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Receber + " - " + valor2Receber
                                        addNewRow('Subtração', calculo, substituindoPontoporVirgula)
                                    } else {
                                        if (document.getElementById("soma").value != "" && validandovirgula2 == true) {
                                            document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                            let valor1Receber = document.getElementById("soma").value
                                            let valor2Receber = document.querySelector(".texto_resultado").value
                                            let removendopontos2 = valor2Receber.replace(/,/g, ".")
                                            let alterarvalor1 = Number(valor1Receber)
                                            let alterarvalor2 = parseFloat(removendopontos2)
                                            let total = alterarvalor1 - alterarvalor2
                                            let valor = total.toLocaleString('pt-BR')
                                            let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                            document.getElementById("soma").value = substituindoPontoporVirgula
                                            document.querySelector(".texto_resultado").value = ""
                                            let calculo = valor1Receber + " - " + valor2Receber
                                            addNewRow('Subtração', calculo, substituindoPontoporVirgula)
                                        } else {
                                            if (document.getElementById("soma").value != "") {
                                                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                                let valor1Receber = document.getElementById("soma").value
                                                let valor2Receber = document.querySelector(".texto_resultado").value
                                                let removendopontos1 = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                                                let removendopontos2 = valor2Receber.replace(/,/g, "").replace(/\./g, "")
                                                let alterarvalor1 = Number(removendopontos1)
                                                let alterarvalor2 = Number(removendopontos2)
                                                let total = alterarvalor1 - alterarvalor2
                                                document.getElementById("soma").value = total.toLocaleString("pt-BR")
                                                document.querySelector(".texto_resultado").value = ""
                                                let calculo = valor1Receber + " - " + valor2Receber
                                                addNewRow('Subtração', calculo, total.toLocaleString("pt-BR"))

                                            } else {
                                                if (document.getElementById("soma").value == "" && validandovirgula2 == true) {
                                                    let removendopontos = valor2.replace(/,/g, ".")
                                                    let configurandoparanumero = Number(removendopontos)
                                                    if (isNaN(configurandoparanumero)) {
                                                        document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                                        document.getElementById("soma").value = "Numero Inválido!"
                                                        document.getElementById("soma").style.color = "#ffffffff"
                                                        document.querySelector(".texto_resultado").value = ""
                                                    } else {
                                                        document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                                                        document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                                        document.querySelector(".texto_resultado").value = ""
                                                    }
                                                } else {
                                                    document.getElementById("soma").style.backgroundColor = "#f10000f2"
                                                    document.getElementById("soma").value = valor2
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


    })


    $('#botao_calculadora_multiplicacao').click(function (e) {
        debugger
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandovirgula1 = valor1.includes(',')
        let validandovirgula2 = valor2.includes(',')
        let validandoponto1 = valor1.includes('.')
        let validandoponto2 = valor2.includes('.')

        let validandoPontencia1 = valor1.includes('e+')
        let validandoPontencia2 = valor2.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontencia1 == true) {
            transformandoValorPontencia1 = Number(valor1)
        } if (validandoPontencia2 == true) {
            transformandoValorPontencia2 = Number(valor2)
        } else {

        }

        if (valor2 === "") {
            if (document.getElementById("soma").style.backgroundColor != "rgba(255, 238, 0, 0.95)") {
                /* amarelo */
                document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                document.querySelector(".texto_resultado").value = ""
            }
        } else {
            if (validandovirgula1 == true && validandoponto2 == true || validandovirgula2 == true && validandoponto1 == true) {
                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                document.getElementById("soma").style.width = "300px"
                document.getElementById("soma").style.margin = "0px 5px 5px 55px"
                document.getElementById("soma").value = "Não é Possivel Calcular com esses valores!"
                document.getElementById("soma").style.color = "#ffffffff"
                document.querySelector(".texto_resultado").value = ""
            } else {
                if (document.getElementById("soma").value != "" && validandovirgula1 == true) {
                    let valor1Receber = document.getElementById("soma").value
                    let valor2Receber = document.querySelector(".texto_resultado").value
                    let valor1Alterado = Number(valor1Receber.replace(/,/g, "."))
                    let valor2Alterado = Number(valor2Receber.replace(/,/g, "."))
                    let total = parseFloat(valor1Alterado * valor2Alterado)
                    let valor = total.toString()
                    document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                    document.getElementById("soma").value = total
                    document.querySelector(".texto_resultado").value = ""
                    let calculo = valor1Receber + " x " + valor2Receber
                    addNewRow('Multiplicação', calculo, valor)
                } else {
                    if (document.getElementById("soma").value != "" && transformandoValorPontencia1 != "" && validandoponto2 == false && validandovirgula2 == false) {
                        /* segundo campo numero inteiro */
                        let valor2Receber = document.querySelector(".texto_resultado").value
                        let valor2Alterado = Number(valor2Receber)
                        let total = transformandoValorPontencia1 * valor2Alterado
                        document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                        document.getElementById("soma").value = total
                        document.querySelector(".texto_resultado").value = ""
                        let calculo = transformandoValorPontencia1 + " x " + valor2Alterado
                        addNewRow('Multiplicação', calculo, total)
                    } else {
                        if (document.getElementById("soma").value != "" && transformandoValorPontencia1 != "" && validandoponto2 == true) {
                            let valor2Receber = document.querySelector(".texto_resultado").value
                            let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                            let total = transformandoValorPontencia1 * valor2Alterado
                            document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                            document.getElementById("soma").value = total
                            document.querySelector(".texto_resultado").value = ""
                            let calculo = transformandoValorPontencia1 + " x " + valor2Receber
                            addNewRow('Multiplicação', calculo, total)
                        } else {
                            if (document.getElementById("soma").value != "" && transformandoValorPontencia1 != "" && validandovirgula2 == true) {
                                let valor2Receber = document.querySelector(".texto_resultado").value
                                let valor2Alterado = Number(valor2Receber.replace(/,/g, "."))
                                let total = transformandoValorPontencia1 * valor2Alterado
                                document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                                document.getElementById("soma").value = total
                                document.querySelector(".texto_resultado").value = ""
                                let calculo = transformandoValorPontencia1 + " x " + valor2Receber
                                addNewRow('Multiplicação', calculo, total)
                            } else {
                                if (document.getElementById("soma").value != "" && validandoponto1 == true && validandoponto2 == true) {
                                    let valor1Receber = document.getElementById("soma").value
                                    let valor2Receber = document.querySelector(".texto_resultado").value
                                    let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                                    let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                                    let total = valor1Alterado * valor2Alterado
                                    let dado = total.toString()
                                    let validarpontencia = dado.includes('e+')
                                    if (validarpontencia == true) {
                                        document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                                        document.getElementById("soma").value = total
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Receber + " x " + valor2Receber
                                        addNewRow('Multiplicação', calculo, total)
                                    } else {
                                        let teste = brl_comma_dot2(total)
                                        document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                                        document.getElementById("soma").value = teste
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Receber + " x " + valor2Receber
                                        addNewRow('Multiplicação', calculo, teste)
                                    }
                                } else {
                                    if (document.getElementById("soma").value != "") {
                                        let valor1Receber = document.getElementById("soma").value
                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                        let removendopontos1 = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                                        let removendopontos2 = valor2Receber.replace(/,/g, "").replace(/\./g, "")
                                        let alterarvalor1 = Number(removendopontos1)
                                        let alterarvalor2 = Number(removendopontos2)
                                        let total = alterarvalor1 * alterarvalor2
                                         let resultado = total.toLocaleString('pt-BR')
                                        document.getElementById("soma").value = resultado
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Receber + " x " + valor2Receber
                                        addNewRow('Multiplicação', calculo, resultado)

                                    } else {
                                        if (document.getElementById("soma").value == "" && validandovirgula2 == true) {
                                            let removendopontos = valor2.replace(/,/g, ".")
                                            let configurandoparanumero = Number(removendopontos)
                                            if (isNaN(configurandoparanumero)) {
                                                document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                                                document.getElementById("soma").value = "Numero Inválido!"
                                                document.getElementById("soma").style.color = "#ffffffff"
                                                document.querySelector(".texto_resultado").value = ""
                                            } else {
                                                document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                                                document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                                                document.querySelector(".texto_resultado").value = ""
                                            }
                                        } else {
                                            document.getElementById("soma").style.backgroundColor = "#ffee00f2"
                                            document.getElementById("soma").value = valor2
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


    })

    $('#botao_calculadora_divisao').click(function (e) {
        debugger
        let valor1 = document.getElementById("soma").value
        let valor2 = document.querySelector(".texto_resultado").value
        let validandovirgula1 = valor1.includes(',')
        let validandovirgula2 = valor2.includes(',')
        let validandoponto1 = valor1.includes('.')
        let validandoponto2 = valor2.includes('.')

        if (valor2 === "") {
            if (document.getElementById("soma").style.backgroundColor != "rgba(0, 247, 255, 0.95)") {
                /* azul */
                document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                document.querySelector(".texto_resultado").value = ""
            }
        } else {
            if (validandovirgula1 == true && validandoponto2 == true || validandovirgula2 == true && validandoponto1 == true) {
                document.getElementById("soma").style.backgroundColor = "#f10000f2"
                document.getElementById("soma").style.width = "300px"
                document.getElementById("soma").style.margin = "0px 5px 5px 55px"
                document.getElementById("soma").value = "Não é Possivel Calcular com esses valores!"
                document.getElementById("soma").style.color = "#ffffffff"
                document.querySelector(".texto_resultado").value = ""
            } else {
                if (document.getElementById("soma").value != "" && validandovirgula1 == true && validandovirgula2 == true) {
                    let valor1Receber = document.getElementById("soma").value
                    let valor2Receber = document.querySelector(".texto_resultado").value
                    let valor1Alterado = parseFloat(valor1Receber.replace(/,/g, "."))
                    let valor2Alterado = parseFloat(valor2Receber.replace(/,/g, "."))
                    let total = parseFloat(valor1Alterado / valor2Alterado)
                    let valor = total.toString()
                    let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                    document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                    document.getElementById("soma").value = substituindoPontoporVirgula
                    document.querySelector(".texto_resultado").value = ""
                    let calculo = valor1Receber + " / " + valor2Receber
                    addNewRow('Divisão', calculo, substituindoPontoporVirgula)
                } else {
                    if (document.getElementById("soma").value != "" && validandoponto1 == true && validandoponto2 == true) {
                        let valor1Receber = document.getElementById("soma").value
                        let valor2Receber = document.querySelector(".texto_resultado").value
                        let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                        let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                        let total = parseFloat(valor1Alterado / valor2Alterado)
                        let valor = total.toString()
                        let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                        document.getElementById("soma").style.backgroundColor = "00f7fff2"
                        document.getElementById("soma").value = substituindoPontoporVirgula
                        document.querySelector(".texto_resultado").value = ""
                        let calculo = valor1Receber + " / " + valor2Receber
                        addNewRow('Divisão', calculo, substituindoPontoporVirgula)
                    } else {
                        if (document.getElementById("soma").value != "") {
                            document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                            let valor1Receber = document.getElementById("soma").value
                            let removendopontos = valor1Receber.replace(/,/g, "").replace(/\./g, "")
                            let alterarvalor1 = Number(removendopontos)
                            let valor2Receber = document.querySelector(".texto_resultado").value
                            let alterarvalor2 = Number(valor2Receber)
                            let total = alterarvalor1 / alterarvalor2
                            document.getElementById("soma").value = total
                            document.querySelector(".texto_resultado").value = ""
                            let calculo = valor1Receber + " / " + valor2Receber
                            addNewRow('Divisão', calculo, total)

                        } else {
                            if (document.getElementById("soma").value == "" && validandovirgula1 == true) {
                                document.getElementById("soma").value = document.querySelector(".texto_resultado").value
                                document.getElementById("soma").style.backgroundColor = "#00f7fff2"
                                document.querySelector(".texto_resultado").value = ""
                            } else {
                                let removendopontos = valor2.replace(/,/g, "").replace(/\./g, "")
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
        let validandovirgula1 = valor1Receber.includes(',')
        let validandovirgula2 = valor2Receber.includes(',')
        let validandoponto1 = valor1Receber.includes('.')
        let validandoponto2 = valor2Receber.includes('.')

        if (isNaN(valor1Alterado) == true || isNaN(valor2Alterado) == true) {
            document.getElementById("soma").style.backgroundColor = "#ffffffff"
            document.getElementById("soma").value = "Numero Invalido!"
            document.querySelector(".texto_resultado").value = ""
        } else {
            if (validandovirgula1 == true && validandoponto2 == true || validandovirgula2 == true && validandoponto1 == true) {
                document.getElementById("soma").style.backgroundColor = "#ffffffff"
                document.getElementById("soma").style.width = "300px"
                document.getElementById("soma").style.margin = "0px 5px 5px 55px"
                document.getElementById("soma").value = "Não é Possivel Calcular com esses valores!"
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
                        if (cor == "rgba(8, 241, 0, 0.95)" && validandoponto1 == true) {
                            /* verde  validandoponto1*/
                            let valor1Receber = document.getElementById("soma").value
                            let valor2Receber = document.querySelector(".texto_resultado").value
                            let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                            let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                            let total = valor1Alterado + valor2Alterado
                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                            document.getElementById("soma").value = ""
                            document.querySelector(".texto_resultado").value = ""
                            let totalconvertido = brl_comma_dot(total.toString())
                            let calculo = valor1Receber + " + " + valor2Receber
                            addNewRow('Soma', calculo, totalconvertido)
                        } else {
                            if (cor == "rgba(8, 241, 0, 0.95)" && validandovirgula1 == true) {
                                /* verde validandovirgula1 */
                                let valor1Receber = document.getElementById("soma").value
                                let valor2Receber = document.querySelector(".texto_resultado").value
                                let valor1Alterado = parseFloat(valor1Receber.replace(/,/g, "."))
                                let valor2Alterado = parseFloat(valor2Receber.replace(/,/g, "."))
                                let total = parseFloat(valor1Alterado + valor2Alterado)
                                let valor = total.toString()
                                let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                document.getElementById("soma").value = ""
                                document.querySelector(".texto_resultado").value = ""
                                let calculo = valor1Receber + " + " + valor2Receber
                                addNewRow('Soma', calculo, substituindoPontoporVirgula)
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
                                    if (cor == "rgba(241, 0, 0, 0.95)" && validandoponto1 == true) {
                                        /* vermelho validandoponto1 */
                                        let valor1Receber = document.getElementById("soma").value
                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                        let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                                        let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                                        let total = valor1Alterado - valor2Alterado
                                        let resultado = total.toLocaleString('pt-BR')
                                        document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                        document.getElementById("soma").value = ""
                                        document.querySelector(".texto_resultado").value = ""
                                        let calculo = valor1Receber + " - " + valor2Receber
                                        addNewRow('Subtração', calculo, resultado)
                                    } else {
                                        if (cor == "rgba(241, 0, 0, 0.95)" && validandovirgula1 == true) {
                                            /* vermelho validandovirgula1 */
                                            let valor1Receber = document.getElementById("soma").value
                                            let valor2Receber = document.querySelector(".texto_resultado").value
                                            let valor1Alterado = parseFloat(valor1Receber.replace(/,/g, "."))
                                            let valor2Alterado = parseFloat(valor2Receber.replace(/,/g, "."))
                                            let total = parseFloat(valor1Alterado - valor2Alterado)
                                            let valor = total.toString()
                                            let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                            document.getElementById("soma").value = ""
                                            document.querySelector(".texto_resultado").value = ""
                                            let calculo = valor1Receber + " - " + valor2Receber
                                            addNewRow('Subtração', calculo, substituindoPontoporVirgula)
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
                                                if (cor === "rgba(255, 238, 0, 0.95)" && validandovirgula1 == true) {
                                                    /* amarelo  com virgula*/
                                                    let valor1Receber = document.getElementById("soma").value
                                                    let valor2Receber = document.querySelector(".texto_resultado").value
                                                    let valor1Alterado = parseFloat(valor1Receber.replace(/,/g, "."))
                                                    let valor2Alterado = parseFloat(valor2Receber.replace(/,/g, "."))
                                                    let total = parseFloat(valor1Alterado * valor2Alterado)
                                                    let valor = total.toString()
                                                    let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                                    document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                    document.getElementById("soma").value = ""
                                                    document.querySelector(".texto_resultado").value = ""
                                                    let calculo = valor1Receber + " x " + valor2Receber
                                                    addNewRow('Multiplicação', calculo, substituindoPontoporVirgula)
                                                } else {
                                                    if (cor === "rgba(255, 238, 0, 0.95)" && validandoponto1 == true) {
                                                        /* amarelo  com validandoponto1*/
                                                        let valor1Receber = document.getElementById("soma").value
                                                        let valor2Receber = document.querySelector(".texto_resultado").value
                                                        let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                                                        let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                                                        let total = valor1Alterado * valor2Alterado
                                                        let dado = total.toString()
                                                        let validarpontencia = dado.includes('e+')
                                                        if (validarpontencia == true) {
                                                            /* let resultado = total.toLocaleString('pt-BR') */
                                                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                            document.getElementById("soma").value = ""
                                                            document.querySelector(".texto_resultado").value = ""
                                                            let calculo = valor1Receber + " x " + valor2Receber
                                                            addNewRow('Multiplicação', calculo, total)
                                                        } else {
                                                            let teste = brl_comma_dot2(total)
                                                            document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                            document.getElementById("soma").value = ""
                                                            document.querySelector(".texto_resultado").value = ""
                                                            let calculo = valor1Receber + " x " + valor2Receber
                                                            addNewRow('Multiplicação', calculo, teste)
                                                        }

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
                                                            if (cor === "rgba(0, 247, 255, 0.95)" && validandovirgula1 == true) {
                                                                /* azul validandovirgula1 */
                                                                let valor1Receber = document.getElementById("soma").value
                                                                let valor2Receber = document.querySelector(".texto_resultado").value
                                                                let valor1Alterado = parseFloat(valor1Receber.replace(/,/g, "."))
                                                                let valor2Alterado = parseFloat(valor2Receber.replace(/,/g, "."))
                                                                let total = parseFloat(valor1Alterado / valor2Alterado)
                                                                let valor = total.toString()
                                                                let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                                                document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                                document.getElementById("soma").value = ""
                                                                document.querySelector(".texto_resultado").value = ""
                                                                let calculo = valor1Receber + " / " + valor2Receber
                                                                addNewRow('Divisão', calculo, substituindoPontoporVirgula)
                                                            } else {
                                                                if (cor === "rgba(0, 247, 255, 0.95)" && validandoponto1 == true) {
                                                                    /* azul validandoponto1 */
                                                                    let valor1Receber = document.getElementById("soma").value
                                                                    let valor2Receber = document.querySelector(".texto_resultado").value
                                                                    let valor1Alterado = Number(valor1Receber.replace(/,/g, "").replace(/\./g, ""))
                                                                    let valor2Alterado = Number(valor2Receber.replace(/,/g, "").replace(/\./g, ""))
                                                                    let total = valor1Alterado / valor2Alterado
                                                                    let valor = total.toString()
                                                                    let substituindoPontoporVirgula = valor.replace(/\./g, ',')
                                                                    /* let resultado = total.toLocaleString('pt-BR') */
                                                                    document.getElementById("soma").style.backgroundColor = "#ffffffff"
                                                                    document.getElementById("soma").value = ""
                                                                    document.querySelector(".texto_resultado").value = ""
                                                                    let calculo = valor1Receber + " / " + valor2Receber
                                                                    addNewRow('Divisão', calculo, substituindoPontoporVirgula)
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
                                                                        if (document.querySelector(".texto_resultado").value != "" && validandovirgula1 == true || validandoponto1 == true) {
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


