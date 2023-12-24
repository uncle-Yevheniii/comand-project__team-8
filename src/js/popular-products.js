import { popularProdact } from "../API.js";



document.addEventListener("DOMContentLoaded", onReload);
const popularList = document.querySelector(`.wrapperPopularProduct`)
async function onReload(){
  try {
      const markup = await generatePopularCardListMarkup();
      if(markup === undefined) throw new Error;
     
     updateCardList(markup); 

  } catch(err) {
      onError(err);
  }
}

function renderCards({img, name, price, size, popularity}){
    return `
  <li class="list-item" data-id="">
      <img class="img-popular" src="${img}" alt="">     
          <h3 class="popular-title">${name}</h3>
          <p class="popular-desc">${price}</p>
          <p class="popular-desc">${size}</p>
          <p class="popular-desc">${popularity}</p>       
  </li>
  `
}

async function generatePopularCardListMarkup(){
  try {
     const popularCards = await popularProdact();
     return popularCards.reduce((markup, productCard) => markup + renderCards(productCard), '')
    } 
 catch(err) {     
     onError(err);
 }
}


function updateCardList(markup){
  popularList.insertAdjacentHTML('beforeend', markup);
}

function onError(){ 
    console.error('Error:', err);
    popularList.innerHTML = '';
   
}
