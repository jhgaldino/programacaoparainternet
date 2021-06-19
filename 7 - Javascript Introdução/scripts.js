alert("Funcionando");
imprime("Ituiutaba");
imprime("Capinópolis");
imprime("Jundiaí");


function imprime(){
    document.querySelector("#box").innerHTML += texto + "<br>";
}
function limpa(){
    document.querySelector("#box").innerHTML = "";
}

//VARIAVEIS
let nome = "Adriano";
imprime(nome);

nome = "Bruna";
imprime(nome);

const ano = 2021;
imprime(ano);