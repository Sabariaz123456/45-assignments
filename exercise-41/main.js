//Task 41
//magicians; make a array of magician,s names. pass the array to a funcition 
//called show_magicians(), which paints the name of each magician in the array.
function show_magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magicians = magician_1[_i];
        console.log(magicians.charAt(0).toUpperCase() + magician.slice(1));
    }
}
var magician = ["ali", "hamza", "bilal"];
show_magicians(magician);
