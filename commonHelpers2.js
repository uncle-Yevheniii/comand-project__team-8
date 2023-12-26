import{c as s}from"./assets/sptite-51f64df6.js";import{a as g,S as x}from"./assets/vendor-3d334923.js";async function P(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await g.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function b({keyword:t,category:e,page:o,limit:r}){const c="https://food-boutique.b.goit.study/api/products";return(await g.get(c,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function I(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await g.get(t)).data}const M=document.querySelector(".filters-form"),i=document.querySelector(".filters-form-input"),n=document.querySelector(".filters-form-select-category"),j=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let S=[];const O=async()=>{S=[...await P(),"Show all"];const e=j(S);n.insertAdjacentHTML("beforeend",e),new x({select:"#category",settings:{placeholderText:"Categories",showSearch:!1}})};O();const m=async t=>{const e=await b(t);console.log(e.results)},T=t=>{t.preventDefault();const e=i.value.trim(),o=n.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(r)),m(r)},J=t=>{if(t.target.value===""){const e=n.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(o)),m(o)}},N=t=>{const e=i.value.trim(),o=t.target.value,r={keyword:e||null,category:o.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(r)),m(r)};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("LS_QUERY_KEY"))||{keyword:null,category:null};i.value=t.keyword,n.value=t.category,m(t),M.addEventListener("submit",T),n.addEventListener("change",N),i.addEventListener("input",J)});const k=document.querySelector(".products-list"),A={keyword:null,category:null,page:1,limit:6};async function H(){return localStorage.getItem("settings")?await w(JSON.parse(localStorage.getItem("settings"))):await w(A)}async function w(t){try{const e=await b(t);k.innerHTML=Y(e.results)}catch(e){console.log(e.message)}}function Y(t){return t.map(({name:e,img:o,category:r,size:c,popularity:a,price:y,is10PercentOff:v,_id:q})=>(r.includes("_")&&(r=r.split("_").join(" ")),`
    <div class="productlist-card" data-id="${q}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${r}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${a}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${y}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${s}#icon-cart"></use>
            </svg></button>
    </div>
    ${v?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${s}#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}window.addEventListener("load",_);k.addEventListener("click",z);function z(t){const o=t.target.closest(".productlist-card-btn");if(o){const r=o.closest(".productlist-card"),a={id:r.dataset.id,name:r.querySelector(".productlist-card-header").textContent,price:r.querySelector(".productlist-card-price").textContent,category:r.dataset.category,img:r.querySelector(".productlist-card-img").src,size:r.dataset.size};R(a,o)}}function R(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c.id===t.id)){const c=e.querySelector(".productlist-card-icon-cart use");c.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),c.setAttribute("href",`${s}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");_()}function _(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const F={keyword:null,category:null,page:1,limit:6},K=[];function U(){localStorage.setItem("settings",JSON.stringify(F))}function B(){localStorage.setItem("cart",JSON.stringify(K))}const E=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",Q);async function Q(){try{const t=await V();if(t===void 0)throw new Error;G(t)}catch{L()}}function D({category:t,img:e,name:o,popularity:r,size:c,_id:a}){return`
  <li data-id='${a}' class="popular__products-items  ">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${e}"
      alt="${o}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${o}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${t}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${c}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${r}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${s}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function V(){try{return(await I()).reduce((e,o)=>e+D(o),"")}catch{L()}}function G(t){E.insertAdjacentHTML("beforeend",t)}function L(){console.error("Error:",err),E.innerHTML=""}const d=document.querySelector(".wrapperPopularProduct");console.log(d);const f=document.querySelector("body");d.addEventListener("click",p);const l=document.querySelector(".products-list");console.log(l);l.addEventListener("click",u);async function u(t){l.removeEventListener("click",u);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){l.addEventListener("click",u);return}console.log(e);const o=e.dataset.id,r=await $(o);console.log(r),f.insertAdjacentHTML("beforeend",h(r)),C()}async function p(t){d.removeEventListener("click",p);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){d.addEventListener("click",p);return}const o=e.dataset.id,r=await $(o);console.log(r),f.insertAdjacentHTML("beforeend",h(r)),C()}async function $(t){const e="https://food-boutique.b.goit.study/api/products/";return g.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function h(t){const{name:e,category:o,size:r,popularity:c,desc:a,price:y,img:v}=t;return`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${s}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${v}"
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
              >${r}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${c}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${a}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${y}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${s}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function C(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function o(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",c),e.removeEventListener("click",r))}function r(a){a.target===e&&(o(),e.removeEventListener("click",r))}function c(a){a.code==="Escape"&&(o(),document.removeEventListener("keydown",c))}d.addEventListener("click",p),l.addEventListener("click",u),t.addEventListener("click",o),e.addEventListener("click",r),document.addEventListener("keydown",c),document.querySelector("[data-modal]")||f.insertAdjacentHTML("beforeend",h(info))}U();B();H();
//# sourceMappingURL=commonHelpers2.js.map
