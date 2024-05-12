import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
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
        <td>
          <Image className="max-h-[50px]" src={image} width={50} height={50} alt="logo" />
        </td>
        <td>{name}</td>
        <td className=" flex items-center justify-center">
        <Link href={`/pokemon/${id}`}>
          <button className="px-6 py-4 bg-transparent items-center"><img src="/eye.png" width={20} height={20} alt="eye" /></button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Item;
