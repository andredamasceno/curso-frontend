var alunos = [
  [6, 7, 8, 6],
  [8, 5, 6, 7],
  [3, 9, 5, 8],
  [4, 6, 7, 9]
]

var nota = 0;

for (var i = 0; i < alunos.length; i++){
	
  nota = 0
  aluno = alunos[i]
  console.log('Aluno: ' + aluno);
  
  for(c = 0; c < aluno.length; c++){
  	nota += aluno[c];
  }
 	
  media = nota / 4;
  
  if(media >= 7){
  	resultado = 'aprovado';
  } else {
  	resultado = 'reprovado';
  }
  
  console.log('Media: ' + media + ' - ' + resultado)
  
}