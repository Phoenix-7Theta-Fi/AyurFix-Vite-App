import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { calendarData } from '../../data/dummyData';
import { useState } from 'react';

const CalendarView = () => {
  const [value, setValue] = useState(new Date());

  // Filter events for the selected date
  const eventsForDate = calendarData.filter(
    (event) => new Date(event.date).toDateString() === value.toDateString()
  );

  // Function to add dots or markers on dates with events
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayEvents = calendarData.filter(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      return (
        <div>
          {dayEvents.length > 0 && (
            <Box
              sx={{
                height: 5,
                width: 5,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                marginTop: 0.5,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          )}
        </div>
      );
    }
  };

  return (
    <Box>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
      />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Events on {value.toDateString()}</Typography>
        {eventsForDate.length > 0 ? (
          <List>
            {eventsForDate.map((event) => (
              <ListItem key={event.id}>
                <ListItemText primary={event.title} secondary={`Type: ${event.type}`} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2">No events for this date.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default CalendarView;
