import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Coffeeitem from "./categoryitem/Coffeeitem";
import Dashboard from "./Dashboard";
import Khajasetitem from "./categoryitem/Khajasetitem";

import { Grid } from "@mui/material";
import Chickenitem from "./categoryitem/Chickenitem";



import Sandwichitem from './categoryitem/Sandwichitem'
import Parothaitem from './categoryitem/Parothaitem'
import Chowmeinitem from './categoryitem/Chowmeinitem'
import Briyaniitem from './categoryitem/Briyaniitem'
import Colddrinksitem from './categoryitem/Colddrinksitem'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Orders"
              {...a11yProps(0)}
              sx={{
                color: "red",
                fontSize: "1.2rem",
                fontWeight: 550,
                border: "2px solid black",
              }}
            />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            <Grid item lg={2} md={4} xs={6}>
              <Khajasetitem />
            </Grid>
            <Grid item lg={2} md={4} xs={6}>
            <Parothaitem
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Briyaniitem
            /> 
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Chickenitem
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Chowmeinitem
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Sandwichitem
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Coffeeitem
            />
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <Colddrinksitem
            />
          </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}
