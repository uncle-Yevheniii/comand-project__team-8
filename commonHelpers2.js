import{c as r}from"./assets/sptite-c9cd83f4.js";import{S as _,a as m}from"./assets/vendor-3d334923.js";new _({select:"#single"});const k=document.querySelector(".filters-form");k.addEventListener("submit",t=>{t.preventDefault()});async function L({keyword:t,category:o,page:e,limit:s}){const a="https://food-boutique.b.goit.study/api/products";return(await m.get(a,{params:{keyword:t,category:o,page:e,limit:s}})).data}async function S(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await m.get(t)).data}const E=document.querySelector(".products-list"),x={keyword:null,category:null,page:1,limit:6};async function C(){return localStorage.getItem("settings")?await f(JSON.parse(localStorage.getItem("settings"))):await f(x)}async function f(t){try{const o=await L(t);E.innerHTML=P(o.results)}catch(o){console.log(o.message)}}function P(t){return t.map(({name:o,img:e,category:s,size:a,popularity:c,price:u,is10PercentOff:p,_id:$})=>(s.includes("_")&&(s=s.split("_").join(" ")),`
    <div class="productlist-card" data-id="${$}">
    <div class="productlist-card-img-wrapper">
        <img src="${e}" alt="${o}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${o}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${s}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${a}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${c}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${u}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${r}#icon-cart"></use>
            </svg></button>
    </div>
    ${p?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${r}#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}const q={keyword:null,category:null,page:1,limit:6},M=[];function j(){localStorage.setItem("settings",JSON.stringify(q))}function A(){localStorage.setItem("cart",JSON.stringify(M))}const y=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",H);async function H(){try{const t=await T();if(t===void 0)throw new Error;z(t)}catch{h()}}function I({category:t,img:o,name:e,popularity:s,size:a,_id:c}){return`
  <li data-id='${c}' class="popular__products-items  ">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${o}"
      alt="${e}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${e}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${t}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${a}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${s}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${r}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function T(){try{return(await S()).reduce((o,e)=>o+I(e),"")}catch{h()}}function z(t){y.insertAdjacentHTML("beforeend",t)}function h(){console.error("Error:",err),y.innerHTML=""}const d=document.querySelector(".wrapperPopularProduct");console.log(d);const g=document.querySelector("body");d.addEventListener("click",i);const n=document.querySelector(".products-list");console.log(n);n.addEventListener("click",l);async function l(t){n.removeEventListener("click",l);const o=t.target.closest(".productlist-card");if(o===null||t.target.closest(".productlist-card-btn")){n.addEventListener("click",l);return}console.log(o);const e=o.dataset.id,s=await b(e);console.log(s),g.insertAdjacentHTML("beforeend",v(s)),w()}async function i(t){d.removeEventListener("click",i);const o=t.target.closest("li");if(o===null||t.target.closest(".popular__products-button")){d.addEventListener("click",i);return}const e=o.dataset.id,s=await b(e);console.log(s),g.insertAdjacentHTML("beforeend",v(s)),w()}async function b(t){const o="https://food-boutique.b.goit.study/api/products/";return m.get(`${o}${t}`).then(e=>e.data).catch(e=>{throw new Error(e)})}function v(t){const{name:o,category:e,size:s,popularity:a,desc:c,price:u,img:p}=t;return`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${r}#icon-close"></use>
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
              >${e}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Size:
            <span class="modal-product-desc modal-product-desc-value"
              >${s}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${a}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${c}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${u}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${r}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function w(){const t=document.querySelector("[data-modal-close]"),o=document.querySelector(".backdrop");function e(){const c=document.querySelector("[data-modal]");c&&(c.remove(),t.removeEventListener("click",e),document.removeEventListener("keydown",a),o.removeEventListener("click",s))}function s(c){c.target===o&&(e(),o.removeEventListener("click",s))}function a(c){c.code==="Escape"&&(e(),document.removeEventListener("keydown",a))}d.addEventListener("click",i),n.addEventListener("click",l),t.addEventListener("click",e),o.addEventListener("click",s),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||g.insertAdjacentHTML("beforeend",v(info))}j();A();C();
//# sourceMappingURL=commonHelpers2.js.map
