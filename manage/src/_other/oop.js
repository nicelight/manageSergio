a = 12
b = 5

console.log(' тут можно выводить любой текст')
console.log(a)


                       5  3 
function superFunkciya(a, b) {
    return a + b
}



shirina = 5
visota = 3

console.log(superFunkciya(shirina, visota)) 

noviyResultat = 0

noviyResultat = superFunkciya(visota, 25)
 noviyResultat =28



console.log(summa(a, b))



// класс, чертеж, blueprint 
class Robot {
    // constructor(firstName, color) {
    constructor(s1, s2, s3, s4) {
        this.firstName = s1
        this.color = s2
        this.age = s3
        this.zariad = s4

    }
    // Глобальные, обязательные метод 1 
    attack(){
        console.log(`I'm attacking with a power of ${this.zariad}!`)
        this.zariad = this.zariad - 1  
        console.log(`Now my power is ${this.zariad}!`)
    }
    
    // Глобальные, обязательные метод 2
    addPower(value1) {
         this.zariad = this.zariad + value1
         console.log(`My power increased to ${this.zariad}!`)

    }
}//blueprint Robot

//обьект, instance
const robik = new Robot('Robokop', 'seriy', 120, 3)

console.log('привет. Мое имя ' + robik.firstName) // Chris
console.log('и по цвету я ' + robik.color) // Coyier
robik.sayHello()
robik.attack()
robik.addPower(4)
robik.attack()
robik.attack()

console.log(' ')

const zashitnik = new Robot('Terminator', 'cherniy')
console.log('Салам. А я ' + zashitnik.firstName) // Zell
console.log('и я очень ' + zashitnik.color) // LiewF 




/// машинки

class Car {
    constructor(model, color, position, speed) {
        this.model = model
        this.color = color
        this.position = position
        this.speed = speed
    }

    // this.move = 
}