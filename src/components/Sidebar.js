import React from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <h4>Components</h4>
    <ul className="sidebar__items mt-20">
      <li className="sidebar__item">
        <a className="sidebar__link" href='#colors'>Colors</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#text'>Text</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#buttons'>Buttons / Switches</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#popups'>Popups, Tooltips, Loaders & Cards</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#charts'>Charts</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#modals'>Modals</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#tables'>Tables</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#forms'>Forms / Menu</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#icons'>Icons</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#uploader'>File Uploader</a>
      </li>
      <li className="sidebar__item">
        <a className="sidebar__link" href='#accordions'>Accordions</a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
