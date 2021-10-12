class Animal {
  constructor(name, age, img, sound) {
    this.name = name;
    this.age = age;
    this.img = img;
    this.sound = sound;
  }

  eats() {
    console.log(this.name + " eats food");
  }
  Animalsound() {
    console.log(this.sound + " sounds is " + this.sound);
  }
}

//==================================================

class Cat extends Animal {
  constructor(name, age, img, sound, owner) {
    super(name, age, img, sound);
    this.owner = owner;
  }
  eats() {
    console.log("cats eats mouse");
  }
  Animalsound() {
    console.log(this.name + " sounds is " + this.sound);
  }
}

//=====================================================

class Dog extends Animal {
  constructor(name, age, img, sound, owner) {
    super(name, age, img, sound);
    this.owner = owner;
  }
  eats() {
    console.log("Dog eats chicken");
  }
  Animalsound() {
    console.log(this.name + " sounds is " + this.sound);
  }
}

//=======================================================

class Fish extends Animal {
  constructor(name, age, img, owner) {
    super(name, age, img);
    this.color = color;
  }
  eats() {
    console.log("fish eats flakes");
  }
}

//=======================================================

let cat = new Cat("cats", 1, "cat.jpeg", "mew", "amirah");
cat.eats();
cat.Animalsound();

let dog = new Dog("Dogs", 1, "dog.jpeg", "woof", "amirah");
dog.eats();
dog.Animalsound();

let fish = new Fish("Fish", 1, "fish.jpeg", "amirah");
fish.eats();
fish.Animalsound();
