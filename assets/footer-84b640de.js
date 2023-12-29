import{a as c}from"./vendor-c8bc0669.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function w(){const o="https://food-boutique.b.goit.study/api/products/categories";try{return(await c.get(o)).data}catch(t){return console.error("Помилка під час запиту:",t),[]}}async function k({keyword:o,category:t,page:a,limit:s}){const e="https://food-boutique.b.goit.study/api/products";return(await c.get(e,{params:{keyword:o,category:t,page:a,limit:s}})).data}async function L(){const o="https://food-boutique.b.goit.study/api/products/popular";return(await c.get(o)).data}async function q(){const o="https://food-boutique.b.goit.study/api/products/discount";return(await c.get(o)).data}async function l(o){const t="https://food-boutique.b.goit.study/api/subscription",a={email:o};try{return{success:!0,data:(await c.post(t,a)).data}}catch(s){return s.response&&s.response.status===409?{success:!1,status:409,message:"Email already subscribed"}:(console.error("Произошла ошибка при отправке:",s),{success:!1,status:s.response?s.response.status:null,message:"Oops! Something went wrong"})}}async function S({email:o,products:t}){const a="https://food-boutique.b.goit.study/api/orders",s={email:o,products:t};try{return(await c.post(a,s)).data}catch(e){throw alert("Oops! Something went wrong"),console.error("Произошла ошибка при отправке:",e),e}}const i="/comand-project__team-8/assets/subscribing-modal@1x-5e977593.png",p="/comand-project__team-8/assets/subscribing-modal@2x-5a6fb9e4.png",d="/comand-project__team-8/assets/sptite-2dc2b9fb.svg";function m(){document.querySelector("body").insertAdjacentHTML("beforeend",b()),u()}function f(){document.querySelector("body").insertAdjacentHTML("beforeend",g()),u()}function b(){return`
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
    
    `}function u(){const o=document.querySelector("[data-modal-close]"),t=document.querySelector(".backdrop");function a(){const r=document.querySelector("[data-modal]");r&&(r.remove(),o.removeEventListener("click",a),document.removeEventListener("keydown",e),t.removeEventListener("click",s))}function s(r){r.target===t&&(a(),t.removeEventListener("click",s))}function e(r){r.code==="Escape"&&(a(),document.removeEventListener("keydown",e))}o.addEventListener("click",a),t.addEventListener("click",s),document.addEventListener("keydown",e),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const y=document.querySelector(".footer-form");y.addEventListener("submit",h);async function h(o){o.preventDefault();const t=o.target.email,a=t.value,s=await l(a);s.success?(f(),t.value=""):s.status===409?(m(),t.value=""):alert(s.message)}export{L as a,w as b,q as d,k as f,S as p,d as s};
//# sourceMappingURL=footer-84b640de.js.map
