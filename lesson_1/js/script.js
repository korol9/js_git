"use strict";

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}.`);
//     callback();
// }

// function done() {
//     console.log('I learned the callback function.');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     }
// };

// delete(options.colors);
// console.log(options);

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// const arr = [1, 2, 3, 4, 5];
// let str = prompt('', '');
// let arr = str.split(', ');
// let arrr = ['qwe', 'wqe', 'wqeq'];
// console.log(arrr.join('-'));

// const q = {
//     one: 1,
//     two: 2
// };

// const w = {
//     ...q,
//     three: 3
// };

// console.log(q);
// console.log(w);

// let numberOfFilms;
// numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');

let personalMovieDB = {
    movies: {},
    count: 0,
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", '');
        let i;
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", '');
        }
        i++;
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (30 <= personalMovieDB.count) {
            alert("Вы киноман");
        } else {
            alert("Error");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
            if (genre == null || genre == '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр №${i + 1} - это ${item}.`);
        });
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        return personalMovieDB.privat;
    },
    showMyDB: function () {
        let i;
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            alert('Invalid notation');
            i--;
            console.log('This Data Base is privated');
        }
    }
};
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);
// let i = 0;
// while (i < 2) {
//     const film = prompt('Какой фильм вы смотрели?', ''),
//         ballFilm = prompt('Какую оценку вы поставите фильму?');
//     if (film != null && ballFilm != null && film != '' && ballFilm != '' && film.length < 50) {
//         personalMovieDB.movies[film] = ballFilm;
//         alert('Thanks');
//     }
// }
// let showMyDB = function () {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         alert('Invalid notation');
//         i--;
//         console.log('This Data Base is privated');
//     }
// };

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');
//     }
//     i++;
// }

// if (personalMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");
// } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
//     alert("Вы классический зритель");
// } else if (30 <= personalMovieDB.count) {
//     alert("Вы киноман");
// } else {
//     alert("Error");
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const film = prompt('Какой фильм вы смотрели?', ''),
//             ballFilm = prompt('Какую оценку вы поставите фильму?');

//         if (film != null && ballFilm != null && film != '' && ballFilm != '' && film.length < 50) {
//             personalMovieDB.movies[film] = ballFilm;
//             alert('Thanks');
//         } else {
//             alert('Invalid notation');
//             i--;
//         }
//     }
// }

// console.log(personalMovieDB);

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert("Просмотрено довольно мало фильмов");
//     } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
//         alert("Вы классический зритель");
//     } else if (30 <= personalMovieDB.count) {
//         alert("Вы киноман");
//     } else {
//         alert("Error");
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// personalMovieDB.start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// showMyDB();