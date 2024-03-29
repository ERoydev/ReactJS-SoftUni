import { Routes, Route} from 'react-router-dom';

import { AuthProvider } from './contexts/authContext.jsx';
import { GameProvider } from './contexts/gameContext.jsx';
import Path from './Paths.js';

import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/DetailsPage/GameDetails.jsx";
import Logout from './components/Logout/Logout.jsx';
import GameEdit from './components/GameEdit/GameEdit.jsx';

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <div id='box'>

          <GameProvider>
            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.Games} element={<GameList/>} />
                <Route path={Path.CreateGame} element={<GameCreate />} />
                <Route path={Path.Login} element={<Login />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path={Path.GameDetails} element={<GameDetails />} />
                <Route path={Path.GameEdit} element={<GameEdit />} />
                <Route path={Path.Logout} element={<Logout />} />
            </Routes>
          </GameProvider>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
