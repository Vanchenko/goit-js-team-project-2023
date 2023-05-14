// import refs from './refs';
// import axios from 'axios';

// // Змінні попередні
// const BASE_URL = 'https://books-backend.p.goit.global/books/';
// const main = document.querySelector('.main');

// getBooks();

// // функція отримання даних по топовим книгам
// async function getBooks() {
//   try {
//     const response = await axios.get(`${BASE_URL}top-books`);
//     const topBooks = response.data.map(el => el.books);
//     const topBooksCategories = response.data.map(el => el.list_name);

//     markUpTopBooks(topBooks, topBooksCategories);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // функція відтворення топових книг
// function markUpTopBooks(topBooks, topBooksCategories) {
//   main.insertAdjacentHTML(
//     'beforeend',
//     createCategotiesList(topBooks, topBooksCategories)
//   );
// }

// // створення категорій на головній сторінці
// function createCategotiesList(topBooks, topBooksCategories) {
//   return topBooksCategories
//     .map((el, i) => {
//       return `<div class="container-main-gallery">
//                 <h2 class="book-name">${el}</h2>
//                 <ul class="book-category">
//                   ${createMarkupCardBook(topBooks[i])}
//                 </ul>
//               </div>`;
//     })
//     .join('');
// }

// // створення картки книги
// function createMarkupCardBook(topBooks) {
//   return topBooks
//     .map(
//       ({ author, book_image, title }) =>
//         `<li class="book-card">
//             <img src="${book_image}" alt="${title}" width="180">
//             <p>${title}</p>
//             <p>${author}</p>
//         </li>`
//     )
//     .join('');
// }

// // функція отримання списку категорій
// export async function getCategoriesList() {
//   return await axios.get(`${BASE_URL}category-list`);
// }

// // створення списку категорій
// export function createMarkupCategoriesList(categories) {
//     return categories.map(({list_name}) =>
//     `<li class="category-list-item"><button type="button" class="category">${list_name}</button></li>`).join("");
// }