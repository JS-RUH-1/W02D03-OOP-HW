class Movie {
    constructor(title, duration, stars = []) {
      this.title = title;
      this.duration = duration;
      this.stars = stars;
    }
    //"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
    printMovie() {
      document.getElementById("movieHeader").innerHTML =
        this.title +
        " lasts for " +
        this.duration +
        " minutes " +
        "stars: " +
        this.stars.join(", ");
    }
  }
  let movieOne = new Movie("Marvel", 120, ["Ironman", "Spiderman"]);
  movieOne.printMovie();