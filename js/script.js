


      function calcular(tipo,valor){

        //BOTAO NUMERICOS (VALOR)
        if (tipo==="valor") {
          document.getElementById("resultado").value += valor

        //BOTAO NUMERICOS (VALOR)
        }else if (tipo==="acao"){

          //BOTAO APAGAR C
          if (valor==="c") {
            document.getElementById('resultado').value = ""
          }

          //BOTAO PARA OPERADORAR
          if (valor==="/" || valor==="*" || valor==="-" || valor==="+" || valor===".") {
            document.getElementById('resultado').value += valor
          }

          //BOTAO CALCULAR
          if (valor==="=") {
           var valor_final = eval(document.getElementById('resultado').value)

           document.getElementById('resultado').value = valor_final
          }

        }

      }


