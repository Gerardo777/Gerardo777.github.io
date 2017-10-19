var formulario = document.getElementById('registro');
var mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(evento){
    if(!verificaNombre() || !verificaContraseña() || !verificaTerminos())
    {
      evento.preventDefault();
    }
    else
        {  
            mensaje.innerHTML = 'Tu registro fue realizado con éxito';
        }
});

function verificaNombre()
{
    var expReg = /[a-z]/i;
    

    if(expReg.test(formulario.nombre.value.charAt(0)))
        {
            mensaje.innerHTML = "";
            return true;
        }
    else
        {
            mensaje.innerHTML = 'El nombre de usuario debe iniciar con una letra';
            return false;
        }    
}

function verificaContraseña()
{
    var letra = /[a-b]/i;
    var numeros = /[0-9]/;
    var simbolos = /[!"#$%&/()]/;

    if(formulario.pswd.value.length < 8)
    {
        mensaje.innerHTML = 'La contraseña debe tener un mínimo de 8 caracteres';
        return false;
    }

    if(formulario.pswd.value != formulario.pswd2.value)
    {
        mensaje.innerHTML = 'Las contraseñas no coinciden';
        return false;        
    }
    return true;

}

function verificaTerminos()
{
    if(formulario.terminos.checked == false)
    {
        mensaje.innerHTML = 'Aceptar los terminos debes';
        return false;
    }
    return true;
}