//creating a guestlist Array
var guestlist = ["asad", "uzair", "hussain"];
//making veriable for those who can't come
var dontcome = guestlist[0];
//print the guest name who can not come
console.log(dontcome, "can not come");
//Add or remove values from guestlist Array
guestlist.splice(0, 1, "Sana");
//Message print for bigger table
console.log("good news to all my freinds! We have found a bigger table for dinner");
// Adding a new guest at starting index or Array
guestlist.unshift("saima");
//Adding a nwe guest at ending index of Array
guestlist.push("mehwish");
//Adding a new guest at middle index of Array
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle index of Array
guestlist.splice(middleIndex, 0, "kiran");
// print Message to update List
console.log("updated list of guests");
//Sending a invitation message to our guest one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("hello ".concat(oneguest, ", Would you like to dinner with us")); });
