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
import Typography from "@mui/material/Typography";
import Textfield from "@mui/material/TextField";
import { useCategoryContext } from "../context/CategoryContext";

type ProductFormProps = {
  projectId: string;
};

const ProductForm: React.FC<ProductFormProps> = ({ projectId }) => {
  const [productId, setProductId] = useState<string | null>(null);
  const isCreatingProduct = useRef(false);
  const { setSelectedStep } = useCategoryContext();
  const { selectedStep } = useCategoryContext();

  const [expanded, setExpanded] = useState<string | false>(false);

  const [expandAll, setExpandAll] = useState(false);

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
          const response = await fetch("http://localhost:3000/api/products", {
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

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setSelectedStep(isExpanded ? panel : "");
    };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    setExpanded(!expandAll ? "panel1" : false);
  };

  const onSubmitForm1: SubmitHandler<ProductFormData> = async (data) => {
    if (!productId) {
      console.error("Product ID is not available");
      return;
    }

    const { variations, ...productData } = data;

    try {
      console.log("Product data:", productData);
      console.log("date", typeof productData.pickup?.availableDate);
      const productResponse = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

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
              const logisticResponse = await fetch(
                "http://localhost:3000/api/productLogistics",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(logisticData),
                }
              );

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
    <div className="basis-4/5">
      <FormProvider {...methodsForm1}>
        <form onSubmit={handleSubmitForm1(onSubmitForm1)}>
          <h1 className="text-black font-normal">
            {selectedStep === "Överblick" ? "Överblick" : "Ny produkt"}
          </h1>
          <Button onClick={toggleExpandAll} variant="contained">
            {expandAll ? "Collapse All" : "Expand All"}
          </Button>
          <Accordion
            expanded={expandAll || expanded === "Generell information"}
            onChange={handleChange("Generell information")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0, fontSize: "1.5rem" }}
              >
                Generell information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step1 />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandAll || expanded === "Egenskaper"}
            onChange={handleChange("Egenskaper")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Egenskaper
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Egenskaper
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step2 />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandAll || expanded === "Marknadsplats"}
            onChange={handleChange("Marknadsplats")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Marknadsplats
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Marknadsplats{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step3 />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandAll || expanded === "Plats/Status/Antal"}
            onChange={handleChange("Plats/Status/Antal")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Plats/Status/Antal
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Plats/Status/Antal
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step4 />
            </AccordionDetails>
            <AccordionActions></AccordionActions>
          </Accordion>
          {expandAll ? (
            ""
          ) : (
            <Accordion
              expanded={expandAll || expanded === "Överblick"}
              onChange={handleChange("Överblick")}
              onClick={toggleExpandAll}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Överblick/Publicera
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Överblick/Publicera
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Step4 />
              </AccordionDetails>
              <AccordionActions></AccordionActions>
            </Accordion>
          )}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProductForm;
