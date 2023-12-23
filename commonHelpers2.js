import"./assets/styles-efbaacc4.js";import{a as p}from"./assets/vendor-a61d8330.js";async function c(){const r="https://food-boutique.b.goit.study/api/products/popular";return(await p.get(r)).data}document.addEventListener("DOMContentLoaded",u);const o=document.querySelector(".wrapperPopularProduct");async function u(){try{const r=await i();if(r===void 0)throw new Error;l(r)}catch{e()}}async function i(){try{return(await c()).reduce((a,t)=>a+d(t),"")}catch{e()}}function d({img:r,name:a,price:t,size:n,popularity:s}){return`
  <li class="list-item" data-id="">
      <img class="img-popular" src="${r}" alt="">     
          <h3 class="popular-title">${a}</h3>
          <p class="popular-desc">${t}</p>
          <p class="popular-desc">${n}</p>
          <p class="popular-desc">${s}</p>       
  </li>
  `}function l(r){o.insertAdjacentHTML("beforeend",r)}function e(){console.error("Error:",err),o.innerHTML=""}
//# sourceMappingURL=commonHelpers2.js.map
