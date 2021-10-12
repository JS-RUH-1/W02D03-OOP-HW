let movie = {
    name:'Frozen',
    duration:'2h',
    stars:["Elsa",'Ana','Olaf']

}
console.log(movie.name+" lasts for "+movie.duration+" Stars "+movie.stars)
let div = document.createElement('h1');
div.innerText= `${movie.name} lasts for ${movie.duration} Stars ${movie.stars}`
document.body.append(div)
