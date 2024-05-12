const PokemonBaseID = ({ name, weight, height }) => {
  return (
    <>
      <div className="flex gap-2 mx-2 mt-2 py-[2px]">
        <div>
          <p className="font-bold">Name:</p>
        </div>

        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className="flex gap-2 mx-2 py-[2px]">
        <div>
          <p className="font-bold">Height:</p>
        </div>

        <div>
          <p>{height} m</p>
        </div>
      </div>
      <div className="flex gap-2 mx-2 py-[2px]">
        <div>
          <p className="font-bold">Weight:</p>
        </div>

        <div>
          <p>{weight} Kg</p>
        </div>
      </div>
    </>
  );
};

export default PokemonBaseID;
