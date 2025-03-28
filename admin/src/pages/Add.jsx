import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append(" bestseller", bestseller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers: {token}})
      console.log(response)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-16 py-8 w-full flex flex-col gap-3 items-start">
      <div>
        <p className="text-gray-600 mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20 cursor-pointer"
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>

          <label htmlFor="image2">
            <img
              className="w-20 cursor-pointer"
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>

          <label htmlFor="image3">
            <img
              className="w-20 cursor-pointer"
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>

          <label htmlFor="image4">
            <img
              className="w-20 cursor-pointer"
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 text-gray-500">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-gray-300 px-3 py-2 rounded w-full max-w-[500px]"
          type="text"
          placeholder="Type here"
        />
      </div>

      <div className="w-full">
        <p className="mb-2 text-gray-600">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-gray-300 px-3 py-2 rounded w-full max-w-[500px]"
          type="text"
          placeholder="Write content here"
        />
      </div>

      <div>
        <p className="mb-2 text-gray-600">Product Category</p>
        <div className="flex gap-6">
          <div>
            <p className="mb-2 text-gray-600 text-sm">Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 w-full text-gray-500"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          <div>
            <p className="mb-2 text-gray-600 text-sm">Sub Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="px-3 py-2 w-full text-gray-500"
            >
              <option value="topwear">Topwear</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <p className="mb-2 text-gray-600 text-sm">Product Price</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-24 px-2 h-10"
              type="number"
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 text-gray-600">Product Sizes</p>
        <div className="text-gray-500 flex gap-3">
          <p onClick={()=>setSizes(prev => prev.includes("S")) ? prev.filter(item => item !== "S") : [...prev, "S"]} className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1`}>S</p>
          <p onClick={()=>setSizes(prev => prev.includes("M")) ? prev.filter(item => item !== "M") : [...prev, "M"]} className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1`}>M</p>
          <p onClick={()=>setSizes(prev => prev.includes("L")) ? prev.filter(item => item !== "L") : [...prev, "L"]} className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1`}>L</p>
          <p onClick={()=>setSizes(prev => prev.includes("XL")) ? prev.filter(item => item !== "XL") : [...prev, "XL"]} className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1`}>XL</p>
          <p onClick={()=>setSizes(prev => prev.includes("XXL")) ? prev.filter(item => item !== "XXL") : [...prev, "XXL"]} className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1`}>XXL</p>
        </div>
      </div>

      <div className="flex gap-2 my-2">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
        />
        <p className="text-gray-600">Add to bestseller</p>
      </div>

      <button type="submit" className="bg-black text-white px-10 py-3">
        ADD
      </button>
    </form>
  );
};
