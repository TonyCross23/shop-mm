const Location = () => {
    return (
        <div id="contact" className="mt-9 flex flex-row justify-center gap-4 h-[500px]">
            <div className="flex-1 h-full flex">
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
            <form
                className="flex-1 flex flex-col gap-4 h-full justify-center bg-white dark:bg-gray-900 rounded-md p-4"
                style={{ minHeight: 0 }}
                onSubmit={(e) => {
                    e.preventDefault();
                    // Add your email sending logic here
                }}
            >
                <h1 className="text-2xl font-bold flex items-center justify-center gap-2 text-gray-900 dark:text-gray-100">
                    Contact Us
                </h1>
                <label className="flex flex-col gap-1 text-gray-700 dark:text-gray-300">
                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-gray-100"
                    />
                </label>
                <label className="flex flex-col gap-1 text-gray-700 dark:text-gray-300">
                    Email
                    <input
                        type="email"
                        name="email"
                        required
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-gray-100"
                    />
                </label>
                <label className="flex flex-col gap-1 text-gray-700 dark:text-gray-300">
                    Content
                    <textarea
                        name="content"
                        required
                        rows={4}
                        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-gray-100"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Send Email
                </button>
            </form>
        </div>
    );
};

export default Location;
