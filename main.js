// let movie = {title: 'Love in the afternoon', duration: 2, stars: ['aaa', 'bbb', 'ddd']}

// console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}`)



class Animal {
    constructor(name, age, image, sound) {
      this.name = name;
      this.age = age;
      this.image = image;
      this.sound = sound;         
    }
    eats() {
      return this.name + ' eats food.';
    }
      makesSound() {
      return this.name + ' sound is ' + this.sound ;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, image, sound, owner) {
      super(name, age, image, sound);
      this.owner = owner;
    }
    eats() {
      return 'Cats eat mouse.';
    }
     makesSound() {
      return 'Cats sound is meow ';
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, image, sound, owner) {
      super(name, age, image, sound);
      this.owner = owner;
    }
    eats() {
      return 'Dogs eat chicken.';
    }
    makesSound() {
      return 'Dogs sound is woof ';
    }
  }

  class Fish extends Animal {
    constructor(name, age, image, sound, color) {
      super(name, age, image, sound);
      this.color = color;
    }
    eats() {
      return 'Fish eats flakes.';
    }
  }


  myCat = new Cat("kitty", "2", '244.png', 'meow', 'me');
  myCat.eats();
  myCat.makesSound();

  myDog = new Dog("doggy", "2", '244.png', 'woof', 'me');
  myDog.eats();
  myDog.makesSound();

  myFish = new Fish("fishy", "2", '244.png', 'noSound :(' , 'orange');
  myFish.eats();
  myFish.makesSound();