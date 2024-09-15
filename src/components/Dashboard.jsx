import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PrakritiChart from './common/PrakritiChart';
import VitalMetricsChart from './common/VitalMetricsChart';
import InsightsCard from './common/InsightsCard';

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {/* Welcome Banner */}
        <Grid item xs={12}>
          <Card sx={{ p: 2, bgcolor: '#e8f5e9' }}>
            <Typography variant="h5">Welcome back, [Patient’s Name]</Typography>
            <Typography variant="body1">
              Last Diagnosis: Vata imbalance causing digestive issues.
            </Typography>
            <Typography variant="body1">
              Current Treatment Plan: Herbal supplements, grounding yoga, and dietary adjustments.
            </Typography>
            <Typography variant="body1">
              Pending Tasks: Log daily activities, complete lab tests, book follow-up consultation.
            </Typography>
          </Card>
        </Grid>

        {/* Quick Access Buttons */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/calendar">
                Log Activity
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" component={Link} to="/consultation">
                Book Consultation
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" component={Link} to="/lab-tests">
                View Lab Results
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="info" component={Link} to="/">
                Chat with AyurBot
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Modules Summary */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Prakriti Progress</Typography>
              <PrakritiChart />
              <Button component={Link} to="/prakriti">View More</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Vital Metrics</Typography>
              <VitalMetricsChart />
              <Button component={Link} to="/physical-activity">View More</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <InsightsCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
