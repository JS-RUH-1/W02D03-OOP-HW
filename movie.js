const  favMovie = {
    title:"Puff the Magic Dragon",
    duration:30,
    stars:["Puff", "Jackie", "Living Sneezes"]
};

function print(movie){
    console.log(`${movie.title} lasts for ${movie.duration} minutes. ${movie.stars.join(", ")}`);


}

print(favMovie);