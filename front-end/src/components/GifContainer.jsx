import { useContext } from "react"
import GifContext from "../context/GifContext"
import GifProvider from "../context/ContextProvider"

function GifContainer() {
  const {gifs} = useContext(GifContext)

    return (
     <>
     <container>
        
     </container>
          {
        gifs.data?.map((gif) => (
          <li key={gif.id}>
            {console.log(gif.url)}
           <img src={gif.images.downsized_medium.url} alt="" />
          </li>
        ))
      }
     </>
    )
}

export default GifContainer
