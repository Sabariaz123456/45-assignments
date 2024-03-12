//Task 44
 //sandwitches:write a function that accepts a array of items a person wants on a sandwitch 
 //the function shuold have one parameter that collects as many items as the function call provides and it should print a summary of the sandwitch
 //that is being ordered.Call the function three times using a different number of arguments each time.

 function sandwitch(...items:string[]): void {
   console.log("Sandwitch order:")

  for (let i = 0; i < items.length; i++) {
     console.log(`-${items[i]}`)

  }

 }
 console.log("enjoy your sandwitch mehak Alamgir")

 sandwitch(`capsicum`,`tomato`,`chicken`)
sandwitch(`beef`,`cheese`)
 sandwitch(`garlic chicken`,`mayo sauce`)
