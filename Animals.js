class animal{
    constructor(name, age, image, sound){
        this.name = name;
        this.age = age;
        this.image = image;
        this.sound = sound;
    }
    eats(food){
        return `${this.name} eats ${food}`; 
    }
    showDetails(id){
        let div = id.childNodes[3];
        div.innerHTML = 
            `<div class="card-title text-center fw-bold">${this.name}</div>
                <ul class="card-text">
                <li>Name: ${this.name}</i>
                <li>Age: ${this.age}</i>
                <li>Sound: ${this.sound}</i>
                <li>Color: ${this.color}</i>
                </ul>`
    }
}

class cat extends animal{
    eats(){
        return "cats eats mouse";
    }
    Animalsound(){
        return "cat sounds is meow";
    }
}

class dog extends animal{
    eats(){
        return "dogs eats chicken";
    }
    Animalsound(){
        return "dogs sounds is woof";
    }
}

class fish extends animal{
    constructor(name, age, image, sound, color){
        super(name, age, image, sound)
        this.color = color;
    }
    eats(){
        return "fish eats flakes";
    }
}

let cat1 = new cat("cat1", 2, "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "meow");
cat1.eats()
cat1.Animalsound();

let dog1 = new dog("dog1", 4, "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "woof");
dog1.eats()
dog1.Animalsound()

let fish1 = new fish("fish1", 1, "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "","orange")

function print_img(){
    document.getElementById("animal1-img").setAttribute("src", cat1.image); 
    document.getElementById("animal2-img").setAttribute("src", dog1.image); 
    document.getElementById("animal3-img").setAttribute("src", fish1.image); 
}




