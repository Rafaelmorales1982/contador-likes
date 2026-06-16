

const curtirBotao = document.querySelector("#curtir");
const likes = document.querySelector("#likes");

let contador = 0;
function curtir() {
    contador++;
    likes.innerHTML = contador;
}

curtirBotao.addEventListener('click', curtir);