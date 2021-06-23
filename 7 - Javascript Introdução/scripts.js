alert("Funcionando");
imprime("Ituiutaba");
imprime("Capinópolis");
imprime("Jundiaí");


//VARIAVEIS
// tipos : int, float,string, boolean, fuction,object
let nome = "Adriano";//pode ser trocada, alterada seu valor
imprime(nome);

nome = "Bruna";
imprime(nome);

const ano = 2021;//constante nao pode ser alterada
imprime(ano);

ano = 2022;
imprime(ano);
//pode ter vaarios varios dependendo da atribuição
let x = "Joao";
x = 14;
x = 3.14;
x = true;

let sobrenome = "Silva";
let nomecompleto = nome + sobrenome;//+ é concatenação
imprime(nomecompleto);
//operadores matemáticos
let result =2-4+ "Quatro";//nesse caso o mais vira concatenação
imprime(result);

imprime('estruturas condicionais')
// ESTRUTURA SE
imprime("")
imprime("-->SE")
let idade = 12;
if(idade < 16){
    imprime("Voto não Permitido");
}
else if(idade <18 || idade >65){
    imprime("voto facultativo");
}else{
    imprime("Voto Obrigatório")
}
//ESTRUTURA SWITCH , TRABALHA EM CASCATA
imprime("")
imprime("-->SWITCH...CASE")
let dia = 4;
switch(dia){
    case 1 : imprime("Domingo");break;
    case 2 : imprime("Segunda");break;
    case 3 : imprime("Terça");break;
    case 4 : imprime("Quarta");break;
    case 5 : imprime("Quinta");break;
    case 6 : imprime("Sexta");break;
    default : imprime("Sabado");break;
}

//ESTRUTURAS DE REPETIÇÃO
//WHILE , ESTRUTURA MELHOR PARA ESTADOS (VERDADEIRO OU FALSO)
imprime("estruturas de repetição")
imprime("-->WHILE")
let num = 1;
while(num < 10){
    imprime(num);
    num = num+1;
}
//ESTRUTURA FOR , LOOP EXCLUSIVO PARA CONTADORES
imprime("-->FOR")
for(i=0;i<10;i++){
    imprime(i);
}










function imprime(){
    document.querySelector("#box").innerHTML += texto + "<br>";
}
function limpa(){
    document.querySelector("#box").innerHTML = "";
}
