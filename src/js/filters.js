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
  let settings = JSON.parse(localStorage.getItem('settings')) || { keyword: null, category: null };
  const currentValue = searchInput.value.trim();
  const currentCategory = categorySelect.value;
    settings.keyword = currentValue || null;
    settings.category = currentCategory === 'Show all' ? null : currentCategory.trim() || null;
    localStorage.setItem('settings', JSON.stringify(settings));
  productsGeneretor();
};

const onSearchField = event => {
  if (event.target.value === '') {
    let settings = JSON.parse(localStorage.getItem('settings')) || { keyword: null, category: null };
    const currentCategory = categorySelect.value;
      settings.keyword = null;
      settings.category = currentCategory === 'Show all' ? null : currentCategory.trim() || null;
      localStorage.setItem('settings', JSON.stringify(settings));
    productsGeneretor();
  }
};

const onCategoryField = event => {
  let settings = JSON.parse(localStorage.getItem('settings')) || { keyword: null, category: null };
  const currentValue = searchInput.value.trim();
  const currentCategory = event.target.value;
    settings.keyword = currentValue || null;
    settings.category = currentCategory === 'Show all' ? null : currentCategory.trim() || null;
    localStorage.setItem('settings', JSON.stringify(settings));
  productsGeneretor();
};

window.addEventListener('load', () => {
  const savedFilters = JSON.parse(localStorage.getItem('settings')) || { keyword: null, category: null};
  searchInput.value = savedFilters.keyword;

  productsGeneretor(savedFilters);

  searchForm.addEventListener('submit', onForm);
  categorySelect.addEventListener('change', onCategoryField);
  searchInput.addEventListener('input', onSearchField);
});