function updateCounter() {
    const startDate = new Date("2024-10-27T00:00:00");

    const now = new Date();

    const startDateLocal = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );
    const nowLocal = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const diffInMilliseconds = nowLocal - startDateLocal;

    const daysElapsed = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    document.getElementById("day-counter").textContent = daysElapsed;
}

updateCounter();

setInterval(updateCounter, 24 * 60 * 60 * 1000);

const frases = [
    "“Sometimes the smallest decisions can change your life forever.”",
    "“You had me at hello.”",
    "“To me, you are perfect.”",
    "“If you're a bird, I'm a bird.”",
    "“You complete me.”",
    "“Our love is like the wind. I can't see it, but I can feel it.”",
    "“As you wish.”",
    "“It was always you.”",
];

const elementoCitacao = document.querySelector(".citacao");
let indiceAtual = 0;

function alterarFrase() {
    elementoCitacao.classList.remove("show");

    setTimeout(() => {
        elementoCitacao.textContent = frases[indiceAtual];
        indiceAtual = (indiceAtual + 1) % frases.length;

        elementoCitacao.classList.add("show");
    }, 1000);
}

setInterval(alterarFrase, 5000);

elementoCitacao.textContent = frases[indiceAtual];
elementoCitacao.classList.add("show");
indiceAtual++;

const imagens = [
    "wpp01.jpeg",
    "wpp02.jpeg",
    "wpp03.jpeg",
    "wpp04.jpeg",
    "wpp05.jpeg",
    "wpp06.jpeg",
];

const elementoImagem = document.querySelector(".hero-img");
let indAtual = 0;

function alterarImagem() {
    elementoImagem.classList.remove("show");

    setTimeout(() => {
        elementoImagem.src = imagens[indAtual];
        indAtual = (indAtual + 1) % imagens.length;

        elementoImagem.classList.add("show");
    }, 1000);
}

setInterval(alterarImagem, 5000);

elementoImagem.classList.add("show");
