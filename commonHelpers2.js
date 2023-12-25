import{s as n}from"./assets/sptite-38d11adb.js";import{S as v,a as u}from"./assets/vendor-3d334923.js";new v({select:"#single"});const f=document.querySelector(".filters-form");f.addEventListener("submit",t=>{t.preventDefault()});async function h({keyword:t,category:s,page:a,limit:o}){const r="https://food-boutique.b.goit.study/api/products";return(await u.get(r,{params:{keyword:t,category:s,page:a,limit:o}})).data}async function y(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await u.get(t)).data}const $=document.querySelector(".products-list"),b={keyword:null,category:null,page:1,limit:6};async function w(){return localStorage.getItem("settings")?await p(JSON.parse(localStorage.getItem("settings"))):await p(b)}async function p(t){try{const s=await h(t);$.innerHTML=_(s.results)}catch(s){console.log(s.message)}}function _(t){return t.map(({name:s,img:a,category:o,size:r,popularity:c,price:e,is10PercentOff:l,_id:g})=>(o.includes("_")&&(o=o.split("_").join(" ")),`
    <div class="productlist-card" data-id="${g}">
    <div class="productlist-card-img-wrapper">
        <img src="${a}" alt="${s}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${s}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${o}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${r}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${c}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${e}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${n}#icon-cart"></use>
            </svg></button>
    </div>
    ${l?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${n}#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}const S={keyword:null,category:null,page:1,limit:6},k=[];function L(){localStorage.setItem("settings",JSON.stringify(S))}function x(){localStorage.setItem("cart",JSON.stringify(k))}const d=document.querySelector(".wrapperPopularProduct"),E=document.querySelector("body");document.addEventListener("DOMContentLoaded",C);async function C(){try{const t=await M();if(t===void 0)throw new Error;q(t)}catch{m()}}function P({category:t,img:s,name:a,popularity:o,size:r,_id:c}){return`
  <li data-id='${c}' class="popular__products-items  ">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${s}"
      alt="${a}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${a}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${t}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${r}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${o}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${n}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function M(){try{return(await y()).reduce((s,a)=>s+P(a),"")}catch{m()}}function q(t){d.insertAdjacentHTML("beforeend",t)}function m(){console.error("Error:",err),d.innerHTML=""}d.addEventListener("click",i);async function i(t){if(d.removeEventListener("click",i),t.target.closest("button"))return d.addEventListener("click",i);const a=t.target.closest("li").dataset.id,o=await j(a);E.insertAdjacentHTML("beforeend",z(o)),I()}async function j(t){const s="https://food-boutique.b.goit.study/api/products/";return u.get(`${s}${t}`).then(a=>a.data).catch(a=>{throw new Error(a)})}function z(t){const{name:s,category:a,size:o,popularity:r,desc:c,price:e,img:l}=t;return`
    <div class="backdrop" data-modal>
  <div class="modal-container" data-modal>
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${n}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${l}"
          alt="${s}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${s}</p>
        <div class="modal-container-descs">
          <p class="modal-product modal-product-desc">
            Category:
            <span class="modal-product-desc modal-product-desc-value"
              >${a}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Size:
            <span class="modal-product-desc modal-product-desc-value"
              >${o}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${r}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${c}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${e}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function I(){const t=document.querySelector("[data-modal-close]"),s=document.querySelector("[data-modal]"),a=document.querySelector(".backdrop");t.addEventListener("click",c),a.addEventListener("click",o);function o(e){e.target===a&&(c(),a.removeEventListener("click",o))}document.addEventListener("keydown",r);function r(e){e.code==="Escape"&&c()}function c(){s.remove(),document.removeEventListener("keydown",r),t.removeEventListener("click",c)}d.addEventListener("click",i)}L();x();w();
//# sourceMappingURL=commonHelpers2.js.map
