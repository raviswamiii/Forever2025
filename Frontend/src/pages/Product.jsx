import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets, } from "../assets/assets";
import { RelatedProducts } from "../components/RelatedProducts";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [productData, setProductData] = useState();
  const [size, setSize] = useState();
  const [image, setImage] = useState("");
  const {productId} = useParams()
  const { currency, addToCart, products } = useContext(ShopContext);

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t pt-10">
      <div className="flex gap-11 flex-col sm:flex-row">
        <div className="flex gap-3 h-full flex-col-reverse sm:flex-row">
          <div className="flex sm:flex-col sm:gap-3 gap-1">
            {productData.image.map((item, index) => (
              <img onClick={()=> setImage(item)} key={index} className="sm:h-[8vw] w-[24%] sm:w-[8vw] cursor-pointer" src={item} alt="" />
            ))}
          </div>
          <img className="sm:h-[35vw] h-auto w-full" src={image} alt="" />
        </div>

        <div className="sm:w-1/2">
          <h1 className="text-2xl font-medium">{productData.name}</h1>
          <div className="flex gap-1 items-center">
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_icon} alt="" />
            <img className="h-3" src={assets.star_dull_icon} alt="" />
            <p className="ml-2">(122)</p>
          </div>
          <p className="text-3xl font-medium my-4">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-500">
           {productData.description}
          </p>
          <div className=" my-4">
            <p className="mb-4">Select Size</p>
            <div className="flex">
              {productData.sizes.map((item, index) => {
                return (
                  <p
                    onClick={() => setSize(item)}
                    className={`border px-4 py-2 mr-2 bg-gray-100 cursor-pointer ${
                      item === size ? "border border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mb-8">
            ADD TO CART
          </button>
          <div className="text-sm text-gray-500 flex flex-col gap-1 pt-5 border-t">
            <p>100% Original product.</p>
            <p>Cash on delivery in available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="text-sm mt-[10vw]">
        <div className="flex">
          <p className="border px-5 py-3 font-bold">Description</p>
          <p className="border-y border-r px-5 py-3">Reviews(122)</p>
        </div>
        <div className="border p-6 text-gray-500 flex flex-col gap-5">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="mt-16">
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  ) : (
    <div>Product not available</div>
  );
};
