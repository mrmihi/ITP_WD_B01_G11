import React from 'react';
import { Box } from '@mui/material';
import Header from 'Org/components/Header';
import FlexBetween from 'Org/components/FlexBetween';

const Dashboard = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <div>
        <FlexBetween>
          <Header
            title="Resource Manger"
            subtitle="Welcome to your dashboard"
          />
        </FlexBetween>
      </div>
    </Box>
  );
};

export default Dashboard;
