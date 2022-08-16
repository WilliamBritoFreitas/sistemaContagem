var alunos = [
"Adriano",
"Ana Cláudia",
"José Antonio",
"Luis",
"Silvio",
"Gabriela",
"Otávio",
"Fernando José",
"Maria Fernanda",
"Teresa Maria",
"Vanda"
]

function verificaPos(valor){
let retorno = "";

if (valor==0)
{
     retorno = "Posição é Zero";
} else { 
    if (valor%2 == 0){
        retorno = "Posição Par";
    } else {
        retorno = "Posição Impar";
    }


}
return (retorno)

}


alunos = alunos.sort()
console.log("Lista de alunos por ordem alfabética")
console.log ("======================================")
for (let index = 0; index < alunos.length; index++) {
    console.log(index +". "+ "Aluno: "+ alunos[index] + " | tem " + alunos[index].length + " letras no nome e sua "+ verificaPos(index))
    console.log ("-------------------------------------------------");
    
}

console.log (">Fim de execução <<<<<<<<<<<<<<<<<<<<<<<<<")
