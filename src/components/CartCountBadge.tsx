import React from 'react'
import { useCartContext } from './CartContext';

interface propstype{
    size:string;
}

const CartCountBadge: React.FC<propstype> = ({size}) => {
  const {product} = useCartContext();
  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-0 -top-0 rounded-full grid place-items-center`}>
      {product.length}
    </div>
  )
}

export default CartCountBadge
