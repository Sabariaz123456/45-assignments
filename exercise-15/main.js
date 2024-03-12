//Task 15
// Guest list 
var guestlist = ["Asad", "Hussain", "Uzair", "Yasir"];
//Guest who can not come 
var donotcome = guestlist[0];
//Replacing the name of guest who cannot come 
console.log(donotcome, "Can not come");
//Adding a new person 
guestlist.splice(0, 1, "Sana");
//Printing a invitation message
guestlist.forEach(function (guest) { return console.log("Hello ".concat(guest, ",would you like to dinner with me?")); });
