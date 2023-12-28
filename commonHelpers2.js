import{c as d}from"./assets/sptite-dd93ef30.js";import{a as y,S as j}from"./assets/vendor-6bc51c68.js";async function H(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await y.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function D({keyword:t,category:e,page:o,limit:r}){const c="https://food-boutique.b.goit.study/api/products";return(await y.get(c,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function W(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await y.get(t)).data}async function z(){const t="https://food-boutique.b.goit.study/api/products/discount";return(await y.get(t)).data}const l=document.querySelector(".wrapperPopularProduct"),k=document.querySelector("body");l.addEventListener("click",i);const u=document.querySelector(".card-discount-prod"),p=document.querySelector(".products-list");p.addEventListener("click",g);u.addEventListener("click",b);async function g(t){p.removeEventListener("click",g),l.removeEventListener("click",i),u.removeEventListener("click",b);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){p.addEventListener("click",g);return}const o=e.dataset.id,r=await m(o);k.insertAdjacentHTML("beforeend",L(r));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===r._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),C()}async function i(t){p.removeEventListener("click",g),l.removeEventListener("click",i),u.removeEventListener("click",b);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){l.addEventListener("click",i);return}const o=e.dataset.id,r=await m(o);k.insertAdjacentHTML("beforeend",L(r));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===r._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),C()}async function b(t){u.removeEventListener("click",i),p.removeEventListener("click",g),l.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){u.addEventListener("click",i);return}const o=e.dataset.id,r=await m(o);k.insertAdjacentHTML("beforeend",L(r));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===r._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),C()}async function m(t){const e="https://food-boutique.b.goit.study/api/products/";return y.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function L(t){let e;const{_id:o,name:r,category:c,size:s,popularity:a,desc:n,price:S,img:_}=t;return c.includes("_")&&(e=c.split("_").join(" ")),`
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
          src="${_}"
          alt="${r}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${r}</p>
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
      <p class="modal-product-cost">$${S}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function C(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",B);function r(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",r),document.removeEventListener("keydown",s),e.removeEventListener("click",c))}function c(a){a.target===e&&(r(),e.removeEventListener("click",c))}function s(a){a.code==="Escape"&&(r(),document.removeEventListener("keydown",s))}l.addEventListener("click",i),p.addEventListener("click",g),u.addEventListener("click",b),t.addEventListener("click",r),e.addEventListener("click",c),document.addEventListener("keydown",s),document.querySelector("[data-modal]")||k.insertAdjacentHTML("beforeend",L(info))}async function B(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(o){const c=o.closest(".modal-container").dataset.id,s=await m(c);s.quantity=1,F(s,o)}}function F(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(c=>c._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to"),V()}function V(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const v=document.querySelector(".products-list"),E=document.querySelector(".products-list-none"),R={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",K);function G(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function f(){return localStorage.getItem("settings")?await I(JSON.parse(localStorage.getItem("settings"))):await I(R)}async function I(t){try{t=G(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await D(t);o.results.length===0?(E.classList.remove("hidden"),v.classList.add("hidden")):(v.classList.contains("hidden")&&(E.classList.add("hidden"),v.classList.remove("hidden")),v.innerHTML=U(o.results))}catch(e){console.log(e.message)}}function K(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||f()}function U(t){return t.map(({name:e,img:o,category:r,size:c,popularity:s,price:a,is10PercentOff:n,_id:S})=>{r.includes("_")&&(r=r.split("_").join(" "));const $=(JSON.parse(localStorage.getItem("cart"))||[]).find(T=>T._id===S);return`
    <div class="productlist-card" data-id="${S}">
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
  `}).join("")}window.addEventListener("load",q);v.addEventListener("click",Q);async function Q(t){const o=t.target.closest(".productlist-card-btn");if(o){const c=o.closest(".productlist-card").dataset.id,s=await m(c);s.quantity=1,X(s,o)}}function X(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),c.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));q()}function q(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const Y=document.querySelector(".filters-form"),w=document.querySelector(".filters-form-input"),h=document.querySelector(".filters-form-select-category"),Z=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let x=[];const tt=async()=>{x=[...await H(),"Show all"];const e=Z(x);h.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};h.value=o.category,new j({select:"#category",settings:{showSearch:!1}})};tt();const et=t=>{t.preventDefault();const e=w.value.trim(),o=h.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),f()},ot=t=>{if(t.target.value===""){const e=h.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),f()}},ct=t=>{const e=w.value.trim(),o=t.target.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),f()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};w.value=t.keyword,f(),Y.addEventListener("submit",et),h.addEventListener("change",ct),w.addEventListener("input",ot)});const rt={keyword:null,category:null,page:1,limit:6},st=[];function P(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(rt))}function N(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(st))}const O=document.querySelector(".card-discount-prod");P();N();function at(t){return t.map(({img:e,name:o,price:r,_id:c})=>`<li class="discount-prod-item slide" data-id='${c}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${o}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${o}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${r}</p>
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
</li>`).join("")}function nt(){z().then(t=>{dt(t),O.insertAdjacentHTML("beforeend",at(t))}).catch(t=>console.log(t.message))}nt();function dt(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let r=t[o];t[o]=t[e],t[e]=r}window.addEventListener("load",J);O.addEventListener("click",it);async function it(t){const o=t.target.closest(".btn-icon-cart");if(o){const c=o.closest(".discount-prod-item").dataset.id,s=await m(c);s.quantity=1,lt(s,o)}}function lt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".icon-cart-svg use");c.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),c.setAttribute("href",`${d}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));J()}function J(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const M=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",ut);async function ut(){try{const t=await gt();if(t===void 0)throw new Error;mt(t)}catch{A()}}function pt({category:t,img:e,name:o,popularity:r,size:c,_id:s}){return`
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
      <use href="${d}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function gt(){try{return(await W()).reduce((e,o)=>e+pt(o),"")}catch{A()}}function mt(t){M.insertAdjacentHTML("beforeend",t)}function A(){console.error("Error:",err),M.innerHTML=""}P();N();f();
//# sourceMappingURL=commonHelpers2.js.map
