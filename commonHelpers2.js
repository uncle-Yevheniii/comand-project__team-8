import{a as K,s as d,f as U,b as Y,d as Q}from"./assets/footer-84b640de.js";import{a as X,P as Z,S as tt}from"./assets/vendor-c8bc0669.js";document.querySelector(".wrapperPopularProduct");document.querySelector("body");const N=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",et);async function et(){try{const t=await b();if(t===void 0)throw new Error;$(t)}catch{W()}}function st(t){return t.map(({name:e,img:s,category:c,size:o,popularity:a,price:r,is10PercentOff:n,_id:u})=>{c.includes("_")&&(c=c.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===u);return`
  <li data-id='${u}' class="popular__products-items">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${s}"
      alt="${e}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${e}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${c}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${o}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${a}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button" ${p?"disabled":""}>
    <svg class="popular__products-svg${p?"check":"cart"}" width="12" height="12">
      <use href="${d}#icon-${p?"check":"cart"}"></use>
    </svg>
  </button>
</li>
  `}).join("")}async function b(){try{const t=await K();return st(t)}catch{W()}}function $(t){N.innerHTML=t}function W(){console.error("Error:",err),N.innerHTML=""}N.addEventListener("click",ct);async function ct(t){const s=t.target.closest(".popular__products-button");if(s){const o=s.closest(".popular__products-items").dataset.id,a=await g(o);a.quantity=1,ot(a,s);const r=await b();$(r),i()}}function ot(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(o=>o._id===t._id)){const o=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),o.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));at()}function at(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const m=document.querySelector(".wrapperPopularProduct"),I=document.querySelector("body");m.addEventListener("click",l);const f=document.querySelector(".card-discount-prod"),v=document.querySelector(".products-list");v.addEventListener("click",h);f.addEventListener("click",_);async function h(t){v.removeEventListener("click",h),m.removeEventListener("click",l),f.removeEventListener("click",_);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){v.addEventListener("click",h);return}const s=e.dataset.id,c=await g(s);I.insertAdjacentHTML("beforeend",C(c));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Remove from"),J()}async function l(t){v.removeEventListener("click",h),m.removeEventListener("click",l),f.removeEventListener("click",_);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){m.addEventListener("click",l);return}const s=e.dataset.id,c=await g(s);I.insertAdjacentHTML("beforeend",C(c));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Remove from"),J()}async function _(t){f.removeEventListener("click",l),v.removeEventListener("click",h),m.removeEventListener("click",l);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){f.addEventListener("click",l);return}const s=e.dataset.id,c=await g(s);I.insertAdjacentHTML("beforeend",C(c));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Remove from"),J()}async function g(t){const e="https://food-boutique.b.goit.study/api/products/";return X.get(`${e}${t}`).then(s=>s.data).catch(s=>{throw new Error(s)})}function C(t){let e;const{_id:s,name:c,category:o,size:a,popularity:r,desc:n,price:u,img:P}=t;return o.includes("_")&&(e=o.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${s}" data-modal">
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
          src="${P}"
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
              >${a}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${r}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${n}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${u}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function J(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",rt);function c(){const r=document.querySelector("[data-modal]");r&&(r.remove(),t.removeEventListener("click",c),document.removeEventListener("keydown",a),e.removeEventListener("click",o))}function o(r){r.target===e&&(c(),e.removeEventListener("click",o))}function a(r){r.code==="Escape"&&(c(),document.removeEventListener("keydown",a))}m.addEventListener("click",l),v.addEventListener("click",h),f.addEventListener("click",_),t.addEventListener("click",c),e.addEventListener("click",o),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||I.insertAdjacentHTML("beforeend",C(info))}async function rt(t){const s=t.target.closest(".modal-wimdow-add-to-cart-btn");if(s){const o=s.closest(".modal-container").dataset.id,a=await g(o);a.quantity=1,nt(a,s);const r=await b();$(r),i()}}function nt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];s.find(o=>o._id===t._id)?(e.style.background="#6d8434",e.textContent="Remove from"):(s.push(t),localStorage.setItem("cart",JSON.stringify(s)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Remove from"),it()}function it(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const dt=document.getElementById("pagination");let q=0;const lt=window.innerWidth;lt<768?q=2:q=4;function ut(t,e,s){const c={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:q,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new Z(dt,c).on("afterMove",a=>{const r=a.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),i()})}const w=document.querySelector(".products-list"),M=document.querySelector(".products-list-none"),S=document.querySelector(".pagination-block"),pt={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",mt);function gt(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function i(){return localStorage.getItem("settings")?await T(JSON.parse(localStorage.getItem("settings"))):await T(pt)}async function T(t){try{t=gt(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const s=await U(t);s.results.length===0?(M.classList.remove("hidden"),w.classList.add("hidden"),S.classList.add("hidden")):(w.classList.contains("hidden")&&(M.classList.add("hidden"),w.classList.remove("hidden"),S.classList.remove("hidden")),w.innerHTML=ft(s.results),s.totalPages>1?(S.classList.contains("hidden")&&S.classList.remove("hidden"),ut(s,s.perPage,s.page)):S.classList.add("hidden"))}catch(e){console.log(e.message)}}function mt(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||i()}function ft(t){return t.map(({name:e,img:s,category:c,size:o,popularity:a,price:r,is10PercentOff:n,_id:u})=>{c.includes("_")&&(c=c.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===u);return`
    <div class="productlist-card" data-id="${u}">
    <div class="productlist-card-img-wrapper">
        <img src="${s}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${o}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${a}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${r}</span>
        <button type="button" class="productlist-card-btn" ${p?"disabled":""}>
            <svg class="productlist-card-icon-${p?"check":"cart"}" width="18" height="18">
                <use href="${d}#icon-${p?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",D);w.addEventListener("click",vt);async function vt(t){const s=t.target.closest(".productlist-card-btn");if(s){const o=s.closest(".productlist-card").dataset.id,a=await g(o);a.quantity=1,ht(a,s),i();const r=await b();$(r)}}function ht(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(o=>o._id===t._id)){const o=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),o.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));D()}function D(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const St=document.querySelector(".filters-form"),L=document.querySelector(".filters-form-input"),k=document.querySelector(".filters-form-select-category"),yt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let j=[];const wt=async()=>{j=[...await Y(),"Show all"];const e=yt(j);k.insertAdjacentHTML("beforeend",e);const s=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};k.value=s.category,new tt({select:"#category",settings:{showSearch:!1}})};wt();const kt=t=>{t.preventDefault();let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=L.value.trim(),c=k.value;e.keyword=s||null,e.category=c==="Show all"?null:c.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()},Lt=t=>{if(t.target.value===""){let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=k.value;e.keyword=null,e.category=s==="Show all"?null:s.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()}},bt=t=>{let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=L.value.trim(),c=t.target.value;e.keyword=s||null,e.category=c==="Show all"?null:c.trim()||null,e.page=1,localStorage.setItem("settings",JSON.stringify(e)),i()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};L.value=t.keyword,i(),St.addEventListener("submit",kt),L.addEventListener("input",Lt),k.addEventListener("change",bt)});const $t={keyword:null,category:null,page:1,limit:6},It=[];function R(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify($t))}function z(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(It))}const F=document.querySelector(".card-discount-prod");R();z();function _t(t){return t.map(({img:e,name:s,price:c,_id:o})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o);return`<li class="discount-prod-item slide" data-id='${o}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${s}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${s}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${c}</p>
        <button type="button" class="btn-icon-cart" ${r?"disabled":""}>
          <svg class="icon-cart-svg${r?"check":"cart"}" width="18" height="18">
            <use href="${d}#icon-${r?"check":"cart"}"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="wrap-discount-svg">
      <svg class="discount-svg" width="60" height="60">
        <use href="${d}#icon-discount"></use>
      </svg>
  </div>
</li>`}).join("")}function V(){Q().then(t=>{Ct(t),F.innerHTML=_t(t)}).catch(t=>console.log(t.message))}V();function Ct(t){let e=Math.floor(Math.random()*t.length),s=Math.floor(Math.random()*t.length);if(e===s)return;let c=t[s];t[s]=t[e],t[e]=c}window.addEventListener("load",G);F.addEventListener("click",Pt);async function Pt(t){const s=t.target.closest(".btn-icon-cart");if(s){const o=s.closest(".discount-prod-item").dataset.id,a=await g(o);a.quantity=1,Et(a,s)}V()}function Et(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(o=>o._id===t._id)){const o=e.querySelector(".icon-cart-svgcart use"),a=e.querySelector(".icon-cart-svg");a&&a.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),o.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));G()}function G(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}let x=0;const H=2,O=document.querySelector("header"),A=document.querySelector(".header-container"),y=()=>window.pageYOffset||document.documentElement.scrollTop,B=()=>O.classList.contains("hide");function xt(){window.addEventListener("scroll",()=>{y()>x&&!B()&&y()>H?O.classList.add("hide"):y()<x&&B()&&O.classList.remove("hide"),y()>H?A.classList.add("scrolled"):A.classList.remove("scrolled"),x=y()})}R();z();xt();i();
//# sourceMappingURL=commonHelpers2.js.map
