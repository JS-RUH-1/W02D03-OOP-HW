


class Animal {
    
    constructor(name,age,img,sound){
        this.name = name;
        this.age = age ;
        this.img = img;
        this.sound = sound;
       
        
    }
    animalSound = function(){
        return(name+" sound is"+sound)
    }
    eats = function(){
        return(name + "eats food ")
    }


    

}

class Cats extends Animal{
    
    constructor(name,age,img,sound,oner){
        super(name,age,img,sound)
        this.oner = oner;
     
    }
    eats = function(){
        return(this.name + "eats mose ")
    }
    animalSound = function(){
        return(name+" sound is "+sound)
    }
    


}

class Fish extends Animal{
    constructor(name,age,img,color){
        super(name,age,img)
        this.color = color;
    }
        eats = function(){
            return(name + "eats food ")
        }
    
}

class Dog extends Animal{
    constructor(name,age,img,sound,oner){
        super(name,age,img,sound)
            this.oner = oner;
     
    }

    eats = function(){
        return(this.name + "eats Chicken ")
    }
    animalSound = function(){
        return this.name+" sound is "+this.sound
    }

}

let dog = new Dog ('Bablo',3,"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg","woof",'Alanood');
let fish = new Fish("demo",6,"https://www.newportaquarium.com/-/media/Project/HFE/NAQ/Animals/Fish_Card.jpg?h=600&iar=0&w=600","red");
let cat = new Cats('semba',1,"https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d","meow","Yazeed");


let dog1 = document.createElement("IMG");
dog1.src = dog.img;
document.body.appendChild(dog1)
 
dog1.onclick = function(){
   let div = document.createElement("H1")
   div.innerText=`${dog.sound} my name is ${dog.name} and i am ${dog.age} years old , and my oner is ${dog.oner}` 
   document.body.append(div)
    console.log(dog.animalSound()); 
    console.log(dog.eats()); 
     console.log(dog.name);
     
 }
 let fish1 = document.createElement("IMG");
 fish1.src = fish.img;
document.body.appendChild(fish1)
 
fish1.onclick = function(){
    
   let div = document.createElement("H1")
   
   div.innerText =` my name is ${fish.name} and i am ${fish.age} years old , and my color is ${fish.color}`
    
   document.body.append(div)
    // console.log(f.animalSound()); 
    // console.log(dog.eats()); 
    //  console.log(dog.name);
     
 }
 let cat1 = document.createElement("IMG");
 cat1.src = cat.img;
document.body.appendChild(cat1)
 
cat1.onclick = function(){
   let div = document.createElement("H1")
   div.innerText=`${cat.sound} my name is ${cat.name} and i am ${cat.age} years old , and my oner is ${cat.oner}` 
   document.body.append(div)
    
   console.log(dog.animalSound()); 
    console.log(dog.eats()); 
     console.log(dog.name);
     
 }

