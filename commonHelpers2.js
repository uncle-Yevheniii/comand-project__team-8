import{a as Y,s as l,f as Q,b as X,d as Z}from"./assets/footer-b74378ef.js";import{a as tt,P as et,S as ct}from"./assets/vendor-c8bc0669.js";const J=document.querySelector(".wrapperPopularProduct");document.addEventListener("DOMContentLoaded",ot);async function ot(){try{const t=await I();if(t===void 0)throw new Error;b(t)}catch{D()}}function st(t){return t.map(({name:e,img:c,category:o,size:s,popularity:a,price:r,is10PercentOff:n,_id:d})=>{o.includes("_")&&(o=o.split("_").join(" "));const g=(JSON.parse(localStorage.getItem("cart"))||[]).find(x=>x._id===d);return`
  <li data-id='${d}' class="popular__products-items">
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
      <span class="js-popular__products-category">${o}</span>
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
  `}).join("")}async function I(){try{const t=await Y();return st(t)}catch{D()}}function b(t){J.innerHTML=t}function D(){console.error("Error:",err),J.innerHTML=""}J.addEventListener("click",at);async function at(t){const c=t.target.closest(".popular__products-button");if(c){const s=c.closest(".popular__products-items").dataset.id,a=await p(s);a.quantity=1,rt(a,c);const r=await I();b(r),i()}}function rt(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];if(c.find(s=>s._id===t._id)){const s=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),s.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else c.push(t),localStorage.setItem("cart",JSON.stringify(c));nt()}function nt(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const m=document.querySelector(".wrapperPopularProduct"),C=document.querySelector("body"),f=document.querySelector(".card-discount-prod"),v=document.querySelector(".products-list");m.addEventListener("click",u);v.addEventListener("click",h);f.addEventListener("click",E);async function h(t){v.removeEventListener("click",h),m.removeEventListener("click",u),f.removeEventListener("click",E);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){v.addEventListener("click",h);return}const c=e.dataset.id,o=await p(c);C.insertAdjacentHTML("beforeend",P(o));const s=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(s.style.background="#6d8434",s.childNodes[0].nodeValue="Remove from",s.addEventListener("click",$)),M()}async function u(t){v.removeEventListener("click",h),m.removeEventListener("click",u),f.removeEventListener("click",E);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){m.addEventListener("click",u);return}const c=e.dataset.id,o=await p(c);C.insertAdjacentHTML("beforeend",P(o));const s=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(s.style.background="#6d8434",s.childNodes[0].nodeValue="Remove from",s.addEventListener("click",$)),M()}async function E(t){f.removeEventListener("click",u),v.removeEventListener("click",h),m.removeEventListener("click",u);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){f.addEventListener("click",u);return}const c=e.dataset.id,o=await p(c);C.insertAdjacentHTML("beforeend",P(o));const s=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(s.style.background="#6d8434",s.childNodes[0].nodeValue="Remove from",s.addEventListener("click",$)),M()}async function p(t){const e="https://food-boutique.b.goit.study/api/products/";return tt.get(`${e}${t}`).then(c=>c.data).catch(c=>{throw new Error(c)})}function P(t){let e;const{_id:c,name:o,category:s,size:a,popularity:r,desc:n,price:d,img:S}=t;return s.includes("_")&&(e=s.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${c}" data-modal">
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
          src="${S}"
          alt="${o}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${o}</p>
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
    
    `}function M(){document.querySelector(".modal-wimdow-add-to-cart-btn").addEventListener("click",T);const e=document.querySelector("[data-modal-close]"),c=document.querySelector(".backdrop");function o(){const r=document.querySelector("[data-modal]");r&&(r.remove(),e.removeEventListener("click",o),document.removeEventListener("keydown",a),c.removeEventListener("click",s))}function s(r){r.target===c&&(o(),c.removeEventListener("click",s))}function a(r){r.code==="Escape"&&(o(),document.removeEventListener("keydown",a))}m.addEventListener("click",u),v.addEventListener("click",h),f.addEventListener("click",E),e.addEventListener("click",o),c.addEventListener("click",s),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||C.insertAdjacentHTML("beforeend",P(info))}async function T(){console.log("!!!!");const t=document.querySelector(".modal-wimdow-add-to-cart-btn");console.log(t);const c=t.closest(".modal-container").dataset.id,o=await p(c);o.quantity=1,it(o,t);const s=await I();b(s),i()}function it(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];const o=c.find(s=>s._id===t._id);e.removeEventListener("click",T),o?(e.style.background="#6d8434",e.childNodes[0].nodeValue="Remove from"):(c.push(t),localStorage.setItem("cart",JSON.stringify(c)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Remove from"),e.addEventListener("click",$),dt()}function dt(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}async function $(){console.log("-----");const t=document.querySelector(".modal-wimdow-add-to-cart-btn");t.removeEventListener("click",$);const e=document.querySelector(".modal-product");console.log(e);const c=e.dataset.id;console.log(c);const o=await p(c);if((JSON.parse(localStorage.getItem("cart"))||[]).find(r=>r._id===o._id)){const n=(JSON.parse(localStorage.getItem("cart"))||[]).filter(S=>S._id!==c);localStorage.setItem("cart",JSON.stringify(n)),t.childNodes[0].nodeValue="Add to",console.log("-----");const d=await I();b(d),i(),t.addEventListener("click",T)}}const lt=document.getElementById("pagination");let O=0;const ut=window.innerWidth;ut<768?O=2:O=4;function pt(t,e,c){const o={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:O,page:c,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new et(lt,o).on("afterMove",a=>{const r=a.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),i()})}const k=document.querySelector(".products-list"),j=document.querySelector(".products-list-none"),y=document.querySelector(".pagination-block"),gt={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",ft);function mt(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function i(){return localStorage.getItem("settings")?await A(JSON.parse(localStorage.getItem("settings"))):await A(gt)}async function A(t){try{t=mt(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const c=await Q(t);c.results.length===0?(j.classList.remove("hidden"),k.classList.add("hidden"),y.classList.add("hidden")):(k.classList.contains("hidden")&&(j.classList.add("hidden"),k.classList.remove("hidden"),y.classList.remove("hidden")),k.innerHTML=vt(c.results),c.totalPages>1?(y.classList.contains("hidden")&&y.classList.remove("hidden"),pt(c,c.perPage,c.page)):y.classList.add("hidden"))}catch(e){console.log(e.message)}}function ft(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||i()}function vt(t){return t.map(({name:e,img:c,category:o,size:s,popularity:a,price:r,is10PercentOff:n,_id:d})=>{o.includes("_")&&(o=o.split("_").join(" "));const g=(JSON.parse(localStorage.getItem("cart"))||[]).find(x=>x._id===d);return`
    <div class="productlist-card" data-id="${d}">
    <div class="productlist-card-img-wrapper">
        <img src="${c}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${o}</span>
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
  `}).join("")}window.addEventListener("load",F);k.addEventListener("click",ht);async function ht(t){const c=t.target.closest(".productlist-card-btn");if(c){const s=c.closest(".productlist-card").dataset.id,a=await p(s);a.quantity=1,St(a,c),i();const r=await I();b(r)}}function St(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];if(c.find(s=>s._id===t._id)){const s=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),s.setAttribute("href",`${l}#icon-check`),e.setAttribute("disabled","disabled")}else c.push(t),localStorage.setItem("cart",JSON.stringify(c));F()}function F(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const yt=document.querySelector(".filters-form"),_=document.querySelector(".filters-form-input"),L=document.querySelector(".filters-form-select-category"),wt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let H=[];const kt=async()=>{H=[...await X(),"Show all"];const e=wt(H);L.insertAdjacentHTML("beforeend",e);const c=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};L.value=c.category,new ct({select:"#category",settings:{showSearch:!1}})};kt();const Lt=t=>{t.preventDefault();let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const c=_.value.trim(),o=L.value;e.keyword=c||null,e.category=o==="Show all"?null:o.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()},It=t=>{if(t.target.value===""){let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const c=L.value;e.keyword=null,e.category=c==="Show all"?null:c.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()}},bt=t=>{let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const c=_.value.trim(),o=t.target.value;e.keyword=c||null,e.category=o==="Show all"?null:o.trim()||null,e.page=1,localStorage.setItem("settings",JSON.stringify(e)),i()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};_.value=t.keyword,i(),yt.addEventListener("submit",Lt),_.addEventListener("input",It),L.addEventListener("change",bt)});const $t={keyword:null,category:null,page:1,limit:6},_t=[];function R(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify($t))}function z(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(_t))}const G=document.querySelector(".card-discount-prod");R();z();function Ct(t){return t.map(({img:e,name:c,price:o,_id:s})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===s);return`<li class="discount-prod-item slide" data-id='${s}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${c}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${c}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${o}</p>
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
</li>`}).join("")}function K(){Z().then(t=>{Et(t),G.innerHTML=Ct(t)}).catch(t=>console.log(t.message))}K();function Et(t){let e=Math.floor(Math.random()*t.length),c=Math.floor(Math.random()*t.length);if(e===c)return;let o=t[c];t[c]=t[e],t[e]=o}window.addEventListener("load",U);G.addEventListener("click",Pt);async function Pt(t){const c=t.target.closest(".btn-icon-cart");if(c){const s=c.closest(".discount-prod-item").dataset.id,a=await p(s);a.quantity=1,xt(a,c)}K()}function xt(t,e){let c=JSON.parse(localStorage.getItem("cart"))||[];if(c.find(s=>s._id===t._id)){const s=e.querySelector(".icon-cart-svgcart use"),a=e.querySelector(".icon-cart-svg");a&&a.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),s.setAttribute("href",`${l}#icon-check`),e.setAttribute("disabled","disabled")}else c.push(t),localStorage.setItem("cart",JSON.stringify(c));U()}function U(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}let N=0;const B=2,q=document.querySelector("header"),W=document.querySelector(".header-container"),w=()=>window.pageYOffset||document.documentElement.scrollTop,V=()=>q.classList.contains("hide");function Nt(){window.addEventListener("scroll",()=>{w()>N&&!V()&&w()>B?q.classList.add("hide"):w()<N&&V()&&q.classList.remove("hide"),w()>B?W.classList.add("scrolled"):W.classList.remove("scrolled"),N=w()})}R();z();Nt();i();
//# sourceMappingURL=commonHelpers2.js.map
