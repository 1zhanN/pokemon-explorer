import { useState, useEffect } from "react";
import Item from "../Item/Item";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Table = () => {
  const [reqData, setReqData] = useState<any[]>([]); 
  const [offset, setOffset] = useState<number>(0); 
  const [limit, setLimit] = useState<number>(10); 
  const [pageNo, setPageNo] = useState<number>(1); 

  useEffect(() => {
    const fetchDataArray = async () => {
      try {
        const dataArray = [];
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }

        const data = await response.json();

        // Extract data for each Pokemon from the response
        for (const pokemon of data.results) {
          const pokemonData = await fetch(pokemon.url).then((res) => res.json());
          const requiredData = {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.other.dream_world.front_default,
          };
          dataArray.push(requiredData);
        }

        setReqData(dataArray); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataArray(); // Trigger data fetching when component mounts
  }, [offset, limit]); // Update effect when offset or limit changes

  const handlePreviousPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
      setPageNo(pageNo - 1)
    }
  };

  const handleNextPage = () => {
    setOffset(offset + limit);
    setPageNo(pageNo + 1)
  };


  return (
    <div className="relative my-4">
      <table className="w-full text-left">
        <thead className="text-sm text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-4">
              ID
            </th>
            <th scope="col" className="px-6 py-4">
              Image
            </th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="flex justify-center px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-100">
          {reqData.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} image={item.image} />
          ))}
        </tbody>
      </table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousPage} href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{pageNo}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={handleNextPage} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Table;
