# Calculadora
Prova 15/03/22
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" type = text/css href="coisa.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora do Rafael</title>
</head>
<body>
<h2>آلة حاسبة</h2>
<label>valor x:</label>
<input type="number" id="x" placeholder="valor de X">
<br><br>
<label>valor de y:</label>
<input type="number" id="y" placeholder="valor de y" >
<br><br>
<label>resultado</label>
<input type="number" id="z" readonly>
<br><br>
<button onclick="somar()">+</button>
<button onclick="subtração()">-</button>
<button onclick="dividir()">%</button>
<button onclick="multiplicar()">×</button>
<button onclick="Potenciação()">^^</button>
<button onclick="RaizQuadrada()">√</button>
<button onclick="RestoDeDivisão()">//</button>
<br><br>
<button onclick="ApagaNumeros()">Limpar</button>
<br>
<br>
<img src="https://i.pinimg.com/564x/e8/23/dc/e823dcd34b123df918b9dffd62c0656e.jpg">
<

<script>
    const somar = function(){
        let x = document.getElementById ('x').value
        let y = document.getElementById ('y').value
        z = parseFloat(x) + parseFloat(y)
        document.getElementById('z').value = z
   }
   const dividir = function(){
       let x = document.getElementById ('x').value
       let y = document.getElementById ('y').value
       z = parseFloat(x) / parseFloat(y)
       document.getElementById('z').value = z
   }
   const subtração = function(){
       let x = document.getElementById ('x').value
       let y = document.getElementById ('y').value
       z = parseFloat(x) - parseFloat(y)
       document.getElementById('z').value = z
   }
   const multiplicar = function(){
        let x = document.getElementById ('x').value
        let y = document.getElementById ('y').value
        z = parseFloat(x) * parseFloat(y)
        document.getElementById('z').value = z
   }
   const Potenciação = function(){
       let x = document.getElementById ('x').value
       let y = document.getElementById ('y').value
       z = Math.pow (parseFloat(x),parseFloat(y))
       document.getElementById('z').value = z
   }
   const RaizQuadrada = function(){
       let x = document.getElementById ('x').value
       let y = document.getElementById ('y').value
       z = Math.sqrt (parseFloat(x))
       document.getElementById('z').value = z
   }
   const ApagaNumeros = function(){
    let x = document.getElementById ('x').value
       let y = document.getElementById ('y').value
       z = persefloat(x) * parseFloat(y)
       document.getElementById('z').value = z
       
   }
</script>
</body>
</html>
