/*  Using object */
const movies = {
    "title": "Puff the Magic Dragon",
    "duration": 30,
    "stars": ['Puff', 'Jackie', 'Living Sneezes'],
    "print": function(){
        let star = "";
        for(let i=0;i<this.stars.length;i++){
            star += ` ${this.stars[i]},`
        }
        console.log(`${this.title} lasts for ${this.duration} minuts. Stars: ${star}`)
    }
}
movies.print()

/* Using class */
class movie{
    constructor(title, duration, stars){
        this.title = title;
        this.duration = duration;
        this.stars = stars;
    }

    print(){
        let star = "";
        for(let i=0;i<stars.length;i++){
            star += ` ${stars[i]},`
        }
        console.log(`${title} lasts for ${duration} minuts. Stars: ${star}`)
    }
}

let movie1 = new movie("Puff the Magic Dragon", 30, ['Puff', 'Jackie', 'Living Sneezes'])
movie1.print()