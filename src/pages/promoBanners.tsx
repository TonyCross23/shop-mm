import promoData from "../data/promoData.json"

const PromoBanners = () => {
  return (
    <>
      <h4 className="text-center font-extrabold text-3xl">Discount Products</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 px-4">
        {promoData.map((item) => {
          // Single Banner
          if (item.type === "single") {
            return (
              <div
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
              </div>
            );
          }

          // Grouped Banners (Flex Column)
          if (item.type === "group") {
            return (
              <div key={item.id} className="flex flex-col gap-4">
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
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
};

export default PromoBanners;

