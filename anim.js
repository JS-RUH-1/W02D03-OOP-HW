
let animals = [];
class animal {
  constructor(name, age, image, sound) {
    this.name = name;
    this.age = age;
    this.image = image;
    this.sound = sound;
  }
  eats(name) {
    return name + " eats food";
  }
  Animalsound(name) {
    return name + " sounds is " + sound;
  }
}
class cat extends animal {
  constructor(name, age, image, sound, owner) {
    super(name, age, image, sound);
    this.owner = owner;
  }
  eats(name) {
    return name + " eats mouse";
  }
  Animalsound(name) {
    return name + " sounds is meow";
  }
}
class doge extends animal {
  constructor(name, age, image, sound, owner) {
    super(name, age, image, sound);
    this.owner = owner;
  }
  eats(name) {
    return name + " eats chicken";
  }
  Animalsound(name) {
    return name + " sounds is woof";
  }
}
class fish extends animal {
  constructor(name, age, image, sound, color) {
    super(name, age, image, sound);
    this.color = color;
  }
  eats(name) {
    return name + " eats flakes";
  }
}
let mycat = new cat(
  "Caty",
  1,
  "https://www.freeiconspng.com/uploads/baby-cat-png-12.png",
  "meow",
  "marah"
);
let mydoge = new doge(
  "NX",
  3,
  "https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png",
  "woof",
  "Abdullah"
);
let myfish = new fish(
  "Memo",
  1,
  "https://w7.pngwing.com/pngs/300/565/png-transparent-common-carp-animal-crossing-new-leaf-animal-crossing-wild-world-fish-fish-seafood-animals-video-game-thumbnail.png",
  " no sound",
  "gold"
);
animals.push(mycat, mydoge, myfish);
function details(item) {
  let newItem = document.createElement("ul");
  document.getElementById("main").appendChild(newItem);
  newItem.innerHTML = `<li> ${item.name}   </li>
  <li>  ${item.age}   </li>
  <li>  ${item.sound}   </li>
  <li>  ${item.color}  </li>`;
}
let newItem = document.createElement("IMG");
newItem.src = mycat.image;
newItem.style = "width: 300px ; height: 200px;";
newItem.setAttribute("onclick", "details(mycat)");
document.getElementById("main").appendChild(newItem);
let newItem2 = document.createElement("IMG");
newItem2.src = mydoge.image;
newItem2.style = "width: 300px ; height: 200px;";
newItem2.setAttribute("onclick", "details(mydoge)");
document.getElementById("main").appendChild(newItem2);
let newItem3 = document.createElement("IMG");
newItem3.src = myfish.image;
newItem3.style = "width: 300px ; height: 200px;";
newItem3.setAttribute("onclick", "details(myfish)");
document.getElementById("main").appendChild(newItem3);