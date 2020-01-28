/*
    Student Name  : Kyle James
    StudentID     : 100704048
    Date Completed: Jan. 28, 2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        OneA();
        OneB();
        OneC();
        OneD();
    }

    function OneA()
    {
        document.getElementById("largeButton").innerText = "Learn More"; //changes the largeButtons id's inner text to "Learn More"
    }

    function OneB()
    {
        var element = document.createElement("h3"); //creates new element of type 'h3'
        var textElement = document.createTextNode("Name: Kyle James 100704048"); //creates new text node with text 'Name: Kyle James 100704048'

        element.appendChild(textElement); //appends the text node into the new h3 element

        var button = document.getElementById("largeButton").parentElement; //gets the parent element of 'largeButton'
        button.insertBefore(element, button.children[2]); //inserts the new h3 element just before the 'largeButton' element
    }

    function OneC()
    {
        document.getElementById("firstParagraph").innerText = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";
        //the above statement changes the text of the element with id 'firstParagraph'
    }

    function OneD()
    {
        document.getElementById("firstParagraph").hidden = true;
        //this hides the 'firstParagraph' element
    }

    window.addEventListener("load", Start);
})(app || (app = {}));

