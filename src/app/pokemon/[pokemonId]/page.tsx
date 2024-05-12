"use client"
import Navbar from "@/components/Navbar/Navbar";
import PokemanCard from "@/components/PokemonCard/PokemanCard";
import Link from "next/link";
import { useEffect, useState } from "react";

const pokemon = ({ params }) => {

  const [reqData, setReqData] = useState({});

  
  useEffect(() => {
    const fetchDataArray = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }

        const data = await response.json();
        //data.name data.weight data.height data.stats[0] data.stats[1]  data.sprites.other.dream_world.front_default
        setReqData({
          name:data.name,
          weight:data.weight,
          height:data.height,
          hp:data.stats[0].base_stat,
          attack:data.stats[1].base_stat,
          defense:data.stats[2].base_stat,
          special_attack:data.stats[3].base_stat,
          special_defense:data.stats[4].base_stat,
          speed:data.stats[5].base_stat,
          image:data.sprites.other.dream_world.front_default
        })

 

      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };

    fetchDataArray(); // Trigger data fetching when component mounts

  }, []); // Update effect when offset or limit changes


  return (
    <>
      <Navbar />
      <div>
        <div className="flex items-center gap-2 mt-4 mx-auto max-w-[80%]">
          <Link href="/">
            <img src="/backArrow.png" width={35} height={35} alt="back" />
          </Link>
          <p>Back</p>
        </div>
      </div>
      <div>
        <PokemanCard reqData={reqData} />
      </div>
    </>
  );
};

export default pokemon;
