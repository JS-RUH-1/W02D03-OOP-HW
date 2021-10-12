function Movie(title, duration, stars){
    this.title=title;
    this.duration=duration;
    this.stars=stars;
}

let fav = new Movie("Some title", 200, ["dude1","dude2"]);
let summary=fav.title+" lasts for "+fav.duration+" minutes. Stars: "

for(let i=0;i<fav.stars.length;i++){
    summary+=fav.stars[i];
    if(i+1<fav.stars.length)
    summary+=", ";
} summary+=".";
console.log(summary);