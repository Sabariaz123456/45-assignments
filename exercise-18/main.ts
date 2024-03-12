//Task 18
  //store the location in array
   let placeTovisit: string[] = ["tokyo","Pakistan","America","china","japan"];

  //Print the array in its original order
 console.log("original order:",placeTovisit);

  //print the array in alphabetical order without nodifying the actual list
  console.log("Alphabetical order:",[...placeTovisit].sort());

  //show that the array is still in its original order
  console.log("original order after sorting :",placeTovisit);
  
 //print the array in reverse alphabetical order without changing the order of the original list
 console.log("Reverse alphabetical  order:",[...placeTovisit].sort().reverse());

 //show that the aray is still in its original order
  console.log("original order after  reverse sorting:",placeTovisit);

 //Reverse the order of the list
  placeTovisit.reverse()
  console.log("reversed order:",placeTovisit);

  //Reverse the order of the list again to get back to the original order
   placeTovisit.reverse();
   console.log("Back to the original order:",placeTovisit);
   //Sort the array in alphabetical order
   placeTovisit.sort();
 console.log("sorted in alphabetical order:",placeTovisit);

 //sort the array in reverse alphabetical order
placeTovisit.sort((a, b) => b.localeCompare(a));
 console.log("sorted in reverse alphabetcal order:",placeTovisit);


 
