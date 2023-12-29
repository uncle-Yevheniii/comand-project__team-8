import axios from 'axios';

export async function fetchCategories() {
  const url = 'https://food-boutique.b.goit.study/api/products/categories';
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error('Помилка під час запиту:', error);
    return [];
  }
}

export async function fetchData({ keyword, category, page, limit }) {
  const url = 'https://food-boutique.b.goit.study/api/products';

  const response = await axios.get(url, {
    params: { keyword, category, page, limit },
  });
  return response.data;
}

//Для примера вида параметра, который будет приходить в fetchData
// const params = {
//   keyword: 'Ac',
//   category: 'Fresh_Produce',
//   page: 1,
//   limit: 1,
// };

// fetchData(params);
export async function popularProdact() {
  const url = 'https://food-boutique.b.goit.study/api/products/popular';
  const res = await axios.get(url);
  return res.data;
}

export async function discountProduct() {
  const url = 'https://food-boutique.b.goit.study/api/products/discount';
  const res = await axios.get(url);
  return res.data;
}

export async function findProductCard(id) {
  const url = `https://food-boutique.b.goit.study/api/products/${id}`;
  const res = await axios.get(url);
  return res.data;
}

export async function postSubscribe(email) {
  const url = 'https://food-boutique.b.goit.study/api/subscription';
  const emailData = {
    email: email,
  };
  try {
    const res = await axios.post(url, emailData);
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    if (error.response && error.response.status === 409) {      
      return {
        success: false,
        status: 409,
        message: 'Email already subscribed',
      };
    } else {      
      console.error('Произошла ошибка при отправке:', error);
      return {
        success: false,
        status: error.response ? error.response.status : null,
        message: 'Oops! Something went wrong',
      };
    }
  }
}


export async function postOrders({ email, products }) {
  const url = 'https://food-boutique.b.goit.study/api/orders';
  const order = {
    email: email,
    products: products,
  };
  try {
    const res = await axios.post(url, order);
    // alert(res.data.message);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    alert('Oops! Something went wrong');
    console.error('Произошла ошибка при отправке:', error);
    throw error;
  }
}
//То что должно прилететь как параметр в postOrder
// const orderData = {
//   email: 'examp@email5799.com',
//   products: [
//     { productId: "640c2dd963a319ea671e383b",
//      amount: 2 }
//   ]
// };
