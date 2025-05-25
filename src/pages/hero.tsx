import { ShoppingBag } from "lucide-react";

const items = [
  "Free Delivery",
  "Gift Voucher",
  "Money Back",
  "Free Support",
];

const Hero = () => {
  return (
    <div className="mt-4 flex flex-row w-full mx-auto md:max-w-6xl max-w-2xl px-1">
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            flex items-center justify-center gap-2 md:gap-2 py-2 md:py-5 md:text-md text-sm text-black font-semibold 
            border border-red-300
            flex-1
            flex-col
            md:flex-row
            ${index === 0 ? 'rounded-l-2xl' : ''}
            ${index === items.length - 1 ? 'rounded-r-2xl' : ''}
            ${index !== 0 ? 'border-l-0' : ''}
          `}
        >
          <ShoppingBag className="text-red-300" />
          <span className="">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Hero;
