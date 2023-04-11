import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

console.log('Stripe Public Key:', process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {
    const handleClick = async () => {
        const stripe = await stripePromise;
      
        console.log('Fetching /create-checkout-session');
      
        const response = await fetch('http://localhost:3000/api/create-checkout-session', {
          method: 'POST',
        });
      
        console.log('Received response from /create-checkout-session');
        console.log('Response:', response);
      
        const sessionData = await response.json();
        console.log('Session Data:', sessionData);
      
        const sessionId = sessionData.sessionId; // Access sessionId from the sessionData object
      
        if (sessionId) {
          const result = await stripe.redirectToCheckout({
            sessionId: sessionId,
          });
      
          if (result.error) {
            console.error(result.error.message);
          }
        } else {
          console.error('Error: Session ID not found');
        }
      };
      
      
      

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        style={{
          border: 'none',
          width: 120,
          borderRadius: 5,
          padding: '20px',
          backgroundColor: 'lightgray',
          color: 'white',
          fontWeight: '600',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
