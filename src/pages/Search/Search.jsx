import "./Search.css";
import { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import SearchBar from "../../components/SearchBar/SearchBar";

function Search() {

    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);

    const cardsPerPage = 12;

    useEffect(() => {

        async function fetchCards() {

            const response = await fetch(
                "https://api.tcgdex.net/v2/en/cards"
            );

            const data = await response.json();

            setCards(data);

        }

        fetchCards();

    }, []);

    /* pagination */

    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    const visibleCards = cards.slice(start, end);

    return (

        <div className="search">

            <h1>Explore Pokémon Cards</h1>

            <SearchBar />

            <div className="card-grid">

                {visibleCards.map((card) => (
                    <PokemonCard
                        key={card.id}
                        card={card}
                    />
                ))}

            </div>

            <div className="pagination">

                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>

                <span>Page {page}</span>

                <button
                    onClick={() => setPage(page + 1)}
                    disabled={end >= cards.length}
                >
                    Next
                </button>

            </div>

        </div>

    );
}

export default Search;