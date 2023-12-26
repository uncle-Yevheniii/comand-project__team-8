import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';
import { fetchCategories, fetchData } from '../API';

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
  categories = [...data];
  const markup = createCategoryMarkup(categories);
  categorySelect.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: '#category',
    settings: {
      showSearch: false,
    },
  });
};

renderSelects();

const renderProducts = async query => {
  const data = await fetchData(query);
  console.log(data.results);
};

const onForm = event => {
  event.preventDefault();
  const currentValue = searchInput.value.trim();
  const currentCategory = categorySelect.value;
  const query = { 
    keyword: currentValue || null, 
    category: currentCategory === 'Show all' ? null : currentCategory.trim() || null };
  localStorage.setItem('LS_QUERY_KEY', JSON.stringify(query));
  renderProducts(query);
};

const onSearchField = event => {
  if (event.target.value === '') {
    const currentCategory = categorySelect.value;
    const query = { 
      keyword: null, 
      category: currentCategory === 'Show all' ? null : currentCategory.trim() || null };
    localStorage.setItem('LS_QUERY_KEY', JSON.stringify(query));
    renderProducts(query);
  }
};

const onCategoryField = event => {
  const currentValue = searchInput.value.trim();
  const currentCategory = event.target.value;
  const query = { 
    keyword: currentValue || null, 
    category: currentCategory.trim() || null };
  localStorage.setItem('LS_QUERY_KEY', JSON.stringify(query));
  renderProducts(query);
};

window.addEventListener('load', () => {
  const savedFilters = JSON.parse(localStorage.getItem('LS_QUERY_KEY')) || { keyword: null, category: null };
  searchInput.value = savedFilters.keyword;
  categorySelect.value = savedFilters.category;

  renderProducts(savedFilters);

  searchForm.addEventListener('submit', onForm);
  categorySelect.addEventListener('change', onCategoryField);
  searchInput.addEventListener('input', onSearchField);
});