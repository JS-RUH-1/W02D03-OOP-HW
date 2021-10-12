class animal {
    constructor(name,age,image,sound){
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound=sound;

    }
    eats(){
        return  this.name+" eats food";
    }
    Animalsound(){
        return  this.name+" sound is "+this.sound;
    }
    
}
class cat extends animal {
    constructor(name, age, image, sound, owner) {
        super(name, age, image, sound);
        this.owner = owner;
      }
    eats(){
        return  this.name+" eats mouse"; 
    } 
    Animalsound(){
        return  this.name+" sound is "+this.sound;
    }   
}
class dog extends animal {
    constructor(name, age, image, sound, owner) {
        super(name, age, image, sound);
        this.owner = owner;
      }
    eats(){
        return  this.name+" eats chiekn"; 
    } 
    Animalsound(){
        return  this.name+" sound is "+this.sound;
    }   
}
class fish extends animal {
    constructor(name, age, image, sound, color) {
        super(name, age, image, sound);
        this.owner = color;
      }
    eats(){
        return  this.name+" eats flakes"; 
    } 
 

}

let mdog = new dog("JONY",3,"test","woof");
let mcat = new cat("Phpey",1,"test","meow");
let mfish = new fish("tyfi",1,"test","","blue");

console.log(mdog.Animalsound());
console.log(mdog.eats());
console.log(mcat.Animalsound());


