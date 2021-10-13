

class Animals{
    constructor(petName, age, image, sound){
        this.name = petName;
        this.age = age;
        this.image=image;
        this.sound= sound;
    }
    eats(){
        return this.name + " eat food";
    }
}


class Cat extends Animals{
    constructor(owner,petName, age, image, sound){
        owner = owner;
        super()
        this.name = petName;
        this.age = age;
        this.image=image;
        this.sound = "cat sounds is meow";



    }
    eats(){
        return "cats eat mouse"
    }
}

class Dog extends Animals{
    constructor(owner,petName, age, image,) {
        super(petName, age, image)
         owner = owner;
         this.name = petName;
         this.age = age;
         this.image=image;
        this.sound = "dogs sounds is woof"
    }
    eats(){
        return "dogs eat chicken"
    }
}

class Fish extends Animals{
    constructor(color,petName, age, image, sound){
        super(petName, age, image, sound)
        color = color;
        this.name = petName;
        this.age = age;
        this.image=image;
    }
    eats(){
        return "fish eats flakes"
    }
}


let alix = new Dog("ali","alix",2,"images/dog.jpg");
let mewi = new Cat("ahmed","mewi",1,"images/cat.jpg");
let qwerty = new Fish("black","qwerty",1,"images/fish.jpg");

console.log(alix.eats())
console.log(mewi.eats())
console.log(alix.owner)

document.getElementById("fish").src = qwerty.image;
document.getElementById("dog").src = alix.image;
document.getElementById("cat").src = mewi.image;



function showDetils(id) {
console.log(id.id+"owner")
if(id.id=="fish"){
    document.getElementById(id.id+"owner").innerHTML =` Owner: Don't Have one `;
    document.getElementById(id.id+"name").innerHTML = `Name: ${qwerty.name}` ;
    document.getElementById(id.id+"age").innerHTML = `Age: ${qwerty.age} `;
    document.getElementById(id.id+"sound").innerHTML = `Sound: Dont't have :(`
    document.getElementById(id.id+"food").innerHTML = `Food: ${qwerty.eats()}`;


}else if(id.id=="dog"){
    console.log(id.id+"owner")
    document.getElementById(id.id+"owner").innerHTML =` Owner: ${alix.owner} `;
    document.getElementById(id.id+"name").innerHTML = `Name: ${alix.name}` ;
    document.getElementById(id.id+"age").innerHTML = `Age: ${alix.age} `;
    document.getElementById(id.id+"sound").innerHTML = `Sound: ${mewi.sound}`;
    document.getElementById(id.id+"food").innerHTML = `Food: ${alix.eats()}`;


    
}else if(id.id=="cat"){
    console.log('cat detils')
    document.getElementById(id.id+"owner").innerHTML =` Owner:  ${mewi.owner} `;
    document.getElementById(id.id+"name").innerHTML = `Name: ${mewi.name}` ;
    document.getElementById(id.id+"age").innerHTML = `Age: ${mewi.age} `;
    document.getElementById(id.id+"sound").innerHTML = `Sound: ${mewi.sound}`;
    document.getElementById(id.id+"food").innerHTML = `Food: ${mewi.eats()}`;


    
}
    
}