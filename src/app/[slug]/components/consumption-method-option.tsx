'use client'

import { ConsumptionMethod } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ConsumptionMethodOptionProps {
  imageUrl: string
  imageAlt: string
  buttonText: string
  option: ConsumptionMethod
  slug: string
}

const ConsumptionMethodOption = ({
  imageUrl,
  imageAlt,
  buttonText,
  option,
  slug,
}: ConsumptionMethodOptionProps) => {
  const cpf = useSearchParams().get('cpf')

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image src={imageUrl} width={78} height={80} alt={imageAlt} />
        </div>

        <Button variant="secondary" className="rounded-full" asChild>
          <Link
            href={`${slug}/menu?consumptionMethod=${option}${cpf ? `&cpf=${cpf}` : ''}`}
          >
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default ConsumptionMethodOption
