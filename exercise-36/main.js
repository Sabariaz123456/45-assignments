//Task 36
//T-shirts: Write a function called make_shirt() that accept a size and the text of a message that should be printed on the shir
//The function should print a sentence summarizing the size of the shirt and message printed on it. Call the function.
function makeShirt(size, text) {
    console.log("/n you order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt('large', '"i love typescript"');
makeShirt('medium', '"i need a big shirt"');
