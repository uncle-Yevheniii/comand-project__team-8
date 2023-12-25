// Запуск сайту та ініціалізація localStorage
import { localStorageSettings, localStorageCart } from './local-storage.js';
localStorageSettings();
localStorageCart();

// Відмалювання карток прокутів products-list;
import { productsGeneretor } from './js/products-list.js';
productsGeneretor();
import './js/popular-products.js';
import './js/modalproductcard.js';
import './js/modal.js';
