'use client'

import { Product } from '@prisma/client'
import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

interface ProductHeaderProps {
  product: Pick<Product, 'name' | 'imageUrl'>
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()
  const cpf = useSearchParams().get('cpf')

  const handleOrdersClick = () =>
    router.push(`/${slug}/orders${cpf ? `?cpf=${cpf}` : ''}`)

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="relative min-h-[300px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBack}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-contain"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  )
}

export default ProductHeader
