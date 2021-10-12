class Animal {
    constructor(name, age, image, sound) {
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound = sound
    }
    eats() {
        return `${this.name} eats food"`;
    }
    showMore() {
        let modal = document.createElement("div");
        modal.innerHTML = `
        <div id="open-modal" class="modal">
  <div>
    <a href="#" title="Close" class="modal-close" onclick="closeModal(this);">Close</a>
    <h1>${this.name}</h1>
    <ul>
    <li>Age: ${this.age}</li>
    ${this.sound ? `<li>Sound: ${this.sound}</li>`: ''}
    ${this.color ? `<li>Color: ${this.color}</li>`: ''}
    ${this.owner ? `<li>Owner: ${this.owner}</li>`: ''}
    </ul>
    </div>
    `;
    return document.body.appendChild(modal);  
    }
}
class Cat extends Animal {
    constructor(name, age, image, owner) {
        super(name,age,image);
        this.owner = owner;
        this.sound = "cat sounds is meow";
    }
    eats(){
        return "cats eats mouse";
    }
};
class Dog extends Animal {
    constructor(name, age, image, owner) {
        super(name,age,image);
        this.owner = owner;
        this.sound = "dogs sounds is woof";
    }
    eats(){
        return "dogs eats chicken";
    }
};
class Fish extends Animal {
    constructor(name, age, image, color) {
        super(name,age,image);
        this.color = color;
    }
    eats(){
        return "fish eats flakes";
    }
};

let myCat = new Cat("Kitty",5, "https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/cat-behaviour.jpg","Emad");
console.log(myCat.eats());

let myDog = new Dog("Rex", 6, "https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg","Emad");
console.log(myDog.eats());

let myFish = new Fish("Captain", 1, "https://static.toiimg.com/thumb/msid-80788864,width-1200,height-900,resizemode-4/.jpg", "gold");
console.log(myFish.eats());

const animals = [myCat, myDog, myFish];
window.onload = () => {
    animals.forEach(animal => {
        var node = document.createElement("div");
        node.innerHTML = `<img height="250px" width="250px" src="${animal.image}" />`;
        node.addEventListener("click", () => {
            animal.showMore();
        })
        document.getElementById("grid").appendChild(node);  
    });
}

const closeModal = (e) => {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
};