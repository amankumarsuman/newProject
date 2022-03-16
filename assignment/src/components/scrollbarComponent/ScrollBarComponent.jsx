import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 800, sm: 1000 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab sx={{ backgroundColor: "red" }} />
        <Tab sx={{ backgroundColor: "green" }} />
        <Tab sx={{ backgroundColor: "yellow" }} />
        <Tab sx={{ backgroundColor: "black" }} />
        <Tab sx={{ backgroundColor: "blue" }} />
        <Tab sx={{ backgroundColor: "pink" }} />

        <Tab sx={{ backgroundColor: "red" }} />
        <Tab sx={{ backgroundColor: "green" }} />
        <Tab sx={{ backgroundColor: "yellow" }} />
        <Tab sx={{ backgroundColor: "black" }} />
        <Tab sx={{ backgroundColor: "blue" }} />
        <Tab sx={{ backgroundColor: "pink" }} />

        <Tab sx={{ backgroundColor: "red" }} />
        <Tab sx={{ backgroundColor: "green" }} />
        <Tab sx={{ backgroundColor: "yellow" }} />
        <Tab sx={{ backgroundColor: "black" }} />
        <Tab sx={{ backgroundColor: "blue" }} />
        <Tab sx={{ backgroundColor: "pink" }} />
      </Tabs>
    </Box>
  );
}
