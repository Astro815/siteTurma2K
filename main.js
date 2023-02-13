//const $ = (e) => { return document.querySelector(e); };

let htx = new XMLHttpRequest();
let data = {};

htx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(htx.responseText);
        main();
    }
};
htx.open("GET", "class.json", true);
htx.send();

let idsai = 0;

function setBlock(aluno) {
    /*$("#cap > h2").innerHTML = `Turma do ${dc.serie}º${dc.id}`;
    $("header > h2").innerHTML = `${dc.serie}°${dc.id}`;*/
    let el = `<input type="checkbox" id="ia${idsai}"><label for="ia${idsai}"><div><img src="${aluno.ico == null ?  "img/noUser.png" : "img/icons/"+aluno.ico+".jpg" }"><nameText>${aluno.name}</nameText></div><div><h5 class="ia_name">${aluno.name}</h5><font>${aluno.desc}</font></div></label>`;
    idsai++;
    $(".aaa").append(el);
}

function main() {
    let dc = data.class[0];
    dc.alunos.forEach(setBlock);
}