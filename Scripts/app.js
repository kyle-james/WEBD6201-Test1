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
    }

    function OneA()
    {
        document.getElementById("largeButton").innerText = "Learn More";
    }


    window.addEventListener("load", Start);
})(app || (app = {}));

