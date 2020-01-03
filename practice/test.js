class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    Hello(){
        console.log(`My name is ${this.name}, and I'm ${this.age} years old.`);
    }
}

const Arsal = new Person("Arsal", 24);
Arsal.Hello();