// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => [
  ...new Set(moviesArray.map((movie) => movie.director)),
];

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) =>
  moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const result =
      moviesArray
        .filter((movie) => movie.score)
        .reduce((acc, movie) => acc + movie.score, 0) / moviesArray.length;
    return Number(result.toFixed(2));
  }
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const result = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
  return Number((result / dramaMovies.length).toFixed(2)) || 0;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArray) =>
  [...moviesArray].sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) =>
  [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((movie) => movie.title);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (moviesArray) =>
  [...moviesArray].map((movie) => {
    const parts = movie.duration.split(" ");
    let hours = 0,
      minutes = 0;
    parts.forEach((part) => {
      if (part.includes("h")) {
        hours = parseInt(part);
      } else if (part.includes("min")) {
        minutes = parseInt(part);
      }
    });
    return { ...movie, duration: hours * 60 + minutes };
  });

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (moviesArray) => {
  const movieYears = moviesArray.reduce((acc, movie) => {
    if (!acc[movie.year]) {
      acc[movie.year] = [];
    }
    acc[movie.year].push(movie);
    return acc;
  }, {});
  let bestYear = 0;
  let bestAvg = 0;
  for (const year in movieYears) {
    const avg = scoresAverage(movieYears[year]);
    if (avg > bestAvg) {
      bestAvg = avg;
      bestYear = year;
    }
  }
  return bestYear
    ? `The best year was ${bestYear} with an average score of ${bestAvg}`
    : null;
};
