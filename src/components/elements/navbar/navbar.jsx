import { useState, useEffect } from "react";
import Navlink from "./navlink";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldBeScrolled = scrollTop > 70;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex flex-wrap justify-between sticky top-0 z-10 w-full mx-auto px-8 ${
          isScrolled ? "bg-white bg-opacity-20  shadow-lg" : "bg-transparent"
        }`}
      >
        <Navlink />
      </header>
    </>
  );
};

export default Navbar;
