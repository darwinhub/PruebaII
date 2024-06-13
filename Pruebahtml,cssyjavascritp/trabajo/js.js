
const form = document.querySelector('.contenedor-registro form');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const correoInput = document.querySelector('#correo');
const passworkInput = document.querySelector('#passwork');
const sexoInput = document.querySelector('#sexo');


form.addEventListener('submit', (e) => {
  e.preventDefault();

 
  if (nombreInput.value === '') {
    alert('Por favor ingrese su nombre');
    return;
  }

  if (apellidoInput.value === '') {
    alert('Por favor ingrese su apellido');
    return;
  }

  if (correoInput.value === '') {
    alert('Por favor ingrese su correo electrónico');
    return;
  }

  if (passworkInput.value === '') {
    alert('Por favor ingrese su contraseña');
    return;
  }

  if (!sexoInput.checked) {
    alert('Por favor seleccione su sexo');
    return;
  }

  
  form.submit();
});