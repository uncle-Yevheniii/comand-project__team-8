import{c as a}from"./assets/sptite-f3cd3724.js";import{a as f,S as P}from"./assets/vendor-3d334923.js";async function O(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await f.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function M({keyword:t,category:e,page:o,limit:r}){const c="https://food-boutique.b.goit.study/api/products";return(await f.get(c,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function J(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await f.get(t)).data}const i=document.querySelector(".wrapperPopularProduct");console.log(i);const w=document.querySelector("body");i.addEventListener("click",g);const l=document.querySelector(".products-list");console.log(l);l.addEventListener("click",p);async function p(t){l.removeEventListener("click",p);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){l.addEventListener("click",p);return}console.log(e);const o=e.dataset.id,r=await S(o);console.log(r),w.insertAdjacentHTML("beforeend",k(r)),E()}async function g(t){i.removeEventListener("click",g);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){i.addEventListener("click",g);return}const o=e.dataset.id,r=await S(o);console.log(r),w.insertAdjacentHTML("beforeend",k(r)),E()}async function S(t){const e="https://food-boutique.b.goit.study/api/products/";return f.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function k(t){const{name:e,category:o,size:r,popularity:c,desc:s,price:v,img:y}=t;return`
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
            <span class="modal-product-desc modal-product-desc-value">${c}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${s}

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
    
    `}function E(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function o(){const s=document.querySelector("[data-modal]");s&&(s.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",c),e.removeEventListener("click",r))}function r(s){s.target===e&&(o(),e.removeEventListener("click",r))}function c(s){s.code==="Escape"&&(o(),document.removeEventListener("keydown",c))}i.addEventListener("click",g),l.addEventListener("click",p),t.addEventListener("click",o),e.addEventListener("click",r),document.addEventListener("keydown",c),document.querySelector("[data-modal]")||w.insertAdjacentHTML("beforeend",k(info))}const d=document.querySelector(".products-list"),$=document.querySelector(".products-list-none");let N=6;const T={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",A);function j(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function n(){return localStorage.getItem("settings")?await b(JSON.parse(localStorage.getItem("settings"))):await b(T)}async function b(t){try{t=j(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await M(t);o.results.length===0?($.classList.remove("hidden"),d.classList.add("hidden")):(d.classList.contains("hidden")&&($.classList.add("hidden"),d.classList.remove("hidden")),d.innerHTML=H(o.results))}catch(e){console.log(e.message)}}function A(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${N}`),n())}function H(t){return t.map(({name:e,img:o,category:r,size:c,popularity:s,price:v,is10PercentOff:y,_id:L})=>{r.includes("_")&&(r=r.split("_").join(" "));const h=(JSON.parse(localStorage.getItem("cart"))||[]).find(x=>x._id===L);return`
    <div class="productlist-card" data-id="${L}">
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
          Popularity: <span class="productlist-card-text-span">${s}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${v}</span>
        <button type="button" class="productlist-card-btn" ${h?"disabled":""}>
            <svg class="productlist-card-icon-${h?"check":"cart"}" width="18" height="18">
                <use href="${a}#icon-${h?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${y?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${a}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",C);d.addEventListener("click",W);async function W(t){const o=t.target.closest(".productlist-card-btn");if(o){const c=o.closest(".productlist-card").dataset.id,s=await S(c);s.quantity=1,z(s,o)}}function z(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".productlist-card-icon-cart use"),s=e.querySelector(".productlist-card-icon-cart");console.log(s),s.classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),c.setAttribute("href",`${a}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");C()}function C(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const F=document.querySelector(".filters-form"),m=document.querySelector(".filters-form-input"),u=document.querySelector(".filters-form-select-category"),B=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let _=[];const D=async()=>{_=[...await O()];const e=B(_);u.insertAdjacentHTML("beforeend",e),new P({select:"#category",settings:{showSearch:!1}})};D();const R=t=>{t.preventDefault();const e=m.value.trim(),o=u.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),n()},V=t=>{if(t.target.value===""){const e=u.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),n()}},G=t=>{const e=m.value.trim(),o=t.target.value,r={keyword:e||null,category:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),n()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};m.value=t.keyword,u.value=t.category,n(),F.addEventListener("submit",R),u.addEventListener("change",G),m.addEventListener("input",V)});const K={keyword:null,category:null,page:1,limit:6},U=[];function Q(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(K))}function X(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(U))}const q=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",Y);async function Y(){try{const t=await tt();if(t===void 0)throw new Error;et(t)}catch{I()}}function Z({category:t,img:e,name:o,popularity:r,size:c,_id:s}){return`
  <li data-id='${s}' class="popular__products-items  ">
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
      <use href="${a}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function tt(){try{return(await J()).reduce((e,o)=>e+Z(o),"")}catch{I()}}function et(t){q.insertAdjacentHTML("beforeend",t)}function I(){console.error("Error:",err),q.innerHTML=""}Q();X();n();
//# sourceMappingURL=commonHelpers2.js.map
