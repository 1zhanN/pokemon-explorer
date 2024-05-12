import StatBar from "../StatBar/StatBar";
import PokemonBaseID from "../PokemonBaseID/PokemonBaseID";
import Total from "../Total/Total";
import Type from "../Type/Type";

const PokemanCard = ({ image, reqData }) => {
  return (
    <div className="flex justify-center my-4 ">
        
      <div className="absolute border bg-slate-800/80 w-[280px] border-gray-700 rounded-3xl">
        <div className="bg-lime-400 rounded-t-3xl py-8 h-[150px]">

        </div>
        {/* <Type/> */}
        <PokemonBaseID name={reqData.name} weight={reqData.weight} height={reqData.height}/>
        <div>
          
          <StatBar stat={"Hp"} percentage={reqData.hp} />
          <StatBar stat={"Attack"} percentage={reqData.attack} />
          <StatBar stat={"Defense"} percentage={reqData.defense} />
          <StatBar stat={"Special Attack"} percentage={reqData.special_attack} />
          <StatBar stat={"Special Defense"} percentage={reqData.special_defense} />
          <StatBar stat={"Speed"} percentage={reqData.speed} />
          <Total count={reqData.hp+reqData.attack+reqData.defense+reqData.special_attack+reqData.special_defense+reqData.speed}/>
        </div>
      </div>
      <img
          className="relative top-0 w-[150px] "
          src={reqData.image} 
          alt="pokemon" />
    </div>
  );
};

export default PokemanCard;
