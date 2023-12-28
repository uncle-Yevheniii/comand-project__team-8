import{c as d,f as B,a as W,d as D,b as V,e as z}from"./assets/API-c36e7ded.js";import{a as F,P as K,S as R}from"./assets/vendor-c8bc0669.js";const g=document.querySelector(".wrapperPopularProduct"),w=document.querySelector("body");g.addEventListener("click",i);const v=document.querySelector(".card-discount-prod"),f=document.querySelector(".products-list");f.addEventListener("click",h);v.addEventListener("click",k);async function h(t){f.removeEventListener("click",h),g.removeEventListener("click",i),v.removeEventListener("click",k);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){f.addEventListener("click",h);return}const o=e.dataset.id,s=await p(o);w.insertAdjacentHTML("beforeend",L(s));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Added to"),I()}async function i(t){f.removeEventListener("click",h),g.removeEventListener("click",i),v.removeEventListener("click",k);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){g.addEventListener("click",i);return}const o=e.dataset.id,s=await p(o);w.insertAdjacentHTML("beforeend",L(s));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Added to"),I()}async function k(t){v.removeEventListener("click",i),f.removeEventListener("click",h),g.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){v.addEventListener("click",i);return}const o=e.dataset.id,s=await p(o);w.insertAdjacentHTML("beforeend",L(s));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Added to"),I()}async function p(t){const e="https://food-boutique.b.goit.study/api/products/";return F.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function L(t){let e;const{_id:o,name:s,category:a,size:c,popularity:r,desc:n,price:l,img:$}=t;return a.includes("_")&&(e=a.split("_").join(" ")),`
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
              >${c}</span
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
    
    `}function I(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",G);function s(){const r=document.querySelector("[data-modal]");r&&(r.remove(),t.removeEventListener("click",s),document.removeEventListener("keydown",c),e.removeEventListener("click",a))}function a(r){r.target===e&&(s(),e.removeEventListener("click",a))}function c(r){r.code==="Escape"&&(s(),document.removeEventListener("keydown",c))}g.addEventListener("click",i),f.addEventListener("click",h),v.addEventListener("click",k),t.addEventListener("click",s),e.addEventListener("click",a),document.addEventListener("keydown",c),document.querySelector("[data-modal]")||w.insertAdjacentHTML("beforeend",L(info))}async function G(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(o){const a=o.closest(".modal-container").dataset.id,c=await p(a);c.quantity=1,U(c,o)}}function U(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(a=>a._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to"),Y()}function Y(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const Q=document.getElementById("pagination");let _=0;const X=window.innerWidth;X<768?_=2:_=4;function Z(t,e,o){const s={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:_,page:o,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new K(Q,s).on("afterMove",c=>{const r=c.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),m()})}const y=document.querySelector(".products-list"),P=document.querySelector(".products-list-none"),C=document.querySelector(".pagination-block"),tt={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",ot);function et(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function m(){return localStorage.getItem("settings")?await q(JSON.parse(localStorage.getItem("settings"))):await q(tt)}async function q(t){try{t=et(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await B(t);o.results.length===0?(P.classList.remove("hidden"),y.classList.add("hidden"),C.classList.add("hidden")):(y.classList.contains("hidden")&&(P.classList.add("hidden"),y.classList.remove("hidden"),C.classList.remove("hidden")),y.innerHTML=st(o.results),o.totalPages>1&&Z(o,o.perPage,o.page))}catch(e){console.log(e.message)}}function ot(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||m()}function st(t){return t.map(({name:e,img:o,category:s,size:a,popularity:c,price:r,is10PercentOff:n,_id:l})=>{s.includes("_")&&(s=s.split("_").join(" "));const u=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===l);return`
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
          Size: <span class="productlist-card-text-span">${a}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${c}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${r}</span>
        <button type="button" class="productlist-card-btn" ${u?"disabled":""}>
            <svg class="productlist-card-icon-${u?"check":"cart"}" width="18" height="18">
                <use href="${d}#icon-${u?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",N);y.addEventListener("click",at);async function at(t){const o=t.target.closest(".productlist-card-btn");if(o){const a=o.closest(".productlist-card").dataset.id,c=await p(a);c.quantity=1,ct(c,o)}}function ct(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(a=>a._id===t._id)){const a=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),a.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));N()}function N(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const rt=document.querySelector(".filters-form"),b=document.querySelector(".filters-form-input"),S=document.querySelector(".filters-form-select-category"),nt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let M=[];const dt=async()=>{M=[...await W(),"Show all"];const e=nt(M);S.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};S.value=o.category,new R({select:"#category",settings:{showSearch:!1}})};dt();const it=t=>{t.preventDefault();const e=b.value.trim(),o=S.value,s={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(s)),m()},lt=t=>{if(t.target.value===""){const e=S.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),m()}},ut=t=>{const e=b.value.trim(),o=t.target.value,s={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(s)),m()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};b.value=t.keyword,m(),rt.addEventListener("submit",it),S.addEventListener("change",ut),b.addEventListener("input",lt)});const pt={keyword:null,category:null,page:1,limit:6},mt=[];function O(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(pt))}function J(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(mt))}const T=document.querySelector(".card-discount-prod");O();J();function gt(t){return t.map(({img:e,name:o,price:s,_id:a})=>`<li class="discount-prod-item slide" data-id='${a}'>
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
</li>`).join("")}function vt(){D().then(t=>{ft(t),T.insertAdjacentHTML("beforeend",gt(t))}).catch(t=>console.log(t.message))}vt();function ft(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let s=t[o];t[o]=t[e],t[e]=s}window.addEventListener("load",A);T.addEventListener("click",ht);async function ht(t){const o=t.target.closest(".btn-icon-cart");if(o){const a=o.closest(".discount-prod-item").dataset.id,c=await p(a);c.quantity=1,yt(c,o)}}function yt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(a=>a._id===t._id)){const a=e.querySelector(".icon-cart-svg use");a.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),a.setAttribute("href",`${d}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));A()}function A(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}document.querySelector(".wrapperPopularProduct");document.querySelector("body");const x=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",St);async function St(){try{const t=await wt();if(t===void 0)throw new Error;kt(t)}catch{j()}}function bt(t){return t.map(({name:e,img:o,category:s,size:a,popularity:c,price:r,is10PercentOff:n,_id:l})=>{s.includes("_")&&(s=s.split("_").join(" "));const u=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===l);return`
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
        Size: <span class="js-popular__products-size">${a}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${c}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button" ${u?"disabled":""}>
    <svg class="popular__products-svg${u?"check":"cart"}" width="12" height="12">
      <use href="${d}#icon-${u?"check":"cart"}"></use>
    </svg>
  </button>
</li>
  `}).join("")}async function wt(){try{const t=await V();return bt(t)}catch{j()}}function kt(t){x.innerHTML=t}function j(){console.error("Error:",err),x.innerHTML=""}x.addEventListener("click",Lt);async function Lt(t){const o=t.target.closest(".popular__products-button");if(o){const a=o.closest(".popular__products-items").dataset.id,c=await p(a);c.quantity=1,$t(c,o),location.reload()}}function $t(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(a=>a._id===t._id)){const a=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),a.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));Et()}function Et(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}function _t(){document.querySelector("body").insertAdjacentHTML("beforeend",xt()),H()}function It(){document.querySelector("body").insertAdjacentHTML("beforeend",Pt()),H()}function xt(){return`
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
    
    `}function H(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function o(){const c=document.querySelector("[data-modal]");c&&(c.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",a),e.removeEventListener("click",s))}function s(c){c.target===e&&(o(),e.removeEventListener("click",s))}function a(c){c.code==="Escape"&&(o(),document.removeEventListener("keydown",a))}t.addEventListener("click",o),e.addEventListener("click",s),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const Ct=document.querySelector(".footer-form");Ct.addEventListener("submit",qt);async function qt(t){t.preventDefault();const e=t.target.email,o=e.value,s=await z(o);s.success?(It(),e.value=""):s.status===409?(_t(),e.value=""):alert(s.message)}O();J();m();
//# sourceMappingURL=commonHelpers2.js.map
