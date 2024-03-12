//task 40
// album: write a function called make_album() that builds a object  describing a music album. the function should take in an artist
// name ans an album title, and it should return a object containing these two pieces of information. use the function to make 
// three dictonaries representing diffrent albums. print each return value to show that objects are storing the album 
// information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks an albums.
// if tha calling line includes a value for the number of tracks, add that value to the album's objects. Make at least one new
// function call that includes the number of tracks on an albums.
function makeAlbum(artist, title) {
    var dictonaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictonaries;
}
var album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("hamza", "seenbreez");
console.log(album);
