import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TodayForm from './TodayForm';
import PendingForm from './PendingForm';
import SavedForm from './SavedForm';

const LeakageFormTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Today’s" />
        <Tab label="Pending" />
        <Tab label="Saved" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TodayForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PendingForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SavedForm />
      </TabPanel>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default LeakageFormTabs;

