var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 18
//store the location in array
var placeTovisit = ["tokyo", "Pakistan", "America", "china", "japan"];
//Print the array in its original order
console.log("original order:", placeTovisit);
//print the array in alphabetical order without nodifying the actual list
console.log("Alphabetical order:", __spreadArray([], placeTovisit, true).sort());
//show that the array is still in its original order
console.log("original order after sorting :", placeTovisit);
//print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical  order:", __spreadArray([], placeTovisit, true).sort().reverse());
//show that the aray is still in its original order
console.log("original order after  reverse sorting:", placeTovisit);
//Reverse the order of the list
placeTovisit.reverse();
console.log("reversed order:", placeTovisit);
//Reverse the order of the list again to get back to the original order
placeTovisit.reverse();
console.log("Back to the original order:", placeTovisit);
//Sort the array in alphabetical order
placeTovisit.sort();
console.log("sorted in alphabetical order:", placeTovisit);
//sort the array in reverse alphabetical order
placeTovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetcal order:", placeTovisit);
