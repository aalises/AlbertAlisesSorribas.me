import * as React from 'react';
import SidebarData from '../data/sidebar';

export default () => (
  <div className="breadcrumb is-centered has-bullet-separator">
    <ul className="is-size-6">
      {SidebarData.map(el => (
        <li key={`sidebar-${el}`}>
          <a
            onClick={() =>
              window.scroll({
                top: document.getElementById(`section-${el}`).offsetTop,
                behavior: 'smooth',
              })
            }
            className="media-link"
          >
            {el}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
