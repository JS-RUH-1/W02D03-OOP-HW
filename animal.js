class Animal {
    constructor (name,age,img,sound){
        this.name = name;
        this.age = age;
        this.img = img;
        this.sound = sound;
    }
    eats (){
        return `${this.name} eats food`
    }
}

class Cat extends Animal {
    constructor (name,age,img,sound,owner){

        super(name,age,img,sound)
        this.owner = owner;
    }

    eats (){
        return `${this.name} eats mouse`}
    animalSound () {
        return `${this.name} sounds ${this.sound}`
    }


}

class Dog extends Animal {
    constructor (name,age,img,sound,owner){

        super(name,age,img,sound)
        this.owner = owner;
    }

    eats (){
        return `${this.name} eats chickin`}
    animalSound () {
        return `${this.name} sounds ${this.sound}`
    }


}

class Fish extends Animal {
    constructor (name,age,img,sound,color){

        super(name,age,img,sound)
        this.color = color;
    }

    eats (){
        return `${this.name} eats flakes`}
    
}

let cat1 = new Cat ("lolo",1,"https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg","Mew","Noura");
cat1.eats();
cat1.animalSound();


let dog1 = new Dog ("shuger",4,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64iVaaqvCAtO--zTfJIzfKb_N145B_WyQlQ&usqp=CAU","HawHaw","Noura");
dog1.eats();
dog1.animalSound();


let fish1 = new Fish ("prity",1,"https://www.newportaquarium.com/-/media/Project/HFE/NAQ/Animals/Fish_Card.jpg?h=600&iar=0&w=600","blue","Noura");
fish1.eats();


let animalsDiv = document.getElementById("animals");
animalsDiv.innerHTML=`
<img src="${cat1.img}" onclick="showAnimalDetails(cat1)" width="300" height="300"/>
<img src="${dog1.img}" onclick="showAnimalDetails(dog1)" width="300" height="300"/>
<img src="${fish1.img}" onclick="showAnimalDetails(fish1)" width="300" height="300"/>
<ul id="details"></ul>`;
function showAnimalDetails(animal){

    document.getElementById("details").innerHTML = `
    <li> Name : ${animal.name}</li>
    <li> Age : ${animal.age}</li>
    <li> Sound : ${ animal.sound ? animal.sound : 'No sound' } </li>
    <li> Owner : ${ animal.owner ? animal.owner : 'No owner' } </li>
    <li> Color : ${ animal.color ? animal.color : 'No color' } </li> 
    `;
}



