import Notiflix from 'notiflix';
import axios from 'axios';
const refs = {
  selectEl: document.querySelector('#selectElement'),
  loaderEl: document.querySelector(`.loader`),
  catInfoContainer: document.querySelector(`.cat-info`),
};
// const YOUR_API_KEY = `live_sZJSF2r3b7RaQcpCRE4JWCZQFkPyecbqN78KnhGUiHv7pDzuobrRQWETam8vMi86`;
// const url = `https://api.thecatapi.com/v1/`;
// const select = new SlimSelect({
//   select: '#selectElement',
// });

// function fetchBreeds() {
//   refs.loaderEl.classList.remove('is-hidden');
//   return axios
//     .get(`${url}breeds`, {
//       headers: {
//         'x-api-key': YOUR_API_KEY,
//       },
//     })
//     .then(res => {
//       if (res.status !== 200) {
//         throw new Error();
//       }
//       refs.loaderEl.classList.remove('is-hidden');
//       const options = res.data.map(({ reference_image_id, name }) => ({
//         value: reference_image_id,
//         text: name,
//       }));
//       select.setData(options);
//       refs.loaderEl.classList.add(`is-hidden`);
//     })
//     .catch(function () {
//       // refs.loaderEl.classList.add(`is-hidden`);
//       Notiflix.Notify.failure(
//         `Oops! Something went wrong! Try reloading the page!`
//       );
//     });
// }
// fetchBreeds();
// refs.selectEl.addEventListener(`change`, onChange);
// let firsLoad = true;
// function onChange(ev) {
//   if (firsLoad) {
//     firsLoad = false;
//     return;
//   }
//   refs.loaderEl.classList.remove('is-hidden');
//   const idCat = ev.target.value;
//   axios
//     .get(`${url}images/${idCat}`, {
//       headers: {
//         'x-api-key': YOUR_API_KEY,
//       },
//     })
//     .then(res => {
//       const { url } = res.data;
//       const { description, name, temperament } = res.data.breeds[0];
//       const marcup = `
//         <img src="${url}" alt="${name}">
//         <div class="title">temperament
//         <h3>${name}</h3>
//         <p>${description}</p>
//         <p><strong>Temperament:</strong> ${temperament}</p>
//         </div>
//       `;
     
//       refs.catInfoContainer.innerHTML = marcup;
//       refs.loaderEl.classList.add(`is-hidden`);
//     });
    
// }
    






const test = document.querySelector(`.in`)
 test.addEventListener(`input`, onInput)
 function onInput(){
console.log(`object`);
 }



 
  export async function popularProdact() {
  const url = 'https://food-boutique.b.goit.study/api/products/popular';
      const res = await axios.get(url);
    return res.data;  
}
  


document.addEventListener("DOMContentLoaded", onReload);
const popularList = document.querySelector(`.cat-info`)
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
     return popularCards.reduce((markup, productCard) => markup + renderPopularCards(productCard), '')
    } 
 catch(err) {  
    
     onError(err);
 }
}

function renderPopularCards({img, name, price, size, popularity}){
  return `
  <li class="list-item" data-id="">
      <img class="img-popular" src="${img}" alt="">     
          <h3 class="popular-title">${name}</h3>
          <p class="popular-desc">${price}</p>
          <p class="popular-desc">${size}</p>      
  </li>
  `
}
function updateCardList(markup){
  popularList.insertAdjacentHTML('beforeend', markup);
}
