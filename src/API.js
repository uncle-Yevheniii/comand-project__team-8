import axios from `axios`

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
  
  