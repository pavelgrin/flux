import { flux, actions } from './state';

const udpateButton = document.querySelector('#button');
const outputDiv = document.querySelector('#output');

const drawRndNumber = () => {
    const { randomNumber } = flux.getState();
    outputDiv.innerText = randomNumber;
};

const updateRndNumber = () => {
    const newRnd = Math.floor(Math.random() * 100);
    actions.updateRandom(newRnd);
};

flux.subscribe(drawRndNumber);

updateRndNumber();
udpateButton.addEventListener('click', updateRndNumber);
