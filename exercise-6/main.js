//Task 6
//Stripping Names: Store a person's name, and include some whitespace characters at the begining and end of the name.
//Make sure you use each character combination, "\t" and "\n",
//at least once, so the white space around the name is displayed.
//Then print the name after stripping the white spaces.
var personName = "\t\n  John Doe \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());
