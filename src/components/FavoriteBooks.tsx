import React,{FC} from "react";
import SingleBook from "./SingleBook";


export interface Book {
    id : number;
    title: string;
    writer : string;
    year : number;
}   

const FavoriteBooks:FC=()=>{
    const books: Book[]=[
        {id:1,title:"Gospodar Prstenova",writer:"J.R.R.Tolkin",year:1945},
        {id:2,title:"Harry Potter and the Philosophers Stone",writer:"J.K.Rowling",year:1999}
    ]
    return <>
       <h3>Omiljene Knjige</h3>
       {books.map((book)=>
          <SingleBook {...book} key={book.id}/>)}

    </>
}

export default FavoriteBooks;