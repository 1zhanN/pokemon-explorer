import Image from "next/image";
import { useState } from "react";

interface itemData {
  id: number;
  name: string;
  image: string;
}

const Item = ({id, name, image}:itemData) => {
  return (
    <>
      <tr className="bg-transparent border-t border-slate-700 cursor-pointer hover:bg-gray-700 active:bg-gray-600">
        <td className="px-6">{id}</td>
        <td className="">
          <Image src={image}width={50} height={50} alt="logo" />
        </td>
        <td className="">{name}</td>
        <td className=" flex items-center justify-center">
          <button className="px-6 py-4 bg-transparent items-center">O</button>
        </td>
      </tr>
    </>
  );
};

export default Item;
