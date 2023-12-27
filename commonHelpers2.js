import{c as n}from"./assets/sptite-3a8ceaf5.js";import{a as m,S as T}from"./assets/vendor-3d334923.js";async function A(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await m.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function j({keyword:t,category:e,page:o,limit:r}){const c="https://food-boutique.b.goit.study/api/products";return(await m.get(c,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function H(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await m.get(t)).data}async function z(){const t="https://food-boutique.b.goit.study/api/products/discount";return(await m.get(t)).data}const u=document.querySelector(".wrapperPopularProduct");console.log(u);const b=document.querySelector("body");u.addEventListener("click",y);const p=document.querySelector(".products-list");console.log(p);p.addEventListener("click",h);async function h(t){p.removeEventListener("click",h);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){p.addEventListener("click",h);return}console.log(e);const o=e.dataset.id,r=await S(o);console.log(r),b.insertAdjacentHTML("beforeend",$(r));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(d=>d._id===r._id)&&(c.style.background="#6d8434",c.textContent="Added to"),L()}async function y(t){u.removeEventListener("click",y);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){u.addEventListener("click",y);return}const o=e.dataset.id,r=await S(o);console.log(r),b.insertAdjacentHTML("beforeend",$(r));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(d=>d._id===r._id)&&(c.style.background="#6d8434",c.textContent="Added to"),L()}async function S(t){const e="https://food-boutique.b.goit.study/api/products/";return m.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function $(t){let e;const{_id:o,name:r,category:c,size:s,popularity:a,desc:d,price:f,img:k}=t;return c.includes("_")&&(e=c.split("_").join(" ")),`
    <div class="backdrop" data-modal>
  <div class="modal-container modal-product" data-id="${o}" data-modal">
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${n}#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${k}"
          alt="${r}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${r}</p>
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
              >${s}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${a}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${d}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${f}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function L(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",W);function r(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",r),document.removeEventListener("keydown",s),e.removeEventListener("click",c))}function c(a){a.target===e&&(r(),e.removeEventListener("click",c))}function s(a){a.code==="Escape"&&(r(),document.removeEventListener("keydown",s))}u.addEventListener("click",y),p.addEventListener("click",h),t.addEventListener("click",r),e.addEventListener("click",c),document.addEventListener("keydown",s),document.querySelector("[data-modal]")||b.insertAdjacentHTML("beforeend",$(info))}async function W(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(console.log(o),o){const r=o.closest(".modal-container");console.log(r);const c=r.dataset.id;console.log(c);const s=await S(c);s.quantity=1,B(s,o)}}function B(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(c=>c._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.textContent="Added to",console.log("Товар доданий в кошик!")),D()}function D(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const l=document.querySelector(".products-list"),C=document.querySelector(".products-list-none");let F=6;const R={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",G);function V(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function i(){return localStorage.getItem("settings")?await x(JSON.parse(localStorage.getItem("settings"))):await x(R)}async function x(t){try{t=V(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await j(t);o.results.length===0?(C.classList.remove("hidden"),l.classList.add("hidden")):(l.classList.contains("hidden")&&(C.classList.add("hidden"),l.classList.remove("hidden")),l.innerHTML=K(o.results))}catch(e){console.log(e.message)}}function G(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${F}`),i())}function K(t){return t.map(({name:e,img:o,category:r,size:c,popularity:s,price:a,is10PercentOff:d,_id:f})=>{r.includes("_")&&(r=r.split("_").join(" "));const w=(JSON.parse(localStorage.getItem("cart"))||[]).find(M=>M._id===f);return`
    <div class="productlist-card" data-id="${f}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${r}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${s}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${a}</span>
        <button type="button" class="productlist-card-btn" ${w?"disabled":""}>
            <svg class="productlist-card-icon-${w?"check":"cart"}" width="18" height="18">
                <use href="${n}#icon-${w?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${d?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${n}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",_);l.addEventListener("click",U);async function U(t){const o=t.target.closest(".productlist-card-btn");if(o){const c=o.closest(".productlist-card").dataset.id,s=await S(c);s.quantity=1,Q(s,o)}}function Q(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".productlist-card-icon-cart use"),s=e.querySelector(".productlist-card-icon-cart");console.log(s),s.classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),c.setAttribute("href",`${n}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");_()}function _(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const X=document.querySelector(".filters-form"),v=document.querySelector(".filters-form-input"),g=document.querySelector(".filters-form-select-category"),Y=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let I=[];const Z=async()=>{I=[...await A(),"Show all"];const e=Y(I);g.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};g.value=o.category,new T({select:"#category",settings:{showSearch:!1}})};Z();const tt=t=>{t.preventDefault();const e=v.value.trim(),o=g.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),i()},et=t=>{if(t.target.value===""){const e=g.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),i()}},ot=t=>{const e=v.value.trim(),o=t.target.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),i()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};v.value=t.keyword,i(),X.addEventListener("submit",tt),g.addEventListener("change",ot),v.addEventListener("input",et)});const rt={keyword:null,category:null,page:1,limit:6},ct=[];function q(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(rt))}function E(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(ct))}const P=document.querySelector(".card-discount-prod");q();E();function st(t){return t.map(({img:e,name:o,price:r,_id:c})=>`<li class="discount-prod-item slide" data-id='${c}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${o}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${o}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${r}</p>
        <button type="button" class="btn-icon-cart">
          <svg class="icon-cart-svg" width="18" height="18">
            <use href="${n}#icon-cart"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="wrap-discount-svg">
      <svg class="discount-svg" width="60" height="60">
        <use href="${n}#icon-discount"></use>
      </svg>
  </div>
</li>`).join("")}function at(){z().then(t=>{nt(t),P.insertAdjacentHTML("beforeend",st(t))}).catch(t=>console.log(t.message))}at();function nt(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let r=t[o];t[o]=t[e],t[e]=r}window.addEventListener("load",O);P.addEventListener("click",dt);function dt(t){const o=t.target.closest(".btn-icon-cart");if(o){const r=o.closest(".discount-prod-item"),s={id:r.dataset.id,name:r.querySelector(".text-discount-prod").textContent,price:r.querySelector(".price-text-disc").textContent,category:r.dataset.category,img:r.querySelector(".discount-img").src,size:r.dataset.size};it(s,o)}}function it(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c.id===t.id)){const c=e.querySelector(".icon-cart-svg use");c.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),c.setAttribute("href",`${n}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));O()}function O(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const J=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",lt);async function lt(){try{const t=await pt();if(t===void 0)throw new Error;gt(t)}catch{N()}}function ut({category:t,img:e,name:o,popularity:r,size:c,_id:s}){return`
  <li data-id='${s}' class="popular__products-items  ">
  <div class="img-box">
    <img
      class="popular__products-img"
      src="${e}"
      alt="${o}"
    />
  </div>
  <div class="info-box">
    <h3 class="popular__products-name">${o}</h3>
    <p class="popular__products-text">
      Category:
      <span class="js-popular__products-category">${t}</span>
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
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${n}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function pt(){try{return(await H()).reduce((e,o)=>e+ut(o),"")}catch{N()}}function gt(t){J.insertAdjacentHTML("beforeend",t)}function N(){console.error("Error:",err),J.innerHTML=""}q();E();i();
//# sourceMappingURL=commonHelpers2.js.map
