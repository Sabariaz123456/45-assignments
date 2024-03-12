//task 17
var guestList = ["Ali", "Bilal"];
// Informing that only twopeople can be invited
console.log("Due to limited space, only two people can be invited for dinner.");
//  Removing guests until only two names remain
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    console.log("sorry, ".concat(removedGuests, ", you're no longer invited to dinner."));
}
//Printing invitation to the remaining two guests 
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
// Removing the last two names from the list 
guestList.pop();
guestList.pop();
//Printing the final list to confirm it's empty
console.log("Final guest list:", guestList);
