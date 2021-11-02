import React, {useState} from "react"
import "../styles/SearchMovies.css"


function SearchMovies() {

    const [query, setQuery] = useState(" ")

    const searchMovies = async (e) => {
        e.preventDefault()
        
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=8b8f7a79ae2f460a57596eb85e1b8701&language=en-us&query=${query}&page=1&include_adult=false`;

        try {
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
        <input className="input" type="text" name="query" 
        placeholder="i.e. Inception" value={query} 
        onChange={(e) => setQuery(e.target.value)} />
        <button className=" button" type="submit">Submit</button>
    </form>
    )
}

export default SearchMovies