import React from "react";
import './Vote.css';
import { useState } from "react";

export default function Vote() {
    //set anything important here
    let [chocoCount, setChocoCount] = useState(0);
    let [vanillaCount, setVanillaCount] = useState(0);
    let [strawbCount, setStrawbCount] = useState(0);
    let [chocolateDisplay, setChocolateDisplay] = useState(false);
    let [vanillaDisplay, setVanillaDisplay] = useState(false);
    let [strawberryDisplay, setStrawberryDisplay] = useState(false);
    let totalCount = chocoCount + vanillaCount + strawbCount;
    let chocoResults = Math.round((chocoCount/totalCount) * 100);
    let vanillaResilts = Math.round((vanillaCount/totalCount) * 100);
    let strawberryResults = Math.round((strawbCount/totalCount) * 100);
    let results = " ";
/*
    if (totalCount === 0) {
        return "Be the first to vote!"
    } else {
        if (chocoCount) {
            return chocolateDisplay;
        }
        if (vanillaCount) {
            return vanillaDisplay;
        }
        if (strawbCount) {
            return strawberryDisplay
        }
    }
*/
    return (
        <div className="Vote">
            <h2>Vote Here</h2>
            <div className="VoteButtons">
                <button id="button" onClick = {() => setChocoCount(chocoCount +1)}>Chocolate</button>
                <button id="button" onClick = {() => setVanillaCount(vanillaCount + 1)}>Vanilla</button>
                <button id="button" onClick = {() => setStrawbCount(strawbCount + 1)}>Strawberry</button>
            </div>
            <div className="VoteResults">
                {totalCount === 0 && <span>Be the first to vote! </span>}
                {chocoCount > 0 &&
                <span>
                    <div>Votes for Chocolate: {chocoCount} ({chocoResults}%)</div>
                    <div className = "chocoBar" style = {
                        {width: `${chocoResults}%`}
                    }></div></span>}
                    {vanillaCount > 0 &&
                    <span>
                        <div> Votes for Vanilla: {vanillaCount} ({vanillaResilts}%)</div></span>}
                    {strawbCount > 0 &&
                        <span>
                            <div> Votes for Strawberry: {strawbCount} ({strawberryResults}%)</div></span>}
            </div>
        </div>
    )}
