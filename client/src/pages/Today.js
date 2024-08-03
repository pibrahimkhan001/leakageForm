import React, { useState } from 'react';

function Today() {
  const [formData, setFormData] = useState({
    date: '2024-08-03',
    values: ['', '', '', '', '', '', ''],
  });

  const handleInputChange = (index, value) => {
    const newValues = [...formData.values];
    newValues[index] = value;
    setFormData({ ...formData, values: newValues });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Disable form after submission
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Enter Today's Values</h2>
      <form onSubmit={handleSubmit}>
        {formData.values.map((value, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">Value {index + 1}</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Today;