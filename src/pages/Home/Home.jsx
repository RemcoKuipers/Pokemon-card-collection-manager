import "./Home.css";
import HomeCard from "../../assets/HomeCard.png"
function Home() {
    return (
        <div className="home">

            <div className="welcome-text">
                <h2>Welcome, Trainer!</h2>

                <p>
                    This app helps you manage your Pokémon card
                    collection in one clear overview.
                </p>

                <p>
                    Search cards, add them to your collection,
                    and instantly see their current value.
                </p>
            </div>

            <div className="card-preview">
                <img src={HomeCard} alt="pokemon card"

                />
            </div>

        </div>
    );
}

export default Home;