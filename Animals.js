class animal{

constructor(name ,age,image,sound ,owner) 
{

this.name=name;
this.age=age;
this.image=image;
this.sound=sound;
this.owner=owner;
}

 eat() {
     
 console.log( this.name,' eats food');

}

}

class cat extends animal{
    
 eat() {  
     
 console.log('cats eats mouse');
   
   }

Sound(){
console.log('at sounds is meow');

   }

}

//class dog
class dog extends animal{

      
  eat() {  
      
  console.log('cats eats chicken');
    
    }
 
    Sound(){
 console.log('at sounds is woof');
 
    }
 
 }
 ///class fish 
 class fish extends animal{
     constructor(name ,age,image,sound,owner,color)
     {
super();
         this.name=name;
         this.age=age;
       this.image=image;
       this.sound=sound;
       this.owner=owner;
        this.color=color;
     }

  eat() {  
      
  console.log('fish eats flakes');
    
    }

 
 }


 
// // for Cat 
const cat1= new cat("cat",'3 mounth','/image/cat.jpg', 'Mohahad' ,'meow');
cat1.eat();
cat1.Sound();
document.getElementById("cat").src=cat1.image;

// for Dog
const dog1= new dog("dog",'1 year','/image/dog.jpg','Khalid' ,'woof');
dog1.eat();
dog1.Sound();
document.getElementById('dog').src=dog1.image;

//for fish
 const fish1= new fish("fish",'4 mounth', '/image/fish.jpg','Noor','red');
  fish1.eat();
  document.getElementById('fish').src=fish1.image;

 
 
function show(animal , lable) {
   
    if(animal.name =="fish"){
 lable.innerHTML= 'Name of Animal is :'+animal.name+',Age is:'+animal.age+',Name Of Owner :'+animal.owner+', Color :'+animal.color+', Sound :'+animal.sound;

    }
else{
   lable.innerText= "Name of Animal is :"+animal.name+',Age is:'+animal.age+',Name Of Owner :'+animal.owner +', Sound :'+animal.sound;
   

}
}