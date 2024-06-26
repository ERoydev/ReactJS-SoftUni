import GameItem from "./GameItem";
import { useContext } from "react";
import GameContext from "../../contexts/gameContext";

export default function Home() {
    const { gameList } = useContext(GameContext);

    return(
    <section id="welcome-world">
        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in Game Zone</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />
        <div id="home-page">
            <h1>Latest Games</h1>
            {/* Display div: with information about every game (if any) */}
            {gameList !== '[]' ? gameList.map(game => <GameItem key={game._id} {...game} />) : <p className="no-articles">No games yet</p>}
        </div>
    </section>

    );
}

// const EnhancedHome = withAuth(Home);

// export default Home;

// Taka se pravi na edin red
// export default withAuth(Home);