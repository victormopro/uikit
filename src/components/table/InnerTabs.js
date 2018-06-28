import React from 'react';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

const InnerTabs = ({tabsNav, tabsBody}) => {
  return (
    <div className="card tabs">
      <Tabs className="tabs__nav-in">
        <TabList >
            {tabsNav.map((nav) => {
                return <Tab key={nav}>{nav}</Tab>
            })}
        </TabList>
        {tabsBody.map((details) => {
            return <TabPanel key={details}><h1>{details}</h1></TabPanel>
        })}
      </Tabs>
    </div>
  );
}

export default InnerTabs ;
