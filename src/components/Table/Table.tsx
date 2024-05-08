import Image from "next/image";

const Table = () => {
  return (
    <div className="relative my-4 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-100">

        <thead className="text-xs text-gray-700 uppercase bg-transparent border dark:border-gray-700 dark:text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Image
                <a href="#">
                  {/* SVG icon */}
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Name
                <a href="#">
                  {/* SVG icon */}
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center justify-center">
                Action
                <a href="#">
                  {/* SVG icon */}
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-transparent border dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">
              <Image src="logo.svg" width={50} height={50} alt="logo" />
            </td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4 flex items-center justify-center">
              {/* Apply bg-transparent to the button's parent element */}
              <button className="bg-transparent">O</button>
            </td>
          </tr>
          <tr className="bg-transparent border dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap dark:text-white"
            >
              2
            </th>
            <td className="px-6 py-4">
              <Image src="logo.svg" width={50} height={50} alt="logo" />
            </td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4 flex items-center justify-center">
              {/* Apply bg-transparent to the button's parent element */}
              <button className="bg-transparent">O</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
