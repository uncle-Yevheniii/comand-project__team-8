import{c as l}from"./assets/sptite-764bed88.js";const i="/comand-project__team-8/assets/yellow-shopping-basket@1x-fe591d80.png",f="/comand-project__team-8/assets/yellow-shopping-basket@2x-61cba68c.png",g=`
    <picture class="empty-basket">
        <source srcset="${i} 1x, ${f} 2x" />
        <img src="${i}" alt="basket" class="basket-empty-img"/>
    </picture>
    <h3 class="empty-basket-title">
        Your basket is
        <span class="empty-basket-span">empty...</span>
    </h3>
    <p class="empty-basket-text">
        Go to the main page to select your favorite products and add them to the cart.
    </p>
`;function m(){const t=document.querySelector(".js-cart-info"),e=document.querySelector(".js-header-span"),a=JSON.parse(localStorage.getItem("cart"))||[];t&&(t.textContent=a.length),e&&(e.textContent=a.length)}function y(){const t=document.querySelector(".cart-delete-all-btn");if(t){const e=()=>{localStorage.setItem("cart","[]"),m(),d([]),t.removeEventListener("click",e)};t.addEventListener("click",e)}}function b(t){let e=0;for(const a of t)e+=a.price*a.quantity;return e.toFixed(2)}function $(t){return`
    <div class="basket-full-container">
        <div class="cart-with-items-container">
        
            <div class="cart-delete-all">
                <p class="cart-delete-all-text">Delete all</p>
                <button type="button" class="cart-delete-all-btn">
                    <svg class="delete-all-icon-svg">
                        <use href="${l}#icon-close"></use>
                    </svg>
                </button>
            </div>

            <ul class="cart-with-items-list">
            ${t.map(({category:a,img:s,name:r,price:o,size:n,_id:c,quantity:v})=>`
                <li class="cart-product-list" data-cart-product-id=${c}>
                    <div class="cart-product-img-container">
                        <img class="cart-product-img" src=${s} alt=${r}/>
                    </div>
                    <div class="cart-product-list-description">
                    <div class="cart-product-list-info">
                        <p class="cart-product-name">${r}</p>
                        <div class="cart-product-features">
                            <p class="cart-product-category">Category: <span class="cart-product-category-span">${a.replace(/_/g," ")}</span></p>
                            <p class="cart-product-size">Size: <span class="cart-product-size-span">${n}</span></p>
                        </div>
                        <p class="cart-product-info-price">$${o}</p>
                    </div>
                    <div class="cart-product-list-remove">
                        <button class="cart-product-remove-btn" type="button" data-remove=${c}>
                        <svg class="cart-product-remove-svg" data-remove=${c}>
                            <use href="${l}#icon-close" data-remove=${c}></use>
                        </svg>
                        </button>
                        <div class="cart-product-count-container">
                            <button class="cart-product-count-decrease" type="button" data-decrease=${c}>
                                <svg class="cart-product-count-decrease-svg" data-decrease=${c} hidden>
                                    <use href="${l}#icon-" data-decrease=${c}></use>
                                </svg>
                            </button>
                            <p class="cart-product-count-text" data-count="${c}">${v}</p>
                            <button class="cart-product-count-increase" type="button" data-increase=${c}>
                                <svg class="cart-product-count-increase-svg" data-increase=${c} hidden>
                                    <use href="${l}#icon-" data-increase=${c}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                </li>
                `).join("")}
            </ul>

        </div>
        <div class="cart-order-container">
                <h2 class="cart-order-title">Your Order</h2>
                <div class="cart-order-total">
                    <p class="cart-order-text-total">Total</p>
                    <div class="cart-order-sum-container">
                        <p class="cart-order-sum">
                            <span class="cart-order-text-sum">
                            Sum:
                            </span>
                            $${b(t)}
                            </p>
                    </div>
                </div>
                <form class="cart-form-order-input">
                    <input type="email" name="user-email" id="user-email" class="cart-form-order-mail-input" placeholder="Enter your email" pattern="[_-a-zA-Z0-9.+]+@[a-zA-Z0-9](.?[-a-zA-Z0-9]*[a-zA-Z0-9])*" required/>
                    <button type="submit" class="cart-form-btn">Checkout</button>
                </form>
            </div>
    </div>
    `}function h(t){const e=document.querySelector(".cart-with-items-list");e&&e.addEventListener("click",a=>{const s=a.target.dataset.remove;if(s){const r=t.filter(o=>o._id!==s);localStorage.setItem("cart",JSON.stringify(r)),d(r)}})}function k(t){S(t)}function u(t,e,a,s){const o=a.map(n=>{if(n._id===t){const c=Math.max(0,n.quantity+e);return s.textContent=c,c===0?null:{...n,quantity:c}}return n}).filter(n=>n!==null);localStorage.setItem("cart",JSON.stringify(o)),d(o)}function S(t){t.forEach(({_id:e})=>{const a=document.querySelector(`.cart-product-count-decrease[data-decrease="${e}"]`),s=document.querySelector(`.cart-product-count-increase[data-increase="${e}"]`),r=document.querySelector(`.cart-product-count-text[data-count="${e}"]`);a&&s&&(a.addEventListener("click",()=>u(e,-1,t,r)),s.addEventListener("click",()=>u(e,1,t,r)))})}const p=document.querySelector(".js-basket"),q=JSON.parse(localStorage.getItem("cart"))||[];function d(t){m(),t.length===0?p.innerHTML=g:p.innerHTML=$(t),y(),h(t),k(t)}d(q);console.log("!!!!");(()=>{const t={openModal:document.querySelector(".cart-form-order-input"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")},e=document.querySelector(".backdrop");t.openModal.addEventListener("submit",function(o){o.preventDefault(),t.openModal.reset(),r()}),t.closeModalBtn.addEventListener("click",r),e.addEventListener("click",a);function a(o){o.target===e&&r()}document.addEventListener("keydown",s);function s(o){o.code==="Escape"&&(r(),document.removeEventListener("keydown",s))}function r(){t.modal.classList.toggle("is-hidden"),console.log("!!!!")}})();
//# sourceMappingURL=commonHelpers.js.map
