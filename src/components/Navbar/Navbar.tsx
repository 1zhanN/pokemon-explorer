import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  // State variable to track light mode
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to toggle light mode
  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
    // Toggle class on body element
    document.body.classList.toggle("light-mode");
  };

  return (
    <nav className="bg-gray-800 border-solid border-b-[1px] border-stone-600">
      <div className="h-[75px] flex justify-between item-center mx-auto max-w-[80%]">
        <div className="flex item-center">
          <Image src="/logo.svg" width={100} height={100} alt="logo" />
        </div>
        <div className="flex item-center">
          <button onClick={toggleLightMode}>
            <img src="/nightMode.png" width={20} height={20} alt="darkmode" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
