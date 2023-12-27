import{c as d}from"./assets/sptite-f3cd3724.js";import{a as v,S as O}from"./assets/vendor-3d334923.js";async function J(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await v.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function N({keyword:t,category:e,page:o,limit:r}){const c="https://food-boutique.b.goit.study/api/products";return(await v.get(c,{params:{keyword:t,category:e,page:o,limit:r}})).data}async function M(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await v.get(t)).data}const u=document.querySelector(".wrapperPopularProduct");console.log(u);const k=document.querySelector("body");u.addEventListener("click",y);const p=document.querySelector(".products-list");console.log(p);p.addEventListener("click",f);async function f(t){p.removeEventListener("click",f);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){p.addEventListener("click",f);return}console.log(e);const o=e.dataset.id,r=await S(o);console.log(r),k.insertAdjacentHTML("beforeend",b(r));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===r._id)&&(c.style.background="#6d8434",c.textContent="Added to"),I()}async function y(t){u.removeEventListener("click",y);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){u.addEventListener("click",y);return}const o=e.dataset.id,r=await S(o);console.log(r),k.insertAdjacentHTML("beforeend",b(r));const c=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(n=>n._id===r._id)&&(c.style.background="#6d8434",c.textContent="Added to"),I()}async function S(t){const e="https://food-boutique.b.goit.study/api/products/";return v.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function b(t){let e;const{_id:o,name:r,category:c,size:a,popularity:s,desc:n,price:m,img:$}=t;return c.includes("_")&&(e=c.split("_").join(" ")),`
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
              >${a}</span
            >
          </p>

          <p class="modal-product modal-product-desc">
            Popularity:
            <span class="modal-product-desc modal-product-desc-value">${s}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${n}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${m}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="${d}#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function I(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",A);function r(){const s=document.querySelector("[data-modal]");s&&(s.remove(),t.removeEventListener("click",r),document.removeEventListener("keydown",a),e.removeEventListener("click",c))}function c(s){s.target===e&&(r(),e.removeEventListener("click",c))}function a(s){s.code==="Escape"&&(r(),document.removeEventListener("keydown",a))}u.addEventListener("click",y),p.addEventListener("click",f),t.addEventListener("click",r),e.addEventListener("click",c),document.addEventListener("keydown",a),document.querySelector("[data-modal]")||k.insertAdjacentHTML("beforeend",b(info))}async function A(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(console.log(o),o){const r=o.closest(".modal-container");console.log(r);const c=r.dataset.id;console.log(c);const a=await S(c);a.quantity=1,T(a,o)}}function T(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(c=>c._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.textContent="Added to",console.log("Товар доданий в кошик!")),j()}function j(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const l=document.querySelector(".products-list"),_=document.querySelector(".products-list-none");let H=6;const W={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",B);function z(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function i(){return localStorage.getItem("settings")?await L(JSON.parse(localStorage.getItem("settings"))):await L(W)}async function L(t){try{t=z(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await N(t);o.results.length===0?(_.classList.remove("hidden"),l.classList.add("hidden")):(l.classList.contains("hidden")&&(_.classList.add("hidden"),l.classList.remove("hidden")),l.innerHTML=F(o.results))}catch(e){console.log(e.message)}}function B(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${H}`),i())}function F(t){return t.map(({name:e,img:o,category:r,size:c,popularity:a,price:s,is10PercentOff:n,_id:m})=>{r.includes("_")&&(r=r.split("_").join(" "));const w=(JSON.parse(localStorage.getItem("cart"))||[]).find(P=>P._id===m);return`
    <div class="productlist-card" data-id="${m}">
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
          Popularity: <span class="productlist-card-text-span">${a}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${s}</span>
        <button type="button" class="productlist-card-btn" ${w?"disabled":""}>
            <svg class="productlist-card-icon-${w?"check":"cart"}" width="18" height="18">
                <use href="${d}#icon-${w?"check":"cart"}"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="${d}#icon-discount"></use>
    </svg>`:""}
</div>
  `}).join("")}window.addEventListener("load",x);l.addEventListener("click",D);async function D(t){const o=t.target.closest(".productlist-card-btn");if(o){const c=o.closest(".productlist-card").dataset.id,a=await S(c);a.quantity=1,R(a,o)}}function R(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(c=>c._id===t._id)){const c=e.querySelector(".productlist-card-icon-cart use"),a=e.querySelector(".productlist-card-icon-cart");console.log(a),a.classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),c.setAttribute("href",`${d}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");x()}function x(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const V=document.querySelector(".filters-form"),h=document.querySelector(".filters-form-input"),g=document.querySelector(".filters-form-select-category"),G=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let C=[];const K=async()=>{C=[...await J()];const e=G(C);g.insertAdjacentHTML("beforeend",e),new O({select:"#category",settings:{showSearch:!1}})};K();const U=t=>{t.preventDefault();const e=h.value.trim(),o=g.value,r={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),i()},Q=t=>{if(t.target.value===""){const e=g.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),i()}},X=t=>{const e=h.value.trim(),o=t.target.value,r={keyword:e||null,category:o.trim()||null};localStorage.setItem("settings",JSON.stringify(r)),i()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};h.value=t.keyword,g.value=t.category,i(),V.addEventListener("submit",U),g.addEventListener("change",X),h.addEventListener("input",Q)});const Y={keyword:null,category:null,page:1,limit:6},Z=[];function tt(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(Y))}function et(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(Z))}const E=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",ot);async function ot(){try{const t=await ct();if(t===void 0)throw new Error;at(t)}catch{q()}}function rt({category:t,img:e,name:o,popularity:r,size:c,_id:a}){return`
  <li data-id='${a}' class="popular__products-items  ">
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
      <use href="${d}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function ct(){try{return(await M()).reduce((e,o)=>e+rt(o),"")}catch{q()}}function at(t){E.insertAdjacentHTML("beforeend",t)}function q(){console.error("Error:",err),E.innerHTML=""}tt();et();i();
//# sourceMappingURL=commonHelpers2.js.map
