"use client";
import { ApiFactory } from "@/api";
import { Products } from "@/types/products";
import useSWR from "swr";
import ProductsPresentation from "../presentational/products";
import ProductSkeleton from "../presentational/products/product-skeleton";

const Products = () => {
  const { get } = ApiFactory();

  const { data } = useSWR<Products.Root[]>(
    "products",
    async () => await get("https://fakestoreapi.com/products")
  );

  return data ? <ProductsPresentation products={data} /> : <ProductSkeleton />;
};

export default Products;
