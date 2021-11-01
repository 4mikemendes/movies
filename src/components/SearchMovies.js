import React from "react";
import "../styles/SearchMovies.css"


function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("searching")
    }

    return(
    <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="lable">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="i.e. Inception"/>
        <button className=" button" type="submit">Submit</button>
    </form>
    )
}

export default SearchMovies