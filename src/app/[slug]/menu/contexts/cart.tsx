'use client'

import { Product } from '@prisma/client'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface CartProduct
  extends Pick<Product, 'id' | 'name' | 'price' | 'imageUrl'> {
  quantity: number
}

export interface ICartContext {
  isOpen: boolean
  products: CartProduct[]
  total: number,
  toggleCart: () => void
  addProduct: (product: CartProduct) => void
  decreaseProductQuantity: (product: string) => void
  increaseProductQuantity: (product: string) => void
  removeProduct: (product: string) => void
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  total: 0,
  toggleCart: () => {},
  addProduct: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProduct: () => {},
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const toggleCart = () => {
    setIsOpen((prev) => !prev)
  }

  const addProduct = (product: CartProduct) => {
    const productIsAlreadyOnTheCart = products.some(
      (prevProduct) => prevProduct.id === product.id
    )
    if (!productIsAlreadyOnTheCart) {
      return setProducts((prev) => [...prev, product])
    }

    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (product.id === prevProduct.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          }
        }
        return prevProduct
      })
    })
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === productId && prevProduct.quantity > 1) {
          return { ...prevProduct, quantity: prevProduct.quantity - 1 }
        }
        return prevProduct
      })
    })
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === productId) {
          return { ...prevProduct, quantity: prevProduct.quantity + 1 }
        }
        return prevProduct
      })
    })
  }

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((prevProduct) => prevProduct.id !== productId)
    })
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        total,
        toggleCart,
        addProduct,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
