import{c as d,f as V,a as z,d as F,b as K,e as R}from"./assets/API-68f83062.js";import{a as G,P as U,S as Y}from"./assets/vendor-c8bc0669.js";const g=document.querySelector(".wrapperPopularProduct"),w=document.querySelector("body");g.addEventListener("click",i);const v=document.querySelector(".card-discount-prod"),f=document.querySelector(".products-list");f.addEventListener("click",h);v.addEventListener("click",k);async function h(t){f.removeEventListener("click",h),g.removeEventListener("click",i),v.removeEventListener("click",k);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){f.addEventListener("click",h);return}const c=e.dataset.id,s=await m(c);w.insertAdjacentHTML("beforeend",L(s));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Added to"),_()}async function i(t){f.removeEventListener("click",h),g.removeEventListener("click",i),v.removeEventListener("click",k);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){g.addEventListener("click",i);return}const c=e.dataset.id,s=await m(c);w.insertAdjacentHTML("beforeend",L(s));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Added to"),_()}async function k(t){v.removeEventListener("click",i),f.removeEventListener("click",h),g.removeEventListener("click",i);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){v.addEventListener("click",i);return}const c=e.dataset.id,s=await m(c);w.insertAdjacentHTML("beforeend",L(s));const o=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s._id)&&(o.style.background="#6d8434",o.childNodes[0].nodeValue="Added to"),_()}async function m(t){const e="https://food-boutique.b.goit.study/api/products/";return G.get(`${e}${t}`).then(c=>c.data).catch(c=>{throw new Error(c)})}function L(t){let e;const{_id:c,name:s,category:o,size:a,popularity:r,desc:n,price:u,img:$}=t;return o.includes("_")&&(e=o.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${c}" data-modal">
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
    
    `}function _(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",Q);function s(){const r=document.querySelector("[data-modal]");r&&(r.remove(),t.removeEventListener("click",s),document.removeEventListener("keydown",a),e.removeEventListener("click",o))}function o(r){r.target===e&&(s(),e.removeEventListener("click",o))}function a(r){r.code==="Escape"&&(s(),document.removeEventListener("keydown",a))}g.addEventListener("click",i),f.addEventListener("click",h),v.addEventListener("click",k),t.addEventListener("click",s),e.addEventListener("click",o),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||w.insertAdjacentHTML("beforeend",L(info))}async function Q(t){const c=t.target.closest(".modal-wimdow-add-to-cart-btn");if(c){const o=c.closest(".modal-container").dataset.id,a=await m(o);a.quantity=1,X(a,c)}}function X(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];c.find(o=>o._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(c.push(t),localStorage.setItem("cart",JSON.stringify(c)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to"),Z()}function Z(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const tt=document.getElementById("pagination");let I=0;const et=window.innerWidth;et<768?I=2:I=4;function ct(t,e,c){const s={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:I,page:c,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new U(tt,s).on("afterMove",a=>{const r=a.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),l()})}const y=document.querySelector(".products-list"),P=document.querySelector(".products-list-none"),C=document.querySelector(".pagination-block"),st={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",at);function ot(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function l(){return localStorage.getItem("settings")?await q(JSON.parse(localStorage.getItem("settings"))):await q(st)}async function q(t){try{t=ot(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const c=await V(t);c.results.length===0?(P.classList.remove("hidden"),y.classList.add("hidden"),C.classList.add("hidden")):(y.classList.contains("hidden")&&(P.classList.add("hidden"),y.classList.remove("hidden"),C.classList.remove("hidden")),y.innerHTML=rt(c.results),c.totalPages>1&&ct(c,c.perPage,c.page))}catch(e){console.log(e.message)}}function at(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||l()}function rt(t){return t.map(({name:e,img:c,category:s,size:o,popularity:a,price:r,is10PercentOff:n,_id:u})=>{s.includes("_")&&(s=s.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===u);return`
    <div class="productlist-card" data-id="${u}">
    <div class="productlist-card-img-wrapper">
        <img src="${c}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${s}</span>
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
  `}).join("")}window.addEventListener("load",N);y.addEventListener("click",nt);async function nt(t){const c=t.target.closest(".productlist-card-btn");if(c){const o=c.closest(".productlist-card").dataset.id,a=await m(o);a.quantity=1,dt(a,c),l()}}function dt(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];if(c.find(o=>o._id===t._id)){const o=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),o.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else c.push(t),localStorage.setItem("cart",JSON.stringify(c));N()}function N(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const it=document.querySelector(".filters-form"),b=document.querySelector(".filters-form-input"),S=document.querySelector(".filters-form-select-category"),lt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let M=[];const ut=async()=>{M=[...await z(),"Show all"];const e=lt(M);S.insertAdjacentHTML("beforeend",e);const c=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};S.value=c.category,new Y({select:"#category",settings:{showSearch:!1}})};ut();const pt=t=>{t.preventDefault();const e=b.value.trim(),c=S.value,s={keyword:e||null,category:c==="Show all"?null:c.trim()||null};localStorage.setItem("settings",JSON.stringify(s)),l()},mt=t=>{if(t.target.value===""){const e=S.value,c={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(c)),l()}},gt=t=>{const e=b.value.trim(),c=t.target.value,s={keyword:e||null,category:c==="Show all"?null:c.trim()||null};localStorage.setItem("settings",JSON.stringify(s)),l()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};b.value=t.keyword,l(),it.addEventListener("submit",pt),S.addEventListener("change",gt),b.addEventListener("input",mt)});const vt={keyword:null,category:null,page:1,limit:6},ft=[];function O(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(vt))}function J(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(ft))}const T=document.querySelector(".card-discount-prod");O();J();function ht(t){return t.map(({img:e,name:c,price:s,_id:o})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o);return`<li class="discount-prod-item slide" data-id='${o}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${c}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${c}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${s}</p>
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
</li>`}).join("")}function A(){F().then(t=>{yt(t),T.innerHTML=ht(t)}).catch(t=>console.log(t.message))}A();function yt(t){let e=Math.floor(Math.random()*t.length),c=Math.floor(Math.random()*t.length);if(e===c)return;let s=t[c];t[c]=t[e],t[e]=s}window.addEventListener("load",j);T.addEventListener("click",St);async function St(t){const c=t.target.closest(".btn-icon-cart");if(c){const o=c.closest(".discount-prod-item").dataset.id,a=await m(o);a.quantity=1,bt(a,c)}A()}function bt(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];if(c.find(o=>o._id===t._id)){const o=e.querySelector(".icon-cart-svgcart use"),a=e.querySelector(".icon-cart-svg");a&&a.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),o.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else c.push(t),localStorage.setItem("cart",JSON.stringify(c));j()}function j(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}document.querySelector(".wrapperPopularProduct");document.querySelector("body");const x=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",wt);async function wt(){try{const t=await H();if(t===void 0)throw new Error;B(t)}catch{W()}}function kt(t){return t.map(({name:e,img:c,category:s,size:o,popularity:a,price:r,is10PercentOff:n,_id:u})=>{s.includes("_")&&(s=s.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(E=>E._id===u);return`
  <li data-id='${u}' class="popular__products-items">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${c}"
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
  `}).join("")}async function H(){try{const t=await K();return kt(t)}catch{W()}}function B(t){x.innerHTML=t}function W(){console.error("Error:",err),x.innerHTML=""}x.addEventListener("click",Lt);async function Lt(t){const c=t.target.closest(".popular__products-button");if(c){const o=c.closest(".popular__products-items").dataset.id,a=await m(o);a.quantity=1,$t(a,c);const r=await H();B(r)}}function $t(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];if(c.find(o=>o._id===t._id)){const o=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),o.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else c.push(t),localStorage.setItem("cart",JSON.stringify(c));Et()}function Et(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}function It(){document.querySelector("body").insertAdjacentHTML("beforeend",xt()),D()}function _t(){document.querySelector("body").insertAdjacentHTML("beforeend",Pt()),D()}function xt(){return`
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
    
    `}function D(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function c(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",c),document.removeEventListener("keydown",o),e.removeEventListener("click",s))}function s(a){a.target===e&&(c(),e.removeEventListener("click",s))}function o(a){a.code==="Escape"&&(c(),document.removeEventListener("keydown",o))}t.addEventListener("click",c),e.addEventListener("click",s),document.addEventListener("keydown",o),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const Ct=document.querySelector(".footer-form");Ct.addEventListener("submit",qt);async function qt(t){t.preventDefault();const e=t.target.email,c=e.value,s=await R(c);s.success?(_t(),e.value=""):s.status===409?(It(),e.value=""):alert(s.message)}O();J();l();
//# sourceMappingURL=commonHelpers2.js.map
