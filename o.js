function movi (title ,duration ,stars ){
    this.title= title;
    this.duration= duration ;
    this.stars = stars ;
}


const bestMovi = new movi("Harry potter" , 60 , ["*****"])

function aclick(){
    for(const item in bestMovi){
        let x= document.createElement("p");
         x.innerText=bestMovi[item];
         document.body.appendChild(x);
    }
};
// _______________________________________________
class Animal {
    constructor(name , age ,image ,sound) {
      this.name = name ;
      this.age = age ;
      this.image =image ;
      this.sound =sound ;
    } 
    eats(){
        console.log( this.name + "eats foods")
    }
}
class cat extends Animal{
    constructor(name , age ,image ,sound,owner){
        super(name , age ,image ,sound)
        this.owner=owner
    } eats(){
        console.log("cats eats mouse");
    }
    Animalsound (){
        console.log("cat sounds is meow")
    }
}
// ________________________________
class dog extends Animal{
    constructor(name , age ,image ,sound,owner){
        super(name , age ,image ,sound)
        this.owner=owner
    } 
    eats(){
            console.log ("dogs eats chicken") 
         }

    Animalsound (){
            console.log("dog sounds is woof")
        }
}
// ___________________________________
class fish extends Animal{
    constructor(name , age ,image ,sound,color){
        super(name , age ,image ,sound)
        this.color=color
    } eats(){
            console.log ("fish eats flakes") 
         }
}
// ___________________________________________
// function animal (name , age ,image ,sound) {
//       this.name = name ;
//       this.age = age ;
//       this.image =image ;
//       this.sound =sound ;
// }
const cat1 = new cat("shirazi" , 1 , "images/c.jpg" , "Meww","Noura" );
const dog1 = new dog("Maltibo" , 1 , "images/d.jpg" , "Woof","Ahmed" );
const fish1 = new fish("Fish" , 00 , "images/f.jpg" , "..");


let cat2 = document.getElementById("img1")
   cat2.src=cat1.image
    
   cat2.addEventListener("click", function(){ 
    var node = document.createElement("LI"); 
    var textanimal = document.createTextNode(cat1.name);
    node.appendChild(textanimal)
    var node2 = document.createElement("LI"); 
    var ageAnimal = document.createTextNode(cat1.age);
    node2.appendChild(ageAnimal)
    var node3 = document.createElement("LI"); 
    var imageAnimal = document.createTextNode(cat1.image);
    node3.appendChild(imageAnimal)
    var node4 = document.createElement("LI"); 
    var soundAnimal = document.createTextNode(cat1.sound);
    node4.appendChild(soundAnimal)
    var node5 = document.createElement("LI"); 
    var ownerAnimal = document.createTextNode(cat1.owner);
    node5.appendChild(ownerAnimal)
    document.getElementById("listOfAnimal").appendChild(node);
    document.getElementById("listOfAnimal").appendChild(node2);
    document.getElementById("listOfAnimal").appendChild(node3);
    document.getElementById("listOfAnimal").appendChild(node4);
    document.getElementById("listOfAnimal").appendChild(node5);

   }) 
//    _____________________________



   let dog2 = document.getElementById("img2")
       dog2.src=dog1.image
       dog2.addEventListener("click", function(){ 
        var node6 = document.createElement("LI"); 
        var text1animal = document.createTextNode(dog2.name);
        node6.appendChild(text1animal)
        var node7 = document.createElement("LI"); 
        var age1Animal = document.createTextNode(dog2.age);
        node7.appendChild(age1Animal)
        var node8 = document.createElement("LI"); 
        var image1Animal = document.createTextNode(dog2.image);
        node8.appendChild(image1Animal)
        var node9 = document.createElement("LI"); 
        var sound1Animal = document.createTextNode(dog2.sound);
        node9.appendChild(sound1Animal)
        var node10 = document.createElement("LI"); 
        var owner1Animal = document.createTextNode(dog2.owner);
        node10.appendChild(owner1Animal)
        document.getElementById("listOfAnimal").appendChild(node6);
        document.getElementById("listOfAnimal").appendChild(node7);
        document.getElementById("listOfAnimal").appendChild(node8);
        document.getElementById("listOfAnimal").appendChild(node9);
        document.getElementById("listOfAnimal").appendChild(node10);
    

   })
//    ______________________________
   let fish2 = document.getElementById("img3")
       fish2.src=fish1.image
       fish2.addEventListener("click", function(){ 
        var node11 = document.createElement("LI"); 
        var text2animal = document.createTextNode(fish2.name);
        node11.appendChild(text2animal)
        var node12 = document.createElement("LI"); 
        var age2Animal = document.createTextNode(fish2.age);
        node12.appendChild(age2Animal)
        var node13 = document.createElement("LI"); 
        var image2Animal = document.createTextNode(fish2.image);
        node13.appendChild(image2Animal)
        var node14 = document.createElement("LI"); 
        var colorAnimal = document.createTextNode(fish2.color);
        node14.appendChild(colorAnimal)
        document.getElementById("listOfAnimal").appendChild(node11);
        document.getElementById("listOfAnimal").appendChild(node12);
        document.getElementById("listOfAnimal").appendChild(node13);
        document.getElementById("listOfAnimal").appendChild(node14);
   })
//    _______________________________________
document.getElementById("img1").addEventListener("click",()=>{  
    var node = document.createElement("LI");
//     var imgToAdd= document.getElementById("img1").value
    var textanimal = document.createTextNode("paragraph");
//     var btn = document.createElement("BUTTON");
//     var img = document.createElement("IMG");   
//   img.src = document.getElementById("imgForBook").value
//   node.appendChild(img);               
//   node.appendChild(p);                              
//   node.appendChild(btn);

  document.getElementById("listOfAnimal").appendChild(node);     
})
