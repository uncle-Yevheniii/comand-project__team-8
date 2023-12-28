import{c as d,p as g}from"./assets/API-ed9648b3.js";import"./assets/vendor-6bc51c68.js";const p="/comand-project__team-8/assets/yellow-shopping-basket@1x-fe591d80.png",b="/comand-project__team-8/assets/yellow-shopping-basket@2x-61cba68c.png",h=`
    <picture class="empty-basket">
        <source srcset="${p} 1x, ${b} 2x" />
        <img src="${p}" alt="basket" class="basket-empty-img"/>
    </picture>
    <h3 class="empty-basket-title">
        Your basket is
        <span class="empty-basket-span">empty...</span>
    </h3>
    <p class="empty-basket-text">
        Go to the main page to select your favorite products and add them to the cart.
    </p>
`;function f(){const t=document.querySelector(".js-cart-info"),e=document.querySelector(".js-header-span"),c=JSON.parse(localStorage.getItem("cart"))||[];t&&(t.textContent=c.length),e&&(e.textContent=c.length)}function $(){const t=document.querySelector(".cart-delete-all-btn");if(t){const e=()=>{localStorage.setItem("cart","[]"),f(),l([]),t.removeEventListener("click",e)};t.addEventListener("click",e)}}function k(t){let e=0;for(const c of t)e+=c.price*c.quantity;return e.toFixed(2)}function S(t){return`
    <div class="basket-full-container">
        <div class="cart-with-items-container">
        
            <div class="cart-delete-all">
                <p class="cart-delete-all-text">Delete all</p>
                <button type="button" class="cart-delete-all-btn">
                    <svg class="delete-all-icon-svg">
                        <use href="${d}#icon-close"></use>
                    </svg>
                </button>
            </div>

            <ul class="cart-with-items-list">
            ${t.map(({category:c,img:s,name:r,price:o,size:n,_id:a,quantity:i})=>`
                <li class="cart-product-list" data-cart-product-id=${a}>
                    <div class="cart-product-img-container">
                        <img class="cart-product-img" src=${s} alt=${r}/>
                    </div>
                    <div class="cart-product-list-description">
                    <div class="cart-product-list-info">
                        <p class="cart-product-name">${r}</p>
                        <div class="cart-product-features">
                            <p class="cart-product-category">Category: <span class="cart-product-category-span">${c.replace(/_/g," ")}</span></p>
                            <p class="cart-product-size">Size: <span class="cart-product-size-span">${n}</span></p>
                        </div>
                        <p class="cart-product-info-price">$${o}</p>
                    </div>
                    <div class="cart-product-list-remove">
                        <button class="cart-product-remove-btn" type="button" data-remove=${a}>
                        <svg class="cart-product-remove-svg" data-remove=${a}>
                            <use href="${d}#icon-close" data-remove=${a}></use>
                        </svg>
                        </button>
                        <div class="cart-product-count-container">
                            <button class="cart-product-count-decrease" type="button" data-decrease=${a}>
                                <svg class="cart-product-count-decrease-svg" data-decrease=${a} hidden>
                                    <use href="${d}#icon-minus" data-decrease=${a}></use>
                                </svg>
                            </button>
                            <p class="cart-product-count-text" data-count="${a}">${i}</p>
                            <button class="cart-product-count-increase" type="button" data-increase=${a}>
                                <svg class="cart-product-count-increase-svg" data-increase=${a} hidden>
                                    <use href="${d}#icon-plus" data-increase=${a}></use>
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
                            $${k(t)}
                            </p>
                    </div>
                </div>
                <form class="cart-form-order-input">
                    <input type="email" name="user-email" id="user-email" class="cart-form-order-mail-input" placeholder="Enter your email" pattern="[_-a-zA-Z0-9.+]+@[a-zA-Z0-9](.?[-a-zA-Z0-9]*[a-zA-Z0-9])*" required/>
                    <button type="submit" class="cart-form-btn">Checkout</button>
                </form>
            </div>
    </div>
    `}function E(t){const e=document.querySelector(".cart-with-items-list");e&&e.addEventListener("click",c=>{const s=c.target.dataset.remove;if(s){const r=t.filter(o=>o._id!==s);localStorage.setItem("cart",JSON.stringify(r)),l(r)}})}function q(t){x(t)}function m(t,e,c,s){const o=c.map(n=>{if(n._id===t){const a=Math.max(0,n.quantity+e);return s.textContent=a,a===0?null:{...n,quantity:a}}return n}).filter(n=>n!==null);localStorage.setItem("cart",JSON.stringify(o)),l(o)}function x(t){t.forEach(({_id:e})=>{const c=document.querySelector(`.cart-product-count-decrease[data-decrease="${e}"]`),s=document.querySelector(`.cart-product-count-increase[data-increase="${e}"]`),r=document.querySelector(`.cart-product-count-text[data-count="${e}"]`);c&&s&&(c.addEventListener("click",()=>m(e,-1,t,r)),s.addEventListener("click",()=>m(e,1,t,r)))})}const v=document.querySelector(".js-basket"),I=JSON.parse(localStorage.getItem("cart"))||[];function l(t){f(),t.length===0?v.innerHTML=h:v.innerHTML=S(t),$(),E(t),q(t)}l(I);(()=>{const t={openModal:document.querySelector(".cart-form-order-input"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")},e=document.querySelector(".backdrop");t.openModal&&t.openModal.addEventListener("submit",async function(o){o.preventDefault();const a=document.getElementById("user-email").value,i=JSON.parse(localStorage.getItem("cart"))||[];if(i.length===0){alert("Your cart is empty. Add some items before checking out.");return}const y=i.map(u=>({productId:u._id,amount:u.quantity}));try{await g({email:a,products:y}),r(),localStorage.setItem("cart",JSON.stringify([])),l([])}catch(u){console.error("Error:",u)}}),t.closeModalBtn.addEventListener("click",r),e.addEventListener("click",c);function c(o){o.target===e&&r()}document.addEventListener("keydown",s);function s(o){o.code==="Escape"&&(r(),document.removeEventListener("keydown",s))}function r(){t.modal.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers.js.map
