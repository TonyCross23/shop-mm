import promoData from "../data/promoData.json"
import {motion} from "motion/react"

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: "easeInOut" as const,
}

const PromoBanners = () => {
  return (
    <>
      <h4 className="text-center font-extrabold text-3xl dark:text-white">Discount Products</h4>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 px-4">
        {promoData.map((item) => {
          // Single Banner
          if (item.type === "single") {
            return (
              <motion.div
                initial={{opacity: 0, x: "-100%"}}
                whileInView={{opacity: 1, x: 0}}
                transition={transition}  
                exit={{ opacity: 0 }}
                key={item.id}
                className={`relative ${item.bg} rounded-lg overflow-hidden ${item.height}`}
              >
                <img
                  src={item.img}
                  alt={item.subtitle}
                  className="object-cover w-full h-full"
                />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <h2 className="text-2xl font-extrabold mt-2">{item.subtitle}</h2>
                </div>
              </motion.div>
            );
          }

          // Grouped Banners (Flex Column)
          if (item.type === "group") {
            return (
              <motion.div
                        initial={{opacity: 0, scale: 0}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 2}} 
               key={item.id} className="flex flex-col gap-3">
                {item.items?.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`relative ${subItem.bg} rounded-lg overflow-hidden ${subItem.height}`}
                  >
                    <img
                      src={subItem.img}
                      alt={subItem.subtitle}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
                      <h3 className="text-lg font-bold">{subItem.title}</h3>
                      <h2 className="text-2xl font-extrabold mt-2">{subItem.subtitle}</h2>
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
};

export default PromoBanners;

