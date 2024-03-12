//Task 41
//magicians; make a array of magician,s names. pass the array to a funcition 
//called show_magicians(), which paints the name of each magician in the array.





 function show_magicians(magician: string[]): void {

  for (const magicians of magician) {
        console.log(magicians.charAt(0).toUpperCase() + magician.slice(1));
   
    }
 
}

 const magician: string[] = ["ali","hamza","bilal"];
 show_magicians(magician)
