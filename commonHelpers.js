import{c as l}from"./assets/sptite-79686bc2.js";const n="/comand-project__team-8/assets/yellow-shopping-basket@1x-fe591d80.png",m="/comand-project__team-8/assets/yellow-shopping-basket@2x-61cba68c.png",v=`
    <picture class="empty-basket">
        <source srcset="${n} 1x, ${m} 2x" />
        <img src="${n}" alt="basket" class="basket-empty-img"/>
    </picture>
    <h3 class="empty-basket-title">
        Your basket is
        <span class="empty-basket-span">empty...</span>
    </h3>
    <p class="empty-basket-text">
        Go to the main page to select your favorite products and add them to the cart.
    </p>
`;function p(){const t=document.querySelector(".js-cart-info"),e=document.querySelector(".js-header-span"),a=JSON.parse(localStorage.getItem("cart"))||[];t&&(t.textContent=a.length),e&&(e.textContent=a.length)}function g(){const t=document.querySelector(".cart-delete-all-btn");if(t){const e=()=>{localStorage.setItem("cart","[]"),p(),o([]),t.removeEventListener("click",e)};t.addEventListener("click",e)}}function f(t){let e=0;for(const a of t)e+=a.price;return e.toFixed(2)}function b(t){return`
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
            ${t.map(({category:a,img:c,name:r,price:d,size:u,_id:s})=>`
                <li class="cart-product-list" data-cart-product-id=${s}>
                    <div class="cart-product-img-container">
                        <img class="cart-product-img" src=${c} alt=${r}/>
                    </div>
                    <div class="cart-product-list-description">
                    <div class="cart-product-list-info">
                        <p class="cart-product-name">${r}</p>
                        <div class="cart-product-features">
                            <p class="cart-product-category">Category: <span class="cart-product-category-span">${a.replace(/_/g," ")}</span></p>
                            <p class="cart-product-size">Size: <span class="cart-product-size-span">${u}</span></p>
                        </div>
                        <p class="cart-product-info-price">$${d}</p>
                    </div>
                    <div class="cart-product-list-remove">
                        <button class="cart-product-remove-btn" type="button" data-remove=${s}>
                        <svg class="cart-product-remove-svg" data-remove=${s}>
                            <use href="${l}#icon-close" data-remove=${s}></use>
                        </svg>
                        </button>
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
                            $${f(t)}
                            </p>
                    </div>
                </div>
                <form class="cart-form-order-input">
                    <input type="email" name="user-email" id="user-email" class="cart-form-order-mail-input" placeholder="Enter your email" pattern="[_-a-zA-Z0-9.+]+@[a-zA-Z0-9](.?[-a-zA-Z0-9]*[a-zA-Z0-9])*" required/>
                    <button type="submit" class="cart-form-btn">Checkout</button>
                </form>
            </div>
    `}function y(t){const e=document.querySelector(".cart-with-items-list");e&&e.addEventListener("click",a=>{const c=t.filter(r=>r._id!==a.target.dataset.remove);localStorage.setItem("cart",JSON.stringify(c)),o(c)})}const i=document.querySelector(".js-basket"),h=JSON.parse(localStorage.getItem("cart"))||[];function o(t){p(),t.length===0?i.innerHTML=v:i.innerHTML=b(t),g(),y(t)}o(h);
//# sourceMappingURL=commonHelpers.js.map
