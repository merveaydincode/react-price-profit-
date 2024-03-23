import React, { useState } from 'react';
import './App.css'; 

const SalesPriceCalculator = () => {
  const [costPrice, setCostPrice] = useState('');
  const [profitMargin, setProfitMargin] = useState('');
  const [salesPrice, setSalesPrice] = useState('');

  const handleCostPriceChange = (event) => {
    setCostPrice(event.target.value);
  };

  const handleProfitMarginChange = (event) => {
    setProfitMargin(event.target.value);
  };

  const calculateSalesPrice = () => {
    if (costPrice === '' || profitMargin === '') {
      alert('Lütfen fiyat ve kar oranı bilgilerini girin.');
      return;
    }

    const cost = parseFloat(costPrice);
    const margin = parseFloat(profitMargin);

    if (isNaN(cost) || isNaN(margin)) {
      alert('Geçerli bir fiyat veya kar oranı girin.');
      return;
    }

    const calculatedPrice = cost * (1 + margin / 100);
    setSalesPrice(calculatedPrice.toFixed(2));
  };

  const handleSalesPriceChange = (event) => {
    setSalesPrice(event.target.value);
  };

  return (
    <div className="sales-price-calculator-container">
      <div>
        <label>
          Fiyat:&ensp;
          <input
            type="text"
            value={costPrice}
            onChange={handleCostPriceChange}
            placeholder="Fiyatı girin "
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Kar Oranı (%):&ensp;
          <input
            type="text"
            value={profitMargin}
            onChange={handleProfitMarginChange}
            placeholder="Kar oranını girin "
          />
        </label>
      </div>
      <br />
      <button onClick={calculateSalesPrice}>Hesapla</button>
      <br />
      <div>
        <label>
          Satış Fiyatı:&ensp;
          <input
            type="text"
            value={salesPrice}
            onChange={handleSalesPriceChange}
            placeholder="Satış fiyatını girin "
            readOnly
          />
        </label>
      </div>
    </div>
  );
};

export default SalesPriceCalculator;
