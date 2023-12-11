function pedido() {
    foto1 = parseInt(document.getElementById('foto1').value);
    foto2 = parseInt(document.getElementById('foto2').value);
    foto3 = parseInt(document.getElementById('foto3').value);

    sumaTotal = foto1 + foto2 + foto3;

    if (sumaTotal <= 10) {
        resultado = document.querySelector('.resultado');
        resultado.innerHTML = 'llevas ' + sumaTotal + ' stickers.';
    
    } else {
        resultado = document.querySelector('.resultado');
        resultado.innerHTML = "llevas mas de 10 stickers ! ";
        
    }
};
