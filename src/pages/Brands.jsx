import { Typography, Box, Grid, Alert, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCalls from "../hooks/useStockCalls";
import { flexCenter } from "../styles/globalStyle";

const Brands = () => {
  const { getBrands } = useStockCalls();
  const { brands, loading } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
