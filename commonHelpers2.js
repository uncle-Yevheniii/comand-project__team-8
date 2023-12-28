import{c as d,f as T,a as j,d as H,b as D}from"./assets/API-ed9648b3.js";import{a as W,S as z}from"./assets/vendor-6bc51c68.js";const u=document.querySelector(".wrapperPopularProduct"),w=document.querySelector("body");u.addEventListener("click",i);const p=document.querySelector(".card-discount-prod"),l=document.querySelector(".products-list");console.log(l);l.addEventListener("click",g);p.addEventListener("click",k);async function g(t){l.removeEventListener("click",g),u.removeEventListener("click",i),p.removeEventListener("click",k);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){l.addEventListener("click",g);return}console.log(e);const o=e.dataset.id,c=await m(o);console.log(c),w.insertAdjacentHTML("beforeend",L(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),b()}async function i(t){l.removeEventListener("click",g),u.removeEventListener("click",i),p.removeEventListener("click",k);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){u.addEventListener("click",i);return}const o=e.dataset.id,c=await m(o);w.insertAdjacentHTML("beforeend",L(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),b()}async function k(t){p.removeEventListener("click",i),l.removeEventListener("click",g),u.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){p.addEventListener("click",i);return}const o=e.dataset.id,c=await m(o);w.insertAdjacentHTML("beforeend",L(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),b()}async function m(t){const e="https://food-boutique.b.goit.study/api/products/";return W.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function L(t){let e;const{_id:o,name:c,category:r,size:s,popularity:a,desc:n,price:y,img:C}=t;return r.includes("_")&&(e=r.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${o}" data-modal">
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
          src="${C}"
          alt="${c}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${c}</p>
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
         ${n}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${y}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function b(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",B);function c(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",c),document.removeEventListener("keydown",s),e.removeEventListener("click",r))}function r(a){a.target===e&&(c(),e.removeEventListener("click",r))}function s(a){a.code==="Escape"&&(c(),document.removeEventListener("keydown",s))}u.addEventListener("click",i),l.addEventListener("click",g),p.addEventListener("click",k),t.addEventListener("click",c),e.addEventListener("click",r),document.addEventListener("keydown",s),document.querySelector("[data-modal]")||w.insertAdjacentHTML("beforeend",L(info))}async function B(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(console.log(o),o){const c=o.closest(".modal-container");console.log(c);const r=c.dataset.id;console.log(r);const s=await m(r);s.quantity=1,F(s,o)}}function F(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(r=>r._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to",console.log("Товар доданий в кошик!")),V()}function V(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const v=document.querySelector(".products-list"),_=document.querySelector(".products-list-none");let R=6;const G={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",U);function K(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function f(){return localStorage.getItem("settings")?await I(JSON.parse(localStorage.getItem("settings"))):await I(G)}async function I(t){try{t=K(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await T(t);o.results.length===0?(_.classList.remove("hidden"),v.classList.add("hidden")):(v.classList.contains("hidden")&&(_.classList.add("hidden"),v.classList.remove("hidden")),v.innerHTML=Q(o.results))}catch(e){console.log(e.message)}}function U(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${R}`),f())}function Q(t){return t.map(({name:e,img:o,category:c,size:r,popularity:s,price:a,is10PercentOff:n,_id:y})=>{c.includes("_")&&(c=c.split("_").join(" "));const $=(JSON.parse(localStorage.getItem("cart"))||[]).find(A=>A._id===y);return`
    <div class="productlist-card" data-id="${y}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${r}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${s}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${a}</span>
        <button type="button" class="productlist-card-btn" ${$?"disabled":""}>
            <svg class="productlist-card-icon-${$?"check":"cart"}" width="18" height="18">
                <use href="${d}#icon-${$?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",x);v.addEventListener("click",X);async function X(t){const o=t.target.closest(".productlist-card-btn");if(o){const r=o.closest(".productlist-card").dataset.id,s=await m(r);s.quantity=1,Y(s,o)}}function Y(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(r=>r._id===t._id)){const r=e.querySelector(".productlist-card-icon-cart use"),s=e.querySelector(".productlist-card-icon-cart");console.log(s),s.classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),r.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");x()}function x(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const Z=document.querySelector(".filters-form"),S=document.querySelector(".filters-form-input"),h=document.querySelector(".filters-form-select-category"),tt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let E=[];const et=async()=>{E=[...await j(),"Show all"];const e=tt(E);h.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};h.value=o.category,new z({select:"#category",settings:{showSearch:!1}})};et();const ot=t=>{t.preventDefault();const e=S.value.trim(),o=h.value,c={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(c)),f()},ct=t=>{if(t.target.value===""){const e=h.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),f()}},rt=t=>{const e=S.value.trim(),o=t.target.value,c={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(c)),f()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};S.value=t.keyword,f(),Z.addEventListener("submit",ot),h.addEventListener("change",rt),S.addEventListener("input",ct)});const st={keyword:null,category:null,page:1,limit:6},at=[];function P(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(st))}function q(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(at))}const N=document.querySelector(".card-discount-prod");P();q();function nt(t){return t.map(({img:e,name:o,price:c,_id:r})=>`<li class="discount-prod-item slide" data-id='${r}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${o}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${o}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${c}</p>
        <button type="button" class="btn-icon-cart">
          <svg class="icon-cart-svg" width="18" height="18">
            <use href="${d}#icon-cart"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="wrap-discount-svg">
      <svg class="discount-svg" width="60" height="60">
        <use href="${d}#icon-discount"></use>
      </svg>
  </div>
</li>`).join("")}function dt(){H().then(t=>{it(t),N.insertAdjacentHTML("beforeend",nt(t))}).catch(t=>console.log(t.message))}dt();function it(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let c=t[o];t[o]=t[e],t[e]=c}window.addEventListener("load",O);N.addEventListener("click",lt);async function lt(t){const o=t.target.closest(".btn-icon-cart");if(o){const r=o.closest(".discount-prod-item").dataset.id,s=await m(r);s.quantity=1,ut(s,o)}}function ut(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(r=>r._id===t._id)){const r=e.querySelector(".icon-cart-svg use");r.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),r.setAttribute("href",`${d}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));O()}function O(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const J=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",pt);async function pt(){try{const t=await mt();if(t===void 0)throw new Error;ft(t)}catch{M()}}function gt({category:t,img:e,name:o,popularity:c,size:r,_id:s}){return`
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
        Size: <span class="js-popular__products-size">${r}</span>
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
  `}async function mt(){try{return(await D()).reduce((e,o)=>e+gt(o),"")}catch{M()}}function ft(t){J.insertAdjacentHTML("beforeend",t)}function M(){console.error("Error:",err),J.innerHTML=""}P();q();f();
//# sourceMappingURL=commonHelpers2.js.map
