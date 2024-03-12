//Famouse quote: Find a quote from a famous person you admire.print the quote and the name of its author .Your output shuold look something like the following,
//including the quotation marks:
//Albert Einstein once said ."A person who never made a mistake never tried anything new."
var quote = "A person who never made a mistake never tried anything new.";
var author = "Abert Einstein";
//console.log(`${author} once said, "${quote}"`);
//Famous quote 2: Repeat Exercise 4, but this time store the famous person's name in a variable called famous_person.Then compose your message and store it in a new variable called message .Print your message.
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said,\"").concat(quote, "\"");
console.log(message);
