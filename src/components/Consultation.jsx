// src/components/Consultation.jsx

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
  Avatar,
  Rating,
  Modal,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Dummy data
const practitioners = [
  {
    id: 1,
    name: 'Dr. Anika Sharma',
    specialty: 'Ayurvedic Medicine',
    experience: '10 years',
    rating: 4.5,
    consultationType: ['Video', 'In-Person'],
    fee: '$100',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Mr. Rohan Verma',
    specialty: 'Yoga Coach',
    experience: '8 years',
    rating: 4.7,
    consultationType: ['Video'],
    fee: '$80',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Ms. Priya Kaur',
    specialty: 'Meditation Guide',
    experience: '5 years',
    rating: 4.8,
    consultationType: ['Video', 'In-Person'],
    fee: '$90',
    photo: 'https://via.placeholder.com/150',
  },
  // Add more practitioners as needed
];

const Consultation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSpecialty = (e) => {
    setFilterSpecialty(e.target.value);
  };

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const handleSortOption = (e) => {
    setSortOption(e.target.value);
  };

  const handleBookAppointment = (practitioner) => {
    // Navigate to appointment booking page with practitioner details
    navigate('/calendar', { state: { practitioner } });
  };

  // Filter and sort practitioners based on search and filters
  const filteredPractitioners = practitioners
    .filter((pract) =>
      pract.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((pract) =>
      filterSpecialty ? pract.specialty === filterSpecialty : true
    )
    .filter((pract) =>
      filterType ? pract.consultationType.includes(filterType) : true
    )
    // Add language filter if applicable
    .sort((a, b) => {
      if (sortOption === 'rating') {
        return b.rating - a.rating;
      } else if (sortOption === 'experience') {
        const expA = parseInt(a.experience);
        const expB = parseInt(b.experience);
        return expB - expA;
      } else if (sortOption === 'fee') {
        const feeA = parseInt(a.fee.replace('$', ''));
        const feeB = parseInt(b.fee.replace('$', ''));
        return feeA - feeB;
      } else {
        return 0;
      }
    });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Find Your Practitioner
      </Typography>

      {/* Search and Filters */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel>Specialty</InputLabel>
            <Select
              value={filterSpecialty}
              label="Specialty"
              onChange={handleFilterSpecialty}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Ayurvedic Medicine">Ayurvedic Medicine</MenuItem>
              <MenuItem value="Yoga Coach">Yoga Coach</MenuItem>
              <MenuItem value="Meditation Guide">Meditation Guide</MenuItem>
              {/* Add more specialties as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel>Consultation Type</InputLabel>
            <Select
              value={filterType}
              label="Consultation Type"
              onChange={handleFilterType}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Video">Video</MenuItem>
              <MenuItem value="In-Person">In-Person</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Add Language Filter if applicable */}
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              label="Sort By"
              onChange={handleSortOption}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="experience">Experience</MenuItem>
              <MenuItem value="fee">Fee</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Practitioner List */}
      <Grid container spacing={3}>
        {filteredPractitioners.map((pract) => (
          <Grid item xs={12} md={6} key={pract.id}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      alt={pract.name}
                      src={pract.photo}
                      sx={{ width: 80, height: 80 }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6">{pract.name}</Typography>
                    <Typography variant="body2">{pract.specialty}</Typography>
                    <Typography variant="body2">
                      Experience: {pract.experience}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={pract.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2">Fee: {pract.fee}</Typography>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => handleBookAppointment(pract)}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {filteredPractitioners.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No practitioners found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Consultation;
