import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ProductModal from "../components/modals/ProductModal";
import MultiSelect from "../components/MultiSelect";
import ProductsTable from "../components/tables/ProductsTable";

const Products = () => {
  const { getProCatBrands } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    getProCatBrands();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div>Products</div>;
};

export default Products;
