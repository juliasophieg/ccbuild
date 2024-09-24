"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema, ProductFormData } from "../schemas";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

type ProductFormProps = {
  projectId: string;
};

const ProductForm: React.FC<ProductFormProps> = ({ projectId }) => {
  const [productId, setProductId] = useState<string | null>(null);
  const isCreatingProduct = useRef(false);
  const methodsForm1 = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    mode: "all",
    defaultValues: {
      project: projectId,
      variations: [],
    },
  });

  const { handleSubmit: handleSubmitForm1 } = methodsForm1;

  useEffect(() => {
    const existingProductId = sessionStorage.getItem("productId");

    if (existingProductId) {
      setProductId(existingProductId);
    } else if (!isCreatingProduct.current) {
      isCreatingProduct.current = true;
      const createBlankProduct = async () => {
        try {
          const response = await fetch("/api/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ projectId }),
          });
          if (response.ok) {
            const data = await response.json();
            setProductId(data.product._id);
            sessionStorage.setItem("productId", data.product._id);
            console.log("Blank product created:", data.product._id);
            isCreatingProduct.current = false;
          } else {
            const errorData = await response.json();
            console.error("Error creating blank product:", errorData);
            isCreatingProduct.current = false;
          }
        } catch (error) {
          console.error("Network error:", error);
          isCreatingProduct.current = false;
        }
      };

      createBlankProduct();
    }
  }, [projectId]);
  const onSubmitForm1: SubmitHandler<ProductFormData> = async (data) => {
    if (!productId) {
      console.error("Product ID is not available");
      return;
    }

    const { variations, ...productData } = data;

    try {
      const productResponse = await fetch(`/api/products/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (productResponse.ok) {
        const result = await productResponse.json();
        console.log("Product data updated:", result.message);

        if (variations && variations.length > 0) {
          for (const variation of variations) {
            const logisticData = {
              ...variation,
              productId: productId,
            };

            try {
              const logisticResponse = await fetch("/api/productLogistics", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(logisticData),
              });

              if (logisticResponse.ok) {
                const logisticResult = await logisticResponse.json();
                console.log(
                  "Logistic data added for variation:",
                  logisticResult
                );
              } else {
                const logisticError = await logisticResponse.json();
                console.error("Error adding logistic data:", logisticError);
              }
            } catch (logisticError) {
              console.error(
                "Network Error while sending logistic data:",
                logisticError
              );
            }
          }
        }
      } else {
        const errorData = await productResponse.json();
        console.error("Server Error:", errorData);
      }
    } catch (error) {
      console.error("Network Error while updating product:", error);
    }
  };

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FormProvider {...methodsForm1}>
        <form onSubmit={handleSubmitForm1(onSubmitForm1)}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Header1
            </AccordionSummary>
            <AccordionDetails>
              <Step1 />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Header2
            </AccordionSummary>
            <AccordionDetails>
              <Step2 />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Header3
            </AccordionSummary>
            <AccordionDetails>
              <Step3 />
            </AccordionDetails>
          </Accordion>
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              Header4
            </AccordionSummary>
            <AccordionDetails>
              <Step4 />
            </AccordionDetails>
            <AccordionActions></AccordionActions>
          </Accordion>
        </form>
      </FormProvider>
    </>
  );
};

export default ProductForm;
