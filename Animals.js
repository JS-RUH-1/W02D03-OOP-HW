class animal {
  constructor(name, age, image, sound) {
    this.name = name;
    this.age = age;
    this.image = image;
    this.sound = sound;
  }
  eats() {
    return this.name + " eats food";
  }
  Animalsound() {
    return this.name + " sound is " + this.sound;
  }
}
class cat extends animal {
  constructor(name, age, image, sound, owner) {
    super(name, age, image, sound);
    this.owner = owner;
  }
  eats() {
    return this.name + " eats mouse";
  }
  Animalsound() {
    return this.name + " sound is " + this.sound;
  }
}
class dog extends animal {
  constructor(name, age, image, sound, owner) {
    super(name, age, image, sound);
    this.owner = owner;
  }

  eats() {
    return this.name + " eats chiekn";
  }
  Animalsound() {
    return this.name + " sound is " + this.sound;
  }
}
class fish extends animal {
  constructor(name, age, image, sound, color) {
    super(name, age, image, sound);
    this.color = color;
  }
  eats() {
    return this.name + " eats flakes";
  }
}

let mdog = new dog(
  "JONY",
  3,
  "https://thumbs.dreamstime.com/z/high-quality-vector-animated-cute-dog-white-brown-body-high-quality-vector-animated-cute-dog-white-brown-body-can-be-used-175251501.jpg",
  "woof",
  "Animal"
);
let mcat = new cat(
  "Phpey",
  1,
  "https://animasipicture.com/wp-content/uploads/2020/08/Cat-Animated-Images.jpg",
  "meow",
  "Animal"
);
let mfish = new fish(
  "Tyfi",
  1,
  "https://jf-staeulalia.pt/img/other/41/collection-cartoon-fish-8.png",
  "OooOoo",
  "blue"
);
// Functions Test
console.log(mdog.Animalsound());
console.log(mdog.eats());
console.log(mcat.Animalsound());
console.log(mcat.eats());
console.log(mfish.eats());

// DOG show in HTML

//Click times to hide information in the second click 
let clickTimes1 = 0;
document.getElementById("image").src = mdog.image;
document.getElementById("image").addEventListener("click", function () {
  if (clickTimes1 == 0) {
    document.getElementById("name").innerHTML = "Name: " + mdog.name;
    document.getElementById("age").innerHTML = "Age: " + mdog.age;
    document.getElementById("sound").innerHTML = "Sound: " + mdog.sound;
    document.getElementById("owner").innerHTML = "Owner: " + mdog.owner;
    clickTimes1 = 1;
  } else {
    document.getElementById("name").innerHTML = "";
    document.getElementById("age").innerHTML = "";
    document.getElementById("sound").innerHTML = "";
    document.getElementById("owner").innerHTML = "";
    clickTimes1 = 0;
  }
});


// Cat show in HTML

//Click times to hide information in the second click 
let clickTimes2 = 0;
document.getElementById("image2").src = mcat.image;
document.getElementById("image2").addEventListener("click", function () {
  if (clickTimes2 == 0) {
    document.getElementById("name2").innerHTML = "Name: " + mcat.name;
    document.getElementById("age2").innerHTML = "Age: " + mcat.age;
    document.getElementById("sound2").innerHTML = "Sound: " + mcat.sound;
    document.getElementById("owner2").innerHTML = "Owner: " + mcat.owner;
    clickTimes2 = 1;
  } else {
    document.getElementById("name2").innerHTML = "";
    document.getElementById("age2").innerHTML = "";
    document.getElementById("sound2").innerHTML = "";
    document.getElementById("owner2").innerHTML = "";
    clickTimes2 = 0;
  }
});

// Fish show in HTML
//Click times to hide information in the second click 
let clickTimes3 = 0;
document.getElementById("image3").src = mfish.image;
document.getElementById("image3").addEventListener("click", function () {
  if (clickTimes3 == 0) {
    document.getElementById("name3").innerHTML = "Name: " + mfish.name;
    document.getElementById("age3").innerHTML = "Age: " + mfish.age;
    document.getElementById("sound3").innerHTML = "Sound: " + mfish.sound;
    document.getElementById("color3").innerHTML = "Color: " + mfish.color;
    clickTimes3 = 1;
  } else {
    document.getElementById("name3").innerHTML = "";
    document.getElementById("age3").innerHTML = "";
    document.getElementById("sound3").innerHTML = "";
    document.getElementById("color3").innerHTML = "";
    clickTimes3 = 0;
  }
});
