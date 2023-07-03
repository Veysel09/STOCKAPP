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

  useEffect(() => {
    // getPurchases();
    // getFirms();
    // getProCatBrands();
    getAllStockData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <PurchaseModal
        info={info}
        setInfo={setInfo}
        open={open}
        setOpen={setOpen}
      />
      <Typography variant="h4" color="error" mt={4} mb={4}>
        Purchases
      </Typography>
    </>
  );
};

export default Purchases;
