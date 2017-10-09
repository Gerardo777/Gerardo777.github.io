function numeros(arreglo)
{
    for(var i = 0; i < arreglo.length;i++)
    {
        document.write(arreglo[i]);
        document.write('<br>')
    }
}

document.write("Hola desde JavaScript");
console.log("Hola para la consola");

/*Notación literal de arreglos*/
var arreglo= [7,5,3];
numeros(arreglo);

/*Notación objeto de arreglos*/
var arreglo2 = new Array(9,11,13);
numeros(arreglo2);

/*Notación literal de objetos*/
var triangulo = {
    base:3,
    altura:5,
    area:function(){
        console.log("Área es igual a = " + this.base*this.altura/2);
    }
}

triangulo.area();