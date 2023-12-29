import{a as G,s as d,f as U,b as Q,d as X,c as Z}from"./assets/API-d65e38ca.js";import{a as tt,P as et,S as st}from"./assets/vendor-c8bc0669.js";document.querySelector(".wrapperPopularProduct");document.querySelector("body");const N=document.querySelector(".wrapperPopularProduct");document.querySelector(".popular__products-button");document.addEventListener("DOMContentLoaded",ot);async function ot(){try{const t=await L();if(t===void 0)throw new Error;$(t)}catch{W()}}function at(t){return t.map(({name:e,img:s,category:o,size:a,popularity:c,price:r,is10PercentOff:n,_id:u})=>{o.includes("_")&&(o=o.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(P=>P._id===u);return`
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
      <use href="${d}#icon-${p?"check":"cart"}"></use>
    </svg>
  </button>
</li>
  `}).join("")}async function L(){try{const t=await G();return at(t)}catch{W()}}function $(t){N.innerHTML=t}function W(){console.error("Error:",err),N.innerHTML=""}N.addEventListener("click",ct);async function ct(t){const s=t.target.closest(".popular__products-button");if(s){const a=s.closest(".popular__products-items").dataset.id,c=await m(a);c.quantity=1,rt(c,s);const r=await L();$(r),i()}}function rt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(a=>a._id===t._id)){const a=e.querySelector(".popular__products-svgcart use");e.querySelector(".popular__products-svg").classList.replace("popular__products-svgcart","popular__products-svgcheck"),a.setAttribute("href",`${sprite}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));nt()}function nt(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const g=document.querySelector(".wrapperPopularProduct"),E=document.querySelector("body");g.addEventListener("click",l);const f=document.querySelector(".card-discount-prod"),v=document.querySelector(".products-list");v.addEventListener("click",h);f.addEventListener("click",I);async function h(t){v.removeEventListener("click",h),g.removeEventListener("click",l),f.removeEventListener("click",I);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){v.addEventListener("click",h);return}const s=e.dataset.id,o=await m(s);E.insertAdjacentHTML("beforeend",_(o));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Remove from"),M()}async function l(t){v.removeEventListener("click",h),g.removeEventListener("click",l),f.removeEventListener("click",I);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){g.addEventListener("click",l);return}const s=e.dataset.id,o=await m(s);E.insertAdjacentHTML("beforeend",_(o));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Remove from"),M()}async function I(t){f.removeEventListener("click",l),v.removeEventListener("click",h),g.removeEventListener("click",l);const e=t.target.closest("li");if(e===null||t.target.closest(".btn-icon-cart")){f.addEventListener("click",l);return}const s=e.dataset.id,o=await m(s);E.insertAdjacentHTML("beforeend",_(o));const a=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===o._id)&&(a.style.background="#6d8434",a.childNodes[0].nodeValue="Remove from"),M()}async function m(t){const e="https://food-boutique.b.goit.study/api/products/";return tt.get(`${e}${t}`).then(s=>s.data).catch(s=>{throw new Error(s)})}function _(t){let e;const{_id:s,name:o,category:a,size:c,popularity:r,desc:n,price:u,img:C}=t;return a.includes("_")&&(e=a.split("_").join(" ")),`
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
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function M(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",it);function o(){const r=document.querySelector("[data-modal]");r&&(r.remove(),t.removeEventListener("click",o),document.removeEventListener("keydown",c),e.removeEventListener("click",a))}function a(r){r.target===e&&(o(),e.removeEventListener("click",a))}function c(r){r.code==="Escape"&&(o(),document.removeEventListener("keydown",c))}g.addEventListener("click",l),v.addEventListener("click",h),f.addEventListener("click",I),t.addEventListener("click",o),e.addEventListener("click",a),document.addEventListener("keydown",c),document.querySelector("[data-modal]")||E.insertAdjacentHTML("beforeend",_(info))}async function it(t){const s=t.target.closest(".modal-wimdow-add-to-cart-btn");if(s){const a=s.closest(".modal-container").dataset.id,c=await m(a);c.quantity=1,dt(c,s);const r=await L();$(r),i()}}function dt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];s.find(a=>a._id===t._id)?(e.style.background="#6d8434",e.textContent="Remove from"):(s.push(t),localStorage.setItem("cart",JSON.stringify(s)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Remove from"),lt()}function lt(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const ut=document.getElementById("pagination");let q=0;const pt=window.innerWidth;pt<768?q=2:q=4;function mt(t,e,s){const o={totalItems:t.totalPages*e,itemsPerPage:e,visiblePages:q,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new et(ut,o).on("afterMove",c=>{const r=c.page,n=JSON.parse(localStorage.getItem("settings"))||{};n.page=r,localStorage.setItem("settings",JSON.stringify(n)),i()})}const b=document.querySelector(".products-list"),J=document.querySelector(".products-list-none"),y=document.querySelector(".pagination-block"),gt={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",vt);function ft(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function i(){return localStorage.getItem("settings")?await T(JSON.parse(localStorage.getItem("settings"))):await T(gt)}async function T(t){try{t=ft(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const s=await U(t);s.results.length===0?(J.classList.remove("hidden"),b.classList.add("hidden"),y.classList.add("hidden")):(b.classList.contains("hidden")&&(J.classList.add("hidden"),b.classList.remove("hidden"),y.classList.remove("hidden")),b.innerHTML=ht(s.results),s.totalPages>1?(y.classList.contains("hidden")&&y.classList.remove("hidden"),mt(s,s.perPage,s.page)):y.classList.add("hidden"))}catch(e){console.log(e.message)}}function vt(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||i()}function ht(t){return t.map(({name:e,img:s,category:o,size:a,popularity:c,price:r,is10PercentOff:n,_id:u})=>{o.includes("_")&&(o=o.split("_").join(" "));const p=(JSON.parse(localStorage.getItem("cart"))||[]).find(P=>P._id===u);return`
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
                <use href="${d}#icon-${p?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",D);b.addEventListener("click",yt);async function yt(t){const s=t.target.closest(".productlist-card-btn");if(s){const a=s.closest(".productlist-card").dataset.id,c=await m(a);c.quantity=1,St(c,s),i();const r=await L();$(r)}}function St(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(a=>a._id===t._id)){const a=e.querySelector(".productlist-card-icon-cart use");e.querySelector(".productlist-card-icon-cart").classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),a.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));D()}function D(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const bt=document.querySelector(".filters-form"),k=document.querySelector(".filters-form-input"),w=document.querySelector(".filters-form-select-category"),wt=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let j=[];const kt=async()=>{j=[...await Q(),"Show all"];const e=wt(j);w.insertAdjacentHTML("beforeend",e);const s=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};w.value=s.category,new st({select:"#category",settings:{showSearch:!1}})};kt();const Lt=t=>{t.preventDefault();let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=k.value.trim(),o=w.value;e.keyword=s||null,e.category=o==="Show all"?null:o.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()},$t=t=>{if(t.target.value===""){let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=w.value;e.keyword=null,e.category=s==="Show all"?null:s.trim()||null,localStorage.setItem("settings",JSON.stringify(e)),i()}},Et=t=>{let e=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};const s=k.value.trim(),o=t.target.value;e.keyword=s||null,e.category=o==="Show all"?null:o.trim()||null,e.page=1,localStorage.setItem("settings",JSON.stringify(e)),i()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};k.value=t.keyword,i(),bt.addEventListener("submit",Lt),k.addEventListener("input",$t),w.addEventListener("change",Et)});const It={keyword:null,category:null,page:1,limit:6},_t=[];function R(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(It))}function V(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(_t))}const z=document.querySelector(".card-discount-prod");R();V();function Ct(t){return t.map(({img:e,name:s,price:o,_id:a})=>{const r=(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===a);return`<li class="discount-prod-item slide" data-id='${a}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${s}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${s}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${o}</p>
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
</li>`}).join("")}function F(){X().then(t=>{Pt(t),z.innerHTML=Ct(t)}).catch(t=>console.log(t.message))}F();function Pt(t){let e=Math.floor(Math.random()*t.length),s=Math.floor(Math.random()*t.length);if(e===s)return;let o=t[s];t[s]=t[e],t[e]=o}window.addEventListener("load",K);z.addEventListener("click",xt);async function xt(t){const s=t.target.closest(".btn-icon-cart");if(s){const a=s.closest(".discount-prod-item").dataset.id,c=await m(a);c.quantity=1,qt(c,s)}F()}function qt(t,e){let s=JSON.parse(localStorage.getItem("cart"))||[];if(s.find(a=>a._id===t._id)){const a=e.querySelector(".icon-cart-svgcart use"),c=e.querySelector(".icon-cart-svg");c&&c.classList.replace("icon-cart-svgcart","icon-cart-svgcheck"),a.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else s.push(t),localStorage.setItem("cart",JSON.stringify(s));K()}function K(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}let x=0;const H=2,O=document.querySelector("header"),A=document.querySelector(".header-container"),S=()=>window.pageYOffset||document.documentElement.scrollTop,B=()=>O.classList.contains("hide");function Ot(){window.addEventListener("scroll",()=>{S()>x&&!B()&&S()>H?O.classList.add("hide"):S()<x&&B()&&O.classList.remove("hide"),S()>H?A.classList.add("scrolled"):A.classList.remove("scrolled"),x=S()})}function Nt(){document.querySelector("body").insertAdjacentHTML("beforeend",Jt()),Y()}function Mt(){document.querySelector("body").insertAdjacentHTML("beforeend",Tt()),Y()}function Jt(){return`
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
        ../img/subscribing-modal@1x.png 1x,
        ../img/subscribing-modal@2x.png 2x
      "
      src="../img/subscribing-modal@1x.png"
      width="335"
      height="144"
      alt="Vegetables"
    />
  </div>
</div>
    
    `}function Y(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");function s(){const c=document.querySelector("[data-modal]");c&&(c.remove(),t.removeEventListener("click",s),document.removeEventListener("keydown",a),e.removeEventListener("click",o))}function o(c){c.target===e&&(s(),e.removeEventListener("click",o))}function a(c){c.code==="Escape"&&(s(),document.removeEventListener("keydown",a))}t.addEventListener("click",s),e.addEventListener("click",o),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const jt=document.querySelector(".footer-form");jt.addEventListener("submit",Ht);async function Ht(t){t.preventDefault();const e=t.target.email,s=e.value,o=await Z(s);o.success?(Mt(),e.value=""):o.status===409?(Nt(),e.value=""):alert(o.message)}R();V();Ot();i();
//# sourceMappingURL=commonHelpers2.js.map
