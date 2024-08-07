import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward, ShoppingBasketOutlined } from '@mui/icons-material';

function StatBox({ title, value, change,icons}) {
  return (
    <Card sx={{width:"200px"}}spacing={1}>
      <CardContent>
       {icons}
        <Typography color="textSecondary" gutterBottom sx={{fontSize:"16px"}}>
          {title}
        </Typography>
        <Box sx={{display:'flex', justifyContent:"space-between"}}>
        <Typography variant="h5" component="div" sx={{fontSize:"16px"}}>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {change > 0 ? (
            <ArrowUpward color="success" />
          ) : (
            <ArrowDownward color="error" />
          )}
          <Typography color={change > 0 ? 'success.main' : 'error.main'}>
            {Math.abs(change)}%
          </Typography>
        </Box>
        </Box>
        
      </CardContent>
    </Card>
  );
}

export default StatBox;