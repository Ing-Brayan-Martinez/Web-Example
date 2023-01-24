import { Base } from "./other.js";

class Entity extends Base {
    age = 10;
}

class Animal extends Entity {
    #owner;
    
    constructor(name, owner) {
        super();
        this.#owner = owner;
        this._name = name;
    }
    
    hasOwner() {
        return Boolean(this.#owner);
    }

    get name() {
        return this._name;
    }

    static of(value) {
        console.log(value);
    }
}

let dog = new Animal("blacky", "trincot");


console.log(dog.hasOwner()); // true
console.log(dog.name);  // "blacky"
console.log(dog.age); // 10

Animal.of('Dog'); //dog