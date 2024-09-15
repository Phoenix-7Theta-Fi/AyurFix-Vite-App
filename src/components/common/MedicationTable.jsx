import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';

// Dummy data
const medicationData = [
  { id: 1, name: 'Ashwagandha', type: 'Herbal', dosage: '500mg', adherence: 'Yes', effects: 'Reduced anxiety, improved sleep' },
  { id: 2, name: 'Vitamin D', type: 'Supplement', dosage: '2000 IU', adherence: 'No', effects: 'N/A' },
  { id: 3, name: 'Turmeric', type: 'Herbal', dosage: '1000mg', adherence: 'Yes', effects: 'Reduced inflammation' },
  { id: 4, name: 'Omega-3', type: 'Supplement', dosage: '1000mg', adherence: 'Yes', effects: 'Improved heart health' },
];

const MedicationTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="medication table">
        <TableHead>
          <TableRow>
            <TableCell>Medication Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Dosage</TableCell>
            <TableCell>Adherence</TableCell>
            <TableCell>Effects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medicationData.map((med) => (
            <TableRow key={med.id}>
              <TableCell>{med.name}</TableCell>
              <TableCell>{med.type}</TableCell>
              <TableCell>{med.dosage}</TableCell>
              <TableCell>
                {med.adherence === 'Yes' ? (
                  <Chip label="Adhered" color="success" />
                ) : (
                  <Chip label="Missed" color="error" />
                )}
              </TableCell>
              <TableCell>{med.effects}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MedicationTable;
