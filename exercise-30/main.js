//Task 30
//Hello Admin:Make a array of five or more user names,including the name 'admin'.Imagine you are writing code that will print
//a greating to each user after they log into a website.Loop through the array , and print a greeting to each user:
//*If the user name is 'admin' , print a special greating , such as hello admin , would you like to see a status report ?
//*otherwise, print a generic greating ,such as Hello Eric, Thank you for log in again.
var users = ["admin", "eric", "haseeb", "fatima"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
}
