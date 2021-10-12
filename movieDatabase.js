function creatMovie(title, duration, stars) {
    this.title = title;
    this.duration = duration;
    this.stars = stars;
  }
  
  let movie1 = new creatMovie("Puff the Magic Dragon", 30, [
    "Puff",
    "Jackie",
    "Living Sneezes",
  ]);
  
  let div = document.createElement("div");
  let h1 = document
    .createElement("h1")
    .appendChild(document.createTextNode(movie1.title));
  let p = document
    .createElement("p")
    .appendChild(document.createTextNode(movie1.duration + "minutes"));
  let ul = document.createElement("ul");
  
  movie1.stars.forEach((el) => {
    console.log(el);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(el));
    ul.appendChild(li);
  });
  
  div.appendChild(h1);
  div.appendChild(document.createElement("br"))
  div.appendChild(p);
  div.appendChild(ul);
  
  document.body.appendChild(div);