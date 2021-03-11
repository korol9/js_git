"use strict";

let numberOfFilms;
numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');
// console.log(numberOfFilms + 10);

let personalMovieDB = {
    movies: [prompt("What film you watched at last time?", ''), prompt("What your rate mark for film?", '')],
    count: numberOfFilms,
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);