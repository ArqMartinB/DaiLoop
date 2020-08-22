function inversion ()
 {
    var cotizacionblue=Number(document.getElementById('blue').value);
    var dolares=Number(document.getElementById('venta').value);
    var inv=dolares*cotizacionblue;
    document.getElementById('inv').value=inv;
}

function resultado ()
{
    var daicompra=Number(document.getElementById('daiarg').value);
    var daiventa=Number(document.getElementById('daiusd').value);
    var cotizacionblue=Number(document.getElementById('blue').value);
    var dolares=Number(document.getElementById('venta').value);
    var inv=dolares*cotizacionblue;
    var res=inv/daicompra*daiventa;
    document.getElementById('res').value=res; 
}

function cambio ()
{
    var daicompra=Number(document.getElementById('daiarg').value);
    var daiventa=Number(document.getElementById('daiusd').value);
    var camb=daicompra/daiventa;
    document.getElementById('camb').value=camb; 
}
