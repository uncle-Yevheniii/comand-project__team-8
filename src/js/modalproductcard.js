const ul = document.querySelector(".wrapperPopularProduct");
console.log(ul);
ul.addEventListener("click", handleCardClick);
async function handleCardClick(event){
    const product = event.target.closest("li");
    // delete later for button
    // delete if click is not li
    console.log(product.dataset.id);
    const id = Number(product.dataset.id);

}