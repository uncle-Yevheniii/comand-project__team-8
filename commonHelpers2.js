import{c as d,f as G,a as U,d as Q,b as X,e as Z}from"./assets/API-3cc943a8.js";import{a as tt,P as et,S as st}from"./assets/vendor-c8bc0669.js";const m=document.querySelector(".wrapperPopularProduct"),L=document.querySelector("body");m.addEventListener("click",i);const f=document.querySelector(".card-discount-prod"),v=document.querySelector(".products-list");v.addEventListener("click",h);f.addEventListener("click",$);async function h(t){v.removeEventListener("click",h),m.removeEventListener("click",i),f.removeEventListener("click",$);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){v.addEventListener("click",h);return}const s=e.dataset.id,c=await g(s);L.insertAdjacentHTML("beforeend",E(c));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Added to"),q()}async function i(t){v.removeEventListener("click",h),m.removeEventListener("click",i),f.removeEventListener("click",$);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){m.addEventListener("click",i);return}const s=e.dataset.id,c=await g(s);L.insertAdjacentHTML("beforeend",E(c));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Added to"),q()}async function $(t){f.removeEventListener("click",i),v.removeEventListener("click",h),m.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){f.addEventListener("click",i);return}const s=e.dataset.id,c=await g(s);L.insertAdjacentHTML("beforeend",E(c));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Added to"),q()}async function g(t){const e="https://food-boutique.b.goit.study/api/products/";return tt.get(`${e}${t}`).then(s=>s.data).catch(s=>{throw new Error(s)})}function E(t){let e;const{_id:s,name:c,category:o,size:a,popularity:r,desc:n,price:u,img:I}=t;return o.includes("_")&&(e=o.split("_").join(" ")),`
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
          src="${I}"
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
    
    `}function q(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",ct);function c(){const r=document.querySelector("[data-modal]");r&&(r.remove(),t.removeEventListener("click",c),document.removeEventListener("keydown",a),e.removeEventListener("click",o))}function o(r){r.target===e&&(c(),e.removeEventListener("click",o))}function a(r){r.code==="Escape"&&(c(),document.removeEventListener("keydown",a))}m.addEventListener("click",i),v.addEventListener("click",h),f.addEventListener("click",$),t.addEventListener("click",c),e.addEventListener("click",o),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||L.insertAdjacentHTML("beforeend",E(info))}async function ct(t){const s=t.target.closest(".modal-wimdow-add-to-cart-btn");if(s){const o=s.closest(".modal-container").dataset.id,a=await g(o);a.quantity=1,ot(a,s)}}function ot(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];s.find(o=>o._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(s.push(t),localStorage.setItem("cart",JSON.stringify(s)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to"),at()}function at(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const rt=document.getElementById("pagination");let x=0;const nt=window.innerWidth;nt<768?x=2:x=4;function dt(t,e,s){const c={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:x,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new et(rt,c).on("afterMove",a=>{const r=a.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),l()})}const b=document.querySelector(".products-list"),N=document.querySelector(".products-list-none"),y=document.querySelector(".pagination-block"),it={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",ut);function lt(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function l(){return localStorage.getItem("settings")?await M(JSON.parse(localStorage.getItem("settings"))):await M(it)}async function M(t){try{t=lt(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const s=await G(t);s.results.length===0?(N.classList.remove("hidden"),b.classList.add("hidden"),y.classList.add("hidden")):(b.classList.contains("hidden")&&(N.classList.add("hidden"),b.classList.remove("hidden"),y.classList.remove("hidden")),b.innerHTML=pt(s.results),s.totalPages>1?(y.classList.contains("hidden")&&y.classList.remove("hidden"),dt(s,s.perPage,s.page)):y.classList.add("hidden"))}catch(e){console.log(e.message)}}function ut(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||l()}function pt(t){return t.map(({name:e,img:s,category:c,size:o,popularity:a,price:r,is10PercentOff:n,_id:u})=>{c.includes("_")&&(c=c.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(_=>_._id===u);return`
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
  `}).join("")}window.addEventListener("load",H);b.addEventListener("click",gt);async function gt(t){const s=t.target.closest(".productlist-card-btn");if(s){const o=s.closest(".productlist-card").dataset.id,a=await g(o);a.quantity=1,mt(a,s),l()}}function mt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(o=>o._id===t._id)){const o=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),o.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));H()}function H(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const ft=document.querySelector(".filters-form"),k=document.querySelector(".filters-form-input"),w=document.querySelector(".filters-form-select-category"),vt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let J=[];const ht=async()=>{J=[...await U(),"Show all"];const e=vt(J);w.insertAdjacentHTML("beforeend",e);const s=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};w.value=s.category,new st({select:"#category",settings:{showSearch:!1}})};ht();const yt=t=>{t.preventDefault();let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=k.value.trim(),c=w.value;e.keyword=s||null,e.category=c==="Show all"?null:c.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),l()},St=t=>{if(t.target.value===""){let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=w.value;e.keyword=null,e.category=s==="Show all"?null:s.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),l()}},bt=t=>{let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=k.value.trim(),c=t.target.value;e.keyword=s||null,e.category=c==="Show all"?null:c.trim()||null,e.page=1,localStorage.setItem("settings",JSON.stringify(e)),l()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};k.value=t.keyword,l(),ft.addEventListener("submit",yt),k.addEventListener("input",St),w.addEventListener("change",bt)});const wt={keyword:null,category:null,page:1,limit:6},kt=[];function B(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(wt))}function W(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(kt))}const D=document.querySelector(".card-discount-prod");B();W();function Lt(t){return t.map(({img:e,name:s,price:c,_id:o})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o);return`<li class="discount-prod-item slide" data-id='${o}'>
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
</li>`}).join("")}function V(){Q().then(t=>{$t(t),D.innerHTML=Lt(t)}).catch(t=>console.log(t.message))}V();function $t(t){let e=Math.floor(Math.random()*t.length),s=Math.floor(Math.random()*t.length);if(e===s)return;let c=t[s];t[s]=t[e],t[e]=c}window.addEventListener("load",z);D.addEventListener("click",Et);async function Et(t){const s=t.target.closest(".btn-icon-cart");if(s){const o=s.closest(".discount-prod-item").dataset.id,a=await g(o);a.quantity=1,It(a,s)}V()}function It(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(o=>o._id===t._id)){const o=e.querySelector(".icon-cart-svgcart use"),a=e.querySelector(".icon-cart-svg");a&&a.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),o.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));z()}function z(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}let P=0;const T=2,C=document.querySelector("header"),A=document.querySelector(".header-container"),S=()=>window.pageYOffset||document.documentElement.scrollTop,j=()=>C.classList.contains("hide");function _t(){window.addEventListener("scroll",()=>{S()>P&&!j()&&S()>T?C.classList.add("hide"):S()<P&&j()&&C.classList.remove("hide"),S()>T?A.classList.add("scrolled"):A.classList.remove("scrolled"),P=S()})}document.querySelector(".wrapperPopularProduct");document.querySelector("body");const O=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",Pt);async function Pt(){try{const t=await F();if(t===void 0)throw new Error;K(t)}catch{R()}}function xt(t){return t.map(({name:e,img:s,category:c,size:o,popularity:a,price:r,is10PercentOff:n,_id:u})=>{c.includes("_")&&(c=c.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(_=>_._id===u);return`
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
  `}).join("")}async function F(){try{const t=await X();return xt(t)}catch{R()}}function K(t){O.innerHTML=t}function R(){console.error("Error:",err),O.innerHTML=""}O.addEventListener("click",Ct);async function Ct(t){const s=t.target.closest(".popular__products-button");if(s){const o=s.closest(".popular__products-items").dataset.id,a=await g(o);a.quantity=1,qt(a,s);const r=await F();K(r)}}function qt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(o=>o._id===t._id)){const o=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),o.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));Ot()}function Ot(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}function Nt(){document.querySelector("body").insertAdjacentHTML("beforeend",Jt()),Y()}function Mt(){document.querySelector("body").insertAdjacentHTML("beforeend",Tt()),Y()}function Jt(){return`
    <div class="backdrop" data-modal>
  <div class="modal-container email-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="./img/sptite.svg#icon-close"></use>
    </svg>
    <div class="modal-wrapper-title">
      <p class="modal-subscr-title">
        This <span class="modal-subscr-title-accent">email address</span> has
        already been entered
      </p>
    </div>
    <div class="modal-wrapper-text">
      <p class="modal-subcr-text">
        You have already subscribed to our new products. Watch for offers at the
        mailing address.
      </p>
    </div>
  </div>
</div>

    
    `}function Tt(){return`
   <div class="backdrop back-drop-sub" data-modal>
  <div class="modal-container subscribing-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon sub-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="./img/sptite.svg#icon-close"></use>
    </svg>
    <div class="modal-wrapper-title">
      <p class="modal-subscr-title">
        Thanks for subscribing for
        <span class="modal-subscr-title-accent">new</span> products
      </p>
    </div>
    <div class="modal-wrapper-text">
      <p class="modal-subcr-text">
        We promise you organic and high-quality<br />
        products that will meet your expectations.<br />
        Please stay with us and we promise you many pleasant surprises.
      </p>
    </div>

    <img
      class="modal-subcr-img"
      srcset="
        ./img/subscribing-modal@1x.png 1x,
        ./img/subscribing-modal@2x.png 2x
      "
      src="./img/subscribing-modal@1x.png"
      width="335"
      height="144"
      alt="Vegetables"
    />
  </div>
</div>
    
    `}function Y(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function s(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",s),document.removeEventListener("keydown",o),e.removeEventListener("click",c))}function c(a){a.target===e&&(s(),e.removeEventListener("click",c))}function o(a){a.code==="Escape"&&(s(),document.removeEventListener("keydown",o))}t.addEventListener("click",s),e.addEventListener("click",c),document.addEventListener("keydown",o),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const At=document.querySelector(".footer-form");At.addEventListener("submit",jt);async function jt(t){t.preventDefault();const e=t.target.email,s=e.value,c=await Z(s);c.success?(Mt(),e.value=""):c.status===409?(Nt(),e.value=""):alert(c.message)}B();W();_t();l();
//# sourceMappingURL=commonHelpers2.js.map
