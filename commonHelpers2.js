import{c as d,f as H,a as B,d as W,b as D}from"./assets/API-7eade639.js";import{a as z,P as F,S as V}from"./assets/vendor-c8bc0669.js";const m=document.querySelector(".wrapperPopularProduct"),k=document.querySelector("body");m.addEventListener("click",i);const f=document.querySelector(".card-discount-prod"),v=document.querySelector(".products-list");v.addEventListener("click",h);f.addEventListener("click",b);async function h(t){v.removeEventListener("click",h),m.removeEventListener("click",i),f.removeEventListener("click",b);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){v.addEventListener("click",h);return}const o=e.dataset.id,s=await p(o);k.insertAdjacentHTML("beforeend",_(s));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),C()}async function i(t){v.removeEventListener("click",h),m.removeEventListener("click",i),f.removeEventListener("click",b);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){m.addEventListener("click",i);return}const o=e.dataset.id,s=await p(o);k.insertAdjacentHTML("beforeend",_(s));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),C()}async function b(t){f.removeEventListener("click",i),v.removeEventListener("click",h),m.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){f.addEventListener("click",i);return}const o=e.dataset.id,s=await p(o);k.insertAdjacentHTML("beforeend",_(s));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),C()}async function p(t){const e="https://food-boutique.b.goit.study/api/products/";return z.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function _(t){let e;const{_id:o,name:s,category:c,size:r,popularity:a,desc:n,price:l,img:$}=t;return c.includes("_")&&(e=c.split("_").join(" ")),`
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
          src="${$}"
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
              >${e}</span
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
            <span class="modal-product-desc modal-product-desc-value">${a}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${n}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${l}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function C(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",R);function s(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",s),document.removeEventListener("keydown",r),e.removeEventListener("click",c))}function c(a){a.target===e&&(s(),e.removeEventListener("click",c))}function r(a){a.code==="Escape"&&(s(),document.removeEventListener("keydown",r))}m.addEventListener("click",i),v.addEventListener("click",h),f.addEventListener("click",b),t.addEventListener("click",s),e.addEventListener("click",c),document.addEventListener("keydown",r),document.querySelector("[data-modal]")||k.insertAdjacentHTML("beforeend",_(info))}async function R(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(o){const c=o.closest(".modal-container").dataset.id,r=await p(c);r.quantity=1,G(r,o)}}function G(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(c=>c._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to"),K()}function K(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const U=document.getElementById("pagination");let L=0;const Q=window.innerWidth;Q<768?L=2:L=4;function X(t,e,o){const s={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:L,page:o,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new F(U,s).on("afterMove",r=>{const a=r.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=a,localStorage.setItem("settings",JSON.stringify(n)),g()})}const y=document.querySelector(".products-list"),E=document.querySelector(".products-list-none"),x=document.querySelector(".pagination-block"),Y={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",tt);function Z(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function g(){return localStorage.getItem("settings")?await q(JSON.parse(localStorage.getItem("settings"))):await q(Y)}async function q(t){try{t=Z(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await H(t);o.results.length===0?(E.classList.remove("hidden"),y.classList.add("hidden"),x.classList.add("hidden")):(y.classList.contains("hidden")&&(E.classList.add("hidden"),y.classList.remove("hidden"),x.classList.remove("hidden")),y.innerHTML=et(o.results),o.totalPages>1&&X(o,o.perPage,o.page))}catch(e){console.log(e.message)}}function tt(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||g()}function et(t){return t.map(({name:e,img:o,category:s,size:c,popularity:r,price:a,is10PercentOff:n,_id:l})=>{s.includes("_")&&(s=s.split("_").join(" "));const u=(JSON.parse(localStorage.getItem("cart"))||[]).find(I=>I._id===l);return`
    <div class="productlist-card" data-id="${l}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${s}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${r}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${a}</span>
        <button type="button" class="productlist-card-btn" ${u?"disabled":""}>
            <svg class="productlist-card-icon-${u?"check":"cart"}" width="18" height="18">
                <use href="${d}#icon-${u?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",O);y.addEventListener("click",ot);async function ot(t){const o=t.target.closest(".productlist-card-btn");if(o){const c=o.closest(".productlist-card").dataset.id,r=await p(c);r.quantity=1,ct(r,o)}}function ct(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),c.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));O()}function O(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const st=document.querySelector(".filters-form"),w=document.querySelector(".filters-form-input"),S=document.querySelector(".filters-form-select-category"),rt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let N=[];const at=async()=>{N=[...await B(),"Show all"];const e=rt(N);S.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};S.value=o.category,new V({select:"#category",settings:{showSearch:!1}})};at();const nt=t=>{t.preventDefault();const e=w.value.trim(),o=S.value,s={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(s)),g()},dt=t=>{if(t.target.value===""){const e=S.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),g()}},it=t=>{const e=w.value.trim(),o=t.target.value,s={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(s)),g()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};w.value=t.keyword,g(),st.addEventListener("submit",nt),S.addEventListener("change",it),w.addEventListener("input",dt)});const lt={keyword:null,category:null,page:1,limit:6},ut=[];function J(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(lt))}function M(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(ut))}const T=document.querySelector(".card-discount-prod");J();M();function pt(t){return t.map(({img:e,name:o,price:s,_id:c})=>`<li class="discount-prod-item slide" data-id='${c}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${o}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${o}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${s}</p>
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
</li>`).join("")}function gt(){W().then(t=>{mt(t),T.insertAdjacentHTML("beforeend",pt(t))}).catch(t=>console.log(t.message))}gt();function mt(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let s=t[o];t[o]=t[e],t[e]=s}window.addEventListener("load",A);T.addEventListener("click",ft);async function ft(t){const o=t.target.closest(".btn-icon-cart");if(o){const c=o.closest(".discount-prod-item").dataset.id,r=await p(c);r.quantity=1,vt(r,o)}}function vt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".icon-cart-svg use");c.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),c.setAttribute("href",`${d}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));A()}function A(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}document.querySelector(".wrapperPopularProduct");document.querySelector("body");const P=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",ht);async function ht(){try{const t=await St();if(t===void 0)throw new Error;wt(t)}catch{j()}}function yt(t){return t.map(({name:e,img:o,category:s,size:c,popularity:r,price:a,is10PercentOff:n,_id:l})=>{s.includes("_")&&(s=s.split("_").join(" "));const u=(JSON.parse(localStorage.getItem("cart"))||[]).find(I=>I._id===l);return`
  <li data-id='${l}' class="popular__products-items">
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
      <span class="js-popular__products-category">${s}</span>
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
  <button class="popular__products-button" ${u?"disabled":""}>
    <svg class="popular__products-svg${u?"check":"cart"}" width="12" height="12">
      <use href="${d}#icon-${u?"check":"cart"}"></use>
    </svg>
  </button>
</li>
  `}).join("")}async function St(){try{const t=await D();return yt(t)}catch{j()}}function wt(t){P.innerHTML=t}function j(){console.error("Error:",err),P.innerHTML=""}P.addEventListener("click",kt);async function kt(t){const o=t.target.closest(".popular__products-button");if(o){const c=o.closest(".popular__products-items").dataset.id,r=await p(c);r.quantity=1,bt(r,o),location.reload()}}function bt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),c.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));_t()}function _t(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}J();M();g();
//# sourceMappingURL=commonHelpers2.js.map
