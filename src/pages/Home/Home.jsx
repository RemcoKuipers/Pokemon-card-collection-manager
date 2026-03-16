import "./Home.css";
import HomeCard from "../../assets/HomeCard.png"
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    return (
        <div className="home">

            <div className="home-container">

                <div className="home-text">
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
                    <img src={HomeCard}
                         alt="pokemon card"
                         onClick={() => navigate("/search")}

                    />
                    <p className="hint">Click the card to explore Pokémon cards</p>
                </div>
            </div>
        </div>
    );
}

export default Home;