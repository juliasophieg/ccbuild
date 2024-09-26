import { FC } from 'react'
import { ProductFormData, ProductLogisticData } from '@/schemas'
import { Card, CardContent, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'

type PageProps = {
  params: {
    id: string
  }
}

const ProductDetail: FC<PageProps> = async ({ params }) => {
  let product: ProductFormData | null = null
  let variations: ProductLogisticData[] = []
  let errorMessage = ''
  let variationsErrorMessage = ''

  try {
    const res = await fetch(
      `https://ccbuild-project.vercel.app/api/products/information/${params.id}`,
      {
        cache: 'no-store',
      },
    )

    if (!res.ok) {
      throw new Error('Failed to fetch product data')
    }

    product = await res.json()
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'
  }

  try {
    const resVariations = await fetch(
      `https://ccbuild-project.vercel.app/api/productLogistics/${params.id}`,
      {
        cache: 'no-store',
      },
    )

    if (!resVariations.ok) {
      throw new Error('Failed to fetch variations data')
    }

    variations = await resVariations.json()
  } catch (error) {
    variationsErrorMessage =
      error instanceof Error
        ? error.message
        : 'Unknown error occurred while fetching variations'
  }

  if (!product) {
    return <p>{errorMessage || 'Product not found'}</p>
  }

  return (
    <div className='mb-14'>
      <div className='m-4'>
        <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='/'>
            <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          </Link>
          <Link underline='hover' color='inherit' href='#'>
            Products
          </Link>
          <Typography sx={{ color: 'text.primary' }}>
            {product.generalInformation?.productName}
          </Typography>
        </Breadcrumbs>
      </div>

      <div className='mx-14 mb-8'>
        <h1 className='text-4xl font-bold'>
          {product.generalInformation?.productName}
        </h1>
      </div>

      <div className='mx-14 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <Card>
          <CardContent>
            <Typography variant='h6'>General Information</Typography>
            <p>Category: {product.generalInformation?.productCategory1}</p>
            <p>Description: {product.generalInformation?.productDescription}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant='h6'>Location</Typography>
            <p>Premises: {product.location?.premises}</p>
            <p>Room: {product.location?.room}</p>
            <p>Accessibility: {product.location?.accessibility}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant='h6'>Dimensions</Typography>
            <p>
              Width: {product.dimensions?.width}{' '}
              {product.dimensions?.measurementUnit}
            </p>
            <p>
              Height: {product.dimensions?.height}{' '}
              {product.dimensions?.measurementUnit}
            </p>
            <p>
              Depth: {product.dimensions?.depth}{' '}
              {product.dimensions?.measurementUnit}
            </p>
            <p>
              Weight: {product.dimensions?.weightPerUnit}{' '}
              {product.dimensions?.weightUnit}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant='h6'>Pricing</Typography>
            <p>Internal Price: {product.price?.internalPrice}</p>
            <p>External Price: {product.price?.externalPrice}</p>
            <p>Buyer Price: {product.price?.buyerPrice ? 'Yes' : 'No'}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant='h6'>Special Properties</Typography>
            <p>Hanging: {product.specialProperties?.hanging}</p>
            <p>Glass Type: {product.specialProperties?.glassType}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant='h6'>Pickup Information</Typography>
            <p>
              Available Date:{' '}
              {product.pickup?.availableDate
                ? new Date(product.pickup.availableDate).toLocaleDateString()
                : 'Not Available'}
            </p>
            <p>Can Be Sent: {product.pickup?.canBeSent ? 'Yes' : 'No'}</p>
          </CardContent>
        </Card>
      </div>

      <div className='mx-14 mb-8'>
        <h2 className='text-2xl font-bold'>Variations</h2>
        {variations.length > 0 ? (
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {variations.map(variation => (
              <Card key={variation._id}>
                <CardContent>
                  <Typography variant='h6'>Location</Typography>
                  <p>House: {variation.location?.house}</p>
                  <p>Room: {variation.location?.room}</p>

                  <Typography variant='h6'>Pickup Information</Typography>
                  <p>
                    Available Date:{' '}
                    {variation.pickup?.availableDate
                      ? new Date(
                          variation.pickup.availableDate,
                        ).toLocaleDateString()
                      : 'Not Available'}
                  </p>
                  <p>
                    First Delivery Date:{' '}
                    {variation.pickup?.firstDeliveryDate
                      ? new Date(
                          variation.pickup.firstDeliveryDate,
                        ).toLocaleDateString()
                      : 'Not Available'}
                  </p>

                  <Typography variant='h6'>Status</Typography>
                  <p>Status: {variation.status}</p>
                  <p>Marketplaces: {variation.marketplaces}</p>
                  <p>Quantity: {variation.quantity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>{variationsErrorMessage || 'No variations available.'}</p>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
