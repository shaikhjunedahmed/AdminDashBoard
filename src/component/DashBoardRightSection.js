import { Fastfood, Flag, MenuBook } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CustomerFeedback from "./CustomerFeedback";

export default function DashBoardRightSection() {
  return (
    <Box>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h7">Net Profit</Typography>
            <Typography variant="h6">$6759.25</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" color="success.main">
                +3%
              </Typography>
              <Box sx={{ position: "relative", display: "inline-flex", ml: 2 }}>
                <CircularProgress variant="determinate" value={70} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >
                    70%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Box sx={{ margin: "30px" }}></Box>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, margin: "10px 0px" }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Flag />
              </ListItemIcon>
              <ListItemText primary="Goals" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Fastfood />
              </ListItemIcon>
              <ListItemText primary="Popular Dishes" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Menus" />
            </ListItem>
          </List>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <CustomerFeedback />
      </Grid>
    </Box>
  );
}
