import * as React from "react";
import MediaLinks from '../medialinks';

export default ({name, role}) => {
    return (
      <div id="section-Header" className="container has-text-centered">
        <div className="columns is-vcentered reverse-column-order">
          <div className="column">
            <h1 className="title is-size-1">
              {name}
            </h1>
            <h2 className="subtitle is-size-4 has-text-grey">
              {role}
            </h2>
            <MediaLinks />
          </div>
          <div className="column">
            <figure className="image is-180x180">
              <img className="is-rounded" src="assets/img/me.jpg" />
            </figure>  
          </div>
        </div>
      </div>
    );
}