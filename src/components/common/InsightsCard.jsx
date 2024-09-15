import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const InsightsCard = () => {
  // Dummy insight
  const insight = "Your mental health and energy levels improved as your Pitta remained balanced. Continue your current yoga routine to maintain this progress.";

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Personalized AI Insights</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {insight}
        </Typography>
        <Button sx={{ mt: 2 }} variant="contained" color="primary">View More Insights</Button>
      </CardContent>
    </Card>
  );
};

export default InsightsCard;
