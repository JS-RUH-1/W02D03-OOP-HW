class Animal {
    constructor(name, age, image, sound) {
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound = sound;
    }

    eats (){
        return `${this.name} eats food.`;
    }
}

/* cats child class*/

class Cat extends Animal {
    constructor(name, age, image, sound,owner) {
        super(name,age,image,sound);
        this.owner = owner
    }
    eats() {
        return `cats eats mouse.`;
    }
    animalSound (){
        return `${this.name} sounds is ${this.sound}`;
    }
}

/* dogs child class*/
class Dog extends Animal {
    constructor(name, age, image, sound,owner) {
        super(name,age,image,sound);
        this.owner = owner
    }
    eats() {
        return `dogs eats chicken.`;
    }
    animalSound (){
        return `${this.name} sounds is ${this.sound}`;
    }
}

/* fish child class*/
class Fish extends Animal {
    constructor(name, age, image, sound,color) {
        super(name,age,image,sound);
        this.color = color
    }
    eats() {
        return `fish eats flakes.`;
    }
}

let myCat = new Cat ("Caty", 2, "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d", "Meow", "Basel");
myCat.eats();
myCat.animalSound();

let myDog = new Dog ("Runy", 4, "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg", "Woof", "Basel");
myDog.eats();
myDog.animalSound();

let myFish = new Fish ("Fish", 1, "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXF1YXJpdW0lMjBmaXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", null, "Blue & Yellow");
myFish.eats();

/* HTML DOM */

let mainDiv = document.getElementById("animalsImages");

mainDiv.innerHTML = `<div class="images">
    <img src="${myCat.image}" onclick="showAnimalDetails(myCat)" width="300" height="300"/>
    <img src="${myDog.image}" onclick="showAnimalDetails(myDog)" width="300" height="300"/>
    <img src="${myFish.image}" onclick="showAnimalDetails(myFish)" width="300" height="300"/>

</div>
<ul id="animalDetials">

</ul>`;

function showAnimalDetails ( animal ){
    let detailsList = document.getElementById("animalDetials");
    detailsList.innerHTML =
    `<li> Name : ${animal.name}</li>
    <li> Age : ${animal.age}</li>
    <li> Sound : ${animal.sound ? animal.sound : "No Sound" }</li>
    <li> Owner : ${animal.owner ? animal.owner : "No Owner" }</li>
    <li> Colour : ${animal.color ? animal.color : "No Color" }</li>`
}