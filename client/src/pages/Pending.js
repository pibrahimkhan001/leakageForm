import React from 'react';

function Pending() {
  const pendingDates = ['2024-07-31', '2024-08-01']; // Example data

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pending Forms</h2>
      <ul className="list-disc pl-5">
        {pendingDates.map((date, index) => (
          <li key={index} className="mb-2">
            <span>{date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pending;