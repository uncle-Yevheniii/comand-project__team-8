import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';

new SlimSelect({
    select: '#single'
})

const searchForm = document.querySelector('.filters-form');

searchForm.addEventListener ('submit', event => {
  event.preventDefault();
});