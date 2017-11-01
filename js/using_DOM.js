// practice these JavaScript methods in the JavaScript Console
document.getElementById( );
document.getElementsByClassName( );
document.getElementsByTagName( );
someImage.getAttribute( );
someImage.setAttribute( );


var foo = document.getElementsByTagName("h2");
// try these in the JavaScript Console
console.log(foo);
console.log(foo[0]);
console.log(foo[0].innerHTML);
console.log(foo[1].innerHTML);

// try this in the JavaScript Console
for (var i = 0; i < foo.length; i++) {
  console.log(foo[i].innerHTML);
}

// try this in the JavaScript Console
var peopleImages = document.getElementsByClassName("people");
for (var i = 0; i < peopleImages.length; i++) {
  console.log(peopleImages[i].getAttribute("alt"));
}

// try this in the JavaScript Console
// it will change every "people"-class image in the document
// to the image of Hanuman, the monkey
var monkey = document.getElementById("Hanuman");
console.log(monkey);
var attr2 = monkey.getAttribute("src");
var peopleImages = document.getElementsByClassName("people");
// all the "people"-class img elements are now in an array
for (var i = 0; i < peopleImages.length; i++) {
  peopleImages[i].setAttribute("src", attr2);
}
