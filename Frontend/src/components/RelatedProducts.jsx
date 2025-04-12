import React, { useContext, useEffect, useState } from "react";
import { Title } from "./Title";
import { ShopContext } from "../context/ShopContext";
import { ProductItem } from "./ProductItem";

export const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const filterRelatedProducts = () => {
    let productCopy = products.slice()
    productCopy = products.filter(
      (product) =>
        category === product.category && subCategory === product.subCategory
    );
    setRelatedProducts(productCopy.slice(0, 5));
  };

  useEffect(() => {
    filterRelatedProducts();
  }, [category, subCategory]);

  return (
    <div className="mt-20 sm:flex flex-col items-center ">
      <div className="text-2xl mb-5">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
