import React from "react";
import Home from "./Components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App(props) {
  const { search, pathname } = useLocation();
  // console.log(search);
  // console.log(pathname);

  return (
    <div>
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-blue-300 absolute left-[17%] top-[2.5%] border rounded border-blue-200 px-5 py-2">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
