export function cartTotalPrice(data) {
    let total = 0;
    for (const item of data) {
        total += item.price;
    }
    return total.toFixed(2);
};