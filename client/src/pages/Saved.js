import React, { useState } from 'react';

function Saved() {
  const [savedData, setSavedData] = useState([
    { date: '2024-07-31', values: ['0002', '0002', '0002', '0002', '0002', '0002', '0002'] },
    { date: '2024-08-01', values: ['0003', '0003', '0003', '0003', '0003', '0003', '0003'] },
  ]);

  const handleEdit = (index, newValue, valueIndex) => {
    const newData = [...savedData];
    newData[index].values[valueIndex] = newValue;
    setSavedData(newData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Saved Forms</h2>
      {savedData.map((entry, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
          <h3 className="font-semibold">Date: {entry.date}</h3>
          {entry.values.map((value, valueIndex) => (
            <div key={valueIndex} className="mt-2">
              <label className="block mb-1">Value {valueIndex + 1}</label>
              <input
                type="text"
                value={value}
                onChange={(e) => handleEdit(index, e.target.value, valueIndex)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Saved;