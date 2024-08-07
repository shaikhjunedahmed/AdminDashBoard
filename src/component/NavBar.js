import React from "react";
import { Paper, Avatar, Divider, IconButton, InputBase } from "@mui/material";
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
} from "@mui/icons-material";

function NavBar() {
  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        mb: 2,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: "10px" }} aria-label="notifications">
        <NotificationsIcon />
      </IconButton>
      <Avatar sx={{ ml: 1 }} alt="User" src="/path-to-user-image.jpg" />
    </Paper>
  );
}

export default NavBar;
