import React from 'react';


const ProductPage = () => {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
            <section className="product-section" style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img src="src/assets/displayCard1.png" alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="content-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#fff', textAlign: 'center' }}>
                    {/* Add your content here */}
                    
                    {/* Points to the left */}
                    <div className="left-content" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'black' }}>
                    <h1 style={{ marginBottom: '10px' }}>Product Name</h1>
                    <p style={{ marginBottom: '20px' }}>Description goes here</p>
                    <button style={{ marginBottom: '30px' }}>Buy Now</button>
                    </div>
                    {/* Points to the right */}
                    <div className="right-content" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'black' }}>
                    <h1 style={{ marginBottom: '10px' }}>Product Name</h1>
                    <p style={{ marginBottom: '20px' }}>Description goes here</p>
                    <button style={{ marginBottom: '30px' }}>Buy Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;

