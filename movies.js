
class Movie {
    constructor (title,duration,stars)
    {
        this.title = title ;
        this.duration = duration ;
        this.stars = stars ;
    }
}

let movies = new Movie ("In The Heart Of The Sea", "90" , ["Chris","Tom","Cillan"]);
console.log (`${movies.title} for ${movies.duration} minutes. Stars ${movies.stars.join(", ")}`)