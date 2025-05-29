const Location = () => {
    return (
        <div className="mt-9 flex flex-row justify-center gap-4 h-[300px]">
            <div className="flex-1 ms-4 h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473438.9969772919!2d96.17213935554165!3d22.02118816507834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cc9950b7810da1%3A0x44a13047a9d1106!2sPyinoolwin!5e0!3m2!1sen!2smm!4v1748536154589!5m2!1sen!2smm"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md h-full w-full"
                ></iframe>
            </div>
            <div className="flex-1 flex flex-col gap-4 h-full justify-center bg-white dark:bg-gray-900 rounded-md p-4">
                <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l6 6-6 6M21 7l-6 6 6 6" />
                    </svg>
                    Bar Nyar Shop
                </h1>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m5-9v9m4-9v9m4-9l2 9" />
                    </svg>
                    <span>123 Main Street, Pyinoolwin</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4v8" />
                    </svg>
                    <span>+95 9 123 456 789</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.764 7.528A2 2 0 0115 22H9a2 2 0 01-1.789-1.578l-3.764-7.528A2 2 0 013.236 10H8" />
                    </svg>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Facebook Page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Location;
