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
