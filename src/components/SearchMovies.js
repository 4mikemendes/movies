import React from "react";
import "../styles/SearchMovies.css"


function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("searching")
        try {
            const query = "some movie"
            
            const url = `https://api.themoviedb.org/3/movie/550?api_key=8b8f7a79ae2f460a57596eb85e1b8701&language=en-us&query=${query}&page=1&include_adult=false`;
            
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        }catch (err) {
            console.log(err)
        }
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