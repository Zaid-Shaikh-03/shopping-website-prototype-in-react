import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home(props) {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filterProducts, setFilterProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      console.log(data);

      setFilterProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filterProducts || category == "undefined") setFilterProducts(products);
    if (category != "undefined") {
      getProductCategory();
    }
  }, [category, products]);

  return products ? (
    <div className="w-full h-screen flex">
      <Nav />
      <div className=" w-[85%] p-10 pt-[7%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filterProducts &&
          filterProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
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
