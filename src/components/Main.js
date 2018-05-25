import React from 'react';

import Sidebar from './Sidebar';

const Main = ({ children }) => (
  <div className="main">
    <Sidebar />
    <div className="container">
      { children }
    </div>
  </div>
);

export default Main;
