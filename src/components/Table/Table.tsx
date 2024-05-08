import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
 
const Table = () => {
  return (
    <div className="relative my-4 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-100">
        <thead className="text-xs text-gray-100 bg-transparent border">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="flex justify-center px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-100">
          <tr className="bg-transparent border cursor-pointer hover:bg-sky-700 active:bg-gray-700">
            <td className="px-6 py-4 font-medium whitespace-nowrap">1</td>
            <td className="px-6 py-4">
              <Image src="/logo.svg" width={50} height={50} alt="logo" />
            </td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4 flex items-center justify-center">
              <button className="bg-transparent">O</button>
            </td>
          </tr>
          <tr className="bg-transparent border cursor-pointer hover:bg-sky-700 active:bg-gray-700">
            <td className="px-6 py-4 font-medium whitespace-nowrap">2</td>
            <td className="px-6 py-4">
              <Image src="/logo.svg" width={50} height={50} alt="logo" />
            </td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4 flex items-center justify-center">
              <button className="bg-transparent">O</button>
            </td>
          </tr>
          <tr className="bg-transparent border">
            <td className="px-6 py-4 font-medium whitespace-nowrap"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
