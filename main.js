import { Base } from "./other.js";

class Entity extends Base {
    adge = 10;
}

class Animal extends Entity {
    #owner;
    
    constructor(name, owner) {
        super();
        this.name = name;
        this.#owner = owner;
    }
    
    hasOwner() {
        return Boolean(this.#owner);
    }

    static of(value) {
        console.log(value);
    }
}

let dog = new Animal("blacky", "trincot");


console.log(dog.hasOwner()); // true
console.log(dog.name); 
console.log(dog.adge); 