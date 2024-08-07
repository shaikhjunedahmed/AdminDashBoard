import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  Description as DescriptionIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Flag as FlagIcon,
  FastFood as FastFoodIcon,
  MenuBook as MenuBookIcon,
  AssignmentTurnedInOutlined,
  AssessmentOutlined,
  AccountBalanceWalletOutlined,
  ShoppingBagOutlined,
  ShoppingBasketOutlined,
  LocalMallOutlined,
  LocalAtmOutlined,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatBox from "./StatBox";
import RecentOrders from "./RecentOrders";
import DashBoardRightSection from "./DashBoardRightSection";

const activityData = [
  { name: "1", value: 4000 },
  { name: "3", value: 3000 },
  { name: "5", value: 2000 },
  { name: "7", value: 2780 },
  { name: "9", value: 1890 },
  { name: "11", value: 2390 },
  { name: "13", value: 3490 },
  { name: "15", value: 3490 },
  { name: "17", value: 4000 },
  { name: "19", value: 2500 },
  { name: "21", value: 5000 },
  { name: "23", value: 3500 },
  { name: "25", value: 2800 },
  { name: "27", value: 3200 },
];

function Dashboard() {
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      {/* Sidebar */}
      <Paper
        sx={{
          width: 240,
          flexShrink: 0,
          height: "100vh",
          overflow: "auto",
          width: "10%",
        }}
      >
        <List>
          <ListItem></ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssessmentOutlined />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentTurnedInOutlined />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletOutlined />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingBagOutlined />
            </ListItemIcon>
          </ListItem>
        </List>
      </Paper>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "70%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2.7}>
            <StatBox
              title="Total Orders"
              value="75"
              change={3}
              icons={<ShoppingBasketOutlined />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatBox
              title="Total Delivered"
              value="70"
              change={-3}
              icons={<LocalMallOutlined />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatBox
              title="Total Cancelled"
              value="05"
              change={2}
              icons={<LocalMallOutlined sx={{ color: "red" }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatBox
              title="Total Revenue"
              value="$12k"
              change={-3}
              icons={<LocalAtmOutlined />}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Activity
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Recent Orders */}
          <Grid item xs={12} md={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "20%" }}>
        <Grid>
          <DashBoardRightSection />
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
