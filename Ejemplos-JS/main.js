var btnAgregar = document.getElementById("btnAgregar");
/* Event handler
btnAgregar.onclick = agregaCaja;*/
/*
btnAgregar.onclick=function(){
    window.alert('ejecutando función anónima'); 
};
*/

/*Event listener*/ 
btnAgregar.addEventListener('click',function(){
    var entrada = document.getElementById("entrada");
    var contenido = entrada.value;
    if(contenido !='')
    {
        agregaCaja(contenido);
    }
});
/*document.addEventListener('click',prueba);
document.addEventListener('click',function(){
    window.alert("otra función anónima");
});*/

function agregaCaja(texto)
{
var nuevo= document.createElement('div');
var texto= document.createTextNode(texto);
nuevo.appendChild(texto);
nuevo.setAttribute("class", "caja");
var padre= document.getElementsByTagName('body');
padre[0].appendChild(nuevo);
}

function prueba()
{
    window.alert('hola');
}