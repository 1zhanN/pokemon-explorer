"use client"
import Navbar from "@/components/Navbar/Navbar"
import Table from "@/components/Table/Table"
import { useEffect, useState } from "react";

const Page = () => {

  const [pokemonCount, setPokemonCount] = useState(0);

  useEffect(() => {
    async function fetchTotalPokemon() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon data');
        }
    
        const data = await response.json();
        return data.count;
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        return []; // Return empty array in case of error
      }
    }
    
    fetchTotalPokemon()
      .then(pokemonData => {
        setPokemonCount(pokemonData)
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [])
 
  

  return (
  <div>
    <Navbar/>
    <div className="mt-4 mx-auto max-w-[80%]">
      <h2 className="text-xl">
      {pokemonCount} Pokemons In Total
    </h2>
    <Table/>
    </div>
  </div>

  )
}

export default Page