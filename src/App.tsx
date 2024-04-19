import './App.css';
import FavoritMovies from './components/FavoritMovies';
import FavoriteBooks from './components/FavoriteBooks';
import UserProfil from './components/UserProfil';
import react,{FC} from "react";

const App: FC=()=> {
  return (
    <div className="App">
       <UserProfil/>
       <FavoritMovies/>
       <FavoriteBooks/>
    </div>
  );
}

export default App;
