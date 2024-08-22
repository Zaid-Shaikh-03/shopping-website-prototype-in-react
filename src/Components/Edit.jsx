import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit(props) {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  });

  const ChangeHanlder = (e) => {
    // console.log(e.target.name, e.target.value);

    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const EditPorductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 character");
      return;
    }
    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };
    // console.log(product, pi);
    // console.log(copyData);

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    toast.success("Product Edit successfully");
    navigate(-1);
  };

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  return (
    <form
      onSubmit={EditPorductHandler}
      className="flex flex-col items-center p-[5%] w-full h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={ChangeHanlder}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={ChangeHanlder}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3"
          name="category"
          onChange={ChangeHanlder}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3"
          name="price"
          onChange={ChangeHanlder}
          value={product && product.price}
        />
      </div>
      <textarea
        placeholder="enter product description here"
        rows="10"
        className="text-1xl resize-none bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="description"
        onChange={ChangeHanlder}
        value={product && product.description}
      ></textarea>
      <div className="w-1/2">
        <button className=" py-2 px-5 border rounded border-blue-300 text-blue-400">
          Edit Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
