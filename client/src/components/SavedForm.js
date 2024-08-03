import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SavedForm = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // Fetch saved forms
    fetch('http://localhost:5000/api/forms/saved')
      .then(response => response.json())
      .then(data => setForms(data));
  }, []);

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
            </TableRow>
          </TableHead>
          <TableBody>
            {forms.map((form, index) => (
              <TableRow key={index}>
                <TableCell>{form.date}</TableCell>
                <TableCell>{form.skuName}</TableCell>
                <TableCell>{form.rejectCount}</TableCell>
                <TableCell>{form.actualCount}</TableCell>
                <TableCell>{form.totalCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SavedForm;
