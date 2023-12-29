import{a as U,c as i,f as Q,b as X,d as Z,e as tt}from"./assets/API-5236cc24.js";import{a as et,P as st,S as ot}from"./assets/vendor-c8bc0669.js";document.querySelector(".wrapperPopularProduct");document.querySelector("body");const N=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",at);async function at(){try{const t=await L();if(t===void 0)throw new Error;$(t)}catch{D()}}function ct(t){return t.map(({name:e,img:s,category:o,size:a,popularity:c,price:r,is10PercentOff:n,_id:u})=>{o.includes("_")&&(o=o.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(P=>P._id===u);return`
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
      <span class="js-popular__products-category">${o}</span>
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
  <button class="popular__products-button" ${p?"disabled":""}>
    <svg class="popular__products-svg${p?"check":"cart"}" width="12" height="12">
      <use href="${i}#icon-${p?"check":"cart"}"></use>
    </svg>
  </button>
</li>
  `}).join("")}async function L(){try{const t=await U();return ct(t)}catch{D()}}function $(t){N.innerHTML=t}function D(){console.error("Error:",err),N.innerHTML=""}N.addEventListener("click",rt);async function rt(t){const s=t.target.closest(".popular__products-button");if(s){const a=s.closest(".popular__products-items").dataset.id,c=await m(a);c.quantity=1,nt(c,s);const r=await L();$(r),d()}}function nt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(a=>a._id===t._id)){const a=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),a.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));it()}function it(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const g=document.querySelector(".wrapperPopularProduct"),E=document.querySelector("body");g.addEventListener("click",l);const f=document.querySelector(".card-discount-prod"),v=document.querySelector(".products-list");v.addEventListener("click",h);f.addEventListener("click",I);async function h(t){v.removeEventListener("click",h),g.removeEventListener("click",l),f.removeEventListener("click",I);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){v.addEventListener("click",h);return}const s=e.dataset.id,o=await m(s);E.insertAdjacentHTML("beforeend",_(o));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Remove from"),M()}async function l(t){v.removeEventListener("click",h),g.removeEventListener("click",l),f.removeEventListener("click",I);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){g.addEventListener("click",l);return}const s=e.dataset.id,o=await m(s);E.insertAdjacentHTML("beforeend",_(o));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Remove from"),M()}async function I(t){f.removeEventListener("click",l),v.removeEventListener("click",h),g.removeEventListener("click",l);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){f.addEventListener("click",l);return}const s=e.dataset.id,o=await m(s);E.insertAdjacentHTML("beforeend",_(o));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Remove from"),M()}async function m(t){const e="https://food-boutique.b.goit.study/api/products/";return et.get(`${e}${t}`).then(s=>s.data).catch(s=>{throw new Error(s)})}function _(t){let e;const{_id:s,name:o,category:a,size:c,popularity:r,desc:n,price:u,img:C}=t;return a.includes("_")&&(e=a.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${s}" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${i}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${C}"
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
      <p class="modal-product-cost">$${u}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${i}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function M(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",dt);function o(){const r=document.querySelector("[data-modal]");r&&(r.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",c),e.removeEventListener("click",a))}function a(r){r.target===e&&(o(),e.removeEventListener("click",a))}function c(r){r.code==="Escape"&&(o(),document.removeEventListener("keydown",c))}g.addEventListener("click",l),v.addEventListener("click",h),f.addEventListener("click",I),t.addEventListener("click",o),e.addEventListener("click",a),document.addEventListener("keydown",c),document.querySelector("[data-modal]")||E.insertAdjacentHTML("beforeend",_(info))}async function dt(t){const s=t.target.closest(".modal-wimdow-add-to-cart-btn");if(s){const a=s.closest(".modal-container").dataset.id,c=await m(a);c.quantity=1,lt(c,s);const r=await L();$(r),d()}}function lt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];s.find(a=>a._id===t._id)?(e.style.background="#6d8434",e.textContent="Remove from"):(s.push(t),localStorage.setItem("cart",JSON.stringify(s)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Remove from"),ut()}function ut(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const pt=document.getElementById("pagination");let q=0;const mt=window.innerWidth;mt<768?q=2:q=4;function gt(t,e,s){const o={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:q,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new st(pt,o).on("afterMove",c=>{const r=c.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),d()})}const w=document.querySelector(".products-list"),J=document.querySelector(".products-list-none"),y=document.querySelector(".pagination-block"),ft={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",ht);function vt(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function d(){return localStorage.getItem("settings")?await T(JSON.parse(localStorage.getItem("settings"))):await T(ft)}async function T(t){try{t=vt(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const s=await Q(t);s.results.length===0?(J.classList.remove("hidden"),w.classList.add("hidden"),y.classList.add("hidden")):(w.classList.contains("hidden")&&(J.classList.add("hidden"),w.classList.remove("hidden"),y.classList.remove("hidden")),w.innerHTML=yt(s.results),s.totalPages>1?(y.classList.contains("hidden")&&y.classList.remove("hidden"),gt(s,s.perPage,s.page)):y.classList.add("hidden"))}catch(e){console.log(e.message)}}function ht(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||d()}function yt(t){return t.map(({name:e,img:s,category:o,size:a,popularity:c,price:r,is10PercentOff:n,_id:u})=>{o.includes("_")&&(o=o.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(P=>P._id===u);return`
    <div class="productlist-card" data-id="${u}">
    <div class="productlist-card-img-wrapper">
        <img src="${s}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${o}</span>
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
        <button type="button" class="productlist-card-btn" ${p?"disabled":""}>
            <svg class="productlist-card-icon-${p?"check":"cart"}" width="18" height="18">
                <use href="${i}#icon-${p?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${i}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",R);w.addEventListener("click",St);async function St(t){const s=t.target.closest(".productlist-card-btn");if(s){const a=s.closest(".productlist-card").dataset.id,c=await m(a);c.quantity=1,wt(c,s),d();const r=await L();$(r)}}function wt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(a=>a._id===t._id)){const a=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),a.setAttribute("href",`${i}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));R()}function R(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const bt=document.querySelector(".filters-form"),k=document.querySelector(".filters-form-input"),b=document.querySelector(".filters-form-select-category"),kt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let j=[];const Lt=async()=>{j=[...await X(),"Show all"];const e=kt(j);b.insertAdjacentHTML("beforeend",e);const s=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};b.value=s.category,new ot({select:"#category",settings:{showSearch:!1}})};Lt();const $t=t=>{t.preventDefault();let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=k.value.trim(),o=b.value;e.keyword=s||null,e.category=o==="Show all"?null:o.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),d()},Et=t=>{if(t.target.value===""){let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=b.value;e.keyword=null,e.category=s==="Show all"?null:s.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),d()}},It=t=>{let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=k.value.trim(),o=t.target.value;e.keyword=s||null,e.category=o==="Show all"?null:o.trim()||null,e.page=1,localStorage.setItem("settings",JSON.stringify(e)),d()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};k.value=t.keyword,d(),bt.addEventListener("submit",$t),k.addEventListener("input",Et),b.addEventListener("change",It)});const _t={keyword:null,category:null,page:1,limit:6},Ct=[];function V(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(_t))}function z(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(Ct))}const F=document.querySelector(".card-discount-prod");V();z();function Pt(t){return t.map(({img:e,name:s,price:o,_id:a})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===a);return`<li class="discount-prod-item slide" data-id='${a}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${s}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${s}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${o}</p>
        <button type="button" class="btn-icon-cart" ${r?"disabled":""}>
          <svg class="icon-cart-svg${r?"check":"cart"}" width="18" height="18">
            <use href="${i}#icon-${r?"check":"cart"}"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="wrap-discount-svg">
      <svg class="discount-svg" width="60" height="60">
        <use href="${i}#icon-discount"></use>
      </svg>
  </div>
</li>`}).join("")}function K(){Z().then(t=>{xt(t),F.innerHTML=Pt(t)}).catch(t=>console.log(t.message))}K();function xt(t){let e=Math.floor(Math.random()*t.length),s=Math.floor(Math.random()*t.length);if(e===s)return;let o=t[s];t[s]=t[e],t[e]=o}window.addEventListener("load",Y);F.addEventListener("click",qt);async function qt(t){const s=t.target.closest(".btn-icon-cart");if(s){const a=s.closest(".discount-prod-item").dataset.id,c=await m(a);c.quantity=1,Ot(c,s)}K()}function Ot(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(a=>a._id===t._id)){const a=e.querySelector(".icon-cart-svgcart use"),c=e.querySelector(".icon-cart-svg");c&&c.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),a.setAttribute("href",`${i}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));Y()}function Y(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}let x=0;const H=2,O=document.querySelector("header"),A=document.querySelector(".header-container"),S=()=>window.pageYOffset||document.documentElement.scrollTop,B=()=>O.classList.contains("hide");function Nt(){window.addEventListener("scroll",()=>{S()>x&&!B()&&S()>H?O.classList.add("hide"):S()<x&&B()&&O.classList.remove("hide"),S()>H?A.classList.add("scrolled"):A.classList.remove("scrolled"),x=S()})}const W="/comand-project__team-8/assets/subscribing-modal@1x-5e977593.png",Mt="/comand-project__team-8/assets/subscribing-modal@2x-5a6fb9e4.png";function Jt(){document.querySelector("body").insertAdjacentHTML("beforeend",jt()),G()}function Tt(){document.querySelector("body").insertAdjacentHTML("beforeend",Ht()),G()}function jt(){return`
    <div class="backdrop" data-modal>
  <div class="modal-container email-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${i}#icon-close"></use>
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

    
    `}function Ht(){return`
   <div class="backdrop back-drop-sub" data-modal>
  <div class="modal-container subscribing-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon sub-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${i}#icon-close"></use>
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
        ${W} 1x,
        ${Mt} 2x
      "
      src="${W}"
      width="335"
      height="144"
      alt="Vegetables"
    />
  </div>
</div>
    
    `}function G(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function s(){const c=document.querySelector("[data-modal]");c&&(c.remove(),t.removeEventListener("click",s),document.removeEventListener("keydown",a),e.removeEventListener("click",o))}function o(c){c.target===e&&(s(),e.removeEventListener("click",o))}function a(c){c.code==="Escape"&&(s(),document.removeEventListener("keydown",a))}t.addEventListener("click",s),e.addEventListener("click",o),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const At=document.querySelector(".footer-form");At.addEventListener("submit",Bt);async function Bt(t){t.preventDefault();const e=t.target.email,s=e.value,o=await tt(s);o.success?(Tt(),e.value=""):o.status===409?(Jt(),e.value=""):alert(o.message)}V();z();Nt();d();
//# sourceMappingURL=commonHelpers2.js.map
