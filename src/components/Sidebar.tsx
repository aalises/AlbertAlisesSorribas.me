import * as React from 'react';
import SidebarData from '../data/sidebar';
import { FixedBar } from '../styles/custom-styled-components';

export default () => (
  <FixedBar className="menu is-hidden-touch has-text-centered">
    <ul className="menu-list">
      {SidebarData.map(el => (
        <li
          key={`sidebar-${el}`}
          onClick={() =>
            window.scroll({
              top: document.getElementById(`section-${el}`).offsetTop,
              behavior: 'smooth',
            })
          }
        >
          <a>{el}</a>
        </li>
      ))}
    </ul>
  </FixedBar>
);
