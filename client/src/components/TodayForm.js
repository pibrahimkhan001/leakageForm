import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TodayForm = () => {
  const [forms, setForms] = useState([]);
  const [actualCounts, setActualCounts] = useState({});

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Fetch forms for today's date
    fetch(`http://localhost:5000/api/forms/today?date=${today}`)
      .then(response => response.json())
      .then(data => setForms(data))
      .catch(error => console.error('Error fetching today’s forms:', error));
  }, []);

  const handleInputChange = (index, event) => {
    const updatedActualCounts = { ...actualCounts };
    updatedActualCounts[index] = event.target.value;
    setActualCounts(updatedActualCounts);
  };

  const handleSubmit = (form, index) => {
    const updatedForm = { ...form, actualCount: actualCounts[index], status: 'pending' };

    fetch('http://localhost:5000/api/forms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedForm),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully:', data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>SKU Name</TableCell>
              <TableCell>Reject Count</TableCell>
              <TableCell>Actual Count</TableCell>
              <TableCell>Total Count</TableCell>
              <TableCell>Operation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forms.map((form, index) => (
              <TableRow key={index}>
                <TableCell>{form.date}</TableCell>
                <TableCell>{form.skuName}</TableCell>
                <TableCell>{form.rejectCount}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={actualCounts[index] || ''}
                    onChange={(event) => handleInputChange(index, event)}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>{form.totalCount}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmit(form, index)}
                  >
                    Submit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TodayForm;
