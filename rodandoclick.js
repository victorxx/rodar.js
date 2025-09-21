<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>girar ao clicar</title>
        <style>
            #caixa{
                background-color:blue;
                color:White;
                padding:20px;
                display: inline-block;
                transition: transform 0.5s ease;
                cursor:pointer;
            }
        </style>
    </head>
    <body>
        <div id="caixa">clique em mim</div>
 
  <script>
        let girado=false;
        document.getElementById('caixa').onclick=function(){
        girado=!girado;
        this.style.transform=girado?'rotate(180deg)':'rotate(0deg)';

    }
  </script>
    </body>




</html>
