'use strict';

console.log('>> Ready :)');
const urlApi = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
const cardsContainer = document.querySelector('.main__cards');
const button = document.querySelector('.header__btn');
const imgDefault = 'assets/images/ffffff.png';

function giveCards() {
    cardsContainer.innerHTML = '';
    let inputUser = document.querySelector('input[name="numbercards"]:checked');
    if(inputUser !== null) {
        fetch(urlApi + inputUser.value + '.json')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    const pokemon = data[i].image;
                    const pair = data[i].pair;
                    cardsContainer.innerHTML += `
                    <div class="card">
                    <img class="img" src='${imgDefault}' alt='pokemon' onclick='showCard(this, "${pokemon}", "${pair}")'>
                    </div>`
                }
            });
    }
}

button.addEventListener('click', giveCards);

function showCard(img, pokemon, pair) {
    img.src = pokemon;
    let selectedCard = document.querySelector('.selected');
    if(selectedCard === null){
        img.classList.add('selected');
        img.classList.add(pair);
    } else {
        if(!selectedCard.classList.contains(pair)) {
            setTimeout(function(){
                selectedCard.src = imgDefault;
                img.src = imgDefault;
            }, 1000); 
        }
        selectedCard.classList.remove('selected');
    }
}

