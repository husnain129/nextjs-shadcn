import { Products } from "@/types/products";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

const ProductsPresentation: React.FC<{ products: Products.Root[] }> = ({
  products,
}) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={`my-masonry-grid w-screen mx-auto mt-20`}
      columnClassName="my-masonry-grid_column w-screen"
    >
      {products.map((product: Products.Root) => (
        <div key={product.id} className="flex flex-col">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="mx-auto"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {product.category}
              </span>
              <p className="text-gray-700 text-base">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default ProductsPresentation;
