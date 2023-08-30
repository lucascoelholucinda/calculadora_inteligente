/* alert("teste") */

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

        /* var regexp = new RegExp(/[^a-zA-Z 0-9]+/g);
        var n = regexp.exec(dados);
       
        if (n != null) {
            re
            console.log(n)
        } */
    })

    /*   $('.botao_calculadora_adicao').click(function (e) {
         
          let dados = e.target.value
          let valor = document.querySelector(".texto_resultado").value
          document.querySelector(".texto_resultado").value = valor + "" + dados
          var regexp = new RegExp(/[\.*+?^${}()|[\]]/g);
          var n = regexp.exec(valor);
          if (n != null) {
  
              let novovalor = valor.replace("+", "");
              console.log(valor)
  
              document.querySelector(".texto_resultado").value = novovalor + "" + dados
          }
  
  
      }) */

    /*  $('.botao_calculadora').click(function (e) {
 
         let dados = document.querySelector(".texto_resultado").value
         if (dados === "") {
             let valores_calcular = e.target.value
             document.querySelector(".texto_resultado").value = valores_calcular
         } else {
             valores_calcular = e.target.value + "" + document.querySelector(".texto_resultado").value
             document.querySelector(".texto_resultado").value = valores_calcular
             
         }
     }) */
})