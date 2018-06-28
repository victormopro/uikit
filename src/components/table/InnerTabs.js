import React from 'react';

// React Tabs plugin added (details: https://github.com/reactjs/react-tabs)
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

const InnerTabs = ({tabsNav, tabsBody}) => {
    return(
        <div className="card tabs mt-30">
            <Tabs className="react-tabs__nav-in">
                <TabList>
                    {tabsNav.map((nav) => {
                        return <Tab key={nav}>{nav}</Tab>
                    })}
                </TabList>
                {tabsBody.map((details) => {
                    return <TabPanel key={details}><h1>{details}</h1></TabPanel>
                })}
            </Tabs>
        </div>
    )
}

export default InnerTabs ;