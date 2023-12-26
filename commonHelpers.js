import{c as i}from"./assets/sptite-51f64df6.js";const d="/comand-project__team-8/assets/yellow-shopping-basket@1x-fe591d80.png",y="/comand-project__team-8/assets/yellow-shopping-basket@2x-61cba68c.png",f=`
    <picture class="empty-basket">
        <source srcset="${d} 1x, ${y} 2x" />
        <img src="${d}" alt="basket" class="basket-empty-img"/>
    </picture>
    <h3 class="empty-basket-title">
        Your basket is
        <span class="empty-basket-span">empty...</span>
    </h3>
    <p class="empty-basket-text">
        Go to the main page to select your favorite products and add them to the cart.
    </p>
`;function m(){const t=document.querySelector(".js-cart-info"),e=document.querySelector(".js-header-span"),c=JSON.parse(localStorage.getItem("cart"))||[];t&&(t.textContent=c.length),e&&(e.textContent=c.length)}function v(){const t=document.querySelector(".cart-delete-all-btn");if(t){const e=()=>{localStorage.setItem("cart","[]"),m(),l([]),t.removeEventListener("click",e)};t.addEventListener("click",e)}}function b(t){let e=0;for(const c of t)e+=c.price*c.quantity;return e.toFixed(2)}function h(t){return`
    <div class="basket-full-container">
        <div class="cart-with-items-container">
        
            <div class="cart-delete-all">
                <p class="cart-delete-all-text">Delete all</p>
                <button type="button" class="cart-delete-all-btn">
                    <svg class="delete-all-icon-svg">
                        <use href="${i}#icon-close"></use>
                    </svg>
                </button>
            </div>

            <ul class="cart-with-items-list">
            ${t.map(({category:c,img:r,name:s,price:o,size:n,_id:a,quantity:g})=>`
                <li class="cart-product-list" data-cart-product-id=${a}>
                    <div class="cart-product-img-container">
                        <img class="cart-product-img" src=${r} alt=${s}/>
                    </div>
                    <div class="cart-product-list-description">
                    <div class="cart-product-list-info">
                        <p class="cart-product-name">${s}</p>
                        <div class="cart-product-features">
                            <p class="cart-product-category">Category: <span class="cart-product-category-span">${c.replace(/_/g," ")}</span></p>
                            <p class="cart-product-size">Size: <span class="cart-product-size-span">${n}</span></p>
                        </div>
                        <p class="cart-product-info-price">$${o}</p>
                    </div>
                    <div class="cart-product-list-remove">
                        <button class="cart-product-remove-btn" type="button" data-remove=${a}>
                        <svg class="cart-product-remove-svg" data-remove=${a}>
                            <use href="${i}#icon-close" data-remove=${a}></use>
                        </svg>
                        </button>
                        <div class="cart-product-count-container">
                            <button class="cart-product-count-decrease" type="button" data-decrease=${a}>
                                <svg class="cart-product-count-decrease-svg" data-decrease=${a} hidden>
                                    <use href="${i}#icon-" data-decrease=${a}></use>
                                </svg>
                            </button>
                            <p class="cart-product-count-text" data-count="${a}">${g}</p>
                            <button class="cart-product-count-increase" type="button" data-increase=${a}>
                                <svg class="cart-product-count-increase-svg" data-increase=${a} hidden>
                                    <use href="${i}#icon-" data-increase=${a}></use>
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
    `}function $(t){const e=document.querySelector(".cart-with-items-list");e&&e.addEventListener("click",c=>{const r=c.target.dataset.remove;if(r){const s=t.filter(o=>o._id!==r);localStorage.setItem("cart",JSON.stringify(s)),l(s)}})}function k(t){S(t)}function u(t,e,c,r){const o=c.map(n=>{if(n._id===t){const a=Math.max(0,n.quantity+e);return r.textContent=a,a===0?null:{...n,quantity:a}}return n}).filter(n=>n!==null);localStorage.setItem("cart",JSON.stringify(o)),l(o)}function S(t){t.forEach(({_id:e})=>{const c=document.querySelector(`.cart-product-count-decrease[data-decrease="${e}"]`),r=document.querySelector(`.cart-product-count-increase[data-increase="${e}"]`),s=document.querySelector(`.cart-product-count-text[data-count="${e}"]`);c&&r&&(c.addEventListener("click",()=>u(e,-1,t,s)),r.addEventListener("click",()=>u(e,1,t,s)))})}const p=document.querySelector(".js-basket"),q=[{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:0,quantity:1},{_id:"640c2dd963a319ea671e3864",name:"Black Beans",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png",category:"Pantry_Items",price:1.99,size:"16oz",is10PercentOff:!1,popularity:0,quantity:1},{_id:"640c2dd963a319ea671e37ad",name:"Black Olives",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",category:"Fresh_Produce",price:3.99,size:"1 jar (16 oz)",is10PercentOff:!1,popularity:0,quantity:1},{_id:"640c2dd963a319ea671e37a",name:"Black Olives",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",category:"Fresh_Produce",price:3.99,size:"1 jar (16 oz)",is10PercentOff:!1,popularity:0,quantity:1}];localStorage.setItem("cart",JSON.stringify(q));const x=JSON.parse(localStorage.getItem("cart"))||[];function l(t){m(),t.length===0?p.innerHTML=f:p.innerHTML=h(t),v(),$(t),k(t)}l(x);
//# sourceMappingURL=commonHelpers.js.map
