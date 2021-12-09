function calcularMedia( notas ){
    var soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
      
    }
        media = soma / notas.length;
      
      return media;
    }
    
    console.log(`media: ${calcularMedia([3, 4, 8, 10, 5, 7, 11, 5, 9])}`)
    
    function aprovacao( media ) {
        
      let condicao = media >= 7 ? 'aprovado' : 'reprovado';
    
        return condicao;
    }
    
    console.log( aprovacao( calcularMedia([3, 4, 8, 10, 5, 7, 11, 5, 9])));

document.addEventListener('submit', function( evento ){

    evento.preventDefault();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = 0;

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        notas += parseInt(dados.get(key));
}

console.log(notas);

console.log(objeto);

});