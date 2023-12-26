import{c as l}from"./assets/sptite-3019e65a.js";const u="/comand-project__team-8/assets/yellow-shopping-basket@1x-fe591d80.png",f="/comand-project__team-8/assets/yellow-shopping-basket@2x-61cba68c.png",g=`
    <picture class="empty-basket">
        <source srcset="${u} 1x, ${f} 2x" />
        <img src="${u}" alt="basket" class="basket-empty-img"/>
    </picture>
    <h3 class="empty-basket-title">
        Your basket is
        <span class="empty-basket-span">empty...</span>
    </h3>
    <p class="empty-basket-text">
        Go to the main page to select your favorite products and add them to the cart.
    </p>
`;function m(){const t=document.querySelector(".js-cart-info"),e=document.querySelector(".js-header-span"),c=JSON.parse(localStorage.getItem("cart"))||[];t&&(t.textContent=c.length),e&&(e.textContent=c.length)}function y(){const t=document.querySelector(".cart-delete-all-btn");if(t){const e=()=>{localStorage.setItem("cart","[]"),m(),i([]),t.removeEventListener("click",e)};t.addEventListener("click",e)}}function b(t){let e=0;for(const c of t)e+=c.price*c.quantity;return e.toFixed(2)}function $(t){return`
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
            ${t.map(({category:c,img:r,name:s,price:n,size:o,_id:a,quantity:v})=>`
                <li class="cart-product-list" data-cart-product-id=${a}>
                    <div class="cart-product-img-container">
                        <img class="cart-product-img" src=${r} alt=${s}/>
                    </div>
                    <div class="cart-product-list-description">
                    <div class="cart-product-list-info">
                        <p class="cart-product-name">${s}</p>
                        <div class="cart-product-features">
                            <p class="cart-product-category">Category: <span class="cart-product-category-span">${c.replace(/_/g," ")}</span></p>
                            <p class="cart-product-size">Size: <span class="cart-product-size-span">${o}</span></p>
                        </div>
                        <p class="cart-product-info-price">$${n}</p>
                    </div>
                    <div class="cart-product-list-remove">
                        <button class="cart-product-remove-btn" type="button" data-remove=${a}>
                        <svg class="cart-product-remove-svg" data-remove=${a}>
                            <use href="${l}#icon-close" data-remove=${a}></use>
                        </svg>
                        </button>
                        <div class="cart-product-count-container">
                            <button class="cart-product-count-decrease" type="button" data-decrease=${a}>
                                <svg class="cart-product-count-decrease-svg" data-decrease=${a} hidden>
                                    <use href="${l}#icon-" data-decrease=${a}></use>
                                </svg>
                            </button>
                            <p class="cart-product-count-text" data-count="${a}">${v}</p>
                            <button class="cart-product-count-increase" type="button" data-increase=${a}>
                                <svg class="cart-product-count-increase-svg" data-increase=${a} hidden>
                                    <use href="${l}#icon-" data-increase=${a}></use>
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
    `}function h(t){const e=document.querySelector(".cart-with-items-list");e&&e.addEventListener("click",c=>{const r=c.target.dataset.remove;if(r){const s=t.filter(n=>n._id!==r);localStorage.setItem("cart",JSON.stringify(s)),i(s)}})}function k(t){S(t)}function d(t,e,c,r){const n=c.map(o=>{if(o._id===t){const a=Math.max(0,o.quantity+e);return r.textContent=a,a===0?null:{...o,quantity:a}}return o}).filter(o=>o!==null);localStorage.setItem("cart",JSON.stringify(n)),i(n)}function S(t){t.forEach(({_id:e})=>{const c=document.querySelector(`.cart-product-count-decrease[data-decrease="${e}"]`),r=document.querySelector(`.cart-product-count-increase[data-increase="${e}"]`),s=document.querySelector(`.cart-product-count-text[data-count="${e}"]`);c&&r&&(c.addEventListener("click",()=>d(e,-1,t,s)),r.addEventListener("click",()=>d(e,1,t,s)))})}const p=document.querySelector(".js-basket"),x=JSON.parse(localStorage.getItem("cart"))||[];function i(t){m(),t.length===0?p.innerHTML=g:p.innerHTML=$(t),y(),h(t),k(t)}i(x);
//# sourceMappingURL=commonHelpers.js.map
