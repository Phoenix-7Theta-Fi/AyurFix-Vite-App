import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

// Dummy data
const labTests = [
  { id: 1, name: 'Dosha Imbalance Test', type: 'Ayurvedic', description: 'Measures Dosha balance.', cost: '$50' },
  { id: 2, name: 'Complete Blood Count', type: 'General', description: 'Assess overall health.', cost: '$100' },
  { id: 3, name: 'Thyroid Panel', type: 'Specialized', description: 'Evaluate thyroid function.', cost: '$150' },
  // Add more tests as needed
];

const LabTests = () => {
  const [selectedTest, setSelectedTest] = useState('');
  const [open, setOpen] = useState(false);
  const [uploadedResults, setUploadedResults] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTestChange = (e) => {
    setSelectedTest(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // For prototyping, we'll just add a dummy result
    const file = e.target.elements.file.files[0];
    if (file) {
      setUploadedResults([
        ...uploadedResults,
        { id: uploadedResults.length + 1, testName: selectedTest, fileName: file.name, date: new Date().toLocaleDateString() },
      ]);
      handleClose();
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lab Tests
      </Typography>

      <Grid container spacing={3}>
        {/* Lab Test Types */}
        <Grid item xs={12}>
          <Typography variant="h6">Select Lab Test</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {labTests.map((test) => (
              <Grid item xs={12} md={4} key={test.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{test.name}</Typography>
                    <Typography variant="body2">{test.description}</Typography>
                    <Typography variant="body2">Type: {test.type}</Typography>
                    <Typography variant="body2">Cost: {test.cost}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={handleOpen}
                      disabled={!test.name}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Modal for Booking a Test */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Schedule a Test
            </Typography>
            <form onSubmit={handleUpload}>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Test Type</InputLabel>
                <Select
                  value={selectedTest}
                  label="Test Type"
                  onChange={handleTestChange}
                  required
                >
                  {labTests.map((test) => (
                    <MenuItem key={test.id} value={test.name}>
                      {test.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Select Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                sx={{ mt: 2 }}
                required
              />
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Location</InputLabel>
                <Select label="Location" required>
                  <MenuItem value="Clinic">Clinic</MenuItem>
                  <MenuItem value="Home">Home</MenuItem>
                  <MenuItem value="Lab">Lab</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                Confirm Booking
              </Button>
            </form>
          </Box>
        </Modal>

        {/* Test Result Upload */}
        <Grid item xs={12}>
          <Typography variant="h6">Upload Test Results</Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 1 }} component={Link} to="#">
            Upload Results
          </Button>
          {/* Implement file upload functionality as needed */}
        </Grid>

        {/* Test Results Dashboard */}
        <Grid item xs={12}>
          <Typography variant="h6">Your Test Results</Typography>
          <TableContainer component={Paper} sx={{ mt: 1 }}>
            <Table aria-label="test results table">
              <TableHead>
                <TableRow>
                  <TableCell>Test Name</TableCell>
                  <TableCell>File Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {uploadedResults.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell>{result.testName}</TableCell>
                    <TableCell>{result.fileName}</TableCell>
                    <TableCell>{result.date}</TableCell>
                    <TableCell>
                      <Button variant="outlined" color="primary">
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {uploadedResults.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No test results uploaded.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Insights and Recommendations */}
        <Grid item xs={12}>
          <Typography variant="h6">AI Insights and Recommendations</Typography>
          <Card sx={{ mt: 1 }}>
            <CardContent>
              <Typography variant="body1">
                Your cholesterol levels have improved over the past three months, but your blood sugar remains elevated.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Detailed Insights
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Post-Test Consultation */}
        <Grid item xs={12}>
          <Typography variant="h6">Consultation Based on Test Results</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 1 }} component={Link} to="/consultation">
            Book Follow-Up Consultation
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LabTests;
