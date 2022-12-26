import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import SearchBox from "./SearchBox";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 right-0 border-primary border-t-4 px-8 py-3 flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 items-center">
      <Link to="/">
        <h1 className="text-primary font-bold text-3xl">DevSözlük.</h1>
      </Link>
      <div className="w-full md:w-[400px]">
        <SearchBox />
      </div>
      <div className="space-x-2">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
