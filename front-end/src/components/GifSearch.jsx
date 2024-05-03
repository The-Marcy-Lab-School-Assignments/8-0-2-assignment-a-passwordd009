import { useContext, useEffect } from "react"
import GifContext from "../context/GifContext"
import API_KEY from "../config"

function GifSearch() {

    const { gifs, setGifs} = useContext(GifContext)

    const handleSubmit = async(e) =>{
       e.preventDefault();

       try {
         const searchTerm = e.target.searchInput.value;
         const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&rating=g`);
         const data = await response.json();
         
         setGifs(data);
         setError(null);
       } catch (error) {
         setError(error.message);
       }
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">Enter a Search Tag</label>
        <input type="text" className="form-control" id="searchInput" name='searchInput'/>
        <button type="submit" className="'btn btn-success">Submit</button>
      </form>
    )
}

export default GifSearch