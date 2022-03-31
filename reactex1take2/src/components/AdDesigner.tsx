import React, { useState } from "react";
import './AdDesigner.css';

export default function AdDesigner() {
    //set switches here
    // and class adds and shit
    const [flavor, setFlavor] = useState("(choose a flavor below!)")
    const [fontSize, setFontSize] = useState(16);
    const [theme, setTheme] = useState(true);
    let addClass = " ";
    if (theme===true) {
        addClass = " lightMode"
    } else if (theme === false) {
        addClass = " darkMode"
    }

    return (
        <div className="AdDesigner">
            <div className = "AdDesigContainer">
                <h2>Ad Designer</h2>
                <div className= {"designBox" + addClass} style = {{
                    fontSize: `${fontSize}px`
                }}>
                   
                    Vote for <h2> {flavor}</h2>!
                </div>

                <h3>What to Support</h3>
                <div className="flavorButtons">
                    <button id="button" onClick = {() => setFlavor("Chocolate")}>Chocolate</button>
                    <button id="button" onClick = {() => setFlavor("Vanilla")}>Vanilla</button>
                    <button id="button" onClick = {() => setFlavor("Strawberry")}>Strawberry</button>
                </div>

                <h3>Color Theme</h3>
                <div className="ColorThemes">
                    <button id="button" onClick = {() => setTheme(true)}>Light</button>
                    <button id="button" onClick = {() => setTheme(false)}>Dark</button>
                </div>

                <h3>Font Size</h3>
                <div className="FontSizes">
                    <button id="button" onClick = {() => setFontSize(fontSize - 1)}>Down</button>
                    (font size here)
                    <button id="button" onClick = {() => setFontSize(fontSize + 1)}>Up</button>
                </div>
            </div>
        </div>
    )
}