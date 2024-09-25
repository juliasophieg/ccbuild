'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductSchema, ProductFormData } from '../schemas'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useCategoryContext } from '../context/CategoryContext'

type ProductFormProps = {
  projectId: string
}

const ProductForm: React.FC<ProductFormProps> = ({ projectId }) => {
  const [productId, setProductId] = useState<string | null>(null)
  const isCreatingProduct = useRef(false)
  const { setSelectedStep } = useCategoryContext()

  const [expanded, setExpanded] = useState<string | false>(false)

  const [expandAll, setExpandAll] = useState(false)

  const methodsForm1 = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    mode: 'all',
    defaultValues: {
      project: projectId,
      variations: [],
    },
  })

  const { handleSubmit: handleSubmitForm1 } = methodsForm1

  useEffect(() => {
    const existingProductId = sessionStorage.getItem('productId')

    if (existingProductId) {
      setProductId(existingProductId)
    } else if (!isCreatingProduct.current) {
      isCreatingProduct.current = true
      const createBlankProduct = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ projectId }),
          })
          if (response.ok) {
            const data = await response.json()
            setProductId(data.product._id)
            sessionStorage.setItem('productId', data.product._id)
            console.log('Blank product created:', data.product._id)
            isCreatingProduct.current = false
          } else {
            const errorData = await response.json()
            console.error('Error creating blank product:', errorData)
            isCreatingProduct.current = false
          }
        } catch (error) {
          console.error('Network error:', error)
          isCreatingProduct.current = false
        }
      }

      createBlankProduct()
    }
  }, [projectId])

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
      setSelectedStep(isExpanded ? panel : '')
    }

  const toggleExpandAll = () => {
    setExpandAll(!expandAll)
    setExpanded(!expandAll ? 'panel1' : false)
  }

  const onSubmitForm1: SubmitHandler<ProductFormData> = async data => {
    if (!productId) {
      console.error('Product ID is not available')
      return
    }

    const { variations, ...productData } = data

    try {
      console.log('Product data:', productData)
      console.log('date', typeof productData.pickup?.availableDate)
      const productResponse = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        },
      )

      if (productResponse.ok) {
        const result = await productResponse.json()
        console.log('Product data updated:', result.message)

        if (variations && variations.length > 0) {
          for (const variation of variations) {
            const logisticData = {
              ...variation,
              productId: productId,
            }

            try {
              const logisticResponse = await fetch(
                'http://localhost:3000/api/productLogistics',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(logisticData),
                },
              )

              if (logisticResponse.ok) {
                const logisticResult = await logisticResponse.json()
                console.log(
                  'Logistic data added for variation:',
                  logisticResult,
                )
              } else {
                const logisticError = await logisticResponse.json()
                console.error('Error adding logistic data:', logisticError)
              }
            } catch (logisticError) {
              console.error(
                'Network Error while sending logistic data:',
                logisticError,
              )
            }
          }
        }
      } else {
        const errorData = await productResponse.json()
        console.error('Server Error:', errorData)
      }
    } catch (error) {
      console.error('Network Error while updating product:', error)
    }
  }

  if (!productId) {
    return <div>Loading...</div>
  }

  return (
    <div className='basis-4/5'>
      <FormProvider {...methodsForm1}>
        <form onSubmit={handleSubmitForm1(onSubmitForm1)}>
          <Button onClick={toggleExpandAll} variant='contained'>
            {expandAll ? 'Collapse All' : 'Expand All'}
          </Button>
          <Accordion
            expanded={expandAll || expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Header1
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                General Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step1 />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandAll || expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2-content'
              id='panel2-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Header2
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step2 />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandAll || expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel3-content'
              id='panel3-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Header3
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                More Info
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step3 />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandAll || expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel4-content'
              id='panel4-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Header4
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Final Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Step4 />
            </AccordionDetails>
            <AccordionActions></AccordionActions>
          </Accordion>
          <Button type='submit' variant='contained'>
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default ProductForm
