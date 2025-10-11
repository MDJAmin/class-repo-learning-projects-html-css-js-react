class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`Hello I'm ${this.name} and im ${this.age}`);
    }
}

const amin = new Person("Amin",18)
console.log(amin)
amin.sayHello()




class Animal {
    constructor(name){
        this.name = name
    }

    call(){
        console.log(`call your ${this.name}`);
    }
}

const cat = new Animal("Casy")
cat.call()






class Animal{
    constructor(name){
        this.name=name
    }
    call(){
        console.log(`${this.name}`)
    }
}

class Dog extends Animal{
 call(){
    console.log(`${this.name}`)
 }   
}

const rex = new Dog("rex")
rex.call()


class MathFunc{
    static square(n){
        return n * n
    }
}

console.log(MathFunc.square(4))