//Task 39

//City Names: Write a function called_country()that takes in the name of a city and its country the function should return 
//a string formatted like this:
//"lahore","pakistan"
//Call your function with at least three city_country pairs and print the value thats returned


function cityCountry(city: string, country: string): string {
     return `${city}, ${country}`
 }

 let c1 = cityCountry('lahore','pakistan')
 let c2 = cityCountry('tokyo','japan')
 let c3 = cityCountry('paris','france')

console.log(c1)
 console.log(c2)
 console.log(c3)
