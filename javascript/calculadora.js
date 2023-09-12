$(document).ready(function () {
    /* configurando e carregando as mensagens dos botoes */
    $(document).tooltip({
        position: {
            my: "center bottom",
            at: "center top",
        }
    });
    /* configurando e carregando datable */
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
            if (data[0] == "Adição") {
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
        let dados = document.querySelector(".segundovalor").value
        let validandovirgula1 = dados.includes(',')
        if (dados === "") {
            let valores_calcular = e.target.value
            document.querySelector(".segundovalor").value = valores_calcular
        } else {
            if (validandovirgula1 == true) {
                document.querySelector(".segundovalor").value = document.querySelector(".segundovalor").value + "" + e.target.value
            } else {
                valores_calcular = document.querySelector(".segundovalor").value + "" + e.target.value
                let teste = formatadonumeros(valores_calcular)
                if (teste.length <= 21) {
                    document.querySelector(".segundovalor").value = teste
                } else {
                }
            }
        }
    })

    function formatadonumeros(num) {

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

    function formatadonumeros2(num) {

        var num_1 = num;//Pega a parte inteira do numero
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

        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
        document.querySelector(".primeirovalor").style.width = "192px"
        document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 109px"
        document.querySelector(".primeirovalor").value = ""
        document.querySelector(".segundovalor").value = ""
        const table = $('#tabelaCalculadora').DataTable();
        table.rows().remove().draw();

    })

    $('#botao_calculadora_limpar_campo').click(function (e) {

        document.querySelector(".segundovalor").value = ""
    })

    $('#botao_calculadora_virgula').click(function (e) {

        let virgula = document.querySelector(".segundovalor").value + "" + e.target.value
        if (virgula == ",") {
            document.querySelector(".segundovalor").value = 0 + "" + virgula
        } else {
            document.querySelector(".segundovalor").value = virgula
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
        document.querySelector(".primeirovalor").style.color = "#000000"
        let primeirovalor = document.querySelector(".primeirovalor").value
        let segundovalor = document.querySelector(".segundovalor").value
        let validandovirgulaprimeirovalor = primeirovalor.includes(',')
        let validandovirgulasegundovalor = segundovalor.includes(',')
        let validandopontoprimeirovalor = primeirovalor.includes('.')
        let validandopontosegundovalor = segundovalor.includes('.')
        let validandoPontenciaprimeirovalor = primeirovalor.includes('e+')
        let validandoPontenciasegundovalor = segundovalor.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontenciaprimeirovalor == true) {
            transformandoValorPontencia1 = Number(primeirovalor)
        } if (validandoPontenciasegundovalor == true) {
            transformandoValorPontencia2 = Number(segundovalor)
        } else {

        }

        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
            /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
            document.querySelector(".primeirovalor").style.width = "300px"
            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
            document.querySelector(".primeirovalor").style.color = "#ffffffff"
            document.querySelector(".segundovalor").value = ""
        } else {
            if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula */
                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                let total = transformandoValorPontencia1 + segundovaloralterado
                document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                document.querySelector(".primeirovalor").value = total
                document.querySelector(".segundovalor").value = ""
                let calculo = primeirovalor + " + " + segundovalor
                addNewRow('Adição', calculo, total)
            } else {
                if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                    /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                    let segundovaloralterado = Number(segundovalor)
                    let total = transformandoValorPontencia1 + segundovaloralterado
                    document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                    document.querySelector(".primeirovalor").value = total
                    document.querySelector(".segundovalor").value = ""
                    let calculo = primeirovalor + " + " + segundovalor
                    addNewRow('Adição', calculo, total)
                } else {
                    if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                        /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                        let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                        let total = transformandoValorPontencia1 + segundovaloralterado
                        document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                        document.querySelector(".primeirovalor").value = total
                        document.querySelector(".segundovalor").value = ""
                        let calculo = primeirovalor + " + " + segundovalor
                        addNewRow('Adição', calculo, total)
                    } else {
                        if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                            /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                            document.querySelector(".primeirovalor").style.width = "300px"
                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                            document.querySelector(".segundovalor").value = ""

                        } else {
                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                let total = primeirovaloralterado + segundovaloralterado
                                let valor = total.toLocaleString('pt-BR')
                                document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                document.querySelector(".primeirovalor").value = valor
                                document.querySelector(".segundovalor").value = ""
                                let calculo = primeirovalor + " + " + segundovalor
                                addNewRow('Adição', calculo, valor)

                            } else {
                                if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                    /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                    let total = primeirovaloralterado + segundovaloralterado
                                    let valor = total.toLocaleString('pt-BR')
                                    document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                    document.querySelector(".primeirovalor").value = valor
                                    document.querySelector(".segundovalor").value = ""
                                    let calculo = primeirovalor + " + " + segundovalor
                                    addNewRow('Adição', calculo, valor)

                                } else {
                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                        /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                        let total = primeirovaloralterado + segundovaloralterado
                                        let valor = total.toLocaleString('pt-BR')
                                        document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                        document.querySelector(".primeirovalor").value = valor
                                        document.querySelector(".segundovalor").value = ""
                                        let calculo = primeirovalor + " + " + segundovalor
                                        addNewRow('Adição', calculo, valor)
                                    } else {
                                        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                            /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                            let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                            let segundovaloralterado = parseInt(segundovalor)
                                            let total = primeirovaloralterado + segundovaloralterado
                                            let valor = total.toLocaleString('pt-BR')
                                            document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                            document.querySelector(".primeirovalor").value = valor
                                            document.querySelector(".segundovalor").value = ""
                                            let calculo = primeirovalor + " + " + segundovalor
                                            addNewRow('Adição', calculo, valor)

                                        } else {
                                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                let primeirovaloralterado = parseInt(primeirovalor)
                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                let total = primeirovaloralterado + segundovaloralterado
                                                let valor = total.toLocaleString('pt-BR')
                                                document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                document.querySelector(".primeirovalor").value = valor
                                                document.querySelector(".segundovalor").value = ""
                                                let calculo = primeirovalor + " + " + segundovalor
                                                addNewRow('Adição', calculo, valor)
                                            } else {
                                                if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                    /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                    let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let total = primeirovaloralterado + segundovaloralterado
                                                    let valor = total.toLocaleString('pt-BR')
                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                    document.querySelector(".primeirovalor").value = valor
                                                    document.querySelector(".segundovalor").value = ""
                                                    let calculo = primeirovalor + " + " + segundovalor
                                                    addNewRow('Adição', calculo, valor)
                                                } else {
                                                    if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                        /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                        let segundovaloralterado = parseInt(segundovalor)
                                                        let total = primeirovaloralterado + segundovaloralterado
                                                        let valor = total.toLocaleString('pt-BR')
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                        document.querySelector(".primeirovalor").value = valor
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " + " + segundovalor
                                                        addNewRow('Adição', calculo, valor)

                                                    } else {
                                                        if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                            /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                            let primeirovaloralterado = parseInt(primeirovalor)
                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                            let total = primeirovaloralterado + segundovaloralterado
                                                            let valor = total.toLocaleString('pt-BR')
                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                            document.querySelector(".primeirovalor").value = valor
                                                            document.querySelector(".segundovalor").value = ""
                                                            let calculo = primeirovalor + " + " + segundovalor
                                                            addNewRow('Adição', calculo, valor)
                                                        } else {
                                                            if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                let total = primeirovaloralterado + segundovaloralterado
                                                                let valor = total.toLocaleString('pt-BR')
                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                                document.querySelector(".primeirovalor").value = valor
                                                                document.querySelector(".segundovalor").value = ""
                                                                let calculo = primeirovalor + " + " + segundovalor
                                                                addNewRow('Adição', calculo, valor)
                                                            } else {
                                                                if (primeirovalor == "") {
                                                                    if (document.querySelector(".primeirovalor").style.backgroundColor == "" && segundovalor == "") {

                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(8, 241, 0, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                                        } else {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                                            document.querySelector(".primeirovalor").value = segundovalor
                                                                            document.querySelector(".segundovalor").value = ""
                                                                        }
                                                                    }
                                                                }
                                                                else {
                                                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                        /* ambos os valores são numeros inteiros*/
                                                                        let primeirovaloralterado = Number(primeirovalor)
                                                                        let segundovaloralterado = Number(segundovalor)
                                                                        let total = primeirovaloralterado + segundovaloralterado
                                                                        let valor = total.toLocaleString('pt-BR')
                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                                        document.querySelector(".primeirovalor").value = valor
                                                                        document.querySelector(".segundovalor").value = ""
                                                                        let calculo = primeirovalor + " + " + segundovalor
                                                                        addNewRow('Adição', calculo, valor)
                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(8, 241, 0, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                                        } else {
                                                                            if (document.querySelector(".primeirovalor").style.backgroundColor == "rgba(8, 241, 0, 0.95)" && primeirovalor != "") {

                                                                            } else {
                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#08f100f2"
                                                                                document.querySelector(".primeirovalor").value = segundovalor
                                                                                document.querySelector(".segundovalor").value = ""
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
        }




    })


    $('#botao_calculadora_subtracao').click(function (e) {
        debugger
        document.querySelector(".primeirovalor").style.color = "#000000"
        let primeirovalor = document.querySelector(".primeirovalor").value
        let segundovalor = document.querySelector(".segundovalor").value
        let validandovirgulaprimeirovalor = primeirovalor.includes(',')
        let validandovirgulasegundovalor = segundovalor.includes(',')
        let validandopontoprimeirovalor = primeirovalor.includes('.')
        let validandopontosegundovalor = segundovalor.includes('.')
        let validandoPontenciaprimeirovalor = primeirovalor.includes('e+')
        let validandoPontenciasegundovalor = segundovalor.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontenciaprimeirovalor == true) {
            transformandoValorPontencia1 = Number(primeirovalor)
        } if (validandoPontenciasegundovalor == true) {
            transformandoValorPontencia2 = Number(segundovalor)
        } else {

        }

        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
            /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
            document.querySelector(".primeirovalor").style.width = "300px"
            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
            document.querySelector(".primeirovalor").style.color = "#ffffffff"
            document.querySelector(".segundovalor").value = ""

        } else {
            if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula */
                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                let total = transformandoValorPontencia1 - segundovaloralterado
                document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                document.querySelector(".primeirovalor").value = total
                document.querySelector(".segundovalor").value = ""
                let calculo = primeirovalor + " - " + segundovalor
                addNewRow('Subtração', calculo, total)
            } else {
                if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                    /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                    let segundovaloralterado = Number(segundovalor)
                    let total = transformandoValorPontencia1 - segundovaloralterado
                    document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                    document.querySelector(".primeirovalor").value = total
                    document.querySelector(".segundovalor").value = ""
                    let calculo = primeirovalor + " - " + segundovalor
                    addNewRow('Subtração', calculo, total)
                } else {
                    if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                        /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                        let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                        let total = transformandoValorPontencia1 - segundovaloralterado
                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                        document.querySelector(".primeirovalor").value = total
                        document.querySelector(".segundovalor").value = ""
                        let calculo = primeirovalor + " - " + segundovalor
                        addNewRow('Subtração', calculo, total)
                    } else {
                        if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                            /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                            document.querySelector(".primeirovalor").style.width = "300px"
                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                            document.querySelector(".segundovalor").value = ""

                        } else {
                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                let total = primeirovaloralterado - segundovaloralterado
                                let valor = total.toLocaleString('pt-BR')
                                document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                document.querySelector(".primeirovalor").value = valor
                                document.querySelector(".segundovalor").value = ""
                                let calculo = primeirovalor + " - " + segundovalor
                                addNewRow('Subtração', calculo, valor)

                            } else {
                                if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                    /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                    let total = primeirovaloralterado - segundovaloralterado
                                    let valor = total.toLocaleString('pt-BR')
                                    document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                    document.querySelector(".primeirovalor").value = valor
                                    document.querySelector(".segundovalor").value = ""
                                    let calculo = primeirovalor + " - " + segundovalor
                                    addNewRow('Subtração', calculo, valor)

                                } else {
                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                        /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                        let total = primeirovaloralterado - segundovaloralterado
                                        let valor = total.toLocaleString('pt-BR')
                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                        document.querySelector(".primeirovalor").value = valor
                                        document.querySelector(".segundovalor").value = ""
                                        let calculo = primeirovalor + " - " + segundovalor
                                        addNewRow('Subtração', calculo, valor)
                                    } else {
                                        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                            /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                            let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                            let segundovaloralterado = parseInt(segundovalor)
                                            let total = primeirovaloralterado - segundovaloralterado
                                            let valor = total.toLocaleString('pt-BR')
                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                            document.querySelector(".primeirovalor").value = valor
                                            document.querySelector(".segundovalor").value = ""
                                            let calculo = primeirovalor + " - " + segundovalor
                                            addNewRow('Subtração', calculo, valor)

                                        } else {
                                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                let primeirovaloralterado = parseInt(primeirovalor)
                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                let total = primeirovaloralterado - segundovaloralterado
                                                let valor = total.toLocaleString('pt-BR')
                                                document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                document.querySelector(".primeirovalor").value = valor
                                                document.querySelector(".segundovalor").value = ""
                                                let calculo = primeirovalor + " - " + segundovalor
                                                addNewRow('Subtração', calculo, valor)
                                            } else {
                                                if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                    /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                    let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let total = primeirovaloralterado - segundovaloralterado
                                                    let valor = total.toLocaleString('pt-BR')
                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                    document.querySelector(".primeirovalor").value = valor
                                                    document.querySelector(".segundovalor").value = ""
                                                    let calculo = primeirovalor + " - " + segundovalor
                                                    addNewRow('Subtração', calculo, valor)
                                                } else {
                                                    if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                        /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                        let segundovaloralterado = parseInt(segundovalor)
                                                        let total = primeirovaloralterado - segundovaloralterado
                                                        let valor = total.toLocaleString('pt-BR')
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                        document.querySelector(".primeirovalor").value = valor
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " - " + segundovalor
                                                        addNewRow('Subtração', calculo, valor)

                                                    } else {
                                                        if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                            /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                            let primeirovaloralterado = parseInt(primeirovalor)
                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                            let total = primeirovaloralterado - segundovaloralterado
                                                            let valor = total.toLocaleString('pt-BR')
                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                            document.querySelector(".primeirovalor").value = valor
                                                            document.querySelector(".segundovalor").value = ""
                                                            let calculo = primeirovalor + " - " + segundovalor
                                                            addNewRow('Subtração', calculo, valor)
                                                        } else {
                                                            if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                let total = primeirovaloralterado - segundovaloralterado
                                                                let valor = total.toLocaleString('pt-BR')
                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                document.querySelector(".primeirovalor").value = valor
                                                                document.querySelector(".segundovalor").value = ""
                                                                let calculo = primeirovalor + " - " + segundovalor
                                                                addNewRow('Subtração', calculo, valor)
                                                            } else {
                                                                if (primeirovalor == "") {
                                                                    if (document.querySelector(".primeirovalor").style.backgroundColor == "" && segundovalor == "") {

                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(241, 0, 0, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                        } else {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                            document.querySelector(".primeirovalor").value = segundovalor
                                                                            document.querySelector(".segundovalor").value = ""
                                                                        }
                                                                    }
                                                                }
                                                                else {
                                                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                        /* ambos os valores são numeros inteiros*/
                                                                        let primeirovaloralterado = Number(primeirovalor)
                                                                        let segundovaloralterado = Number(segundovalor)
                                                                        let total = primeirovaloralterado - segundovaloralterado
                                                                        let valor = total.toLocaleString('pt-BR')
                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                        document.querySelector(".primeirovalor").value = valor
                                                                        document.querySelector(".segundovalor").value = ""
                                                                        let calculo = primeirovalor + " - " + segundovalor
                                                                        addNewRow('Subtração', calculo, valor)
                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(241, 0, 0, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                        } else {
                                                                            if (document.querySelector(".primeirovalor").style.backgroundColor == "rgba(241, 0, 0, 0.95)" && primeirovalor != "") {

                                                                            } else {
                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                document.querySelector(".primeirovalor").value = segundovalor
                                                                                document.querySelector(".segundovalor").value = ""
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
        }


    })


    $('#botao_calculadora_multiplicacao').click(function (e) {

        debugger
        document.querySelector(".primeirovalor").style.color = "#000000"
        let primeirovalor = document.querySelector(".primeirovalor").value
        let segundovalor = document.querySelector(".segundovalor").value
        let validandovirgulaprimeirovalor = primeirovalor.includes(',')
        let validandovirgulasegundovalor = segundovalor.includes(',')
        let validandopontoprimeirovalor = primeirovalor.includes('.')
        let validandopontosegundovalor = segundovalor.includes('.')
        let validandoPontenciaprimeirovalor = primeirovalor.includes('e+')
        let validandoPontenciasegundovalor = segundovalor.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontenciaprimeirovalor == true) {
            transformandoValorPontencia1 = Number(primeirovalor)
        } if (validandoPontenciasegundovalor == true) {
            transformandoValorPontencia2 = Number(segundovalor)
        } else {

        }

        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
            /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
            document.querySelector(".primeirovalor").style.width = "300px"
            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
            document.querySelector(".primeirovalor").style.color = "#ffffffff"
            document.querySelector(".segundovalor").value = ""

        } else {
            if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula  */
                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                let total = transformandoValorPontencia1 * segundovaloralterado
                document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                document.querySelector(".primeirovalor").value = total
                document.querySelector(".segundovalor").value = ""
                let calculo = primeirovalor + " x " + segundovalor
                addNewRow('Multiplicação', calculo, total)
            } else {
                if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                    /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                    let segundovaloralterado = Number(segundovalor)
                    let total = transformandoValorPontencia1 * segundovaloralterado
                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                    document.querySelector(".primeirovalor").value = total
                    document.querySelector(".segundovalor").value = ""
                    let calculo = primeirovalor + " x " + segundovalor
                    addNewRow('Multiplicação', calculo, total)
                } else {
                    if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                        /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                        let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                        let total = transformandoValorPontencia1 * segundovaloralterado
                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                        document.querySelector(".primeirovalor").value = total
                        document.querySelector(".segundovalor").value = ""
                        let calculo = primeirovalor + " x " + segundovalor
                        addNewRow('Multiplicação', calculo, total)
                    } else {
                        if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                            /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                            document.querySelector(".primeirovalor").style.width = "300px"
                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                            document.querySelector(".segundovalor").value = ""

                        } else {
                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                let total = primeirovaloralterado * segundovaloralterado
                                let valor = total.toLocaleString('pt-BR')
                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                document.querySelector(".primeirovalor").value = valor
                                document.querySelector(".segundovalor").value = ""
                                let calculo = primeirovalor + " x " + segundovalor
                                addNewRow('Multiplicação', calculo, valor)

                            } else {
                                if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                    /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                    let total = primeirovaloralterado * segundovaloralterado
                                    let valor = total.toLocaleString('pt-BR')
                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                    document.querySelector(".primeirovalor").value = valor
                                    document.querySelector(".segundovalor").value = ""
                                    let calculo = primeirovalor + " x " + segundovalor
                                    addNewRow('Multiplicação', calculo, valor)

                                } else {
                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                        /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                        let total = primeirovaloralterado * segundovaloralterado
                                        let valor = total.toLocaleString('pt-BR')
                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                        document.querySelector(".primeirovalor").value = valor
                                        document.querySelector(".segundovalor").value = ""
                                        let calculo = primeirovalor + " x " + segundovalor
                                        addNewRow('Multiplicação', calculo, valor)
                                    } else {
                                        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                            /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                            let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                            let segundovaloralterado = parseInt(segundovalor)
                                            let total = primeirovaloralterado * segundovaloralterado
                                            let valor = total.toLocaleString('pt-BR')
                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                            document.querySelector(".primeirovalor").value = valor
                                            document.querySelector(".segundovalor").value = ""
                                            let calculo = primeirovalor + " x " + segundovalor
                                            addNewRow('Multiplicação', calculo, valor)

                                        } else {
                                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                let primeirovaloralterado = parseInt(primeirovalor)
                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                let total = primeirovaloralterado * segundovaloralterado
                                                let valor = total.toLocaleString('pt-BR')
                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                document.querySelector(".primeirovalor").value = valor
                                                document.querySelector(".segundovalor").value = ""
                                                let calculo = primeirovalor + " x " + segundovalor
                                                addNewRow('Multiplicação', calculo, valor)
                                            } else {
                                                if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                    /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                    let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let total = parseFloat(primeirovaloralterado * segundovaloralterado)
                                                    let valor = total.toString()
                                                    if (valor.includes("e+")) {
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                        document.querySelector(".primeirovalor").value = total
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " x " + segundovalor
                                                        addNewRow('Multiplicação', calculo, total)
                                                    } else {
                                                        let valorFormatodo = formatadonumeros2(valor)
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                        document.querySelector(".primeirovalor").value = valorFormatodo
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " x " + segundovalor
                                                        addNewRow('Multiplicação', calculo, valorFormatodo)
                                                    }
                                                } else {
                                                    if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                        /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                        let segundovaloralterado = parseInt(segundovalor)
                                                        let total = primeirovaloralterado * segundovaloralterado
                                                        let valor = total.toLocaleString('pt-BR')
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                        document.querySelector(".primeirovalor").value = valor
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " x " + segundovalor
                                                        addNewRow('Multiplicação', calculo, valor)

                                                    } else {
                                                        if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                            /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                            let primeirovaloralterado = parseInt(primeirovalor)
                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                            let total = primeirovaloralterado * segundovaloralterado
                                                            let valor = total.toLocaleString('pt-BR')
                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                            document.querySelector(".primeirovalor").value = valor
                                                            document.querySelector(".segundovalor").value = ""
                                                            let calculo = primeirovalor + " x " + segundovalor
                                                            addNewRow('Multiplicação', calculo, valor)
                                                        } else {
                                                            if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                let total = primeirovaloralterado * segundovaloralterado
                                                                let valor = total.toLocaleString('pt-BR')
                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                                document.querySelector(".primeirovalor").value = valor
                                                                document.querySelector(".segundovalor").value = ""
                                                                let calculo = primeirovalor + " x " + segundovalor
                                                                addNewRow('Multiplicação', calculo, valor)
                                                            } else {
                                                                if (primeirovalor == "") {
                                                                    if (document.querySelector(".primeirovalor").style.backgroundColor == "" && segundovalor == "") {

                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(255, 238, 0, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                                        } else {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                                            document.querySelector(".primeirovalor").value = segundovalor
                                                                            document.querySelector(".segundovalor").value = ""
                                                                        }
                                                                    }
                                                                }
                                                                else {
                                                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                        /* ambos os valores são numeros inteiros*/
                                                                        let primeirovaloralterado = Number(primeirovalor)
                                                                        let segundovaloralterado = Number(segundovalor)
                                                                        let total = primeirovaloralterado * segundovaloralterado
                                                                        let valor = total.toLocaleString('pt-BR')
                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                                        document.querySelector(".primeirovalor").value = valor
                                                                        document.querySelector(".segundovalor").value = ""
                                                                        let calculo = primeirovalor + " x " + segundovalor
                                                                        addNewRow('Multiplicação', calculo, valor)
                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(255, 238, 0, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                                        } else {
                                                                            if (document.querySelector(".primeirovalor").style.backgroundColor == "rgba(255, 238, 0, 0.95)" && primeirovalor != "") {

                                                                            } else {
                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffee00f2"
                                                                                document.querySelector(".primeirovalor").value = segundovalor
                                                                                document.querySelector(".segundovalor").value = ""
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
        }

    })

    $('#botao_calculadora_divisao').click(function (e) {

        debugger
        document.querySelector(".primeirovalor").style.color = "#000000"
        let primeirovalor = document.querySelector(".primeirovalor").value
        let segundovalor = document.querySelector(".segundovalor").value
        let validandovirgulaprimeirovalor = primeirovalor.includes(',')
        let validandovirgulasegundovalor = segundovalor.includes(',')
        let validandopontoprimeirovalor = primeirovalor.includes('.')
        let validandopontosegundovalor = segundovalor.includes('.')
        let validandoPontenciaprimeirovalor = primeirovalor.includes('e+')
        let validandoPontenciasegundovalor = segundovalor.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontenciaprimeirovalor == true) {
            transformandoValorPontencia1 = Number(primeirovalor)
        } if (validandoPontenciasegundovalor == true) {
            transformandoValorPontencia2 = Number(segundovalor)
        } else {

        }

        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
            /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
            document.querySelector(".primeirovalor").style.width = "300px"
            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
            document.querySelector(".primeirovalor").style.color = "#ffffffff"
            document.querySelector(".segundovalor").value = ""

        } else {
            if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula  */
                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                let total = transformandoValorPontencia1 / segundovaloralterado
                document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                document.querySelector(".primeirovalor").value = total
                document.querySelector(".segundovalor").value = ""
                let calculo = primeirovalor + " / " + segundovalor
                addNewRow('Divisão', calculo, total)
            } else {
                if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                    /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                    let segundovaloralterado = Number(segundovalor)
                    let total = transformandoValorPontencia1 / segundovaloralterado
                    document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                    document.querySelector(".primeirovalor").value = total
                    document.querySelector(".segundovalor").value = ""
                    let calculo = primeirovalor + " / " + segundovalor
                    addNewRow('Divisão', calculo, total)
                } else {
                    if (segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                        /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                        let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                        let total = transformandoValorPontencia1 / segundovaloralterado
                        let valor = total.toLocaleString("pt-BR")
                        document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                        document.querySelector(".primeirovalor").value = valor
                        document.querySelector(".segundovalor").value = ""
                        let calculo = primeirovalor + " / " + segundovalor
                        addNewRow('Divisão', calculo, valor)
                    } else {
                        if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                            /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                            document.querySelector(".primeirovalor").style.width = "300px"
                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                            document.querySelector(".segundovalor").value = ""

                        } else {
                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                let total = primeirovaloralterado / segundovaloralterado
                                let valor = total.toLocaleString('pt-BR')
                                document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                document.querySelector(".primeirovalor").value = valor
                                document.querySelector(".segundovalor").value = ""
                                let calculo = primeirovalor + " / " + segundovalor
                                addNewRow('Divisão', calculo, valor)

                            } else {
                                if (segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                    /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                    let total = primeirovaloralterado / segundovaloralterado
                                    let valor = total.toLocaleString('pt-BR')
                                    document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                    document.querySelector(".primeirovalor").value = valor
                                    document.querySelector(".segundovalor").value = ""
                                    let calculo = primeirovalor + " / " + segundovalor
                                    addNewRow('Divisão', calculo, valor)

                                } else {
                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                        /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                        let total = primeirovaloralterado / segundovaloralterado
                                        let valor = total.toLocaleString('pt-BR')
                                        document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                        document.querySelector(".primeirovalor").value = valor
                                        document.querySelector(".segundovalor").value = ""
                                        let calculo = primeirovalor + " / " + segundovalor
                                        addNewRow('Divisão', calculo, valor)
                                    } else {
                                        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                            /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                            let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                            let segundovaloralterado = parseInt(segundovalor)
                                            let total = primeirovaloralterado / segundovaloralterado
                                            let valor = total.toLocaleString('pt-BR')
                                            document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                            document.querySelector(".primeirovalor").value = valor
                                            document.querySelector(".segundovalor").value = ""
                                            let calculo = primeirovalor + " / " + segundovalor
                                            addNewRow('Divisão', calculo, valor)

                                        } else {
                                            if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                let primeirovaloralterado = parseInt(primeirovalor)
                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                let total = primeirovaloralterado / segundovaloralterado
                                                let valor = total.toLocaleString('pt-BR')
                                                document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                document.querySelector(".primeirovalor").value = valor
                                                document.querySelector(".segundovalor").value = ""
                                                let calculo = primeirovalor + " / " + segundovalor
                                                addNewRow('Divisão', calculo, valor)
                                            } else {
                                                if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                    /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                    let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let total = parseFloat(primeirovaloralterado / segundovaloralterado)
                                                    let valor = total.toString()
                                                    if (valor.includes("e+")) {
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                        document.querySelector(".primeirovalor").value = total
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " / " + segundovalor
                                                        addNewRow('Divisão', calculo, total)
                                                    } else {
                                                        let valorFormatodo = formatadonumeros2(valor)
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                        document.querySelector(".primeirovalor").value = valorFormatodo
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " / " + segundovalor
                                                        addNewRow('Divisão', calculo, valorFormatodo)
                                                    }
                                                } else {
                                                    if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                        /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                        let segundovaloralterado = parseInt(segundovalor)
                                                        let total = primeirovaloralterado / segundovaloralterado
                                                        let valor = total.toString()
                                                        let valorconvertido = valor.replace(".", ",")
                                                        if (valor == "Infinity" || valor == "NaN") {
                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                            document.querySelector(".primeirovalor").style.width = "300px"
                                                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                            document.querySelector(".segundovalor").value = ""
                                                        } else {
                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                            document.querySelector(".primeirovalor").value = valorconvertido
                                                            document.querySelector(".segundovalor").value = ""
                                                            let calculo = primeirovalor + " / " + segundovalor
                                                            addNewRow('Divisão', calculo, valorconvertido)
                                                        }
                                                    } else {
                                                        if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                            /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                            let primeirovaloralterado = parseInt(primeirovalor)
                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                            let total = primeirovaloralterado / segundovaloralterado
                                                            let valor = total.toString()
                                                            let valorconvertido = valor.replace(".", ",")
                                                            if (valor == "Infinity" || valor == "NaN") {
                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                document.querySelector(".primeirovalor").style.width = "300px"
                                                                document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                document.querySelector(".segundovalor").value = ""
                                                            } else {
                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                                document.querySelector(".primeirovalor").value = valorconvertido
                                                                document.querySelector(".segundovalor").value = ""
                                                                let calculo = primeirovalor + " / " + segundovalor
                                                                addNewRow('Divisão', calculo, valorconvertido)
                                                            }

                                                        } else {
                                                            if (segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                let total = primeirovaloralterado / segundovaloralterado
                                                                let valor = total.toString()
                                                                let valorconvertido = valor.replace(".", ",")
                                                                if (valor == "Infinity" || valor == "NaN") {
                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                    document.querySelector(".primeirovalor").style.width = "300px"
                                                                    document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                    document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                    document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                    document.querySelector(".segundovalor").value = ""
                                                                } else {
                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                                    document.querySelector(".primeirovalor").value = valorconvertido
                                                                    document.querySelector(".segundovalor").value = ""
                                                                    let calculo = primeirovalor + " / " + segundovalor
                                                                    addNewRow('Divisão', calculo, valorconvertido)
                                                                }

                                                            } else {
                                                                if (primeirovalor == "") {
                                                                    if (document.querySelector(".primeirovalor").style.backgroundColor == "" && segundovalor == "") {

                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(255, 238, 0, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                                        } else {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                                            document.querySelector(".primeirovalor").value = segundovalor
                                                                            document.querySelector(".segundovalor").value = ""
                                                                        }
                                                                    }
                                                                }
                                                                else {
                                                                    if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                        /* ambos os valores são numeros inteiros*/
                                                                        let primeirovaloralterado = Number(primeirovalor)
                                                                        let segundovaloralterado = Number(segundovalor)
                                                                        let total = primeirovaloralterado / segundovaloralterado
                                                                        let valor = total.toString()
                                                                        let valorconvertido = valor.replace(".", ",")
                                                                        if (valor == "Infinity" || valor == "NaN") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                            document.querySelector(".primeirovalor").style.width = "300px"
                                                                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                            document.querySelector(".segundovalor").value = ""
                                                                        } else {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                                            document.querySelector(".primeirovalor").value = valorconvertido
                                                                            document.querySelector(".segundovalor").value = ""
                                                                            let calculo = primeirovalor + " / " + segundovalor
                                                                            addNewRow('Divisão', calculo, valorconvertido)
                                                                        }

                                                                    } else {
                                                                        if (document.querySelector(".primeirovalor").style.backgroundColor != "rgba(0, 247, 255, 0.95)" && primeirovalor != "") {
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                                        } else {
                                                                            if (document.querySelector(".primeirovalor").style.backgroundColor == "rgba(0, 247, 255, 0.95)" && primeirovalor != "") {

                                                                            } else {
                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#00f7fff2"
                                                                                document.querySelector(".primeirovalor").value = segundovalor
                                                                                document.querySelector(".segundovalor").value = ""
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
        }

    })

    $('#botao_calculadora_resultado').click(function (e) {
        debugger
        document.querySelector(".primeirovalor").style.color = "#000000"
        let cor = document.querySelector(".primeirovalor").style.backgroundColor
        let primeirovalor = document.querySelector(".primeirovalor").value
        let segundovalor = document.querySelector(".segundovalor").value
        let validandovirgulaprimeirovalor = primeirovalor.includes(',')
        let validandovirgulasegundovalor = segundovalor.includes(',')
        let validandopontoprimeirovalor = primeirovalor.includes('.')
        let validandopontosegundovalor = segundovalor.includes('.')
        let validandoPontenciaprimeirovalor = primeirovalor.includes('e+')
        let validandoPontenciasegundovalor = segundovalor.includes('e+')

        let transformandoValorPontencia1 = "";
        let transformandoValorPontencia2 = "";

        if (validandoPontenciaprimeirovalor == true) {
            transformandoValorPontencia1 = Number(primeirovalor)
        } if (validandoPontenciasegundovalor == true) {
            transformandoValorPontencia2 = Number(segundovalor)
        } else {

        }

        if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
            /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
            document.querySelector(".primeirovalor").style.width = "300px"
            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
            document.querySelector(".primeirovalor").style.color = "#ffffffff"
            document.querySelector(".segundovalor").value = ""
        } else {
            if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula */
                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                let total = transformandoValorPontencia1 + segundovaloralterado
                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                document.querySelector(".primeirovalor").value = ""
                document.querySelector(".segundovalor").value = ""
                let calculo = primeirovalor + " + " + segundovalor
                addNewRow('Adição', calculo, total)
            } else {
                if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                    /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                    let segundovaloralterado = Number(segundovalor)
                    let total = transformandoValorPontencia1 + segundovaloralterado
                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                    document.querySelector(".primeirovalor").value = ""
                    document.querySelector(".segundovalor").value = ""
                    let calculo = primeirovalor + " + " + segundovalor
                    addNewRow('Adição', calculo, total)
                } else {
                    if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                        /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                        let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                        let total = transformandoValorPontencia1 + segundovaloralterado
                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                        document.querySelector(".primeirovalor").value = ""
                        document.querySelector(".segundovalor").value = ""
                        let calculo = primeirovalor + " + " + segundovalor
                        addNewRow('Adição', calculo, total)
                    } else {
                        if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                            /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                            document.querySelector(".primeirovalor").style.width = "300px"
                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                            document.querySelector(".segundovalor").value = ""

                        } else {
                            if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                let total = primeirovaloralterado + segundovaloralterado
                                let valor = total.toLocaleString('pt-BR')
                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                document.querySelector(".primeirovalor").value = ""
                                document.querySelector(".segundovalor").value = ""
                                let calculo = primeirovalor + " + " + segundovalor
                                addNewRow('Adição', calculo, valor)

                            } else {
                                if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                    /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                    let total = primeirovaloralterado + segundovaloralterado
                                    let valor = total.toLocaleString('pt-BR')
                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                    document.querySelector(".primeirovalor").value = ""
                                    document.querySelector(".segundovalor").value = ""
                                    let calculo = primeirovalor + " + " + segundovalor
                                    addNewRow('Adição', calculo, valor)

                                } else {
                                    if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                        /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                        let total = primeirovaloralterado + segundovaloralterado
                                        let valor = total.toLocaleString('pt-BR')
                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                        document.querySelector(".primeirovalor").value = ""
                                        document.querySelector(".segundovalor").value = ""
                                        let calculo = primeirovalor + " + " + segundovalor
                                        addNewRow('Adição', calculo, valor)
                                    } else {
                                        if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                            /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                            let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                            let segundovaloralterado = parseInt(segundovalor)
                                            let total = primeirovaloralterado + segundovaloralterado
                                            let valor = total.toLocaleString('pt-BR')
                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                            document.querySelector(".primeirovalor").value = ""
                                            document.querySelector(".segundovalor").value = ""
                                            let calculo = primeirovalor + " + " + segundovalor
                                            addNewRow('Adição', calculo, valor)

                                        } else {
                                            if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                let primeirovaloralterado = parseInt(primeirovalor)
                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                let total = primeirovaloralterado + segundovaloralterado
                                                let valor = total.toLocaleString('pt-BR')
                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                document.querySelector(".primeirovalor").value = ""
                                                document.querySelector(".segundovalor").value = ""
                                                let calculo = primeirovalor + " + " + segundovalor
                                                addNewRow('Adição', calculo, valor)
                                            } else {
                                                if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                    /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                    let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                    let total = primeirovaloralterado + segundovaloralterado
                                                    let valor = total.toLocaleString('pt-BR')
                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                    document.querySelector(".primeirovalor").value = ""
                                                    document.querySelector(".segundovalor").value = ""
                                                    let calculo = primeirovalor + " + " + segundovalor
                                                    addNewRow('Adição', calculo, valor)
                                                } else {
                                                    if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                        /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                        let segundovaloralterado = parseInt(segundovalor)
                                                        let total = primeirovaloralterado + segundovaloralterado
                                                        let valor = total.toLocaleString('pt-BR')
                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                        document.querySelector(".primeirovalor").value = ""
                                                        document.querySelector(".segundovalor").value = ""
                                                        let calculo = primeirovalor + " + " + segundovalor
                                                        addNewRow('Adição', calculo, valor)

                                                    } else {
                                                        if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                            /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                            let primeirovaloralterado = parseInt(primeirovalor)
                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                            let total = primeirovaloralterado + segundovaloralterado
                                                            let valor = total.toLocaleString('pt-BR')
                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                            document.querySelector(".primeirovalor").value = ""
                                                            document.querySelector(".segundovalor").value = ""
                                                            let calculo = primeirovalor + " + " + segundovalor
                                                            addNewRow('Adição', calculo, valor)
                                                        } else {
                                                            if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                let total = primeirovaloralterado + segundovaloralterado
                                                                let valor = total.toLocaleString('pt-BR')
                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                document.querySelector(".primeirovalor").value = ""
                                                                document.querySelector(".segundovalor").value = ""
                                                                let calculo = primeirovalor + " + " + segundovalor
                                                                addNewRow('Adição', calculo, valor)
                                                            } else {
                                                                if (cor == "rgba(8, 241, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                    /* ambos os valores são numeros inteiros*/
                                                                    let primeirovaloralterado = Number(primeirovalor)
                                                                    let segundovaloralterado = Number(segundovalor)
                                                                    let total = primeirovaloralterado + segundovaloralterado
                                                                    let valor = total.toLocaleString('pt-BR')
                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                    document.querySelector(".primeirovalor").value = ""
                                                                    document.querySelector(".segundovalor").value = ""
                                                                    let calculo = primeirovalor + " + " + segundovalor
                                                                    addNewRow('Adição', calculo, valor)
                                                                } else {
                                                                    if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
                                                                        /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                        document.querySelector(".primeirovalor").style.width = "300px"
                                                                        document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                        document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                        document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                        document.querySelector(".segundovalor").value = ""
                                                                    } else {
                                                                        if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                                                                            /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula */
                                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                            let total = transformandoValorPontencia1 - segundovaloralterado
                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                            document.querySelector(".primeirovalor").value = ""
                                                                            document.querySelector(".segundovalor").value = ""
                                                                            let calculo = primeirovalor + " - " + segundovalor
                                                                            addNewRow('Subtração', calculo, total)
                                                                        } else {
                                                                            if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                                                                                /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                                                                                let segundovaloralterado = Number(segundovalor)
                                                                                let total = transformandoValorPontencia1 - segundovaloralterado
                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                document.querySelector(".segundovalor").value = ""
                                                                                let calculo = primeirovalor + " - " + segundovalor
                                                                                addNewRow('Subtração', calculo, total)
                                                                            } else {
                                                                                if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                                                                                    /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                                                                                    let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                    let total = transformandoValorPontencia1 - segundovaloralterado
                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                    let calculo = primeirovalor + " - " + segundovalor
                                                                                    addNewRow('Subtração', calculo, total)
                                                                                } else {
                                                                                    if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                                                                                        /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                        document.querySelector(".primeirovalor").style.width = "300px"
                                                                                        document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                        document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                        document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                        document.querySelector(".segundovalor").value = ""

                                                                                    } else {
                                                                                        if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                                                                            /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                                                                            let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                            let total = primeirovaloralterado - segundovaloralterado
                                                                                            let valor = total.toLocaleString('pt-BR')
                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                            let calculo = primeirovalor + " - " + segundovalor
                                                                                            addNewRow('Subtração', calculo, valor)

                                                                                        } else {
                                                                                            if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                                                                                /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                let total = primeirovaloralterado - segundovaloralterado
                                                                                                let valor = total.toLocaleString('pt-BR')
                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                let calculo = primeirovalor + " - " + segundovalor
                                                                                                addNewRow('Subtração', calculo, valor)

                                                                                            } else {
                                                                                                if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                                                                                    /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                                                                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                    let total = primeirovaloralterado - segundovaloralterado
                                                                                                    let valor = total.toLocaleString('pt-BR')
                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                    let calculo = primeirovalor + " - " + segundovalor
                                                                                                    addNewRow('Subtração', calculo, valor)
                                                                                                } else {
                                                                                                    if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                        /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                                                                                        let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                        let segundovaloralterado = parseInt(segundovalor)
                                                                                                        let total = primeirovaloralterado - segundovaloralterado
                                                                                                        let valor = total.toLocaleString('pt-BR')
                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                        let calculo = primeirovalor + " - " + segundovalor
                                                                                                        addNewRow('Subtração', calculo, valor)

                                                                                                    } else {
                                                                                                        if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                            /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                                                                            let primeirovaloralterado = parseInt(primeirovalor)
                                                                                                            let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                            let total = primeirovaloralterado - segundovaloralterado
                                                                                                            let valor = total.toLocaleString('pt-BR')
                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                            let calculo = primeirovalor + " - " + segundovalor
                                                                                                            addNewRow('Subtração', calculo, valor)
                                                                                                        } else {
                                                                                                            if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                                                                                /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                                                                                let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                let total = primeirovaloralterado - segundovaloralterado
                                                                                                                let valor = total.toLocaleString('pt-BR')
                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                let calculo = primeirovalor + " - " + segundovalor
                                                                                                                addNewRow('Subtração', calculo, valor)
                                                                                                            } else {
                                                                                                                if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                    /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                                                                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                    let segundovaloralterado = parseInt(segundovalor)
                                                                                                                    let total = primeirovaloralterado - segundovaloralterado
                                                                                                                    let valor = total.toLocaleString('pt-BR')
                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                    let calculo = primeirovalor + " - " + segundovalor
                                                                                                                    addNewRow('Subtração', calculo, valor)

                                                                                                                } else {
                                                                                                                    if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                        /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                                                                                        let primeirovaloralterado = parseInt(primeirovalor)
                                                                                                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                        let total = primeirovaloralterado - segundovaloralterado
                                                                                                                        let valor = total.toLocaleString('pt-BR')
                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                        let calculo = primeirovalor + " - " + segundovalor
                                                                                                                        addNewRow('Subtração', calculo, valor)
                                                                                                                    } else {
                                                                                                                        if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                            /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                                                                            let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                            let total = primeirovaloralterado - segundovaloralterado
                                                                                                                            let valor = total.toLocaleString('pt-BR')
                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                            let calculo = primeirovalor + " - " + segundovalor
                                                                                                                            addNewRow('Subtração', calculo, valor)
                                                                                                                        } else {
                                                                                                                            if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                /* ambos os valores são numeros inteiros*/
                                                                                                                                let primeirovaloralterado = Number(primeirovalor)
                                                                                                                                let segundovaloralterado = Number(segundovalor)
                                                                                                                                let total = primeirovaloralterado - segundovaloralterado
                                                                                                                                let valor = total.toLocaleString('pt-BR')
                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                let calculo = primeirovalor + " - " + segundovalor
                                                                                                                                addNewRow('Subtração', calculo, valor)
                                                                                                                            } else {
                                                                                                                                if (cor == "rgba(241, 0, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                    /* ambos os valores são numeros inteiros*/
                                                                                                                                    let primeirovaloralterado = Number(primeirovalor)
                                                                                                                                    let segundovaloralterado = Number(segundovalor)
                                                                                                                                    let total = primeirovaloralterado - segundovaloralterado
                                                                                                                                    let valor = total.toLocaleString('pt-BR')
                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                    let calculo = primeirovalor + " - " + segundovalor
                                                                                                                                    addNewRow('Subtração', calculo, valor)
                                                                                                                                } else {
                                                                                                                                    if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
                                                                                                                                        /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                        document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                        document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                        document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                        document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                    } else {
                                                                                                                                        if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                                                                                                                                            /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula  */
                                                                                                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                            let total = transformandoValorPontencia1 * segundovaloralterado
                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                            let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                            addNewRow('Multiplicação', calculo, total)
                                                                                                                                        } else {
                                                                                                                                            if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                                                                                                                                                let segundovaloralterado = Number(segundovalor)
                                                                                                                                                let total = transformandoValorPontencia1 * segundovaloralterado
                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                addNewRow('Multiplicação', calculo, total)
                                                                                                                                            } else {
                                                                                                                                                if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                                                                                                                                                    /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                                                                                                                                                    let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                    let total = transformandoValorPontencia1 * segundovaloralterado
                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                    let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                    addNewRow('Multiplicação', calculo, total)
                                                                                                                                                } else {
                                                                                                                                                    if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                                                                                                                                                        /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                                        document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                                        document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                                        document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                                        document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                                        document.querySelector(".segundovalor").value = ""

                                                                                                                                                    } else {
                                                                                                                                                        if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                                                                                                                                            /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                                                                                                                                            let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                                            let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                            let valor = total.toLocaleString('pt-BR')
                                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                                            let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                            addNewRow('Multiplicação', calculo, valor)

                                                                                                                                                        } else {
                                                                                                                                                            if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                                                                                                                                                /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                                                                                                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                addNewRow('Multiplicação', calculo, valor)

                                                                                                                                                            } else {
                                                                                                                                                                if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                                                                                                                                                    /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                                                                                                                                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                    let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                    let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                                    let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                    addNewRow('Multiplicação', calculo, valor)
                                                                                                                                                                } else {
                                                                                                                                                                    if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                                        /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                                                                                                                                                        let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                        let segundovaloralterado = parseInt(segundovalor)
                                                                                                                                                                        let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                        let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                                                        let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                        addNewRow('Multiplicação', calculo, valor)

                                                                                                                                                                    } else {
                                                                                                                                                                        if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                                            /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                                                                                                                                            let primeirovaloralterado = parseInt(primeirovalor)
                                                                                                                                                                            let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                            let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                            let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                                                            let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                            addNewRow('Multiplicação', calculo, valor)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                                                                                                                                                /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                                                                                                                                                let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                let total = parseFloat(primeirovaloralterado * segundovaloralterado)
                                                                                                                                                                                let valor = total.toString()
                                                                                                                                                                                if (valor.includes("e+")) {
                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                    let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                                    addNewRow('Multiplicação', calculo, total)
                                                                                                                                                                                } else {
                                                                                                                                                                                    let valorFormatodo = formatadonumeros2(valor)
                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                    let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                                    addNewRow('Multiplicação', calculo, valorFormatodo)
                                                                                                                                                                                }
                                                                                                                                                                            } else {
                                                                                                                                                                                if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                                                                                    /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                                                                                                                                                    let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                                    let segundovaloralterado = parseInt(segundovalor)
                                                                                                                                                                                    let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                                    let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                    let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                                    addNewRow('Multiplicação', calculo, valor)

                                                                                                                                                                                } else {
                                                                                                                                                                                    if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                                                                                        /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                                                                                                                                                        let primeirovaloralterado = parseInt(primeirovalor)
                                                                                                                                                                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                                                                        let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                                        let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                        let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                                        addNewRow('Multiplicação', calculo, valor)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                                                                                            /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                                                                                                                                            let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                                                                            let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                                            let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                            let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                                            addNewRow('Multiplicação', calculo, valor)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (cor == "rgba(255, 238, 0, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                                                                /* ambos os valores são numeros inteiros*/
                                                                                                                                                                                                let primeirovaloralterado = Number(primeirovalor)
                                                                                                                                                                                                let segundovaloralterado = Number(segundovalor)
                                                                                                                                                                                                let total = primeirovaloralterado * segundovaloralterado
                                                                                                                                                                                                let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                let calculo = primeirovalor + " x " + segundovalor
                                                                                                                                                                                                addNewRow('Multiplicação', calculo, valor)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulaprimeirovalor == true) {
                                                                                                                                                                                                    /* ambos os campos tem valor , o primeiro valor tem ponto e virgula*/
                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                                                                                    document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""

                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandovirgulasegundovalor == true) {
                                                                                                                                                                                                        /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero com virgula  */
                                                                                                                                                                                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                                                                                        let total = transformandoValorPontencia1 / segundovaloralterado
                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                        let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                        addNewRow('Divisão', calculo, total)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                                                                            /* valor do primeiro valor está elevado a pontencia e o segundo valor é numero inteiro  */
                                                                                                                                                                                                            let segundovaloralterado = Number(segundovalor)
                                                                                                                                                                                                            let total = transformandoValorPontencia1 / segundovaloralterado
                                                                                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                            let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                            addNewRow('Divisão', calculo, total)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && transformandoValorPontencia1 != "" && validandopontosegundovalor == true) {
                                                                                                                                                                                                                /* valor do primeiro valor está elevado a pontencia e o segundo valor está com ponto  */
                                                                                                                                                                                                                let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                let total = transformandoValorPontencia1 / segundovaloralterado
                                                                                                                                                                                                                let valor = total.toLocaleString("pt-BR")
                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                addNewRow('Divisão', calculo, valor)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulasegundovalor == true) {
                                                                                                                                                                                                                    /* ambos os campos tem valor , o segundo valor tem ponto e virgula*/
                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                                                                                                    document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""

                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandovirgulasegundovalor == true) {
                                                                                                                                                                                                                        /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto e sim tem virgula*/
                                                                                                                                                                                                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                                                                                                        let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                        let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                        let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                        addNewRow('Divisão', calculo, valor)

                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontosegundovalor == true && validandovirgulaprimeirovalor == true) {
                                                                                                                                                                                                                            /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                                                                                                                                                                                                            let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                                                                            let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                            let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                            let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                            let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                            addNewRow('Divisão', calculo, valor)

                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandovirgulasegundovalor == false && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true) {
                                                                                                                                                                                                                                /* ambos os campos tem valor , o primeiro valor não tem ponto e sim virgula e o segundo valor tem ponto*/
                                                                                                                                                                                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                                                                                let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                                let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                                let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                addNewRow('Divisão', calculo, valor)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                                                                                                    /* ambos os campos tem valor , o primeiro valor tem ponto e o segundo valor não tem ponto */
                                                                                                                                                                                                                                    let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                                    let segundovaloralterado = parseInt(segundovalor)
                                                                                                                                                                                                                                    let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                                    let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                    let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                    addNewRow('Divisão', calculo, valor)

                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == true && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                                                                                                        /* ambos os campos tem valor , o primeiro valor não ponto e o segundo campo tem ponto */
                                                                                                                                                                                                                                        let primeirovaloralterado = parseInt(primeirovalor)
                                                                                                                                                                                                                                        let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                                        let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                                        let valor = total.toLocaleString('pt-BR')
                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                        let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                        addNewRow('Divisão', calculo, valor)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == true && validandopontosegundovalor == true) {
                                                                                                                                                                                                                                            /* ambos os campos tem valor , ambos os campos tem ponto*/
                                                                                                                                                                                                                                            let primeirovaloralterado = Number(primeirovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                                            let segundovaloralterado = Number(segundovalor.replace(/,/g, "").replace(/\./g, ""))
                                                                                                                                                                                                                                            let total = parseFloat(primeirovaloralterado / segundovaloralterado)
                                                                                                                                                                                                                                            let valor = total.toString()
                                                                                                                                                                                                                                            if (valor.includes("e+")) {
                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                                addNewRow('Divisão', calculo, total)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                let valorFormatodo = formatadonumeros2(valor)
                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                                addNewRow('Divisão', calculo, valorFormatodo)
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == false && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                                                                                                                                                /* ambos os campos tem valor , o primeiro valor tem virgula e o segundo valor não tem virgula */
                                                                                                                                                                                                                                                let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                                                                                                let segundovaloralterado = parseInt(segundovalor)
                                                                                                                                                                                                                                                let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                                                let valor = total.toString()
                                                                                                                                                                                                                                                let valorconvertido = valor.replace(".", ",")
                                                                                                                                                                                                                                                if (valor == "Infinity" || valor == "NaN") {
                                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                                    document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                                    document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                    let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                                    addNewRow('Divisão', calculo, valorconvertido)
                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                                                                                                                                                    /* ambos os campos tem valor , o primeiro valor não tem virgula e o segundo valor tem virgula */
                                                                                                                                                                                                                                                    let primeirovaloralterado = parseInt(primeirovalor)
                                                                                                                                                                                                                                                    let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                                                                                                                                    let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                                                    let valor = total.toString()
                                                                                                                                                                                                                                                    let valorconvertido = valor.replace(".", ",")
                                                                                                                                                                                                                                                    if (valor == "Infinity" || valor == "NaN") {
                                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                                        document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                                        document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                        let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                                        addNewRow('Divisão', calculo, valorconvertido)
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (cor == "rgba(0, 247, 255, 0.95)" && segundovalor != "" && primeirovalor != "" && validandovirgulaprimeirovalor == true && validandovirgulasegundovalor == true && validandopontoprimeirovalor == false && validandopontosegundovalor == false) {
                                                                                                                                                                                                                                                        /* ambos os campos tem valor , ambos os campos tem virgula*/
                                                                                                                                                                                                                                                        let primeirovaloralterado = parseFloat(primeirovalor.replace(/,/g, "."))
                                                                                                                                                                                                                                                        let segundovaloralterado = parseFloat(segundovalor.replace(/,/g, "."))
                                                                                                                                                                                                                                                        let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                                                        let valor = total.toString()
                                                                                                                                                                                                                                                        let valorconvertido = valor.replace(".", ",")
                                                                                                                                                                                                                                                        if (valor == "Infinity" || valor == "NaN") {
                                                                                                                                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                                                                                                                                            document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                                                                                                                                            document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                                                                                                                                            document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                                                                                                                                            document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                                            document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                                            document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                            let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                                            addNewRow('Divisão', calculo, valorconvertido)
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (segundovalor != "" && primeirovalor != "" && validandopontoprimeirovalor == false && validandopontosegundovalor == false && validandovirgulaprimeirovalor == false && validandovirgulasegundovalor == false) {
                                                                                                                                                                                                                                                            /* ambos os valores são numeros inteiros*/
                                                                                                                                                                                                                                                            let primeirovaloralterado = Number(primeirovalor)
                                                                                                                                                                                                                                                            let segundovaloralterado = Number(segundovalor)
                                                                                                                                                                                                                                                            let total = primeirovaloralterado / segundovaloralterado
                                                                                                                                                                                                                                                            let valor = total.toString()
                                                                                                                                                                                                                                                            let valorconvertido = valor.replace(".", ",")
                                                                                                                                                                                                                                                            let calculo = primeirovalor + " / " + segundovalor
                                                                                                                                                                                                                                                            if (valor == "Infinity" || valor == "NaN") {
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#f10000f2"
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.width = "300px"
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.margin = "0px 5px 5px 55px"
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").value = "Não é possivel calcular com esses valores!"
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.color = "#ffffffff"
                                                                                                                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                                                document.querySelector(".segundovalor").value = ""
                                                                                                                                                                                                                                                                addNewRow('Divisão', calculo, valorconvertido)
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (primeirovalor != "" && segundovalor == "") {
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").style.backgroundColor = "#ffffffff"
                                                                                                                                                                                                                                                                document.querySelector(".primeirovalor").value = ""
                                                                                                                                                                                                                                                                document.querySelector(".segundovalor").value = primeirovalor
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


