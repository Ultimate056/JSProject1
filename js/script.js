"use strict"; // Директива (строгий режим)

//console.log(1);
// alert();
let n = 10;
let arr = ['plum.png', 2, 3, false]; // Массив
// Объекты
let obj = { 
    name: "John",
    age: 25,
    isMarried: false
};

// const result = confirm("Are you here?"); ОК - ОТМЕНА
// const answer = prompt("Вам есть 18?", ""); ВВОД
// 2 аргумент - дефолт ответ
// РЕЗУЛЬТАТ - ВСЕГДА СТРОКА

// const answer = +prompt("Вам есть18?", "");
// СРАЗУ ПРЕОБРАЗУЕТ ДИНАМИЧЕСКИ В ЧИСЛО и т.д.

const category = 'toys';
// Интерполяция
// console.log(`https://someurl.com/${category}`);

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    let LastViewsFilm = prompt("Один из последних просмотренных фильмов?", ""),
        LastRatingFilm = prompt("На сколько оцените его?", "");
    personalMovieDB.movies[LastViewsFilm] = LastRatingFilm;
    console.log(LastViewsFilm + " " + personalMovieDB.movies[LastViewsFilm]);
}
console.log(personalMovieDB.count);


