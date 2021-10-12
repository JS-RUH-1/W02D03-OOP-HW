class Animal {
  constructor(name, age, img, sound) {
    this.name = name;
    this.age = age;
    this.img = img;
    this.sound = sound;
  }

  eats(name) {
    console.log(this.name + " eats food");
  }
  Animalsound(sound) {
    console.log(this.sound + " sounds is " + this.sound);
  }
}
let animal = new Animal("cats", "mew");
animal.eats("cats");
animal.Animalsound("mew");

//==================================================

class Cat extends Animal {
  eats() {
    console.log("cats eats mouse");
  }
  Animalsound() {
    console.log("cat sounds is meow");
  }
}

//=====================================================

class Dog extends Animal {
  eats() {
    console.log("Dog eats chicken");
  }
  Animalsound() {
    console.log("Dogs sounds is woof");
  }
}

//=======================================================

class Fish extends Animal {
  eats() {
    console.log("fish eats flakes");
  }
}

//===================
