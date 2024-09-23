// components/ProductVarientForm.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import ProductLogisticForm from './ProductLogisticForm'
import { ProductLogisticSchema } from '@/schemas'
import { z } from 'zod'

type ProductLogisticFormData = z.infer<typeof ProductLogisticSchema>

const ProductVarientForm: React.FC = () => {
  const [productId, setProductId] = useState<string | null>(null)
  const [productLogistics, setProductLogistics] = useState<any[]>([])
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleFormSubmit = async (data: ProductLogisticFormData) => {
    try {
      const response = await fetch(`/api/productLogistics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, productId }),
      })
      if (response.ok) {
        // Successfully saved
        // Optionally, fetch the updated product logistics
        setOpen(false)
        // Refresh the product logistics data
        fetchProductLogistics()
      } else {
        console.error('Failed to save product logistics')
      }
    } catch (error) {
      console.error('Error saving product logistics:', error)
    }
  }

  const fetchProductLogistics = async () => {
    if (!productId) return
    try {
      const response = await fetch(`/api/productLogistics/${productId}`)
      if (response.ok) {
        const data = await response.json()
        setProductLogistics(data)
      } else {
        console.error('Failed to fetch product logistics')
      }
    } catch (error) {
      console.error('Error fetching product logistics:', error)
    }
  }

  useEffect(() => {
    const existingProductId = sessionStorage.getItem('productId')

    if (existingProductId) {
      setProductId(existingProductId)
      console.log('Product ID from session storage:', existingProductId)

      fetchProductLogistics()
    }
  }, [])

  return (
    <div>
      {productLogistics.length > 0 ? (
        <div>
          {productLogistics.map((logistic, index) => (
            <div key={index}>
              <p>Quantity: {logistic.quantity}</p>
              <p>Date: {logistic.date}</p>
              <p>Status: {logistic.status}</p>
              <p>House: {logistic.location?.house}</p>
              <p>Floor: {logistic.location?.floor}</p>
              <p>Room: {logistic.location?.room}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No logistics data available</p>
      )}

      <Button variant='outlined' onClick={handleClickOpen}>
        Create Product Variant
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='product-logistic-dialog-title'
      >
        <DialogTitle id='product-logistic-dialog-title'>
          Create Product Logistic
        </DialogTitle>
        <DialogContent>
          <ProductLogisticForm
            onSubmit={handleFormSubmit}
            onCancel={handleClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductVarientForm
