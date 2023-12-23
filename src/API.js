import axios from 'axios'



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
