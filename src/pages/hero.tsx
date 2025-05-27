import Avert from "../components/avert";

const items = [
  "Free Delivery",
  "Gift Voucher",
  "Money Back",
  "Free Support",
];

const Hero = () => {
  return (
    <div className="mt-4 flex flex-row w-full mx-auto md:max-w-[1600px] max-w-2xl px-1 cursor-pointer">
      {items.map((item, index) => (
        <Avert key={index} item={item} index={index} items={items} />
      ))}
    </div>
  );
};

export default Hero;
