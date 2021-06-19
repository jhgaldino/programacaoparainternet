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
let idade = 19;
if(idade >=18){
    imprime("Voto obrigatorio");
}else if(idade <18 || idade >65){
    imprime("voto facultativo");
}











function imprime(){
    document.querySelector("#box").innerHTML += texto + "<br>";
}
function limpa(){
    document.querySelector("#box").innerHTML = "";
}
