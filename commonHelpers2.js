import"./assets/styles-9d3fbeab.js";import{a as l}from"./assets/vendor-a61d8330.js";async function m(){const o="https://food-boutique.b.goit.study/api/products/popular";return(await l.get(o)).data}document.addEventListener("DOMContentLoaded",v);const i=document.querySelector(".wrapperPopularProduct");async function v(){try{const o=await g();if(o===void 0)throw new Error;h(o)}catch{u()}}async function g(){try{return(await m()).reduce((e,t)=>e+f(t),"")}catch{u()}}function f({img:o,name:e,price:t,size:c,popularity:a}){return`
  <li class="list-item" data-id="">
      <img class="img-popular" src="${o}" alt="">     
          <h3 class="popular-title">${e}</h3>
          <p class="popular-desc">${t}</p>
          <p class="popular-desc">${c}</p>
          <p class="popular-desc">${a}</p>       
  </li>
  `}function h(o){i.insertAdjacentHTML("beforeend",o)}function u(){console.error("Error:",err),i.innerHTML=""}const s=document.querySelector(".wrapperPopularProduct");console.log(s);const y=document.querySelector("body");s.addEventListener("click",n);async function n(o){s.removeEventListener("click",n);const t=o.target.closest("li").dataset.id,c=await w(t);console.log(c),y.insertAdjacentHTML("beforeend",L(c)),k()}async function w(o){const e="https://food-boutique.b.goit.study/api/products/";return l.get(`${e}${o}`).then(t=>t.data).catch(t=>{throw new Error(t)})}function L(o){const{name:e,category:t,size:c,popularity:a,desc:d,price:r,img:p}=o;return`
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
          src="${p}"
          alt="${e}"
          width="160"
          height="160"
        />
      </div>
      <div class="modal-product-text">
        <p class="modal-product modal-product-name">${e}</p>
        <div class="modal-container-descs">
          <p class="modal-product modal-product-desc">
            Category:
            <span class="modal-product-desc modal-product-desc-value"
              >${t}</span
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
            <span class="modal-product-desc modal-product-desc-value">${a}</span>
          </p>
        </div>

        <p class="modal-product-description" style="overflow-y:auto; max-height: 200px">
         ${d}

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
    
    `}function k(){const o=document.querySelector("[data-modal-close]"),e=document.querySelector("[data-modal]"),t=document.querySelector(".backdrop");o.addEventListener("click",d),t.addEventListener("click",c);function c(r){r.target===t&&(d(),t.removeEventListener("click",c))}document.addEventListener("keydown",a);function a(r){r.code==="Escape"&&d()}function d(){console.log("!!!!!!!"),e.remove(),document.removeEventListener("keydown",a),o.removeEventListener("click",d)}s.addEventListener("click",n)}
//# sourceMappingURL=commonHelpers2.js.map
