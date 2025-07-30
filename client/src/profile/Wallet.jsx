import React, { useState, useEffect } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState('');

  useEffect(() => {
    // Simulate fetching wallet balance (API call in real app)
    const fetchWalletBalance = async () => {
      const mockBalance = 250; // ₹250
      setTimeout(() => {
        setBalance(mockBalance);
      }, 500);
    };

    fetchWalletBalance();
  }, []);

  const handleAddFunds = (e) => {
    e.preventDefault();

    const amount = parseFloat(amountToAdd);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Simulate API call to add funds
    setBalance(prev => prev + amount);
    setAmountToAdd('');
    alert(`₹${amount} added to wallet`);
  };

  return (
    <div className="wallet-container">
      <h2>My Wallet</h2>
      <div className="wallet-balance">
        <p>Current Balance: <strong>₹{balance.toFixed(2)}</strong></p>
      </div>

      <form onSubmit={handleAddFunds} className="add-funds-form">
        <input
          type="number"
          placeholder="Enter amount"
          value={amountToAdd}
          onChange={(e) => setAmountToAdd(e.target.value)}
        />
        <button type="submit">Add Funds</button>
      </form>
    </div>
  );
};

export default Wallet;
