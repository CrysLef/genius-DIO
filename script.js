let order = [];
let clicekdOrder = [];
let score = 0;

const startGame = document.querySelector('.start-game')

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const lightColor = (element, number) => {
    number = number * 500;
    
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected')    
    }, number);
}

const createColorElement = color => {
    if(color == 0) {
        return green;
    }else if(color == 1) {
        return red;
    }else if(color == 2) {
        return yellow;
    }else if(color == 3) {
        return blue;
    }
}

const shuffleOrder = () => {
    const colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clicekdOrder = [];

    for(let i in order) {
        let colorElement = createColorElement(order[i]);
        lightColor(colorElement, Number(i) + 1);
    }

}

const nextLevel = () => {
    score++;
    shuffleOrder();
}

const playGame = () => {
    alert('Bem-vindo ao Genius! Iniciando um novo jogo!');
    score = 0;

    nextLevel();
}

const gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!!\nClique em OK se deseja uma nova chance`);
    order = [];
    clicekdOrder = [];

    playGame();
}

const checkOrder = () => {
    for(let i in clicekdOrder) {
        if(clicekdOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    
    if(clicekdOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou!! Iniciando o próximo nível...`);
        nextLevel();
    }
}

const click = color => {
    clicekdOrder[clicekdOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder()
    },250)
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3); 

startGame.onclick = () => {
    playGame();
}