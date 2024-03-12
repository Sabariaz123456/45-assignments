//Task 45
//cars: write a function that stores information about a car in a object. the function should always
//recevie a manufacturer and a model name. it should then accept an arbitrary number of keywword arguments.
//call the function with the requried information and two other name-value paris, such as a color or an 
//optional feature. paint the object that,s returned to make sure all the information was stored correct correctly .




  type car = {
manufacture: string
    model: String
 [key: string]: any;
    }
 function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
     return{
        manufacture,
       model,
       ...optional


     }

}

 const mycar: car = createCar("toyota","corolla",{ color: "silver",year:"2024"})
 console.log(mycar)