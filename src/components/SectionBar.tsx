import * as React from 'react';
import SidebarData from '../data/sidebar';

const ScrollOffset = 45;

export default () => (
  <div className="breadcrumb is-centered has-bullet-separator">
    <ul className="is-size-6">
      {SidebarData.map(el => (
        <li key={`sidebar-${el}`}>
          <a
            onClick={() =>
              window.scrollBy({
                top:
                  document.getElementById(el === 'Header' ? 'main' : `section-${el}`).getBoundingClientRect().top -
                  ScrollOffset,
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
