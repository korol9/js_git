"use strict";
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



let movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "1+1"

    ]
};

let promoBG = document.querySelector('.promo__bg');
let genre = promoBG.querySelector('.promo__genre');
let adv = document.querySelectorAll('.promo__adv img');
let list = document.querySelector('.promo__interactive-list');
adv.forEach(item => {
    item.remove();
});
genre.textContent = "ДРАМА";
promoBG.style.cssText = 'background: url("img/bg.jpg") center center no-repeat; background-size: cover;';
list.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});