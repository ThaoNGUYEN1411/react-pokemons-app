import { useEffect, useState } from "react";
import POKEMONS from "../models/mock-pokemon";
import Pokemon from "../models/pokemon";

const usePokemons = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>(POKEMONS);

	useEffect(() => {
		setPokemons(POKEMONS);
	}, []);
	return pokemons;
};

export default usePokemons;
