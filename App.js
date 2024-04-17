/*

const heading = React.createElement(
    "h1", {id: "heading"} ,
     "Hello World from React!"); // to create h1 tag we need to use "React.createElement(inside this small brackets it takes 3 arguments, first is a heading tag "h1", then object "{}" and then a message which you want to display - "Hello WOrld from React!")" .

     console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root")); // This root is a place where all the code will run.
root.render(heading); 

*/


// Nested structure inside react - 

/*
<div id="parent">
     <div id="child">
     <h1>I'm an h1 tag</h1>
     <h2>I'm an h2 tag</h2>
    </div>
</div>


*/

import React from "react";
import ReactDOM from "react-dom/client"
     

const parent = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child"},[React.createElement(
    "h1", {}, "I'm an h1 tag"),React.createElement(
        "h2", {}, "I want to see the magic of Parcel Beast once again")]),
        React.createElement("div", {id:"child2"},[React.createElement(
            "h1", {}, "I'm an h1 tag"),React.createElement(
                "h2", {}, "I want to see the magic of Parcel")])]);

    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);

 

