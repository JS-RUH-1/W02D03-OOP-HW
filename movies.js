class Movie {
    constructor(title, duration, stars) {
      this.title = title;
      this.duration = duration;
      this.stars = stars;
    }
}

  
let movie1 = new Movie("Movie 1", 25, ["First 1","First2"]);


console.log ( `${movie1.title} last for ${movie1.duration} minutes. Stars : ${movie1.stars.join(", ")}` );