import{c as d}from"./assets/sptite-79686bc2.js";import{S as _,a as m}from"./assets/vendor-3d334923.js";new _({select:"#single"});const S=document.querySelector(".filters-form");S.addEventListener("submit",t=>{t.preventDefault()});async function k({keyword:t,category:o,page:s,limit:c}){const e="https://food-boutique.b.goit.study/api/products";return(await m.get(e,{params:{keyword:t,category:o,page:s,limit:c}})).data}async function L(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await m.get(t)).data}const E=document.querySelector(".products-list"),x={keyword:null,category:null,page:1,limit:6};async function C(){return localStorage.getItem("settings")?await g(JSON.parse(localStorage.getItem("settings"))):await g(x)}async function g(t){try{const o=await k(t);E.innerHTML=P(o.results)}catch(o){console.log(o.message)}}function P(t){return t.map(({name:o,img:s,category:c,size:e,popularity:a,price:r,is10PercentOff:p,_id:w})=>(c.includes("_")&&(c=c.split("_").join(" ")),`
    <div class="productlist-card" data-id="${w}">
    <div class="productlist-card-img-wrapper">
        <img src="${s}" alt="${o}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${o}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${e}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${a}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${r}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${d}#icon-cart"></use>
            </svg></button>
    </div>
    ${p?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}const q={keyword:null,category:null,page:1,limit:6},M=[];function j(){localStorage.setItem("settings",JSON.stringify(q))}function I(){localStorage.setItem("cart",JSON.stringify(M))}const v=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",z);async function z(){try{const t=await H();if(t===void 0)throw new Error;O(t)}catch{f()}}function A({category:t,img:o,name:s,popularity:c,size:e,_id:a}){return`
  <li data-id='${a}' class="popular__products-items  ">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${o}"
      alt="${s}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${s}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${t}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${e}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${c}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${d}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function H(){try{return(await L()).reduce((o,s)=>o+A(s),"")}catch{f()}}function O(t){v.insertAdjacentHTML("beforeend",t)}function f(){console.error("Error:",err),v.innerHTML=""}const n=document.querySelector(".wrapperPopularProduct");console.log(n);const h=document.querySelector("body");n.addEventListener("click",u);const l=document.querySelector(".products-list");console.log(l);l.addEventListener("click",i);async function i(t){l.removeEventListener("click",i);const o=t.target.closest(".productlist-card");if(o===null||t.target.closest(".productlist-card-btn")){l.addEventListener("click",i);return}console.log(o);const s=o.dataset.id,c=await y(s);console.log(c),h.insertAdjacentHTML("beforeend",b(c)),$()}async function u(t){n.removeEventListener("click",u);const o=t.target.closest("li");if(o===null||t.target.closest(".popular__products-button")){n.addEventListener("click",u);return}const s=o.dataset.id,c=await y(s);console.log(c),h.insertAdjacentHTML("beforeend",b(c)),$()}async function y(t){const o="https://food-boutique.b.goit.study/api/products/";return m.get(`${o}${t}`).then(s=>s.data).catch(s=>{throw new Error(s)})}function b(t){const{name:o,category:s,size:c,popularity:e,desc:a,price:r,img:p}=t;return`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${d}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${p}"
          alt="${o}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${o}</p>
        <div class="modal-container-descs">
          <p class="modal-product modal-product-desc">
            Category:
            <span class="modal-product-desc modal-product-desc-value"
              >${s}</span
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
            <span class="modal-product-desc modal-product-desc-value">${e}</span>
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
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function $(){const t=document.querySelector("[data-modal-close]"),o=document.querySelector("[data-modal]"),s=document.querySelector(".backdrop");function c(){console.log("!!!!!!!"),o.remove(),document.removeEventListener("keydown",a),t.removeEventListener("click",c)}t.addEventListener("click",c),s.addEventListener("click",e);function e(r){r.target===s&&(c(),s.removeEventListener("click",e))}document.addEventListener("keydown",a);function a(r){r.code==="Escape"&&c(),n.addEventListener("click",u),l.addEventListener("click",i)}}j();I();C();
//# sourceMappingURL=commonHelpers2.js.map
