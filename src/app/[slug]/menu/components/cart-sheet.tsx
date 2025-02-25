'use client'

import { useContext } from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { CartContext } from '../contexts/cart'

const CartSheet = () => {
  const { toggleCart, isOpen, products } = useContext(CartContext)

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Lindao</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        {products.map((product) => (
          <h2 key={product.id}>
            {product.name} - {product.quantity}
          </h2>
        ))}
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
