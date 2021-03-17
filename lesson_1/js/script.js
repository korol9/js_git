'use strict';

// let num = 10;

// function showFirstMessage(text) {
//     num = 10;
//     console.log(text);
// }
// showFirstMessage('Hello World!');
// console.log(num);

// let a = 3;

// function addTwo(x) {
//     let ret = x + 2;
//     return ret;
// }
// let b = addTwo(a);
// console.log(b);

// let str = "straw berry";

// console.log(str.slice(6, 11));
// console.log(str);
let personalMovieDB = {
    movies: {},
    count: [],
    actors: {},
    genres: [],
    privat: false
};

let showMyDB = function () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('This Data Base is privated');
    }
};


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');
    }
}


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Какой фильм вы смотрели?', ''),
            ballFilm = prompt('Какую оценку вы поставите фильму?');

        if (film != null && ballFilm != null && film != '' && ballFilm != '' && film.length < 50) {
            personalMovieDB.movies[film] = ballFilm;
            alert('Thanks');
        } else {
            alert('Invalid notation');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (30 <= personalMovieDB.count) {
        alert("Вы киноман");
    } else {
        alert("Error");
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
        personalMovieDB.genres[i - 1] = genre;
    }
}



start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();