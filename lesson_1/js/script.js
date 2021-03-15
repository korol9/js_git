// "use strict";

// if (4 == 5) {
//     console.log('ok');
// } else {
//     console.log('no');
// }

// let num = 50;

// switch (num) {
//     case 51:
//         console.log('no');
//         break;
//     case 49:
//         console.log('no');
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('no-no-no');
//         break;
// }

// let num = 10;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 15);

// for (let i = 1; i < 8; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

let numberOfFilms;
numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');


let personalMovieDB = {
    movies: {},
    count: numberOfFilms,
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
while (i < 2) {
    const film = prompt('Какой фильм вы смотрели?', ''),
        ballFilm = prompt('Какую оценку вы поставите фильму?');
    if (film != null && ballFilm != null && film != '' && ballFilm != '' && film.length < 50) {
        personalMovieDB.movies[film] = ballFilm;
        alert('Thanks');
    } else {
        alert('Invalid notation');
        i--;
    }
    i++;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (30 <= personalMovieDB.count) {
    alert("Вы киноман");
} else {
    alert("Error");
}

console.log(personalMovieDB);


// for (let i = 0; i < 2; i++) {
//     const film = prompt('Какой фильм вы смотрели?', ''),
//         ballFilm = prompt('Какую оценку вы поставите фильму?');

//     if (film != null && ballFilm != null && film != '' && ballFilm != '' && film.length < 50) {
//         personalMovieDB.movies[film] = ballFilm;
//         alert('Thanks');
//     } else {
//         alert('Invalid notation');
//         i--;
//     }
// }