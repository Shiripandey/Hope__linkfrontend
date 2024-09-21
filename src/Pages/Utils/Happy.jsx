import React, { useEffect } from 'react';

const Happy = () => {
    useEffect(() => {
        // Apply the transition to the "Thank You" message on component mount
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.classList.add('show');
    }, []);

    return (
        <div style={{ fontFamily: "'Roboto', sans-serif", margin: 0, padding: 0, backgroundColor: '#f4f4f9' }}>
            {/* Header Section */}
            <div className="thank-you" id="thank-you-message" style={{ textAlign: 'center', fontSize: '3rem', color: '#2c3e50', marginTop: '50px', transition: 'transform 1s ease-in-out, opacity 1s ease-in-out', opacity: 0, transform: 'scale(0.5)' }}>
                Hi, Thank You for Making a Choice of Donation!
            </div>

            {/* Donation Sections */}
            <div className="donation-section" style={{ display: 'flex', justifyContent: 'space-around', padding: '50px 20px', textAlign: 'center' }}>
                
                {/* Books Section */}
                <div className="donation-box" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '25%', padding: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1585032151677-52c8732050a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJvb2t8ZW58MHx8fHwxNjY4NDA4NzI4&ixlib=rb-1.2.1&q=80&w=400" alt="Donate Books" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                    <h3 style={{ color: '#34495e', marginTop: '15px', fontSize: '1.5rem' }}>Donate Books</h3>
                    <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>"A book is a gift you can open again and again." - Garrison Keillor</p>
                    <a href="thankyou.html" className="donate-button" style={{ display: 'inline-block', marginTop: '15px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>Donate Books</a>
                </div>

                {/* Clothes Section */}
                <div className="donation-box" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '25%', padding: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1617003658344-b84da28d3b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxuZXclMjBjbG90aGV8ZW58MHx8fHwxNjY4NDA5MTk4&ixlib=rb-1.2.1&q=80&w=400" alt="Donate Clothes" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                    <h3 style={{ color: '#34495e', marginTop: '15px', fontSize: '1.5rem' }}>Donate Clothes</h3>
                    <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>"Clothes mean nothing until someone lives in them." - Marc Jacobs</p>
                    <a href="thankyou.html" className="donate-button" style={{ display: 'inline-block', marginTop: '15px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>Donate Clothes</a>
                </div>

                {/* Food Section */}
                <div className="donation-box" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '25%', padding: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1603194023651-0b2c9d4f06f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvb2QlMjBhbHR8ZW58MHx8fHwxNjY4NDA5MTc0&ixlib=rb-1.2.1&q=80&w=400" alt="Donate Food" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                    <h3 style={{ color: '#34495e', marginTop: '15px', fontSize: '1.5rem' }}>Donate Food</h3>
                    <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>"We rise by lifting others, especially those in need of a meal." - Anonymous</p>
                    <a href="thankyou.html" className="donate-button" style={{ display: 'inline-block', marginTop: '15px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none', transition: 'background-color 0.3s ease' }}>Donate Food</a>
                </div>
            </div>
        </div>
    );
};

export default Happy;
