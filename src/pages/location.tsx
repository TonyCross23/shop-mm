const Location = () => {
    return (
        <div id="contact" className="mt-9 flex justify-center gap-4 h-[500px]">
            <div className="flex-1 h-full flex px-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473438.9969772919!2d96.17213935554165!3d22.02118816507834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cc9950b7810da1%3A0x44a13047a9d1106!2sPyinoolwin!5e0!3m2!1sen!2smm!4v1748536154589!5m2!1sen!2smm"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md h-2/4 w-full"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
