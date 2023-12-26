import{c as a}from"./assets/sptite-5bd7cadd.js";import{a as f,S as x}from"./assets/vendor-3d334923.js";async function I(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await f.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function P({keyword:t,category:e,page:o,limit:r}){const s="https://food-boutique.b.goit.study/api/products";return(await f.get(s,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function M(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await f.get(t)).data}const i=document.querySelector(".wrapperPopularProduct");console.log(i);const h=document.querySelector("body");i.addEventListener("click",g);const l=document.querySelector(".products-list");console.log(l);l.addEventListener("click",p);async function p(t){l.removeEventListener("click",p);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){l.addEventListener("click",p);return}console.log(e);const o=e.dataset.id,r=await w(o);console.log(r),h.insertAdjacentHTML("beforeend",S(r)),$()}async function g(t){i.removeEventListener("click",g);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){i.addEventListener("click",g);return}const o=e.dataset.id,r=await w(o);console.log(r),h.insertAdjacentHTML("beforeend",S(r)),$()}async function w(t){const e="https://food-boutique.b.goit.study/api/products/";return f.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function S(t){const{name:e,category:o,size:r,popularity:s,desc:c,price:v,img:y}=t;return`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${a}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${y}"
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
            <span class="modal-product-desc modal-product-desc-value">${s}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${c}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${v}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${a}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function $(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function o(){const c=document.querySelector("[data-modal]");c&&(c.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",s),e.removeEventListener("click",r))}function r(c){c.target===e&&(o(),e.removeEventListener("click",r))}function s(c){c.code==="Escape"&&(o(),document.removeEventListener("keydown",s))}i.addEventListener("click",g),l.addEventListener("click",p),t.addEventListener("click",o),e.addEventListener("click",r),document.addEventListener("keydown",s),document.querySelector("[data-modal]")||h.insertAdjacentHTML("beforeend",S(info))}const d=document.querySelector(".products-list"),k=document.querySelector(".products-list-none");let O=6;const J={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",T);function N(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function n(){return localStorage.getItem("settings")?await L(JSON.parse(localStorage.getItem("settings"))):await L(J)}async function L(t){try{t=N(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await P(t);o.results.length===0?(k.classList.remove("hidden"),d.classList.add("hidden")):(d.classList.contains("hidden")&&(k.classList.add("hidden"),d.classList.remove("hidden")),d.innerHTML=j(o.results))}catch(e){console.log(e.message)}}function T(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${O}`),n())}function j(t){return t.map(({name:e,img:o,category:r,size:s,popularity:c,price:v,is10PercentOff:y,_id:q})=>(r.includes("_")&&(r=r.split("_").join(" ")),`
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
          Size: <span class="productlist-card-text-span">${s}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${c}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${v}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${a}#icon-cart"></use>
            </svg></button>
    </div>
    ${y?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${a}#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}window.addEventListener("load",_);d.addEventListener("click",A);async function A(t){const o=t.target.closest(".productlist-card-btn");if(o){const s=o.closest(".productlist-card").dataset.id,c=await w(s);c.quantity=1,H(c,o)}}function H(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(s=>s._id===t._id)){const s=e.querySelector(".productlist-card-icon-cart use");s.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),s.setAttribute("href",`${a}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");_()}function _(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const W=document.querySelector(".filters-form"),m=document.querySelector(".filters-form-input"),u=document.querySelector(".filters-form-select-category"),z=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let b=[];const F=async()=>{b=[...await I()];const e=z(b);u.insertAdjacentHTML("beforeend",e),new x({select:"#category",settings:{showSearch:!1}})};F();const B=t=>{t.preventDefault();const e=m.value.trim(),o=u.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),n()},D=t=>{if(t.target.value===""){const e=u.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),n()}},R=t=>{const e=m.value.trim(),o=t.target.value,r={keyword:e||null,category:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),n()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};m.value=t.keyword,u.value=t.category,n(),W.addEventListener("submit",B),u.addEventListener("change",R),m.addEventListener("input",D)});const V={keyword:null,category:null,page:1,limit:6},G=[];function K(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(V))}function U(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(G))}const C=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",Q);async function Q(){try{const t=await Y();if(t===void 0)throw new Error;Z(t)}catch{E()}}function X({category:t,img:e,name:o,popularity:r,size:s,_id:c}){return`
  <li data-id='${c}' class="popular__products-items  ">
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
        Size: <span class="js-popular__products-size">${s}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${r}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${a}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function Y(){try{return(await M()).reduce((e,o)=>e+X(o),"")}catch{E()}}function Z(t){C.insertAdjacentHTML("beforeend",t)}function E(){console.error("Error:",err),C.innerHTML=""}K();U();n();
//# sourceMappingURL=commonHelpers2.js.map
