import{a as c}from"./vendor-c8bc0669.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();async function w(){const s="https://food-boutique.b.goit.study/api/products/categories";try{return(await c.get(s)).data}catch{return[]}}async function k({keyword:s,category:t,page:r,limit:o}){const e="https://food-boutique.b.goit.study/api/products";return(await c.get(e,{params:{keyword:s,category:t,page:r,limit:o}})).data}async function L(){const s="https://food-boutique.b.goit.study/api/products/popular";return(await c.get(s)).data}async function q(){const s="https://food-boutique.b.goit.study/api/products/discount";return(await c.get(s)).data}async function l(s){const t="https://food-boutique.b.goit.study/api/subscription",r={email:s};try{return{success:!0,data:(await c.post(t,r)).data}}catch(o){return o.response&&o.response.status===409?{success:!1,status:409,message:"Email already subscribed"}:{success:!1,status:o.response?o.response.status:null,message:"Oops! Something went wrong"}}}async function S({email:s,products:t}){const r="https://food-boutique.b.goit.study/api/orders",o={email:s,products:t};try{return(await c.post(r,o)).data}catch(e){throw alert("Oops! Something went wrong"),e}}const i="/comand-project__team-8/assets/subscribing-modal@1x-5e977593.png",p="/comand-project__team-8/assets/subscribing-modal@2x-5a6fb9e4.png",d="/comand-project__team-8/assets/sptite-2dc2b9fb.svg";function m(){document.querySelector("body").insertAdjacentHTML("beforeend",b()),u()}function f(){document.querySelector("body").insertAdjacentHTML("beforeend",g()),u()}function b(){return`
    <div class="backdrop" data-modal>
  <div class="modal-container email-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${d}#icon-close"></use>
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

    
    `}function g(){return`
   <div class="backdrop back-drop-sub" data-modal>
  <div class="modal-container subscribing-container modal-product" data-modal>
    <svg
      class="modal-product-close-icon sub-icon"
      width="22"
      height="22"
      data-modal-close
    >
      <use href="${d}#icon-close"></use>
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
        ${i} 1x,
        ${p} 2x
      "
      src="${i}"
      width="335"
      height="144"
      alt="Vegetables"
    />
  </div>
</div>
    
    `}function u(){const s=document.querySelector("[data-modal-close]"),t=document.querySelector(".backdrop");function r(){const a=document.querySelector("[data-modal]");a&&(a.remove(),s.removeEventListener("click",r),document.removeEventListener("keydown",e),t.removeEventListener("click",o))}function o(a){a.target===t&&(r(),t.removeEventListener("click",o))}function e(a){a.code==="Escape"&&(r(),document.removeEventListener("keydown",e))}s.addEventListener("click",r),t.addEventListener("click",o),document.addEventListener("keydown",e),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const y=document.querySelector(".footer-form");y.addEventListener("submit",h);async function h(s){s.preventDefault();const t=s.target.email,r=t.value,o=await l(r);o.success?(f(),t.value=""):o.status===409?(m(),t.value=""):alert(o.message)}export{L as a,w as b,q as d,k as f,S as p,d as s};
//# sourceMappingURL=footer-b74378ef.js.map
