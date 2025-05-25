import { ShoppingBag } from "lucide-react"

const Hero = () => {
  return (
    <div className="mt-4 flex flex-row items-center justify-center h-full p-6">
      <p className="border py-5 px-28 text-black font-semibold border-red-300 rounded-tl-2xl rounded-bl-2xl flex">
        <ShoppingBag className="inline mr-2 text-red-300" />
        <span>Fresh Delivery</span>
      </p>
      <p className="border py-5 px-28 text-black font-semibold border-red-300 flex">
        <ShoppingBag className="inline mr-2 text-red-300"/>
        <span>Gift Voucher</span>
      </p>
      <p className="border py-5 px-28 text-black font-semibold border-red-300 flex">
        <ShoppingBag className="inline mr-2 text-red-300"/>
        <span>Money Back</span>
      </p>
      <p className="border py-5 px-28 text-black font-semibold border-red-300 rounded-tr-2xl rounded-br-2xl flex">
        <ShoppingBag className="inline mr-2 text-red-300" />
        <span>Free Support</span>
      </p>
    </div>
  )
}

export default Hero
