import axios from "axios";

const BASE_URL = "https://api.pokemontcg.io/v2";

export async function searchCards(query) {
    const response = await axios.get(`${BASE_URL}/cards?q=name:${query}`);
    return response.data.data;
}

export async function getCardById(id) {
    const response = await axios.get(`${BASE_URL}/cards/${id}`);
    return response.data.data;
}