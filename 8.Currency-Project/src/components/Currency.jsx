import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_IvwuFHKua44EmjlPDC1ps65FIRG6BKXuX4HP9BBv";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="bg-slate-100 px-8 py-8 ">
      <div className="text-center mb-8">
        <h1 className="text-xl text-slate-900 font-medium">
          Doviz Kuru Uygulamasi
        </h1>
      </div>
      <div className="flex justify-between space-x-2 mb-4">
        <input
        value={amount == 0 ? fromCurrency : amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="outline-none px-2.5 py-1.5 text-slate-900 placeholder-opacity-80 border border-gray-300 rounded-md"
          placeholder={fromCurrency}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          onChange={(e) => setResult(e.target.value)}
          type="number"
          name="result"
          value={result == 0 ? toCurrency : result}
          className="outline-none px-2.5 py-1.5 text-slate-900 placeholder-opacity-80 border border-gray-300 rounded-md"
          placeholder={toCurrency}
        />
      </div>
      <div className="text-center">
        <button
          onClick={exchange}
          className="bg-blue-500 hover:bg-blue-400 transition-all duration-75 px-2.5 py-1.5 text-white  rounded-md "
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default Currency;
