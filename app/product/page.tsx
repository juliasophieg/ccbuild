import { Button } from "@mui/material";
import { addProduct, getProduct } from "@/actions/action";
import Link from 'next/link';
import ProductForm from "@/components/ProductForm";

export default function Product() {

 

  return (
    <>
        <ProductForm />
    </>
  );
}