import{c as d,f as V,a as z,d as F,b as K,e as R}from"./assets/API-338b94c4.js";import{a as G,P as U,S as Y}from"./assets/vendor-c8bc0669.js";const m=document.querySelector(".wrapperPopularProduct"),k=document.querySelector("body");m.addEventListener("click",i);const v=document.querySelector(".card-discount-prod"),f=document.querySelector(".products-list");f.addEventListener("click",h);v.addEventListener("click",L);async function h(t){f.removeEventListener("click",h),m.removeEventListener("click",i),v.removeEventListener("click",L);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){f.addEventListener("click",h);return}const s=e.dataset.id,a=await g(s);k.insertAdjacentHTML("beforeend",$(a));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===a._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),x()}async function i(t){f.removeEventListener("click",h),m.removeEventListener("click",i),v.removeEventListener("click",L);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){m.addEventListener("click",i);return}const s=e.dataset.id,a=await g(s);k.insertAdjacentHTML("beforeend",$(a));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===a._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),x()}async function L(t){v.removeEventListener("click",i),f.removeEventListener("click",h),m.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){v.addEventListener("click",i);return}const s=e.dataset.id,a=await g(s);k.insertAdjacentHTML("beforeend",$(a));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===a._id)&&(c.style.background="#6d8434",c.childNodes[0].nodeValue="Added to"),x()}async function g(t){const e="https://food-boutique.b.goit.study/api/products/";return G.get(`${e}${t}`).then(s=>s.data).catch(s=>{throw new Error(s)})}function $(t){let e;const{_id:s,name:a,category:c,size:o,popularity:r,desc:n,price:u,img:I}=t;return c.includes("_")&&(e=c.split("_").join(" ")),`
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
          alt="${a}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${a}</p>
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
              >${o}</span
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
    
    `}function x(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",Q);function a(){const r=document.querySelector("[data-modal]");r&&(r.remove(),t.removeEventListener("click",a),document.removeEventListener("keydown",o),e.removeEventListener("click",c))}function c(r){r.target===e&&(a(),e.removeEventListener("click",c))}function o(r){r.code==="Escape"&&(a(),document.removeEventListener("keydown",o))}m.addEventListener("click",i),f.addEventListener("click",h),v.addEventListener("click",L),t.addEventListener("click",a),e.addEventListener("click",c),document.addEventListener("keydown",o),document.querySelector("[data-modal]")||k.insertAdjacentHTML("beforeend",$(info))}async function Q(t){const s=t.target.closest(".modal-wimdow-add-to-cart-btn");if(s){const c=s.closest(".modal-container").dataset.id,o=await g(c);o.quantity=1,X(o,s)}}function X(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];s.find(c=>c._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(s.push(t),localStorage.setItem("cart",JSON.stringify(s)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to"),Z()}function Z(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const tt=document.getElementById("pagination");let _=0;const et=window.innerWidth;et<768?_=2:_=4;function st(t,e,s){const a={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:_,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new U(tt,a).on("afterMove",o=>{const r=o.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),l()})}const S=document.querySelector(".products-list"),C=document.querySelector(".products-list-none"),y=document.querySelector(".pagination-block"),at={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",ot);function ct(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function l(){return localStorage.getItem("settings")?await q(JSON.parse(localStorage.getItem("settings"))):await q(at)}async function q(t){try{t=ct(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const s=await V(t);s.results.length===0?(C.classList.remove("hidden"),S.classList.add("hidden"),y.classList.add("hidden")):(S.classList.contains("hidden")&&(C.classList.add("hidden"),S.classList.remove("hidden"),y.classList.remove("hidden")),S.innerHTML=rt(s.results),s.totalPages>1?(y.classList.contains("hidden")&&y.classList.remove("hidden"),st(s,s.perPage,s.page)):y.classList.add("hidden"))}catch(e){console.log(e.message)}}function ot(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||l()}function rt(t){return t.map(({name:e,img:s,category:a,size:c,popularity:o,price:r,is10PercentOff:n,_id:u})=>{a.includes("_")&&(a=a.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===u);return`
    <div class="productlist-card" data-id="${u}">
    <div class="productlist-card-img-wrapper">
        <img src="${s}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${a}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${o}</span>
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
  `}).join("")}window.addEventListener("load",O);S.addEventListener("click",nt);async function nt(t){const s=t.target.closest(".productlist-card-btn");if(s){const c=s.closest(".productlist-card").dataset.id,o=await g(c);o.quantity=1,dt(o,s),l()}}function dt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(c=>c._id===t._id)){const c=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),c.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));O()}function O(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const it=document.querySelector(".filters-form"),w=document.querySelector(".filters-form-input"),b=document.querySelector(".filters-form-select-category"),lt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let N=[];const ut=async()=>{N=[...await z(),"Show all"];const e=lt(N);b.insertAdjacentHTML("beforeend",e);const s=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};b.value=s.category,new Y({select:"#category",settings:{showSearch:!1}})};ut();const pt=t=>{t.preventDefault();let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=w.value.trim(),a=b.value;e.keyword=s||null,e.category=a==="Show all"?null:a.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),l()},gt=t=>{if(t.target.value===""){let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=b.value;e.keyword=null,e.category=s==="Show all"?null:s.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),l()}},mt=t=>{let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=w.value.trim(),a=t.target.value;e.keyword=s||null,e.category=a==="Show all"?null:a.trim()||null,e.page=1,localStorage.setItem("settings",JSON.stringify(e)),l()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};w.value=t.keyword,l(),it.addEventListener("submit",pt),w.addEventListener("input",gt),b.addEventListener("change",mt)});const vt={keyword:null,category:null,page:1,limit:6},ft=[];function M(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(vt))}function J(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(ft))}const T=document.querySelector(".card-discount-prod");M();J();function ht(t){return t.map(({img:e,name:s,price:a,_id:c})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c);return`<li class="discount-prod-item slide" data-id='${c}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${s}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${s}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${a}</p>
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
</li>`}).join("")}function A(){F().then(t=>{yt(t),T.innerHTML=ht(t)}).catch(t=>console.log(t.message))}A();function yt(t){let e=Math.floor(Math.random()*t.length),s=Math.floor(Math.random()*t.length);if(e===s)return;let a=t[s];t[s]=t[e],t[e]=a}window.addEventListener("load",j);T.addEventListener("click",St);async function St(t){const s=t.target.closest(".btn-icon-cart");if(s){const c=s.closest(".discount-prod-item").dataset.id,o=await g(c);o.quantity=1,bt(o,s)}A()}function bt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(c=>c._id===t._id)){const c=e.querySelector(".icon-cart-svgcart use"),o=e.querySelector(".icon-cart-svg");o&&o.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),c.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));j()}function j(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}document.querySelector(".wrapperPopularProduct");document.querySelector("body");const P=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",wt);async function wt(){try{const t=await H();if(t===void 0)throw new Error;B(t)}catch{W()}}function kt(t){return t.map(({name:e,img:s,category:a,size:c,popularity:o,price:r,is10PercentOff:n,_id:u})=>{a.includes("_")&&(a=a.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===u);return`
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
      <span class="js-popular__products-category">${a}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${c}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${o}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button" ${p?"disabled":""}>
    <svg class="popular__products-svg${p?"check":"cart"}" width="12" height="12">
      <use href="${d}#icon-${p?"check":"cart"}"></use>
    </svg>
  </button>
</li>
  `}).join("")}async function H(){try{const t=await K();return kt(t)}catch{W()}}function B(t){P.innerHTML=t}function W(){console.error("Error:",err),P.innerHTML=""}P.addEventListener("click",Lt);async function Lt(t){const s=t.target.closest(".popular__products-button");if(s){const c=s.closest(".popular__products-items").dataset.id,o=await g(c);o.quantity=1,$t(o,s);const r=await H();B(r)}}function $t(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(c=>c._id===t._id)){const c=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),c.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));It()}function It(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}function Et(){document.querySelector("body").insertAdjacentHTML("beforeend",xt()),D()}function _t(){document.querySelector("body").insertAdjacentHTML("beforeend",Pt()),D()}function xt(){return`
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

    
    `}function Pt(){return`
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
    
    `}function D(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function s(){const o=document.querySelector("[data-modal]");o&&(o.remove(),t.removeEventListener("click",s),document.removeEventListener("keydown",c),e.removeEventListener("click",a))}function a(o){o.target===e&&(s(),e.removeEventListener("click",a))}function c(o){o.code==="Escape"&&(s(),document.removeEventListener("keydown",c))}t.addEventListener("click",s),e.addEventListener("click",a),document.addEventListener("keydown",c),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const Ct=document.querySelector(".footer-form");Ct.addEventListener("submit",qt);async function qt(t){t.preventDefault();const e=t.target.email,s=e.value,a=await R(s);a.success?(_t(),e.value=""):a.status===409?(Et(),e.value=""):alert(a.message)}M();J();l();
//# sourceMappingURL=commonHelpers2.js.map
