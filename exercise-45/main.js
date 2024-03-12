//Task 45
//cars: write a function that stores information about a car in a object. the function should always
//recevie a manufacturer and a model name. it should then accept an arbitrary number of keywword arguments.
//call the function with the requried information and two other name-value paris, such as a color or an 
//optional feature. paint the object that,s returned to make sure all the information was stored correct correctly .
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
