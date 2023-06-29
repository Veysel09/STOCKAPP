import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";
import MultiSelect from "../components/MultiSelect";

const Purchases = () => {
  const { purchases } = useSelector((state) => state.stock);
  // const { getProCatBrands, getPurchases, getFirms } = useStockCalls();
  const { getAllStockData } = useStockCalls();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  return <div>Purchases</div>;
};

export default Purchases;
