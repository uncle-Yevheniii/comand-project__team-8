import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';
import { fetchCategories, fetchData } from '../API';
import { productsGeneretor } from './products-list';

const searchForm = document.querySelector('.filters-form');
const searchInput = document.querySelector('.filters-form-input');
const categorySelect = document.querySelector('.filters-form-select-category');

const createCategoryMarkup = arrey => {
  return arrey
    .map(
      category =>
        `<option value="${category.trim()}">${category
          .replace('_', ' ')
          .replace('_', ' ')}</option>`
    )
    .join('');
};

let categories = [];

const renderSelects = async () => {
  const data = await fetchCategories();
  categories = [...data, 'Show all'];
  const markup = createCategoryMarkup(categories);
  categorySelect.insertAdjacentHTML('beforeend', markup);

  const savedFilters = JSON.parse(localStorage.getItem('settings')) || { keyword: null, category: null };
  categorySelect.value = savedFilters.category;

  new SlimSelect({
    select: '#category',
    settings: {
      showSearch: false,
    },
  });
};

renderSelects();

const onForm = event => {
  event.preventDefault();
  const currentValue = searchInput.value.trim();
  const currentCategory = categorySelect.value;
  const query = { 
    keyword: currentValue || null, 
    category: currentCategory === 'Show all' ? null : currentCategory.trim() || null };
  localStorage.setItem('settings', JSON.stringify(query));
  productsGeneretor(query);
};

const onSearchField = event => {
  if (event.target.value === '') {
    const currentCategory = categorySelect.value;
    const query = { 
      keyword: null, 
      category: currentCategory === 'Show all' ? null : currentCategory.trim() || null };
    localStorage.setItem('settings', JSON.stringify(query));
    productsGeneretor(query);
  }
};

const onCategoryField = event => {
  const currentValue = searchInput.value.trim();
  const currentCategory = event.target.value;
  const query = { 
    keyword: currentValue || null, 
    category: currentCategory === 'Show all' ? null : currentCategory.trim() || null };
  localStorage.setItem('settings', JSON.stringify(query));
  productsGeneretor(query);
};

window.addEventListener('load', () => {
  const savedFilters = JSON.parse(localStorage.getItem('settings')) || { keyword: null, category: null };
  searchInput.value = savedFilters.keyword;

  productsGeneretor(savedFilters);

  searchForm.addEventListener('submit', onForm);
  categorySelect.addEventListener('change', onCategoryField);
  searchInput.addEventListener('input', onSearchField);
});

// const sortSelect = [
//   { value: 'alphabetical', label: 'A to Z' },
//   { value: 'reverse-alphabetical', label: 'Z to A' },
//   { value: 'cheap', label: 'Cheap' },
//   { value: 'expensive', label: 'Expensive' },
//   { value: 'popular', label: 'Popular' },
//   { value: 'not-popular', label: 'Not popular' },
//   { value: '', label: 'Show all' },
// ];

// new SlimSelect({
//   select: '#sort',
//   settings: {
//     showSearch: false,
//   },
// });