import "./PokemonCard.css"
import {useNavigate} from "react-router-dom";

function PokemonCard({card}) {

    const navigate = useNavigate();

    return (
        <div
            className="pokemon-card"
            onClick={() => navigate(`/card/${card.id}`)}
        >

            <img
                src={card.image + "/low.webp"}
                alt={card.name}
            />

            <h3>{card.name}</h3>
        </div>
    )
}

export default PokemonCard;