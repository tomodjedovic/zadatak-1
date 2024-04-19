import React,{FC} from "react";
import SingleMovie from "./SingleMovie";

export interface Movie {
    id:number;
    title:string;
    year:number;
    duration:string;
};

const FavoritMovies:FC=()=>{
    const movies:Movie[] = [
        {id:1,title:"Rocky1",year:1985,duration:"95min"},
        {id:2,title:"Rocki2",year:1987,duration:"99min"},
        {id:3,title:"Full Contact",year:1988,duration:"91min"}
    ];
    return <>
        <h3>Omiljeni Filmovi</h3>
      {  movies.map((movie)=>(
            
            <SingleMovie {...movie} key={movie.id}/>
        ))}
        </>
    
};

export default FavoritMovies;
