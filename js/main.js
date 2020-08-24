function inversion ()
 {
    var cotizacionblue=Number(document.getElementById('blue').value);
    var dolares=Number(document.getElementById('venta').value);
    var inv=(dolares*cotizacionblue).toFixed(3);
    document.getElementById('inv').value=inv;
}

function resultado ()
{
    var daicompra=Number(document.getElementById('daiarg').value);
    var daiventa=Number(document.getElementById('daiusd').value);
    var cotizacionblue=Number(document.getElementById('blue').value);
    var dolares=Number(document.getElementById('venta').value);
    var inv=(dolares*cotizacionblue).toFixed(3);
    var res=(inv/daicompra*daiventa).toFixed(3);
    document.getElementById('res').value=res; 
}

function cambio ()
{
    var daicompra=Number(document.getElementById('daiarg').value);
    var daiventa=Number(document.getElementById('daiusd').value);
    var camb=(daicompra/daiventa).toFixed(3);
    document.getElementById('camb').value=camb; 
}
