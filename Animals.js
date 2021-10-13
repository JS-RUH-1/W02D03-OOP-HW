class Animal
{
    constructor(name , age , image , sound ){
        this.name=name;
        this.age=age;
        this.image=image;
        this.sound=sound;
    }
    eats(){
        return this.name +"eats food" 
    }

}

    class Cats extends Animal{
        constructor(name , age , image , sound , height ){
            super(name , age , image , sound)
            this.height=height;
        

        }

        eats(){
            return this.name +"eats food" 
        }

        Animalsound(){
            return "cat sounds is meow"
        }
    
    }

    class Dogs extends Animal{
        constructor(name , age , image , sound  , width ){
            super(name , age , image , sound)
            this.width=width;
      

        }

        eats(){
            return this.name +"Dogs food" 
        }

        Animalsound(){
            return "dogs sounds is woof"
        }
    
    }

    
    class Fish extends Animal{
        constructor(name , age , image , sound  , color ){
            super(name , age , image , sound)
            this.color=color;
      

        }

        eats(){
            return this.name +"Dogs food" 
        }

        Animalsound(){
            return "fish eats flakes"
        }
    
    }



    const cat = new Cats ("be" , 12 , "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" , "sd" , "cc")
    cat.eats();
    cat.Animalsound();

    const dog = new Dogs ("" , 13 , "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" , "boo" , 16)
    dog.eats();
    dog.Animalsound();
    const fish = new Fish("toto" , 2 , "https://static.toiimg.com/thumb/msid-80788864,width-1200,height-900,resizemode-4/.jpg","" , "red")
    fish.eats();
    fish.Animalsound();

    document.getElementById("content").innerHTML +=`
    <img src="${cat.image}" onclick="moreInfo(cat)" width="300" height="300"/>
    <img src="${dog.image}" onclick="moreInfo(dog)" width="300" height="300"/>
    <img src="${fish.image}" onclick="moreInfo(fish)" width="300" height="300"/>
    `


function moreInfo(animal) {
    document.querySelector(".lists").innerHTML = `
        <li>${animal.nameA}</li>
        <li>${animal.age}</li>
        <li>${ animal.sound ? animal.sound : 'No sound' } </li>
        <li>${ animal.height ? animal.height : 'No height' } </li>
        <li>${ animal.width ? animal.width : 'No width' } </li>
    `
}









