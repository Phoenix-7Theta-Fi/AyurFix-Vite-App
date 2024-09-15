import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Modal, Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CalendarView from './common/CalendarView';
import { calendarData } from '../data/dummyData';
import { v4 as uuidv4 } from 'uuid';

const CalendarModule = () => {
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    date: '',
    title: '',
    type: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.date && newEvent.title && newEvent.type) {
      // For prototyping, we'll just log the event. In a real app, you'd update the backend or state.
      console.log('New Event:', newEvent);
      // Optionally, you can add the event to the calendarData if state management is implemented
      // For now, we'll close the modal
      handleClose();
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Your Daily Schedule and Routine
      </Typography>

      <Grid container spacing={3}>
        {/* Calendar View */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <CalendarView />
            </CardContent>
          </Card>
        </Grid>

        {/* Add Event Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Event
          </Button>
        </Grid>

        {/* Modal for Adding Event */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="add-event-title"
          aria-describedby="add-event-description"
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
            <Typography id="add-event-title" variant="h6" component="h2">
              Add New Event
            </Typography>
            <form onSubmit={handleAddEvent}>
              <TextField
                label="Title"
                name="title"
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
                value={newEvent.title}
                onChange={handleChange}
                required
              />
              <TextField
                label="Date"
                name="date"
                type="date"
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={newEvent.date}
                onChange={handleChange}
                required
              />
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Type</InputLabel>
                <Select
                  label="Type"
                  name="type"
                  value={newEvent.type}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Yoga">Yoga</MenuItem>
                  <MenuItem value="Consultation">Consultation</MenuItem>
                  <MenuItem value="Lab Test">Lab Test</MenuItem>
                  <MenuItem value="Medication">Medication</MenuItem>
                  {/* Add more types as needed */}
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                Add Event
              </Button>
            </form>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};

export default CalendarModule;
