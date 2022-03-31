import React from "react";
import './Header.css';

interface Props {
    user: string;
}

export default function Header({user} : Props) {
    return (
        <div className="Header">
            <h1>Ice Cream Wars</h1>
            <h2> Hello, {user}!!</h2>
        </div>
    )
}