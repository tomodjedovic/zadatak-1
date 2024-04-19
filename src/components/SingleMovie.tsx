import react,{FC} from "react";
import { Movie } from "./FavoritMovies";


const SingleMovie:FC<Movie>=({id,title,year,duration})=>{
      return(
         <div>
            <ul>
                <li>film br : {id}</li>
                <li>{title}</li>
                <li>{year}</li>
                <li>{duration}</li>
            </ul>

         </div>
      )
}

export default SingleMovie;