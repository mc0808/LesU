const numberOfFilms = +prompt('Сколько фильмов вы еже просмотрели', '');
const personalMovisDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

      
      
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов', '');
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovisDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

    if(personalMovisDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovisDB.count >= 10 && personalMovisDB.count < 30 ) {
        console.log("Вы обычный зритель");
    } else if (personalMovisDB.count >= 30) {
        console.log("Вы кино фанат");
    } else {
        console.log(" Произошла ошибка");
    }
          
}


console.log(personalMovisDB);