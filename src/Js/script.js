"use strict";




let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели ?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели ?", '');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов ?", ''),
                  b = prompt("На сколько его оцените ?", '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {                                       ***First method****
        //     let questin = prompt(`Ваш любимый жанр под номером ${i}`, '');
            
        //     if (questin != null && questin != '' && questin.length < 50) {
        //         personalMovieDB.genres[i - 1] = questin;
        //     } else {
        //         console.log('Вы ввели не корректные данные');
        //         i--;
        //     }
        // }
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите жанры через запятую !${i}`, '').toLocaleLowerCase();

            if (genres != null && genres != '' && genres.length < 50) {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
                } else {
                console.log('Вы ввели не корректные данные');
                i--;
            }
        }
        personalMovieDB.genres.forEach((value, key) => {
            console.log(`Любимый жанр #${key + 1} - это ${value}`);
        });
    },
};





