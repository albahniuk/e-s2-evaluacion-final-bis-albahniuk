"use strict";console.log(">> Ready :)");const urlApi="https://raw.githubusercontent.com/Adalab/cards-data/master/",cardsContainer=document.querySelector(".main__cards"),button=document.querySelector(".header__btn"),imgDefault="assets/images/ffffff.png";function giveCards(){cardsContainer.innerHTML="";let e=document.querySelector('input[name="numbercards"]:checked');null!==e&&fetch(urlApi+e.value+".json").then(e=>e.json()).then(e=>{for(let t=0;t<e.length;t++){const s=e[t].image,n=e[t].pair;cardsContainer.innerHTML+=`\n                    <div class="card">\n                    <img class="img" src='${imgDefault}' alt='pokemon' onclick='showCard(this, "${s}", "${n}")'>\n                    </div>`}})}function showCard(e,t,s){e.src=t;let n=document.querySelector(".selected");null===n?(e.classList.add("selected"),e.classList.add(s)):(n.classList.contains(s)||setTimeout(function(){n.src=imgDefault,e.src=imgDefault},1e3),n.classList.remove("selected"))}button.addEventListener("click",giveCards);