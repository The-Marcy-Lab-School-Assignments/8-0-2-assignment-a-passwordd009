import GifContext from "./GifContext";
import API_KEY from "../config";
import { useState, useEffect } from "react";
import { handleFetch } from "../utils";
const GifProvider  = ({children}) => {

    const [gifs, setGifs] = useState([]);
    
    useEffect(() => {
      const doFetch = async () => {
        const [data, error] = await handleFetch(`/api/gifs`);
        if (data) setGifs(data);
        if (error) setError(error.message);
      }
      doFetch();
    }, []); 
    const contextValues = {
        gifs,
        setGifs
    }

  return(
    <GifContext.Provider value= {contextValues}>
     {children}
    </GifContext.Provider>
   )
}

export default GifProvider 