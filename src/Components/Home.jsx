import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home(props) {
  const [products] = useContext(ProductContext);
  console.log(products);

  return products ? (
    <div className="w-full h-screen flex">
      <Nav />
      <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((p, i) => (
          <Link
            to="/details/1"
            className="card mr-3 mb-3 w-[18%] h-[30vh] p-5 border shadow rounded flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-110 transition-all	 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300">{p.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;
