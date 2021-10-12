

// class Animal{
//     constructor(name, age, image, sound){
//         this.name=name,
//         this.age=age,
//         this.image=image,
//         this.sound=sound
//     }
//     eats(){
//          return this.name+" eats food";
//     }
// }

// class Cat extends Animal{
//     constructor(name, age, image, sound,owner){
//         super(name, age, image, sound)
//         this.owner=owner
//     }
//     eats(){
//         return  this.name+"eats mouse"
//     }
//     Animalsound(){
//         return "cat sounds is "+this.sound
//     }


// }
// class Dog extends Animal{
//     constructor(name, age, image, sound,owner){
//         super(name, age, image, sound)
//         this.owner=owner
//     }
//     eats(){
//         return  this.name+" eats chicken"
//     }
//     Animalsound(){
//         return "dog sounds is "+this.sound
//     }
// }



// class Fish extends Animal{
//     constructor(name, age, image, sound,color){
//         super(name, age, image, sound)
//         this.color=color
//     }
//     eats(){
//         return  this.name+"eats flakes"
//     }
//     Animalsound(){
//         return this.sound+"cat sounds is "
//     }


// }

// let cat1 = new Cat("lolo",3,"https://i.pinimg.com/236x/b3/e6/b2/b3e6b23773a58f6a449a9535ca1625b7.jpg","meow","Masha");
// let dog1 = new Dog("jak",6,"https://i.pinimg.com/236x/97/dc/36/97dc361fe46afc4bc1845ce771614dc0.jpg","woof","Masha");
// let fish1 = new Fish("sam",2,"https://i.pinimg.com/236x/8e/27/d9/8e27d9955ee40c87c9cee3204c4d8d61.jpg","flakes","pink");


// console.log(cat1.name)


// let catImg=document.createElement("img");
// catImg.src=cat1.image;
// document.body.appendChild(catImg)
// catImg.addEventListener('click',()=>{
   
//     let ccat=document.createElement("li");
//     ccat.innerHTML=`${cat1.name}`+ ` is `+  `${cat1.age} `+`years old ` +`her sound is `+ `${cat1.sound}` + `and belong to `+`${cat1.owner}`;
//     document.getElementById("ul").appendChild(ccat);
// })


// let dogImg =document.createElement("img");
// dogImg.src=dog1.image;
// document.body.appendChild(dogImg)
// dogImg.addEventListener('click',()=>{
   
//     let ddog=document.createElement("li");
//     ddog.innerHTML=`${dog1.name}`+ ` is `+  `${dog1.age} `+`years old ` +`her sound is `+ `${dog1.sound}` + `and belong to `+`${dog1.owner}`;
//     document.getElementById("ul1").appendChild(ddog);
// })


// let fishImg =document.createElement("img");
// fishImg.src=fish1.image;
// document.body.appendChild(fishImg)
// fishImg.addEventListener('click',()=>{
   
//     let ffish=document.createElement("li");
//     ffish.innerHTML=`${fish1.name}`+ ` is `+  `${fish1.age} `+`years old ` +`her sound is `+ `${fish1.sound}` + `and color is  `+`${fish1.color}`;
//     document.getElementById("ul2").appendChild(ffish);
// })




//###############################//

let information ={
    movie:"DANGAL",
    duration:2,
    stars:["Aamir Khan ","Sakshi Tanwar"]


}
console.log(information)
console.log(`${information.movie }` + ` ` +`${information.duration}`);