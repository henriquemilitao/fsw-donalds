import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'

import { formatCurrency } from '@/helpers/format-currency'

interface ProductsProps {
  products: Product[]
}

const Products = ({ products }: ProductsProps) => {
  const { slug } = useParams()
  const searchParams = useSearchParams()
  const consumptionMethod = searchParams.get('consumptionMethod')
  const cpf = searchParams.get('cpf')

  return (
    <div className="space-y-3 px-1.5">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}${cpf ? `&cpf=${cpf}` : ''}`}
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-muted-foregroung line-clamp-2 text-sm">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {formatCurrency(product.price)}
            </p>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Products
