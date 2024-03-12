//Task 31
//No user : Add an if test to Exercise 28 to make sure the list of users is not empty .
//*If the list is empty, print the message we need to find some user!
//*Remove of all the usernames from your array , and make sure the correct message is printed.
var users = ["admin", "eric", "haseeb", "fatima"];
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
