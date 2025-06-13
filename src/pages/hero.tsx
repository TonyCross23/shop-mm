import Avert from "../components/avert";
import { motion } from "motion/react"

const items = [
  "Free Delivery",
  "Gift Voucher",
  "Money Back",
  "Free Support",
];

const Hero = () => {
  return (
    <motion.div 
        initial={{opacity: 0, x: "-100%"}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2}}  
        className="mt-10 flex flex-row w-full mx-auto md:max-w-[1600px] max-w-2xl px-1 cursor-pointer">
      {items.map((item, index) => (
        <Avert key={index} item={item} index={index} items={items} />
      ))}
    </motion.div>
  );
};

export default Hero;
