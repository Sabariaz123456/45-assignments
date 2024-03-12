//Task 30
//Hello Admin:Make a array of five or more user names,including the name 'admin'.Imagine you are writing code that will print
//a greating to each user after they log into a website.Loop through the array , and print a greeting to each user:

//*If the user name is 'admin' , print a special greating , such as hello admin , would you like to see a status report ?
//*otherwise, print a generic greating ,such as Hello Eric, Thank you for log in again.

 let users : string [] = ["admin", "eric", "haseeb", "fatima"]

 for(let user of users){
   if(user === "admin"){
         console.log("Hello admin, would you like to see a status report?")
     } else {
       console.log(`Hello ${user}, thank you for logging in again`)
  }
 }