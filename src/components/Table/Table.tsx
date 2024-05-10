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
  const [reqData, setReqData] = useState<any[]>([]); // Initialize with an empty array for data

  useEffect(() => {
    const fetchDataArray = async () => {
      try {
        
        const endpoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const dataArray = [];

        for (const endpoint of endpoints) {
          const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
          }

          const data = await response.json();
          const requiredData = {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
          };

          dataArray.push(requiredData);
        }

        setReqData(dataArray); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataArray(); // Trigger data fetching when component mounts
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Table;
