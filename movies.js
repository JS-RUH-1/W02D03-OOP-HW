
// Movies Task
let movies = {
    title: "Puff the Magic Dragon lasts",
    duration: 30,
    stars: [
        "Puff", 
        "Jackie", 
        "Living Sneezes"
    ]
}

let result = `${movies.title} for ${movies.duration} minutes. Stars: ${movies.stars}`

document.body.append(result)