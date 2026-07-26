import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('advisor');
  const [cropData, setCropData] = useState({ location: 'Swat', soil_type: 'Loamy', season: 'Kharif', water: 'Moderate' });
  const [advisorResult, setAdvisorResult] = useState('');
  const [loadingAdvisor, setLoadingAdvisor] = useState(false);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Mock Market Prices Data
    setPrices([
      { crop: "Wheat (گندم)", city: "Multan", price: "Rs. 3,900 / 40kg", trend: "Stable" },
      { crop: "Rice Basmati (چاول)", city: "Gujranwala", price: "Rs. 9,500 / 40kg", trend: "+2.1%" },
      { crop: "Maize (مکئی)", city: "Sahiwal", price: "Rs. 2,450 / 40kg", trend: "-1.0%" },
      { crop: "Cotton (کپاس)", city: "Bahawalpur", price: "Rs. 8,250 / 40kg", trend: "+1.5%" }
    ]);
  }, []);

  const handleAdvisorSubmit = (e) => {
    e.preventDefault();
    setLoadingAdvisor(true);
    setTimeout(() => {
      setAdvisorResult(`### Recommended Crops for ${cropData.location}:
1. **Maize / Corn:** Excellent yield in ${cropData.season} season for ${cropData.soil_type} soil.
2. **Rice (Basmati):** Highly suitable with ${cropData.water} water supply.
3. **Seasonal Vegetables:** Tomato, Chili, Cucumber.

### Fertilizer Recommendation:
- Apply NPK 20-20-20 during land preparation.

### Irrigation Advice:
- Maintain moderate moisture throughout the crop lifecycle.`);
      setLoadingAdvisor(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-green-700 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🌾 Agri Assistant Pakistan</h1>
          <span className="bg-green-800 text-xs px-3 py-1 rounded-full border">AI-Smart Farming</span>
        </div>
      </header>

      <div className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto flex space-x-4 p-2 overflow-x-auto">
          {['advisor', 'market', 'weather'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold capitalize ${activeTab === tab ? 'text-green-700 border-b-2 border-green-600' : 'text-gray-600'}`}
            >
              {tab === 'advisor' ? '⭐ AI Crop Advisor' : tab === 'market' ? '📊 Market Prices' : '🌤️ Weather'}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-4xl mx-auto p-6">
        {activeTab === 'advisor' && (
          <div className="grid md:grid-cols-2 gap-6">
            <form onSubmit={handleAdvisorSubmit} className="bg-white p-6 rounded-xl shadow border space-y-4">
              <h2 className="text-lg font-bold text-green-700">Crop Recommendation Form</h2>
              <div>
                <label className="block text-sm font-semibold">City/District</label>
                <input
                  type="text"
                  value={cropData.location}
                  onChange={(e) => setCropData({ ...cropData, location: e.target.value })}
                  className="w-full p-2 border rounded mt-1"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-bold">
                {loadingAdvisor ? 'Analyzing...' : 'Get Recommendation'}
              </button>
            </form>

            <div className="bg-white p-6 rounded-xl shadow border">
              <h2 className="text-lg font-bold text-green-700 mb-2">AI Advice</h2>
              <div className="text-sm whitespace-pre-line text-gray-800">{advisorResult || 'Submit form to get AI recommendations.'}</div>
            </div>
          </div>
        )}

        {activeTab === 'market' && (
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-lg font-bold text-green-700 mb-4">Live Mandi Prices</h2>
            <div className="space-y-2">
              {prices.map((p, i) => (
                <div key={i} className="flex justify-between border-b py-2">
                  <span className="font-semibold">{p.crop} ({p.city})</span>
                  <span className="text-green-800 font-bold">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
