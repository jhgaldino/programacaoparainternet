
const elementos = document.querySelectorAll('ul > li');
for(let i =0;i<elementos.length;i++){
console.log(elementos[i].innerText);
}

//vetores
//indices sempre numericos
//iniciam em 0 
let frutas = ['abacaxi','banana','caju','laranja'];
console.log(frutas);

//acessando elemento da lista
let fruta = frutas[1];
console.log(fruta);

//tamanho do vetor
let tamanho = frutas.length;
console.log('Minha lista tem' ,tamanho,'elementos');

//inserindo um novo elemento
frutas[tamanho++] = 'Laranja';
frutas[frutas.length] = 'Morango';
frutas.push('Limao','manga','melancia'); //insere no final
console.log(frutas);
//push,pop,shift,unshift

// Matriz
//Site de fotos , cada foto tem ID
//Cada foto possui IDS das pessoas
let fotos = [
    [15,99,102],
        [34,15],
            [222],
    [34,100,1000,322,768]
];
console.log(fotos);

console.log(fotos[3][2]);//acessar o valor 1000


let primeirolike = fotos[3][0];
let qtdlikes = fotos[3].length-1;

console.log(primeirolike,'e outras',qtdlikes,
'pessoas curtiram sua foto');

//OBJETOS
//Indices são associativos
let ficha = {
    nome : 'Maria',
    idade: 25,
    sexo:'f',
    cidade:'Ituiutaba',
    filhos : [
        {
        nome : 'Marizinha',
        idade : 3
    },
    {
        nome : 'Joãozin',
        idade : 5

    }
]
};
console.log(ficha.nome);

//PERCORRER UM OBJETO
for(let i = 0 ; i < ficha.filhos.length;i++){
    let filho = ficha.filhos[i];
    console.log('Filho(a) :',ficha.filhos.nome,filho.idade);
}


//JSON
// JAVASCRIPT OBJECT NOTAION
const box = document.querySelector('#box');
let texto = JSON.stringify(ficha);
box.innerText = texto;

let objeto = JSON.parse(texto);
console.log(objeto);