import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import YogaChart from './common/YogaChart';
import WorkoutChart from './common/WorkoutChart';
import MeditationChart from './common/MeditationChart';
import InsightsCard from './common/InsightsCard';
import { vitalMetricsData } from '../data/dummyData';

const PhysicalActivity = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  const handleTimeFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setTimeFilter(newFilter);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Physical Activity Progress
      </Typography>

      {/* Time Filter */}
      <ToggleButtonGroup
        value={timeFilter}
        exclusive
        onChange={handleTimeFilter}
        aria-label="time filter"
        sx={{ mb: 3 }}
      >
        <ToggleButton value="daily" aria-label="daily">
          Daily
        </ToggleButton>
        <ToggleButton value="weekly" aria-label="weekly">
          Weekly
        </ToggleButton>
        <ToggleButton value="monthly" aria-label="monthly">
          Monthly
        </ToggleButton>
      </ToggleButtonGroup>

      <Grid container spacing={3}>
        {/* Yoga Routine Tracking */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Yoga Routine Tracking</Typography>
              <YogaChart />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Hatha yoga helps balance Vata by grounding the body and calming the mind.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Workout Routine Tracking */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Workout Routine Tracking</Typography>
              <WorkoutChart />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Strength training helps balance Pitta by fostering discipline, while flexibility training stimulates Kapha circulation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Meditation Routine Tracking */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Meditation Routine Tracking</Typography>
              <MeditationChart />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Regular meditation improves Sattva, reduces Rajas or Tamas, and contributes to mental clarity and emotional balance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Correlation Analysis Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Correlations Between Physical Activities</Typography>
              {/* Placeholder for Correlation Charts */}
              <Typography variant="body2" color="textSecondary">
                (Interactive correlation charts would be here.)
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* AI-Generated Insights */}
        <Grid item xs={12}>
          <InsightsCard />
        </Grid>

        {/* Log Update Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" href="/calendar">
            Log Update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhysicalActivity;
