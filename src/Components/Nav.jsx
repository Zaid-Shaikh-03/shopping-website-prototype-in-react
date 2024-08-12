import React from "react";

function Nav(props) {
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-5 w-[80%]" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <ul className="w-[80%]">
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full mr-2 bg-blue-200"></span>{" "}
          cat 1
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full mr-2 bg-blue-200"></span>{" "}
          cat 2
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full mr-2 bg-blue-200"></span>{" "}
          cat 3
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
