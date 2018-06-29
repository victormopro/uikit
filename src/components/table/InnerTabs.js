import React from 'react';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
const InnerTabs = ({tabsNav, tabsBody}) => {
  return (
    <div className="card">
      <Tabs className="tabs tabs__nav-in">
        <TabList className="tabs__tab-list">
            {tabsNav.map((nav) => {
                return (
                    <Tab className="tabs__tab" 
                        selectedClassName='tabs__tab--selected' key={nav}>{nav}</Tab>
                )
            })}
        </TabList>
        {tabsBody.map((details) => {
            return (
                <TabPanel className="tabs__tab-panel"
                    selectedClassName='tabs__tab-panel--selected' key={details}><h1>{details}</h1></TabPanel>
            )
        })}
      </Tabs>
    </div>
  );
}

export default InnerTabs ;
