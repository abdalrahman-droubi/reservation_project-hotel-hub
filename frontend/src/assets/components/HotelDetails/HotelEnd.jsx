import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";
import ItemThree from "./ItemThree";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        border: 1,
        borderColor: "blue",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "blue" }}>
          <TabList
            textColor="blue"
            sx={{ border: 1, borderColor: "blue" }}
            TabIndicatorProps={{ style: { background: "blue" } }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Choose your Room" value="1" />
            <Tab label="Rate Us Now" value="2" />
            <Tab label="Descreption" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ItemOne />
        </TabPanel>
        <TabPanel value="2">
          <ItemTwo />
        </TabPanel>
        <TabPanel value="3">
          <ItemThree />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
