import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class TakeMoney extends React.Component {
  onToken = (token) => {
    // Set the amount you want to charge (in pence)
    const amount = 1000; // £10

    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokenID: token.id,
        amount: amount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Payment response:', data);
        alert(`We are in business, ${token.email}`);
        // Redirect to the success page
        window.location.href = '/success';
      })
      .catch((error) => {
        console.error('Payment error:', error);
      });
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <StripeCheckout
          token={this.onToken}
          stripeKey={process.env.STRIPE_PUBLIC_KEY}
          name="Pazar Checkout" // the pop-in header title
          description="Pay for your order" // the pop-in header subtitle
          currency="GBP"
          amount={1000} // Amount in pence (£10)
          email={true}
        >
          <button className="btn btn-primary">Pay With Card</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default TakeMoney;
