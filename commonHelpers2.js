import{c as v}from"./assets/sptite-6e6a83f4.js";import{S as f,a as i}from"./assets/vendor-3d334923.js";new f({select:"#single"});const h=document.querySelector(".filters-form");h.addEventListener("submit",t=>{t.preventDefault()});async function y({keyword:t,category:e,page:o,limit:c}){const s="https://food-boutique.b.goit.study/api/products";return(await i.get(s,{params:{keyword:t,category:e,page:o,limit:c}})).data}async function w(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await i.get(t)).data}const $=document.querySelector(".products-list"),b={keyword:null,category:null,page:1,limit:6};L();async function L(){return localStorage.getItem("settings")?await u(JSON.parse(localStorage.getItem("settings"))):await u(b)}async function u(t){try{const e=await y(t);$.innerHTML=k(e.results)}catch(e){console.log(e.message)}}function k(t){return t.map(({name:e,img:o,category:c,size:s,popularity:a,price:r,is10PercentOff:n,_id:g})=>(c.includes("_")&&(c=c.split("_").join(" ")),`
    <div class="productlist-card" data-id="${g}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${s}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${a}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${r}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${v}#icon-cart"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="../img/sptite.svg#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}document.addEventListener("DOMContentLoaded",E);const p=document.querySelector(".wrapperPopularProduct");async function E(){try{const t=await x();if(t===void 0)throw new Error;P(t)}catch{m()}}function S({img:t,name:e,price:o,size:c,popularity:s}){return`
    <li class="list-item" data-id="">
      <img class="img-popular" src="${t}" alt="">     
          <h3 class="popular-title">${e}</h3>
          <p class="popular-desc">${o}</p>
          <p class="popular-desc">${c}</p>
          <p class="popular-desc">${s}</p>       
    </li>
  `}async function x(){try{return(await w()).reduce((e,o)=>e+S(o),"")}catch{m()}}function P(t){p.insertAdjacentHTML("beforeend",t)}function m(){console.error("Error:",err),p.innerHTML=""}const d=document.querySelector(".wrapperPopularProduct");console.log(d);const q=document.querySelector("body");d.addEventListener("click",l);async function l(t){d.removeEventListener("click",l);const o=t.target.closest("li").dataset.id,c=await C(o);console.log(c),q.insertAdjacentHTML("beforeend",M(c)),j()}async function C(t){const e="https://food-boutique.b.goit.study/api/products/";return i.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function M(t){const{name:e,category:o,size:c,popularity:s,desc:a,price:r,img:n}=t;return`
    <div class="backdrop" data-modal>
  <div class="modal-container" data-modal>
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="../img/sptite.svg#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${n}"
          alt="${e}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${e}</p>
        <div class="modal-container-descs">
          <p class="modal-product modal-product-desc">
            Category:
            <span class="modal-product-desc modal-product-desc-value"
              >${o}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Size:
            <span class="modal-product-desc modal-product-desc-value"
              >${c}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${s}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${a}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${r}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="../img/sptite.svg#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function j(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector("[data-modal]"),o=document.querySelector(".backdrop");t.addEventListener("click",a),o.addEventListener("click",c);function c(r){r.target===o&&(a(),o.removeEventListener("click",c))}document.addEventListener("keydown",s);function s(r){r.code==="Escape"&&a()}function a(){console.log("!!!!!!!"),e.remove(),document.removeEventListener("keydown",s),t.removeEventListener("click",a)}d.addEventListener("click",l)}
//# sourceMappingURL=commonHelpers2.js.map
