//Task 3
// cases : store a person's name in a variable, and then print that person's name in lowercase,uppercase and titlecase.

let personName: string = "Saba Riaz";

//in lowercase
 console.log("Lowercase:", personName.toLowerCase());

//in uppercase
console.log("uppercase:", personName.toUpperCase());

//title case
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));


