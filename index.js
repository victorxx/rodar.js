<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Botão Girando</title>
  <style>
    #NOME {
      background-color: red;
      transform: scale(2);
      transition: transform 0.1s linear; /* animação rápida */
      display: inline-block;
    }
  </style>
</head>
<body>

  <div id="NOME">victor</div>

  <script>
    let angulo = 0;
    function rodar() {
      angulo += 10; // gira 10 graus por vez
      document.getElementById('NOME').style.transform = `rotate(${angulo}deg) scale(2)`;
    }
    setInterval(rodar, 100);
  </script>

</body>
</html>
