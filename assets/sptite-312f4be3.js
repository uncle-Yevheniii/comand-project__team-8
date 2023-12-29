import{a as n}from"./vendor-c8bc0669.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function y(){const o="https://food-boutique.b.goit.study/api/products/categories";try{return(await n.get(o)).data}catch(t){return console.error("Помилка під час запиту:",t),[]}}async function h({keyword:o,category:t,page:a,limit:s}){const e="https://food-boutique.b.goit.study/api/products";return(await n.get(e,{params:{keyword:o,category:t,page:a,limit:s}})).data}async function v(){const o="https://food-boutique.b.goit.study/api/products/popular";return(await n.get(o)).data}async function w(){const o="https://food-boutique.b.goit.study/api/products/discount";return(await n.get(o)).data}async function d(o){const t="https://food-boutique.b.goit.study/api/subscription",a={email:o};try{return{success:!0,data:(await n.post(t,a)).data}}catch(s){return s.response&&s.response.status===409?{success:!1,status:409,message:"Email already subscribed"}:(console.error("Произошла ошибка при отправке:",s),{success:!1,status:s.response?s.response.status:null,message:"Oops! Something went wrong"})}}async function k({email:o,products:t}){const a="https://food-boutique.b.goit.study/api/orders",s={email:o,products:t};try{return(await n.post(a,s)).data}catch(e){throw alert("Oops! Something went wrong"),console.error("Произошла ошибка при отправке:",e),e}}function u(){document.querySelector("body").insertAdjacentHTML("beforeend",p()),i()}function l(){document.querySelector("body").insertAdjacentHTML("beforeend",m()),i()}function p(){return`
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

    
    `}function m(){return`
   <div class="backdrop" data-modal>
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
        ./img/subscribing-modal@1x.png 1x,
        ./img/subscribing-modal@2x.png 2x
      "
      src="./img/subscribing-modal@1x.png"
      width="335"
      height="144"
      alt="Vegetables"
    />
  </div>
</div>
    
    `}function i(){const o=document.querySelector("[data-modal-close]"),t=document.querySelector(".backdrop");function a(){const r=document.querySelector("[data-modal]");r&&(r.remove(),o.removeEventListener("click",a),document.removeEventListener("keydown",e),t.removeEventListener("click",s))}function s(r){r.target===t&&(a(),t.removeEventListener("click",s))}function e(r){r.code==="Escape"&&(a(),document.removeEventListener("keydown",e))}o.addEventListener("click",a),t.addEventListener("click",s),document.addEventListener("keydown",e),document.querySelector("[data-modal]")||body.insertAdjacentHTML("beforeend",createMarkup(info))}const f=document.querySelector(".footer-form");f.addEventListener("submit",b);async function b(o){o.preventDefault();const t=o.target.email,a=t.value,s=await d(a);s.success?(l(),t.value=""):s.status===409?(u(),t.value=""):alert(s.message)}const L="/comand-project__team-8/assets/sptite-2dc2b9fb.svg";export{v as a,y as b,w as d,h as f,k as p,L as s};
//# sourceMappingURL=sptite-312f4be3.js.map
