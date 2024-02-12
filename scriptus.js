var miElemento = document.getElementById('miElemento');
var miImagen = document.getElementById('miImagen');
var miTexto = document.getElementById('miTexto');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
miElemento.addEventListener('mouseover', function() {
  cambiarColor();
});

function cambiarColor() {
  miElemento.style.backgroundColor = 'lightgreen';
}

function cambiarColor2(){
    document.getElementById('miElemento').style.backgroundColor = 'lightblue';
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Agrega event listeners para los eventos 'mouseover' y 'mouseout'
miImagen.addEventListener('mouseover', function() {
  cambiarImagen();
});

miImagen.addEventListener('mouseout', function() {
  restaurarImagen();
});

function cambiarImagen() {
  miImagen.src = 'https://www.fayerwayer.com/resizer/X6fSIIn65CvtnTEwcyH--ocUfko=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/Z62Y7S5VIRH5HF3KPK3CV27MTU.png';
  miImagen.style.transform = 'scale(1.1)';
}

function restaurarImagen() {
  miImagen.src = 'https://img.unocero.com/2021/08/rickroll_4k-1024x768.jpeg';
  miImagen.style.transform = 'scale(1)';
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


miTexto.addEventListener('mouseover', function() {
  cambiarTexto();
});

miTexto.addEventListener('mouseout', function() {
  restaurarTexto();
});

function cambiarTexto() {
  miTexto.innerText = '¡Mouseover activado!';
  miTexto.style.color = 'green';
}

function restaurarTexto() {
  miTexto.innerText = 'Pasa el ratón sobre mí';
  miTexto.style.color = 'darkblue';
}