import {bd} from './bd.js';
const box = document.querySelector('#box');


box.insertAdjacentHTML("beforeend",`<div>${bd.nome}</div><br>` );
box.insertAdjacentHTML("beforeend",`<div>${bd.resumo}</div><br>` );
box.insertAdjacentHTML("beforeend",`<div>${bd.nota}</div><br>`);
box.insertAdjacentHTML("beforeend",`<div><img src = '${bd.fotoPoster}'</div> <br>`);

//Foto de cada autor
box.insertAdjacentHTML("beforeend",`<div>${bd.generos}</div>`);
for(let i=0;i < bd.elenco.length;i++){
    let autor = bd.elenco[i];
    box.insertAdjacentHTML("beforeend",`<div><img src = '${bd.elenco[i].foto}'</img></div><br>`);
}

//Acessando o poster e o numero de episodios de cada temporada
for(let j = 0;j<bd.temporadas.length;j++){
    let temp = bd.temporadas[j];
    box.insertAdjacentHTML("beforeend",`<div><img src = '${bd.temporadas[j].poster}'</img></div><br>`);
    box.insertAdjacentHTML("beforeend",`<div>'${bd.temporadas[j].numero_episodios}'</div><br>`);
    }

//Nome dos episodios da segunda temporada
let temp2 = bd.temporadas[1].episodios;
console.log(temp2);
temp2.map(item => box.insertAdjacentHTML("beforeend",`<div>'${item.nome}'</div><br>`))
