import React from 'react'
import { ShoppingBag } from 'lucide-react'

interface AvertProps {
  item: string;
  index: number;
  items: string[];
}

const Avert: React.FC<AvertProps> = ({item,items, index}) => {
  return (
<div
          key={index}
          className={`
            flex items-center justify-center gap-2 md:gap-2 py-2 md:py-5 md:text-md text-sm text-black dark:text-white font-semibold 
            border border-red-600
            flex-1
            flex-col
            md:flex-row
            ${index === 0 ? 'rounded-l-2xl' : ''}
            ${index === items.length - 1 ? 'rounded-r-2xl' : ''}
            ${index !== 0 ? 'border-l-0' : ''}
          `}
        >
          <ShoppingBag className="text-red-600" />
          <span className="">{item}</span>
        </div>
  )
}

export default Avert
