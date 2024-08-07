import React from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Typography,
  Avatar,
  Chip,
  Box
} from '@mui/material';

const orders = [
  { id: 1547258, customer: 'Wade Warren', amount: 124.00, status: 'Delivered' },
  { id: 4890576, customer: 'Jane Cooper', amount: 365.02, status: 'Delivered' },
  { id: 7895215, customer: 'Guy Hawkins', amount: 45.88, status: 'Cancelled' },
  { id: 2095232, customer: 'Kristin Watson', amount: 88.05, status: 'Pending' },
  { id: 9571920, customer: 'Cody Fisher', amount: 545.00, status: 'Delivered' },
  { id: 7851458, customer: 'Savannah Nguyen', amount: 138.20, status: 'Delivered' },
];

function RecentOrders() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Recent Orders</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2 }} />
                  {order.customer}
                </Box>
              </TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell align="right">${order.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Chip 
                  label={order.status} 
                  color={order.status === 'Delivered' ? 'success' : order.status === 'Pending' ? 'warning' : 'error'}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default RecentOrders;