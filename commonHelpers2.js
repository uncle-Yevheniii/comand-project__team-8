import{c as a}from"./assets/sptite-5bd7cadd.js";import{a as m,S as P}from"./assets/vendor-3d334923.js";async function M(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await m.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function _({keyword:t,category:e,page:o,limit:r}){const s="https://food-boutique.b.goit.study/api/products";return(await m.get(s,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function O(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await m.get(t)).data}const J=document.querySelector(".filters-form"),u=document.querySelector(".filters-form-input"),d=document.querySelector(".filters-form-select-category"),N=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let S=[];const T=async()=>{S=[...await M()];const e=N(S);d.insertAdjacentHTML("beforeend",e),new P({select:"#category",settings:{showSearch:!1}})};T();const f=async t=>{const e=await _(t);console.log(e.results)},j=t=>{t.preventDefault();const e=u.value.trim(),o=d.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(r)),f(r)},A=t=>{if(t.target.value===""){const e=d.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(o)),f(o)}},z=t=>{const e=u.value.trim(),o=t.target.value,r={keyword:e||null,category:o.trim()||null};localStorage.setItem("LS_QUERY_KEY",JSON.stringify(r)),f(r)};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("LS_QUERY_KEY"))||{keyword:null,category:null};u.value=t.keyword,d.value=t.category,f(t),J.addEventListener("submit",j),d.addEventListener("change",z),u.addEventListener("input",A)});const n=document.querySelector(".products-list"),L=document.querySelector(".products-list-none");let H=6;const Y={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",R);function W(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function b(){return localStorage.getItem("settings")?await k(JSON.parse(localStorage.getItem("settings"))):await k(Y)}async function k(t){try{t=W(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await _(t);o.results.length===0?(L.classList.remove("hidden"),n.classList.add("hidden")):(n.classList.contains("hidden")&&(L.classList.add("hidden"),n.classList.remove("hidden")),n.innerHTML=F(o.results))}catch(e){console.log(e.message)}}function R(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${H}`),b())}function F(t){return t.map(({name:e,img:o,category:r,size:s,popularity:c,price:y,is10PercentOff:v,_id:I})=>(r.includes("_")&&(r=r.split("_").join(" ")),`
    <div class="productlist-card" data-id="${I}">
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
        <span class="productlist-card-price">$${y}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${a}#icon-cart"></use>
            </svg></button>
    </div>
    ${v?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${a}#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}window.addEventListener("load",E);n.addEventListener("click",K);function K(t){const o=t.target.closest(".productlist-card-btn");if(o){const r=o.closest(".productlist-card"),c={id:r.dataset.id,name:r.querySelector(".productlist-card-header").textContent,price:r.querySelector(".productlist-card-price").textContent,category:r.dataset.category,img:r.querySelector(".productlist-card-img").src,size:r.dataset.size};U(c,o)}}function U(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(s=>s.id===t.id)){const s=e.querySelector(".productlist-card-icon-cart use");s.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),s.setAttribute("href",`${a}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");E()}function E(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const B={keyword:null,category:null,page:1,limit:6},Q=[];function D(){localStorage.setItem("settings",JSON.stringify(B))}function V(){localStorage.setItem("cart",JSON.stringify(Q))}const $=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",G);async function G(){try{const t=await Z();if(t===void 0)throw new Error;tt(t)}catch{C()}}function X({category:t,img:e,name:o,popularity:r,size:s,_id:c}){return`
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
  `}async function Z(){try{return(await O()).reduce((e,o)=>e+X(o),"")}catch{C()}}function tt(t){$.insertAdjacentHTML("beforeend",t)}function C(){console.error("Error:",err),$.innerHTML=""}const i=document.querySelector(".wrapperPopularProduct");console.log(i);const h=document.querySelector("body");i.addEventListener("click",g);const l=document.querySelector(".products-list");console.log(l);l.addEventListener("click",p);async function p(t){l.removeEventListener("click",p);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){l.addEventListener("click",p);return}console.log(e);const o=e.dataset.id,r=await q(o);console.log(r),h.insertAdjacentHTML("beforeend",w(r)),x()}async function g(t){i.removeEventListener("click",g);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){i.addEventListener("click",g);return}const o=e.dataset.id,r=await q(o);console.log(r),h.insertAdjacentHTML("beforeend",w(r)),x()}async function q(t){const e="https://food-boutique.b.goit.study/api/products/";return m.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function w(t){const{name:e,category:o,size:r,popularity:s,desc:c,price:y,img:v}=t;return`
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
            <span class="modal-product-desc modal-product-desc-value">${s}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${c}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${y}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${a}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function x(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function o(){const c=document.querySelector("[data-modal]");c&&(c.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",s),e.removeEventListener("click",r))}function r(c){c.target===e&&(o(),e.removeEventListener("click",r))}function s(c){c.code==="Escape"&&(o(),document.removeEventListener("keydown",s))}i.addEventListener("click",g),l.addEventListener("click",p),t.addEventListener("click",o),e.addEventListener("click",r),document.addEventListener("keydown",s),document.querySelector("[data-modal]")||h.insertAdjacentHTML("beforeend",w(info))}D();V();b();
//# sourceMappingURL=commonHelpers2.js.map
