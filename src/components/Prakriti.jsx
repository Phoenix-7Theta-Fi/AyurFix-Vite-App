import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import PrakritiChart from './common/PrakritiChart';
import GunaChart from './common/GunaChart';
import InsightsCard from './common/InsightsCard';
import { prakritiData } from '../data/dummyData';

const Prakriti = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');

  const handleTimeFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setTimeFilter(newFilter);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Prakriti Progress Overview
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
        {/* Dosha Overview */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Dosha Balance Overview</Typography>
              <PrakritiChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Guna Overview */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Guna Balance Overview</Typography>
              <GunaChart />
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

export default Prakriti;
