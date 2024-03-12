// Task 32
//Checking usernames: Do the following to creat a program that simulates how websites ensure that everyone has a unique username.
//*Make a list of five or more usernames called current_users.
//*Make another list of five usernames called new_users .Make sure one or two of the new usernames are also in the current_users list.
//*Loop through the  new_users list to see if each new usernames  has already been used .If it has . print a message  that the person
//will need to enter a new username.If a username has not been used ,print a message that the username is available.
var current_users = ["admin", "Eric", "Ali", "Hamza", "fatima"];
var new_users = ["admin", "fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_users, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_users, ", is still in available list"));
    }
}
