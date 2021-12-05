import React from 'react';
import {useState} from "react"

export default function Search (props) {

    const [string, stringState] = useState("")

    function handleInput(event){ 
        stringState(event.target.value)
        props.filterBeer(event.target.value)
    }

    return (
        <div>
        <h4>Search</h4>
        <input 
        onChange={handleInput}
        type="search"
        name="search"
        value={string}
        />
        </div>
        
    )
}