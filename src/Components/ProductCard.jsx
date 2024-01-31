import React from 'react';

const ProductCard = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Products</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Digidukan: Where AI meets the ecommerce</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="src/assets/displayCard1.png" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Products</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shoes</h1>
                                    <p className="leading-relaxed">Short description</p>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded" onClick={() => window.location.href = 'https://ai-threads.vercel.app/'}>
                                        Try Now
                                    </button>


                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="src/assets/displayCard4.png" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Products</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shoes</h1>
                                    <p className="leading-relaxed">Short description</p>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">Try Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="src/assets/displayCard1.png" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Products</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shoes</h1>
                                    <p className="leading-relaxed">Short desc</p>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">Try Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="src/assets/displayCard2.png" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Products</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shoes</h1>
                                    <p className="leading-relaxed">Short desc</p>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">Try Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="src/assets/displayCard3.png" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Products</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shoes</h1>
                                    <p className="leading-relaxed">Short desc</p>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">Try Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="src/assets/displayCard4.png" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Products</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shoes</h1>
                                    <p className="leading-relaxed">Short desc</p>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">Try Now</button>
                                </div>

                            </div>
                        </div>
                        {/* Add more product cards here */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;
