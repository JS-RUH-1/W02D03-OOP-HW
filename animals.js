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







const animal1 = new Fish("blue whale", 30, "./images/whale.jpg", "sing", "blue");
animal1.eats();
let animal2 = new Cat("persian", 30, "./images/cat.jpg", "meow", "tom");
let animal3 = new Dog("chihuahua", 30, "./images/dog.jpg", "bark", "scott");
let animal4 = new Animal("mouse", 30, "./images/mouse.jpg", "squeek");
let animals=[animal1,animal2,animal3,animal4];


animal1.eats();
animal3.eats();
animal4.animalSound();

for (let i=0; i<animals.length; i++) {
let img = new Image();
img.src = animals[i].image;
img.style = "width: 300px; height: 300px;";
img_home.appendChild(img);
let summary="";
summary+=`Animal name: ${animals[i].name}
Age: ${animals[i].age} years old
Its sound called: ${animals[i].sound}
`;
animals[i] instanceof Fish ? summary+=`Its color is: ${animals[i].color}` : null;
animals[i] instanceof Cat || animals[i] instanceof Dog? summary+=`Its owner named: ${animals[i].owner}` : null;

let lbl = document.getElementById("img_home").innerHTML+='<br/><pre id="preId" style="display:none">'+summary+'</pre>' ;
}


function doSomething(num){
    let preS=document.getElementsByTagName("pre");
    for(let i=0;i<preS.length;i++){
        preS[i].style="display:block";
    }
    console.log(num.id);
}