/*
What is Abstract Pattern ?
An Abstract Factory creates objects that are related by a common theme. 
In object-oriented programming, a Factory is an object that creates other objects. 
An Abstract Factory has abstracted out a theme which is shared by the newly created objects.

JavaScript does not support class-based inheritance therefore the abstract classes as depicted in the diagram are not used in the JavaScript example.
Abstract classes and interfaces enforce consistent interfaces in derived classes.

*/



class Car{
     constructor(doors,engine,color){
          this.doors = doors;
          this.engine = engine;
          this.color = color;
     }
}

class CarFactory {
        createCar(type){
              switch(type){
                case 'civic':
                    return new Car(4,'v4','gray');
              case 'honda':
                    return new Car(4,'v4','red');
              }   
        }
}
class SUV{
    constructor(doors,engine,color){
         this.doors = doors;
         this.engine = engine;
         this.color = color;
    }
}

class SUVFactory {
    createCar(type){
             switch(type){
               case 'cx6':
                   return new Car(4,'v8','silver');
              case 'acura':
                   return new Car(4,'v6','blue');
             }
       }
}
var car1 = new CarFactory();
var suv1 = new SUVFactory();

const autoManufacturer=(type,model)=>{
       switch(type){
           case 'car':
              return car1.createCar(model);
              case 'suv':
              return suv1.createCar(model);
       }
}
const acura =  autoManufacturer('suv','acura');
console.log(acura);
