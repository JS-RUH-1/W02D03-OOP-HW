let myFavorite = {
    // title (a string), duration (a number), and
    title: "Iron Man",
    duration: 2,
    starts: ["Robert Downey Jr.", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges", "Leslie Bibb", ]
}

console.log(`

My Best Move is ${myFavorite.title} last ${myFavorite.duration} hours the Stars was : ${myFavorite.starts.join(", ")}

`)