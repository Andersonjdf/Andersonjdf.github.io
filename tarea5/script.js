document.addEventListener('DOMContentLoaded', function() {
    var resultado = document.getElementById('resultado');
    var edad = prompt('Ingresa tu edad:');
  
    if (edad >= 18) {
      resultado.textContent = 'Eres mayor de edad.';
    } else {
      resultado.textContent = 'Eres menor de edad.';
    }
  });
  function generarLista() {
    var cantidadMaximaInput = document.getElementById('cantidad-maxima');
    var cantidadMaxima = parseInt(cantidadMaximaInput.value);
    var listaNumeros = document.getElementById('lista-numeros');
    listaNumeros.innerHTML = ''; // Limpiar la lista antes de generar una nueva
  
    for (var i = 1; i <= cantidadMaxima; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = i;
      listaNumeros.appendChild(listItem);
    }
  }
  function saludar() {
    alert('¡Hola!');
  }
  function realizarOperaciones() {
    var numero1Input = document.getElementById('numero1');
    var numero2Input = document.getElementById('numero2');
    var resultado = document.getElementById('resultado');
  
    var num1 = parseFloat(numero1Input.value);
    var num2 = parseFloat(numero2Input.value);
  
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;
  
    resultado.textContent = "Resultado de las operaciones: " +
      "Suma: " + suma + ", " +
      "Resta: " + resta + ", " +
      "Multiplicación: " + multiplicacion + ", " +
      "División: " + division + ", " +
      "Módulo: " + modulo;
  }
  document.addEventListener('DOMContentLoaded', function() {
    var fechaHora = document.getElementById('fecha-hora');
  
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Se suma 1 porque los meses comienzan desde 0
    var año = fechaActual.getFullYear();
    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
  
    fechaHora.textContent = "Fecha y hora actual: " +
      dia + "/" + mes + "/" + año + " " +
      hora + ":" + minutos + ":" + segundos;
  });
  function generarMensaje() {
    var nombreInput = document.getElementById('nombre');
    var edadInput = document.getElementById('edad');
    var profesionInput = document.getElementById('profesion');
    var resultado = document.getElementById('resultado');
  
    var nombre = nombreInput.value;
    var edad = parseInt(edadInput.value);
    var profesion = profesionInput.value;
  
    var mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`;
  
    resultado.textContent = mensaje;
  }
  var elementos = [];

function agregarElemento() {
  var elemento = prompt('Ingresa un nuevo elemento:');
  if (elemento) {
    elementos.push(elemento);
    actualizarLista();
  }
}

function actualizarLista() {
  var listaElementos = document.getElementById('lista-elementos');
  listaElementos.innerHTML = '';

  for (var i = 0; i < elementos.length; i++) {
    var li = document.createElement('li');
    li.textContent = elementos[i];
    listaElementos.appendChild(li);
  }
}
function saludar() {
    var nombreInput = document.getElementById('nombre');
    var mensajeElemento = document.getElementById('mensaje');
  
    var nombre = nombreInput.value;
    mensajeElemento.textContent = '¡Hola, ' + nombre + '!';
  }