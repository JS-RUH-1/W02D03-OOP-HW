class animal {
    constructor(name, age, image, sound) {
      this.name = name;
      this.age = age;
      this.image = image;
      this.sound = sound;
    }
  
    eats() {
      return this.name + "eats food";
    }
    Animalsound() {
      this.name + " sound is " + this.sound;
    }
  }
  // ---------------- CAT CLASS
  class cat extends animal {
    constructor(name, age, image, sound, owner) {
      super(name, age, image, sound);
      this.owner = owner;
    }
  
    eats() {
      return " cats eats mouse";
    }
    Animalsound() {
      return " cat sounds is meow";
    }
  }
  // ------------------ DOG CLASS
  
  class dog extends animal {
    constructor(name, age, image, sound, owner) {
      super(name, age, image, sound);
      this.owner = owner;
    }
    eats() {
      return " dogs eats chicken";
    }
    Animalsound() {
      return "dogs sounds is woof";
    }
  }
  
  // ------------------------ FISH CLASS
  class fish extends animal {
    constructor(name, age, image, sound, color) {
      super(name, age, image, sound);
      this.color = color;
    }
    eats() {
      return " fish eats flakes";
    }
  }
  
  let catObj = new cat("yuchi", 2, "./images/cat_720.jpg", "meow", "hend");
  let dogObj = new dog("liza", 3, "./images/images.jpg", "woof", "majeed");
  let fishObj = new fish("ava", 1, "./images/fish.png", "none", "blue");
  
  let CatImg = document.createElement("IMG");
  let div = document.createElement("div");
  div.style = "display:flex; justify-content:space-between;";
  CatImg.setAttribute("src", catObj.image);
  CatImg.setAttribute("style", "width:30%;");
  CatImg.setAttribute("id", "catImg");
  CatImg.setAttribute("onclick", "print(this)");
  let dogImg = document.createElement("img");
  dogImg.setAttribute("src", dogObj.image);
  dogImg.setAttribute("id", "dogImg");
  dogImg.setAttribute("onclick", "print(this)");
  let fishImg = document.createElement("img");
  fishImg.setAttribute("src", fishObj.image);
  fishImg.setAttribute("id", "fishImg");
  fishImg.setAttribute("onclick", "print(this)");
  
  div.appendChild(CatImg);
  div.appendChild(dogImg);
  div.appendChild(fishImg);
  
  document.body.appendChild(div);
  
  function print(e) {
    let imgId = e.id;
    let p = document.createElement("p");
    if (imgId == "catImg") {
      p.innerHTML =
        "name is " +
        catObj.name +
        "<br/> age is " +
        catObj.age +
        "<br/>it's owner is " +
        catObj.owner +
        "<br/>" +
        catObj.Animalsound() +
        "<br/>" +
        catObj.eats();
      document.body.appendChild(p);
    } else if (imgId == "dogImg") {
      p.innerHTML =
        "name is " +
        dogObj.name +
        "<br/> age is " +
        dogObj.age +
        "<br/>it's owner is " +
        dogObj.owner +
        "<br/>" +
        dogObj.Animalsound() +
        "<br/>" +
        dogObj.eats();
      document.body.appendChild(p);
    } else if (imgId == "fishImg") {
      p.innerHTML =
        "name is " +
        fishObj.name +
        "<br/> age is " +
        fishObj.age +
        "<br/>it's color is " +
        fishObj.colr +
        "<br/>" +
        fishObj.Animalsound() +
        "<br/>" +
        fishObj.eats();
      document.body.appendChild(p);
    }
  }