// evento click
const btn1 = document.getElementById('botoncontador');
let contador = document.getElementById('contador');
let ctd = 0;
btn1.addEventListener("click", ()=>{
    ctd++;
    contador.textContent = ctd;
    if (ctd == 5){
        alert("Haz echo clic 5 veces");
    }
});

const btn2 = document.getElementById('btn2');
const Div1 = document.getElementById('Div1');
let contadorColor = 0;

btn2.addEventListener('click', ()=> {
    contadorColor++;
    if (contadorColor % 2 === 0) {
        Div1.style.backgroundColor = 'lightblue';
    } else {
        Div1.style.backgroundColor = 'lightgreen';
    }
});

const btn3 = document.getElementById('btn3');
const miImagen = document.getElementById('Imagen');
let imagenVisible = true;

btn3.addEventListener('click',()=> {
    imagenVisible = !imagenVisible;
    Imagen.style.display = imagenVisible ? 'block' : 'none';
});

//evento focus 
function mostrarAyuda(mensaje) {
    event.target.nextElementSibling.textContent = mensaje;
  }
  
  function ocultarAyuda() {
    event.target.nextElementSibling.textContent = '';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[type="text"], input[type="email"]').forEach(function(input) {
      input.addEventListener('focus', () => mostrarAyuda('Hace aparecer este mensaje'));
      input.addEventListener('blur', ocultarAyuda);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var campoBusqueda = document.getElementById('campoBusqueda');
  
    campoBusqueda.addEventListener('focus', function() {
      iniciarBusqueda();
    });
  
    function iniciarBusqueda() {
      campoBusqueda.value = '';
      campoBusqueda.style.backgroundColor = 'yellow';
    }
  });
document.addEventListener('DOMContentLoaded', function() {
    var campoNumerico = document.getElementById('campoNumerico');
  
    campoNumerico.addEventListener('focus', function() {
      mostrarTecladoNumerico();
    });
  
    function mostrarTecladoNumerico() {
      eliminarTeclado();
      var tecladoDiv = document.createElement('div');
      tecladoDiv.id = 'tecladoNumerico';
      for (var i = 0; i <= 9; i++) {
        var boton = document.createElement('button');
        boton.textContent = i;
        boton.addEventListener('click', function() {
          campoNumerico.value += this.textContent;
        });
        tecladoDiv.appendChild(boton);
      }
      document.body.appendChild(tecladoDiv);
    }
    function eliminarTeclado() {
      var tecladoExistente = document.getElementById('tecladoNumerico');
      if (tecladoExistente) {
        tecladoExistente.remove();
      }
    }
  });
  
  








