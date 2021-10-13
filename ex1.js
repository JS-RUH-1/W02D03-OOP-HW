let movie = {
    name:'frozen',
    duration:'2h',
    stars:["Elsa",'Ana','olaf']

}
console.log(movie.name+" lasts for "+movie.duration+" Stars "+movie.stars)
let div = document.createElement('div');
div = `${movie.name} lasts for ${movie.duration} Stars ${movie.stars}`
document.body.append(div)
