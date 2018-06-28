import React from 'react';

// React Tabs plugin added (details: https://github.com/reactjs/react-tabs)
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

const ContainerTabs = ({tabsNav,tabsBody}) => {
    return(
        
        <Tabs className="react-tabs__nav-out mt-30">
            <TabList>
                {tabsNav.map((nav) => {
                    return <Tab key={nav}>{nav}</Tab>
                })}
            </TabList>

            <div className="card tabs">
                {tabsBody.map((details) => {
                    return <TabPanel key={details}><h1>{details}</h1></TabPanel>
                })}
            </div>
        </Tabs>
        
    )
}

export default ContainerTabs ;