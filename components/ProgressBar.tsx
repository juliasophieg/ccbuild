'use client'

import React from 'react'
import { useCategoryContext } from '@/context/CategoryContext'

const ProgressBar: React.FC = () => {
  const { selectedStep } = useCategoryContext()
  return (
    <div className='flex grow basis-1/5 flex-col gap-4'>
      <h1>{selectedStep}</h1>
      <div>HEJ</div>
      <div>HEJ</div>
      <div>HEJ</div>
      <div>HEJ</div>
      <div>HEJ</div>
      <div>HEJ</div>
    </div>
  )
}

export default ProgressBar
