class Animal{
   
    constructor(name, age, image, sound){
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound= sound; 
    }
    eats(){
        console.log(this.name, " eats food")
    }
    animalSound(){
        console.log(this.name, " sound is " + this.sound)
    }
}


class Cat extends Animal {
    constructor(name, age, image, sound, owner) {
        super(name,age,image,sound);
        this.owner = owner;
      }

    eats(){
        console.log(this.name, " eats mouse")
    }
    animalSound(){
        console.log(this.name, " sound is meow")
    }
}


class Dog extends Animal {
    constructor(name, age, image, sound, owner) {
        super(name,age,image,sound);
        this.owner = owner;
      }

    eats(){
        console.log(this.name, " eats chicken")
    }
    animalSound(){
        console.log(this.name, " sound is woof")
    }    
}

class Fish extends Animal {
    constructor(name, age, image, sound, color) {
      super(name, age, image, sound);
      this.color = color;
    }
    eats() {
      console.log("fish eats flakes");
    }
  }
  
const fish1 = new Fish("blue whale",30,"./images/whale.jpg","singing","blue");
const cat1 = new Cat("persian", 30, "cat.jpg", "meow", "tom");
const dog1 = new Dog("chihuahua", 30, "dog.jpg", "bark", "scott");
const animal1 = new Animal("mouse", 30, "mouse.jpg", "squeek");


animal1.eats();
fish1.eats();
dog1.sound();


// let catEle = document.getElementById('cat');
// catEle.addEventListener('click',function(){
//     document.getElementById("cl").innerHTML =  "";
// });




// function myFunction() {
//     let x = document.createElement("IMG");
//     x.setAttribute("src", "whale.jpg");
//     // x.setAttribute("width", "304");
//     // x.setAttribute("height", "228");
//     // x.setAttribute("alt", "Whale");
//     document.body.appendChild(x);
//   }


