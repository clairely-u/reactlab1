import React from "react";
import { useState } from "react";
import './Ad.css';

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

export default function Ad({flavor, fontSize, darkTheme} : Props) {
    let addClass = " ";
    if (darkTheme ===true) {
        addClass = " darkMode"
    } else if (darkTheme === false) {
        addClass = " lightMode"
    }

    return(
    <div className= {"AdComponent" + addClass} style = {{
        fontSize: `${fontSize}px`
    }}>
       
        Vote for {flavor}!
    </div>
    )}