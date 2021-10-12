let Favmovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"],
};

function printMovie(movie) {
  console.log(
    movie.title +
      " lasts for " +
      movie.duration +
      " minutes." +
      " It stars " +
      movie.stars.join(", ")
  );
}
printMovie(Favmovie);
