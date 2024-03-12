//Task 15
// Guest list 
let guestlist = ["Asad","Hussain","Uzair","Yasir"];

//Guest who can not come 
let donotcome = guestlist [0];

//Replacing the name of guest who cannot come 
console.log(donotcome,"Can not come");

//Adding a new person 
guestlist.splice(0, 1,"Sana");

//Printing a invitation message
guestlist.forEach(guest => console.log(`Hello ${guest},would you like to dinner with me?`));