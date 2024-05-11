import Navbar from "@/components/Navbar/Navbar";
import PokemanCard from "@/components/PokemonCard/PokemanCard";
import Link from "next/link";

const pokemon = () => {
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
        <PokemanCard image="logo.svg"/>
      </div>
    </>
  );
};

export default pokemon;
