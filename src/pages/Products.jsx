import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
mport Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";
import MultiSelect from "../components/MultiSelect";
import ProductsTable from "../components/tables/ProductsTable";


const Products = () => {
   const { getProCatBrands } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);
  return <div>Products</div>;
};

export default Products;
