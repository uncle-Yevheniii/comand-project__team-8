import"./assets/styles-eb900a30.js";import{a as s}from"./assets/vendor-a61d8330.js";async function u(){const e="https://food-boutique.b.goit.study/api/products/popular";return(await s.get(e)).data}document.addEventListener("DOMContentLoaded",l);const c=document.querySelector(".wrapperPopularProduct");async function l(){try{const e=await i();if(e===void 0)throw new Error;m(e)}catch{d()}}async function i(){try{return(await u()).reduce((r,t)=>r+p(t),"")}catch{d()}}function p({img:e,name:r,price:t,size:a,popularity:o}){return`
  <li class="list-item" data-id="">
      <img class="img-popular" src="${e}" alt="">     
          <h3 class="popular-title">${r}</h3>
          <p class="popular-desc">${t}</p>
          <p class="popular-desc">${a}</p>
          <p class="popular-desc">${o}</p>       
  </li>
  `}function m(e){c.insertAdjacentHTML("beforeend",e)}function d(){console.error("Error:",err),c.innerHTML=""}(()=>{const e={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")},r=document.querySelector(".backdrop");e.closeModalBtn.addEventListener("click",o),r.addEventListener("click",t);function t(n){n.target===r&&o()}document.addEventListener("keydown",a);function a(n){n.code==="Escape"&&(o(),document.removeEventListener("keydown",a))}function o(){e.modal.classList.add("is-hidden")}})();
//# sourceMappingURL=commonHelpers2.js.map
