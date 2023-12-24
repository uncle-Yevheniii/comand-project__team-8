import{c as v}from"./assets/sptite-b91ddc2d.js";import{a as i}from"./assets/vendor-a61d8330.js";async function h({keyword:t,category:o,page:a,limit:c}){const s="https://food-boutique.b.goit.study/api/products";return(await i.get(s,{params:{keyword:t,category:o,page:a,limit:c}})).data}async function f(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await i.get(t)).data}const y=document.querySelector(".products-list"),w={keyword:null,category:null,page:1,limit:6};$();async function $(){return localStorage.getItem("settings")?await u(JSON.parse(localStorage.getItem("settings"))):await u(w)}async function u(t){try{const o=await h(t);y.innerHTML=b(o.results)}catch(o){console.log(o.message)}}function b(t){return t.map(({name:o,img:a,category:c,size:s,popularity:e,price:r,is10PercentOff:n,_id:g})=>(c.includes("_")&&(c=c.split("_").join(" ")),`
    <div class="productlist-card" data-id="${g}">
    <div class="productlist-card-img-wrapper">
        <img src="${a}" alt="${o}" class="productlist-card-img" width="140">
    </div>
    <h3 class="productlist-card-header">${o}</h3>
    <div class="productlist-card-text-wrapper">
        <p class="productlist-card-text">
          Category: <span class="productlist-card-text-span">${c}</span>
        </p>
        <p class="productlist-card-text">
          Size: <span class="productlist-card-text-span">${s}</span>
        </p>
        <p class="productlist-card-text">
          Popularity: <span class="productlist-card-text-span">${e}</span>
        </p>
    </div>

    <div class="productlist-card-bottom">
        <span class="productlist-card-price">$${r}</span>
        <button type="button" class="productlist-card-btn">
            <svg class="productlist-card-icon-cart" width="18" height="18">
                <use href="${v}#icon-cart"></use>
            </svg></button>
    </div>
    ${n?`<svg class="productlist-dicount" width="60" height="60">
      <use href="../img/sptite.svg#icon-discount"></use>
    </svg>`:""}
</div>
  `)).join("")}document.addEventListener("DOMContentLoaded",k);const p=document.querySelector(".wrapperPopularProduct");async function k(){try{const t=await E();if(t===void 0)throw new Error;S(t)}catch{m()}}function L({img:t,name:o,price:a,size:c,popularity:s}){return`
    <li class="list-item" data-id="">
      <img class="img-popular" src="${t}" alt="">     
          <h3 class="popular-title">${o}</h3>
          <p class="popular-desc">${a}</p>
          <p class="popular-desc">${c}</p>
          <p class="popular-desc">${s}</p>       
    </li>
  `}async function E(){try{return(await f()).reduce((o,a)=>o+L(a),"")}catch{m()}}function S(t){p.insertAdjacentHTML("beforeend",t)}function m(){console.error("Error:",err),p.innerHTML=""}const d=document.querySelector(".wrapperPopularProduct");console.log(d);const x=document.querySelector("body");d.addEventListener("click",l);async function l(t){d.removeEventListener("click",l);const a=t.target.closest("li").dataset.id,c=await P(a);console.log(c),x.insertAdjacentHTML("beforeend",C(c)),M()}async function P(t){const o="https://food-boutique.b.goit.study/api/products/";return i.get(`${o}${t}`).then(a=>a.data).catch(a=>{throw new Error(a)})}function C(t){const{name:o,category:a,size:c,popularity:s,desc:e,price:r,img:n}=t;return`
    <div class="backdrop" data-modal>
  <div class="modal-container" data-modal>
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="../img/sptite.svg#icon-close"></use>
    </svg>
    <div class="modal-product-img-text">
      <div class="modal-product-container-img">
        <img
          class="modal-product-img"
          src="${n}"
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
              >${a}</span
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
            <span class="modal-product-desc modal-product-desc-value">${s}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${e}

        </p>
      </div>
    </div>

    <div class="container-cost-button">
      <p class="modal-product-cost">$${r}</p>
      <button class="modal-wimdow-add-to-cart-btn">
        Add to
        <svg class="modal-product-addtocart" width="18" height="18">
          <use href="../img/sptite.svg#icon-cart"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
    
    `}function M(){const t=document.querySelector("[data-modal-close]"),o=document.querySelector("[data-modal]"),a=document.querySelector(".backdrop");t.addEventListener("click",e),a.addEventListener("click",c);function c(r){r.target===a&&(e(),a.removeEventListener("click",c))}document.addEventListener("keydown",s);function s(r){r.code==="Escape"&&e()}function e(){console.log("!!!!!!!"),o.remove(),document.removeEventListener("keydown",s),t.removeEventListener("click",e)}d.addEventListener("click",l)}
//# sourceMappingURL=commonHelpers2.js.map
