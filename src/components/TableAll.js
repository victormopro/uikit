import React from 'react';
import TableSimple from './table/TableSimple';
import TableNav from './table/TableNav';
import TableSort from './table/TableSort';
import InnerTabs from './table/InnerTabs';
import ContainerTabs from './table/ContainerTabs';

const TableAll = () => {
  return (
    <React.Fragment>
      <div className="row mt-100">
        <div className="col-xs-12">
          <TableSimple />
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-xs-12">
          <TableNav />
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-xs-12">
          <TableSort />
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-xs-12">
          <InnerTabs
              tabsNav = {['Option1', 'Option2', 'Option3']}
              tabsBody = {['Apple', 'Orange', 'Banana']}
          />
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-xs-12">
          <ContainerTabs
              tabsNav = {['Menu1', 'Menu2', 'Menu3']}
              tabsBody = {['Heading One', 'Heading Two', 'Heading Three']}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TableAll;
