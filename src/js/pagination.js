import Pagination from 'tui-pagination';
import { productsGeneretor } from '../js/products-list';

const container = document.getElementById('pagination');
let visiblePages = 0;

const screenWidth = window.innerWidth;
if (screenWidth < 768) {
  visiblePages = 2;
} else {
  visiblePages = 4;
}

export function renderPagination(pages, limit, currentPage) {
  const options = {
    totalItems: pages.totalPages * limit,
    itemsPerPage: limit,
    visiblePages: visiblePages,
    page: currentPage,
    centerAlign: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  const pagination = new Pagination(container, options);
  pagination.on('afterMove', event => {
    const currentPage = event.page;

    const filters = JSON.parse(localStorage.getItem('settings')) || {};
    filters.page = currentPage;
    localStorage.setItem('settings', JSON.stringify(filters));
    productsGeneretor();
  });
}
export function removePagination() {
  container.innerHTML = '';
}
