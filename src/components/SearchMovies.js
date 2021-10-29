import React from "react";
import "../styles/SearchMovies.css"

function SearchMovies() {
    return(
    <form className="form">
        <label htmlFor="query" className="lable">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="i.e. Inception"/>
        <button className=" button" type="submit">Submit</button>
    </form>
    )
}

export default SearchMovies