import{c as s}from"./assets/sptite-51f64df6.js";import{a as m,S as C}from"./assets/vendor-3d334923.js";async function q(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await m.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function _({keyword:t,category:e,page:o,limit:r}){const c="https://food-boutique.b.goit.study/api/products";return(await m.get(c,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function x(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await m.get(t)).data}const P=document.querySelector(".filters-form"),i=document.querySelector(".filters-form-input"),n=document.querySelector(".filters-form-select-category"),M=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let S=[];const j=async()=>{S=[...await q(),"Show all"];const e=M(S);n.insertAdjacentHTML("beforeend",e),new C({select:"#category",settings:{placeholderText:"Categories",showSearch:!1}})};j();const g=async t=>{const e=await _(t);console.log(e.results)},I=t=>{t.preventDefault();const e=i.value.trim(),o=n.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(r)),g(r)},O=t=>{if(t.target.value===""){const e=n.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(o)),g(o)}},T=t=>{const e=i.value.trim(),o=t.target.value,r={keyword:e||null,category:o.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(r)),g(r)};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("LS_QUERY_KEY"))||{keyword:null,category:null};i.value=t.keyword,n.value=t.category,g(t),P.addEventListener("submit",I),n.addEventListener("change",T),i.addEventListener("input",O)});const Y=document.querySelector(".products-list"),A={keyword:null,category:null,page:1,limit:6};async function H(){return localStorage.getItem("settings")?await w(JSON.parse(localStorage.getItem("settings"))):await w(A)}async function w(t){try{const e=await _(t);Y.innerHTML=J(e.results)}catch(e){console.log(e.message)}}function J(t){return t.map(({name:e,img:o,category:r,size:c,popularity:a,price:v,is10PercentOff:y,_id:$})=>(r.includes("_")&&(r=r.split("_").join(" ")),`
    <div class="productlist-card" data-id="${$}">
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
        <span class="productlist-card-price">$${v}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${s}#icon-cart"></use>
            </svg></button>
    </div>
    ${y?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${s}#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}const N={keyword:null,category:null,page:1,limit:6},R=[];function z(){localStorage.setItem("settings",JSON.stringify(N))}function F(){localStorage.setItem("cart",JSON.stringify(R))}const b=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",K);async function K(){try{const t=await Q();if(t===void 0)throw new Error;B(t)}catch{L()}}function U({category:t,img:e,name:o,popularity:r,size:c,_id:a}){return`
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
  `}async function Q(){try{return(await x()).reduce((e,o)=>e+U(o),"")}catch{L()}}function B(t){b.insertAdjacentHTML("beforeend",t)}function L(){console.error("Error:",err),b.innerHTML=""}const d=document.querySelector(".wrapperPopularProduct");console.log(d);const f=document.querySelector("body");d.addEventListener("click",p);const l=document.querySelector(".products-list");console.log(l);l.addEventListener("click",u);async function u(t){l.removeEventListener("click",u);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){l.addEventListener("click",u);return}console.log(e);const o=e.dataset.id,r=await k(o);console.log(r),f.insertAdjacentHTML("beforeend",h(r)),E()}async function p(t){d.removeEventListener("click",p);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){d.addEventListener("click",p);return}const o=e.dataset.id,r=await k(o);console.log(r),f.insertAdjacentHTML("beforeend",h(r)),E()}async function k(t){const e="https://food-boutique.b.goit.study/api/products/";return m.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function h(t){const{name:e,category:o,size:r,popularity:c,desc:a,price:v,img:y}=t;return`
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
            <span class="modal-product-desc modal-product-desc-value">${c}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${a}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${v}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${s}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function E(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function o(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",c),e.removeEventListener("click",r))}function r(a){a.target===e&&(o(),e.removeEventListener("click",r))}function c(a){a.code==="Escape"&&(o(),document.removeEventListener("keydown",c))}d.addEventListener("click",p),l.addEventListener("click",u),t.addEventListener("click",o),e.addEventListener("click",r),document.addEventListener("keydown",c),document.querySelector("[data-modal]")||f.insertAdjacentHTML("beforeend",h(info))}z();F();H();
//# sourceMappingURL=commonHelpers2.js.map
