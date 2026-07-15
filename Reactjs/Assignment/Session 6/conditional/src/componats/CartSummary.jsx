import React from 'react'

function CartSummary() {
    const cartItems = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
  ];
  return (
    <div>
        <h2>CartSummary</h2>
        {cartItems.length === 0 ?(
            <p>Cart empty</p>
        ):(

                <div>
                    <ul>
                        {cartItems.map((item,i) => (
                            <li key={i}>
                                {item.name} - {item.price}
                            </li>
                        ))}
                    </ul>

                    {cartItems.length >= 3 && (
                        <button>Checkout Now</button>
                    )}
                </div>

        )}
    </div>
  );
}

export default CartSummary