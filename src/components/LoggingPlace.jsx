import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoggingPlace = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    diet: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    yoga: '',
    workout: '',
    meditation: '',
    rituals: '',
    medication: '',
    testResults: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For prototyping, we'll just log the form data. In a real app, you'd send this to the backend.
    console.log('Logged Data:', formData);
    // Optionally, navigate back to the dashboard or show a success message
    navigate('/');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Log Your Daily Data
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Date */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Date"
                  name="date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Diet */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Diet Details"
                  name="diet"
                  variant="outlined"
                  fullWidth
                  value={formData.diet}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Calories */}
              <Grid item xs={12} md={3}>
                <TextField
                  label="Calories"
                  name="calories"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={formData.calories}
                  onChange={handleChange}
                />
              </Grid>

              {/* Protein */}
              <Grid item xs={12} md={3}>
                <TextField
                  label="Protein (g)"
                  name="protein"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={formData.protein}
                  onChange={handleChange}
                />
              </Grid>

              {/* Carbs */}
              <Grid item xs={12} md={3}>
                <TextField
                  label="Carbs (g)"
                  name="carbs"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={formData.carbs}
                  onChange={handleChange}
                />
              </Grid>

              {/* Fats */}
              <Grid item xs={12} md={3}>
                <TextField
                  label="Fats (g)"
                  name="fats"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={formData.fats}
                  onChange={handleChange}
                />
              </Grid>

              {/* Yoga */}
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Yoga Type</InputLabel>
                  <Select
                    label="Yoga Type"
                    name="yoga"
                    value={formData.yoga}
                    onChange={handleChange}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="Hatha">Hatha</MenuItem>
                    <MenuItem value="Vinyasa">Vinyasa</MenuItem>
                    <MenuItem value="Ashtanga">Ashtanga</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Workout */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Workout Details"
                  name="workout"
                  variant="outlined"
                  fullWidth
                  value={formData.workout}
                  onChange={handleChange}
                />
              </Grid>

              {/* Meditation */}
              <Grid item xs={12} md={4}>
                <TextField
                  label="Meditation Minutes"
                  name="meditation"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={formData.meditation}
                  onChange={handleChange}
                />
              </Grid>

              {/* Rituals */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Rituals Details"
                  name="rituals"
                  variant="outlined"
                  fullWidth
                  value={formData.rituals}
                  onChange={handleChange}
                />
              </Grid>

              {/* Medication */}
              <Grid item xs={12} md={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.medication}
                      onChange={handleChange}
                      name="medication"
                      color="primary"
                    />
                  }
                  label="Medication Taken Today"
                />
              </Grid>

              {/* Test Results */}
              <Grid item xs={12}>
                <TextField
                  label="Test Results Details"
                  name="testResults"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.testResults}
                  onChange={handleChange}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit Logs
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoggingPlace;
