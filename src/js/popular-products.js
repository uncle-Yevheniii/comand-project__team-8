import { popularProdact } from "../API.js";
import { renderCards } from "../API.js";


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
