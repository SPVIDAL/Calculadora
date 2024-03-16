function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function apagar()
{
    document.getElementById('resultado').innerHTML = "";
}

function back(){

    // metodo slice (0, - 1) apaga ultimo caracter da String 

    var result = document.getElementById('resultado').innerHTML;
    let str = result.slice(0, -1);

    document.getElementById('resultado').innerHTML = str;

}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

    else
    {
        document.getElementById('resultado').innerHTML = "Nada para calcular"
    }

}