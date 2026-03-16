import "./SearchBar.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchBar() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    async function handleSearch(value) {

        setQuery(value);

        if (value.length < 2) {
            setResults([]);
            return;
        }

        const response = await fetch(
            `https://api.tcgdex.net/v2/en/cards?name=${value}`
        );

        const data = await response.json();

        setResults(data.slice(0, 5));
    }

    return (
        <div className="searchbar">

            <input
                type="text"
                placeholder="Search Pokémon cards..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
            />

            {results.length > 0 && (
                <div className="search-results">

                    {results.map((card) => (
                        <div
                            key={card.id}
                            className="search-item"
                            onClick={() => navigate(`/card/${card.id}`)}
                        >
                            {card.name}
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default SearchBar;