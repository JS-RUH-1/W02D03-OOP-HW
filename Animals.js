class Animal {

    constructor(animal_name, age, image,sound){
        this.animal_name =animal_name;
        this.age = age;
        this.image = image;
        this.sound = sound;
    }

   eats(){
return this.animal_name + "eat food"
         }

         Animalsound(){
           return this.animal_name +"sound is " +this.sound ; 
         }         


    
}

class Cat extends Animal{
    constructor(animal_name, age, image,sound,owner){
        super(animal_name,age,image,sound);
       this.owner = owner;}


           eats(){
         return "cats eats mouse";
    }
    Animalsound(){
        return "cat sounds is meow" ; 
      } 


}

class Dog extends Animal{
    constructor(animal_name, age, image,sound,owner){
        super(animal_name,age,image,sound);
       this.owner = owner;
    
    }
    
    eats(){
        return "Dogs eats chicken";
   }
   Animalsound(){
       return "Dogs sounds is woof" ; 
     } 

}
class Fish extends Animal{
    constructor(animal_name, age, image, sound, color) {
        super(animal_name, age, image, sound);
        this.color = color;
      }
      eats() {
        return 'Fish eats flakes.';
      }
    }
  

catObj=new Cat("catty",1,"/images/cat.png","meow","Maha");
catObj.eats();
catObj.Animalsound();

dogObj = new Dog("Dody","1","/images/dog.png","woof","Maha");
dogObj.eats();
dogObj.Animalsound();

fishObj = new Fish("fsh fsh","1", "/images/fish.png","non" , "Green");
fishObj.eats();
fishObj.Animalsound();

document.getElementById("catimg").src = catObj.image;
document.getElementById("dogimg").src = dogObj.image;
document.getElementById("fishimg").src = fishObj.image;


function showInfo(animObj,ul){
    if(animObj.animal_name == "fsh fsh"){
        ul.innerHTML =`
        <li> Name: ${animObj.animal_name}</li>
        <li> Age: ${animObj.age} </li>
        <li> Sound: ${animObj.sound} </li>
        <li> Color : ${animObj.color} </li>`
    }
        else{
            ul.innerHTML =`
            <li> Name: ${animObj.animal_name}</li>
            <li> Age: ${animObj.age} </li>
            <li> Sound: ${animObj.sound} </li>
            <li> Owner : ${animObj.owner} </li>`
        }
        
    

    }
