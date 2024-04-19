import React, {FC}from "react";

const UserProfil: FC=()=>{
    const ime: string = "Petar";
    const prezime: string = "Petrovic";
    const email: string = "petarpetrovic@gmail.com"
    return(
    <div className="user">
        <h3>Profil Korisnika</h3>
        <p>Ime : {ime}</p>
        <p>Prezime : {prezime}</p>
        <p>email : {email}</p>

    </div>
    )};
export default UserProfil;