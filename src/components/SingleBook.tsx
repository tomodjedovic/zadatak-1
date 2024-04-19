import { Book } from "./FavoriteBooks";
import React,{FC} from "react";

const SingleBook:FC<Book>=({id,title,writer,year})=>{
    return <div>
       <ul>
        <li>omiljena knjiga br: {id}</li>
        <li>{title}</li>
        <li>pisac : {writer}</li>
        <li>izdata {year}.god</li>
       </ul>
    </div>

}

export default SingleBook