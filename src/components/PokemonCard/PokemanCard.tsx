import StatBar from "../StatBar/StatBar";
import PokemonBaseID from "../PokemonBaseID/PokemonBaseID";
import Total from "../Total/Total";
import Type from "../Type/Type";

const PokemanCard = ({ image }) => {
  return (
    <div className="flex justify-center my-4">
        
      <div className="border bg-slate-800/80  border-gray-700 rounded-3xl">
      
        <div>
          <img src={image} alt="pokemon" />
        </div>

        <Type/>


        <PokemonBaseID name={"name"} weight={"90"} height={"6.2"}/>
        <div>
          <StatBar stat={"Hp"} percentage={"49%"} />
          <StatBar stat={"Attack"} percentage={"10%"} />
          <StatBar stat={"Defense"} percentage={"70%"} />
          <StatBar stat={"Special Attack"} percentage={"90px"} />
          <StatBar stat={"Special Defense"} percentage={"13%"} />
          <StatBar stat={"Speed"} percentage={"10%"} />
          <Total count={"51"}/>
        </div>
      </div>
    </div>
  );
};

export default PokemanCard;
