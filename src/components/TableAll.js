import React from 'react';
import Table from './table/Table';
import TableNav from './table/TableNav';
import TableSort from './table/TableSort';
import InnerTabs from './table/InnerTabs';
import ContainerTabs from './table/ContainerTabs';



const TableAll = () => {
    return(
        <div>
            <Table />
            <TableNav />
            <TableSort />
            <InnerTabs 
                tabsNav = {['Option1', 'Option2', 'Option3']}
                tabsBody = {['Apple', 'Orange', 'Banana']}
            />
            <ContainerTabs 
                tabsNav = {['Menu1', 'Menu2', 'Menu3']}
                tabsBody = {['Heading One', 'Heading Two', 'Heading Three']}
            />
        </div>
    )
}

export default TableAll;