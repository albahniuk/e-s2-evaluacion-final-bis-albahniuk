'use strict';

console.log('>> Ready :)');
const urlApi = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
const cardsContainer = document.querySelector('.main__cards');
const button = document.querySelector('.header__btn');
const imgDefault = 'assets/images/ffffff.png';

function giveCards() {
    let inputUser = document.querySelector('input[name="numbercards"]:checked');
    if(inputUser !== null) {
        fetch(urlApi + inputUser.value + '.json')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    cardsContainer.innerHTML += `
                    <div>
                    <img class="img" src='${imgDefault}' alt='pokemon'>
                    </div>`
                    }
                    const img = document.querySelectorAll('.img');

                    img.addEventListener('click', showCard);

                    function showCard(e) {
                        const selectedCard = e.currentTarget;
                        const image = data[i].image;
                        console.log('Hola');
                        selectedCard.src = `'${image}'`;
                    
                }
            });
    }
}

button.addEventListener('click', giveCards);
//# sourceMappingURL=main.js.map
