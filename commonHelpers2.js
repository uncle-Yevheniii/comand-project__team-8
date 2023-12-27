import{c as n}from"./assets/sptite-3a8ceaf5.js";import{a as m,S as T}from"./assets/vendor-3d334923.js";async function A(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await m.get(t)).data}catch(e){return console.error("Помилка під час запиту:",e),[]}}async function j({keyword:t,category:e,page:o,limit:c}){const r="https://food-boutique.b.goit.study/api/products";return(await m.get(r,{params:{keyword:t,category:e,page:o,limit:c}})).data}async function H(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await m.get(t)).data}async function B(){const t="https://food-boutique.b.goit.study/api/products/discount";return(await m.get(t)).data}const u=document.querySelector(".wrapperPopularProduct");console.log(u);const k=document.querySelector("body");u.addEventListener("click",y);const p=document.querySelector(".products-list");console.log(p);p.addEventListener("click",h);async function h(t){p.removeEventListener("click",h);const e=t.target.closest(".productlist-card");if(e===null||t.target.closest(".productlist-card-btn")){p.addEventListener("click",h);return}console.log(e);const o=e.dataset.id,c=await S(o);console.log(c),k.insertAdjacentHTML("beforeend",b(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(d=>d._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),_()}async function y(t){u.removeEventListener("click",y);const e=t.target.closest("li");if(e===null||t.target.closest(".popular__products-button")){u.addEventListener("click",y);return}const o=e.dataset.id,c=await S(o);console.log(c),k.insertAdjacentHTML("beforeend",b(c));const r=document.querySelector(".modal-wimdow-add-to-cart-btn");(JSON.parse(localStorage.getItem("cart"))||[]).find(d=>d._id===c._id)&&(r.style.background="#6d8434",r.childNodes[0].nodeValue="Added to"),_()}async function S(t){const e="https://food-boutique.b.goit.study/api/products/";return m.get(`${e}${t}`).then(o=>o.data).catch(o=>{throw new Error(o)})}function b(t){let e;const{_id:o,name:c,category:r,size:s,popularity:a,desc:d,price:f,img:$}=t;return r.includes("_")&&(e=r.split("_").join(" ")),`
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
          src="${$}"
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
    
    `}function _(){const t=document.querySelector("[data-modal-close]"),e=document.querySelector(".backdrop");document.querySelector("[data-modal]").addEventListener("click",z);function c(){const a=document.querySelector("[data-modal]");a&&(a.remove(),t.removeEventListener("click",c),document.removeEventListener("keydown",s),e.removeEventListener("click",r))}function r(a){a.target===e&&(c(),e.removeEventListener("click",r))}function s(a){a.code==="Escape"&&(c(),document.removeEventListener("keydown",s))}u.addEventListener("click",y),p.addEventListener("click",h),t.addEventListener("click",c),e.addEventListener("click",r),document.addEventListener("keydown",s),document.querySelector("[data-modal]")||k.insertAdjacentHTML("beforeend",b(info))}async function z(t){const o=t.target.closest(".modal-wimdow-add-to-cart-btn");if(console.log(o),o){const c=o.closest(".modal-container");console.log(c);const r=c.dataset.id;console.log(r);const s=await S(r);s.quantity=1,D(s,o)}}function D(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];o.find(r=>r._id===t._id)?(e.style.background="#6d8434",e.textContent="Added to"):(o.push(t),localStorage.setItem("cart",JSON.stringify(o)),e.style.background="#6d8434",e.childNodes[0].nodeValue="Added to",console.log("Товар доданий в кошик!")),W()}function W(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const l=document.querySelector(".products-list"),L=document.querySelector(".products-list-none");let F=6;const V={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",R);function K(t){return window.innerWidth<768?t.limit=6:window.innerWidth>=768&&window.innerWidth<1440?t.limit=8:t.limit=9,t}async function i(){return localStorage.getItem("settings")?await C(JSON.parse(localStorage.getItem("settings"))):await C(V)}async function C(t){try{t=K(t);const e=JSON.parse(localStorage.getItem("settings"));e.limit=t.limit,localStorage.setItem("settings",JSON.stringify(e));const o=await j(t);o.results.length===0?(L.classList.remove("hidden"),l.classList.add("hidden")):(l.classList.contains("hidden")&&(L.classList.add("hidden"),l.classList.remove("hidden")),l.innerHTML=G(o.results))}catch(e){console.log(e.message)}}function R(){const t=JSON.parse(localStorage.getItem("settings"));window.innerWidth<768&&t.limit===6||window.innerWidth>=768&&window.innerWidth<1440&&t.limit===8||window.innerWidth>=1440&&t.limit===9||(console.log(`windowChange ${F}`),i())}function G(t){return t.map(({name:e,img:o,category:c,size:r,popularity:s,price:a,is10PercentOff:d,_id:f})=>{c.includes("_")&&(c=c.split("_").join(" "));const w=(JSON.parse(localStorage.getItem("cart"))||[]).find(J=>J._id===f);return`
    <div class="productlist-card" data-id="${f}">
    <div class="productlist-card-img-wrapper">
        <img src="${o}" alt="${e}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${e}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${r}</span>
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
  `}).join("")}window.addEventListener("load",x);l.addEventListener("click",U);async function U(t){const o=t.target.closest(".productlist-card-btn");if(o){const r=o.closest(".productlist-card").dataset.id,s=await S(r);s.quantity=1,Q(s,o)}}function Q(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(r=>r._id===t._id)){const r=e.querySelector(".productlist-card-icon-cart use"),s=e.querySelector(".productlist-card-icon-cart");console.log(s),s.classList.replace("productlist-card-icon-cart","productlist-card-icon-check"),r.setAttribute("href",`${n}#icon-check`),e.setAttribute("disabled","disabled")}else o.push(t),localStorage.setItem("cart",JSON.stringify(o)),console.log("Товар доданий в кошик!");x()}function x(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const X=document.querySelector(".filters-form"),v=document.querySelector(".filters-form-input"),g=document.querySelector(".filters-form-select-category"),Y=t=>t.map(e=>`<option value="${e.trim()}">${e.replace("_"," ").replace("_"," ")}</option>`).join("");let I=[];const Z=async()=>{I=[...await A(),"Show all"];const e=Y(I);g.insertAdjacentHTML("beforeend",e);const o=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};g.value=o.category,new T({select:"#category",settings:{showSearch:!1}})};Z();const tt=t=>{t.preventDefault();const e=v.value.trim(),o=g.value,c={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(c)),i()},et=t=>{if(t.target.value===""){const e=g.value,o={keyword:null,category:e==="Show all"?null:e.trim()||null};localStorage.setItem("settings",JSON.stringify(o)),i()}},ot=t=>{const e=v.value.trim(),o=t.target.value,c={keyword:e||null,category:o==="Show all"?null:o.trim()||null};localStorage.setItem("settings",JSON.stringify(c)),i()};window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem("settings"))||{keyword:null,category:null};v.value=t.keyword,i(),X.addEventListener("submit",tt),g.addEventListener("change",ot),v.addEventListener("input",et)});const ct={keyword:null,category:null,page:1,limit:6},rt=[];function E(){if(!localStorage.getItem("settings"))return localStorage.setItem("settings",JSON.stringify(ct))}function q(){if(!localStorage.getItem("cart"))return localStorage.setItem("cart",JSON.stringify(rt))}const P=document.querySelector(".card-discount-prod");E();q();function st(t){return t.map(({img:e,name:o,price:c,_id:r})=>`<li class="discount-prod-item slide" data-id='${r}'>
    <div class="wrap-img-discount-prod">
      <img class="discount-img" src="${e}" alt="${o}">
    </div>
    <div class="info-discount-prod">
      <p class="text-discount-prod">${o}</p>
      <div class="price-discount-prod">
        <p class="text-discount-prod price-text-disc">$${c}</p>
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
</li>`).join("")}function at(){B().then(t=>{nt(t),P.insertAdjacentHTML("beforeend",st(t))}).catch(t=>console.log(t.message))}at();function nt(t){let e=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length);if(e===o)return;let c=t[o];t[o]=t[e],t[e]=c}window.addEventListener("load",M);P.addEventListener("click",dt);function dt(t){const o=t.target.closest(".btn-icon-cart");if(o){const c=o.closest(".discount-prod-item"),s={id:c.dataset.id,name:c.querySelector(".text-discount-prod").textContent,price:c.querySelector(".price-text-disc").textContent,category:c.dataset.category,img:c.querySelector(".discount-img").src,size:c.dataset.size};it(s,o)}}function it(t,e){let o=JSON.parse(localStorage.getItem("cart"))||[];if(o.find(r=>r.id===t.id)){const r=e.querySelector(".icon-cart-svg use");r.setAttribute("style","stroke: var(--background); fill: var(--p_color);"),r.setAttribute("href",`${n}#icon-check`)}else o.push(t),localStorage.setItem("cart",JSON.stringify(o));M()}function M(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=document.querySelector(".js-header-span");e&&(e.textContent=t.length)}const N=document.querySelector(".wrapperPopularProduct");document.querySelector("body");document.addEventListener("DOMContentLoaded",lt);async function lt(){try{const t=await pt();if(t===void 0)throw new Error;gt(t)}catch{O()}}function ut({category:t,img:e,name:o,popularity:c,size:r,_id:s}){return`
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
        Size: <span class="js-popular__products-size">${r}</span>
      </p>
      <p class="popular__products-text">
        Popularity:
        <span class="js-popular__products-popularity">${c}</span>
      </p>
    </div>
  </div>
  <button class="popular__products-button">
    <svg class="popular__products-svg" width="12" height="12">
      <use href="${n}#icon-cart"></use>
    </svg>
  </button>
</li>
  `}async function pt(){try{return(await H()).reduce((e,o)=>e+ut(o),"")}catch{O()}}function gt(t){N.insertAdjacentHTML("beforeend",t)}function O(){console.error("Error:",err),N.innerHTML=""}(()=>{const t={openModal:document.querySelector(".footer-form"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")},e=document.querySelector(".backdrop");t.openModal.addEventListener("submit",function(s){s.preventDefault(),t.openModal.reset(),r()}),t.closeModalBtn.addEventListener("click",r),e.addEventListener("click",o);function o(s){s.target===e&&r()}document.addEventListener("keydown",c);function c(s){s.code==="Escape"&&(r(),document.removeEventListener("keydown",c))}function r(){t.modal.classList.toggle("is-hidden"),console.log("!!!!")}})();E();q();i();
//# sourceMappingURL=commonHelpers2.js.map
