import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {

  const cart = useSelector(store => store.cart)
  console.log(cart)

  return (
    <div>
      {cart.length}
    </div>
  )
}
