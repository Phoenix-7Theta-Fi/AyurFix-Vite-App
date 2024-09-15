import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import DietChart from './common/DietChart';
import MedicationTable from './common/MedicationTable';
import RitualsChart from './common/RitualsChart';
import InsightsCard from './common/InsightsCard';
import { lifestyleData } from '../data/dummyData';

const Lifestyle = () => {
  const [timeFilter, setTimeFilter] = useState('weekly');

  const handleTimeFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setTimeFilter(newFilter);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lifestyle Progress
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
        {/* Diet Tracking */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Diet Tracking</Typography>
              <DietChart />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Your current diet is helping to balance Vata. Consider increasing protein to support energy levels.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Medication Tracking */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Medication Tracking</Typography>
              <MedicationTable />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Ensure adherence to all prescribed medications for optimal health benefits.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Rituals Tracking */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Rituals Tracking</Typography>
              <RitualsChart />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Regular rituals contribute significantly to your overall well-being. Maintain consistency for best results.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Correlation Analysis Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Correlations Between Lifestyle Factors</Typography>
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

export default Lifestyle;
