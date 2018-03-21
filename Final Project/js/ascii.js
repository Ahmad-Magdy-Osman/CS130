/* 
	Ahmad M. Osman - CS 130 Final Project 
	Personal Website Images' Javascript File
	ASCII Art Off/On Button Image Switcher Javascript Source Code

	Author: Ahmad M. Osman
	Date: October 9, 2016

	Filename: ascii.js
*/

//Variable for ASCII Art image file source directory
var imageAsciiOn;

//Variable for button clicks count
var count = 0;

//Change image function with a parameter of the original non-ASCII image source
function changeImage(imageOri) {
	//First button click will change image and increment count by 1 - ASCII Art Off Switch
	if(count == 0) {
		imageAsciiOn = document.getElementById("image").src;
		document.getElementById("image").src = imageOri;
		count = count + 1;
	}
	//Every alternate click will put the ASCII Art image back on - ASCII Art On Swith
	else if(count % 2 == 0) {
		document.getElementById("image").src = imageAsciiOn;
	}
	//Every other alternate click will put the original image on - ASCII Art Off Switch
	else {
		document.getElementById("image").src = imageOri;	
	}

	//Incrementing button count
	count = count + 1;
}