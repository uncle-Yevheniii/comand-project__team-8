import{a as Q,s as l,f as X,b as Z,d as tt}from"./assets/footer-dbcac66d.js";import{a as et,P as ot,S as ct}from"./assets/vendor-c8bc0669.js";document.querySelector(".wrapperPopularProduct");document.querySelector("body");const J=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",st);async function st(){try{const t=await b();if(t===void 0)throw new Error;$(t)}catch{V()}}function at(t){return t.map(({name:e,img:o,category:c,size:s,popularity:a,price:r,is10PercentOff:n,_id:d})=>{c.includes("_")&&(c=c.split("_").join(" "));const g=(JSON.parse(localStorage.getItem("cart"))||[]).find(x=>x._id===d);return`
  <li data-id='${d}' class="popular__products-items">
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
      <span class="js-popular__products-category">${c}</span>
    </p>
    <div class="add-ifo-box">
      <p class="popular__products-text">
        Size: <span class="js-popular__products-size">${s}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${a}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button" ${g?"disabled":""}>
    <svg class="popular__products-svg${g?"check":"cart"}" width="12" height="12">
      <use href="${l}#icon-${g?"check":"cart"}"></use>
    </svg>
  </button>
</li>
  `}).join("")}async function b(){try{const t=await Q();return at(t)}catch{V()}}function $(t){J.innerHTML=t}function V(){console.error("Error:",err),J.innerHTML=""}J.addEventListener("click",rt);async function rt(t){const o=t.target.closest(".popular__products-button");if(o){const s=o.closest(".popular__products-items").dataset.id,a=await p(s);a.quantity=1,nt(a,o);const r=await b();$(r),i()}}function nt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(s=>s._id===t._id)){const s=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),s.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));it()}function it(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const m=document.querySelector(".wrapperPopularProduct"),_=document.querySelector("body");m.addEventListener("click",u);const f=document.querySelector(".card-discount-prod"),v=document.querySelector(".products-list");v.addEventListener("click",h);f.addEventListener("click",E);async function h(t){v.removeEventListener("click",h),m.removeEventListener("click",u),f.removeEventListener("click",E);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){v.addEventListener("click",h);return}const o=e.dataset.id,c=await p(o);_.insertAdjacentHTML("beforeend",C(c));const s=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(s.style.background="#6d8434",s.childNodes[0].nodeValue="Remove from",s.addEventListener("click",L)),M()}async function u(t){v.removeEventListener("click",h),m.removeEventListener("click",u),f.removeEventListener("click",E);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){m.addEventListener("click",u);return}const o=e.dataset.id,c=await p(o);_.insertAdjacentHTML("beforeend",C(c));const s=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(s.style.background="#6d8434",s.childNodes[0].nodeValue="Remove from",s.addEventListener("click",L)),M()}async function E(t){f.removeEventListener("click",u),v.removeEventListener("click",h),m.removeEventListener("click",u);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){f.addEventListener("click",u);return}const o=e.dataset.id,c=await p(o);_.insertAdjacentHTML("beforeend",C(c));const s=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===c._id)&&(s.style.background="#6d8434",s.childNodes[0].nodeValue="Remove from",s.addEventListener("click",L)),M()}async function p(t){const e="https://food-boutique.b.goit.study/api/products/";return et.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function C(t){let e;const{_id:o,name:c,category:s,size:a,popularity:r,desc:n,price:d,img:P}=t;return s.includes("_")&&(e=s.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${o}" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${l}#icon-close"></use>
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
      <p class="modal-product-cost">$${d}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${l}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function M(){document.querySelector(".modal-wimdow-add-to-cart-btn").addEventListener("click",D);const e=document.querySelector("[data-modal-close]"),o=document.querySelector(".backdrop");function c(){const r=document.querySelector("[data-modal]");r&&(r.remove(),e.removeEventListener("click",c),document.removeEventListener("keydown",a),o.removeEventListener("click",s))}function s(r){r.target===o&&(c(),o.removeEventListener("click",s))}function a(r){r.code==="Escape"&&(c(),document.removeEventListener("keydown",a))}m.addEventListener("click",u),v.addEventListener("click",h),f.addEventListener("click",E),e.addEventListener("click",c),o.addEventListener("click",s),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||_.insertAdjacentHTML("beforeend",C(info))}async function D(t){console.log("!!!!");const e=document.querySelector(".modal-wimdow-add-to-cart-btn");console.log(e);const c=e.closest(".modal-container").dataset.id,s=await p(c);s.quantity=1,F(s,e);const a=await b();$(a),i()}function F(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];const c=o.find(s=>s._id===t._id);e.removeEventListener("click",F),c?(e.style.background="#6d8434",e.childNodes[0].nodeValue="Remove from"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Remove from"),e.addEventListener("click",L),dt()}function dt(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}async function L(){console.log("-----");const t=document.querySelector(".modal-wimdow-add-to-cart-btn");t.removeEventListener("click",L);const e=document.querySelector(".modal-product");console.log(e);const o=e.dataset.id;console.log(o);const c=await p(o);if((JSON.parse(localStorage.getItem("cart"))||[]).find(r=>r._id===c._id)){const n=(JSON.parse(localStorage.getItem("cart"))||[]).filter(d=>d._id!==o);localStorage.setItem("cart",JSON.stringify(n)),t.childNodes[0].nodeValue="Add to",console.log("-----"),t.addEventListener("click",D)}}const lt=document.getElementById("pagination");let N=0;const ut=window.innerWidth;ut<768?N=2:N=4;function pt(t,e,o){const c={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:N,page:o,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new ot(lt,c).on("afterMove",a=>{const r=a.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),i()})}const w=document.querySelector(".products-list"),T=document.querySelector(".products-list-none"),S=document.querySelector(".pagination-block"),gt={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",ft);function mt(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function i(){return localStorage.getItem("settings")?await j(JSON.parse(localStorage.getItem("settings"))):await j(gt)}async function j(t){try{t=mt(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await X(t);o.results.length===0?(T.classList.remove("hidden"),w.classList.add("hidden"),S.classList.add("hidden")):(w.classList.contains("hidden")&&(T.classList.add("hidden"),w.classList.remove("hidden"),S.classList.remove("hidden")),w.innerHTML=vt(o.results),o.totalPages>1?(S.classList.contains("hidden")&&S.classList.remove("hidden"),pt(o,o.perPage,o.page)):S.classList.add("hidden"))}catch(e){console.log(e.message)}}function ft(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||i()}function vt(t){return t.map(({name:e,img:o,category:c,size:s,popularity:a,price:r,is10PercentOff:n,_id:d})=>{c.includes("_")&&(c=c.split("_").join(" "));const g=(JSON.parse(localStorage.getItem("cart"))||[]).find(x=>x._id===d);return`
    <div class="productlist-card" data-id="${d}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${s}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${a}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${r}</span>
        <button type="button" class="productlist-card-btn" ${g?"disabled":""}>
            <svg class="productlist-card-icon-${g?"check":"cart"}" width="18" height="18">
                <use href="${l}#icon-${g?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${l}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",R);w.addEventListener("click",ht);async function ht(t){const o=t.target.closest(".productlist-card-btn");if(o){const s=o.closest(".productlist-card").dataset.id,a=await p(s);a.quantity=1,St(a,o),i();const r=await b();$(r)}}function St(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(s=>s._id===t._id)){const s=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),s.setAttribute("href",`${l}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));R()}function R(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const yt=document.querySelector(".filters-form"),I=document.querySelector(".filters-form-input"),k=document.querySelector(".filters-form-select-category"),wt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let A=[];const kt=async()=>{A=[...await Z(),"Show all"];const e=wt(A);k.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};k.value=o.category,new ct({select:"#category",settings:{showSearch:!1}})};kt();const Lt=t=>{t.preventDefault();let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const o=I.value.trim(),c=k.value;e.keyword=o||null,e.category=c==="Show all"?null:c.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()},It=t=>{if(t.target.value===""){let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const o=k.value;e.keyword=null,e.category=o==="Show all"?null:o.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()}},bt=t=>{let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const o=I.value.trim(),c=t.target.value;e.keyword=o||null,e.category=c==="Show all"?null:c.trim()||null,e.page=1,localStorage.setItem("settings",JSON.stringify(e)),i()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};I.value=t.keyword,i(),yt.addEventListener("submit",Lt),I.addEventListener("input",It),k.addEventListener("change",bt)});const $t={keyword:null,category:null,page:1,limit:6},_t=[];function z(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify($t))}function G(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(_t))}const K=document.querySelector(".card-discount-prod");z();G();function Et(t){return t.map(({img:e,name:o,price:c,_id:s})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s);return`<li class="discount-prod-item slide" data-id='${s}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${o}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${o}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${c}</p>
        <button type="button" class="btn-icon-cart" ${r?"disabled":""}>
          <svg class="icon-cart-svg${r?"check":"cart"}" width="18" height="18">
            <use href="${l}#icon-${r?"check":"cart"}"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="wrap-discount-svg">
      <svg class="discount-svg" width="60" height="60">
        <use href="${l}#icon-discount"></use>
      </svg>
  </div>
</li>`}).join("")}function U(){tt().then(t=>{Ct(t),K.innerHTML=Et(t)}).catch(t=>console.log(t.message))}U();function Ct(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let c=t[o];t[o]=t[e],t[e]=c}window.addEventListener("load",Y);K.addEventListener("click",Pt);async function Pt(t){const o=t.target.closest(".btn-icon-cart");if(o){const s=o.closest(".discount-prod-item").dataset.id,a=await p(s);a.quantity=1,xt(a,o)}U()}function xt(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(s=>s._id===t._id)){const s=e.querySelector(".icon-cart-svgcart use"),a=e.querySelector(".icon-cart-svg");a&&a.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),s.setAttribute("href",`${l}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));Y()}function Y(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}let q=0;const H=2,O=document.querySelector("header"),B=document.querySelector(".header-container"),y=()=>window.pageYOffset||document.documentElement.scrollTop,W=()=>O.classList.contains("hide");function qt(){window.addEventListener("scroll",()=>{y()>q&&!W()&&y()>H?O.classList.add("hide"):y()<q&&W()&&O.classList.remove("hide"),y()>H?B.classList.add("scrolled"):B.classList.remove("scrolled"),q=y()})}z();G();qt();i();
//# sourceMappingURL=commonHelpers2.js.map
