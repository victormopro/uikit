import React from 'react';
import Table from './table/Table';
import TableNav from './table/TableNav';
import TableSort from './table/TableSort';
import TabsIn from './table/TabsIn';
import TabsOut from './table/TabsOut';



const TableAll = () => {
    return(
        <div>
            <Table />
            <TableNav />
            <TableSort />
            <TabsIn />
            <TabsOut />
        </div>
    )
}

export default TableAll;