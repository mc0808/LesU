const numberOfFilms = +prompt('Сколько фильмов вы еже просмотрели', '');
const personalMovisDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из просмотренных фильмов', '');
      b = prompt('На сколько оцените его?', '');
      c = prompt('Один из просмотренных фильмов', '');
      d = prompt('На сколько оцените его?', '');

      personalMovisDB.movies[a] = b;
      personalMovisDB.movies[c] = d;

console.log(personalMovisDB);