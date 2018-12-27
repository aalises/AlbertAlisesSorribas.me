import * as React from "react";
import MediaLinks from "../../data/medialinks";

export default () => {
    return (
        <div style={{justifyContent: "center"}} className="field is-grouped is-grouped-multiline">
        {MediaLinks.map(el => {
          return (
            <a key={`${el.icon}-medialink`} href={el.link} target="_blank" className="icon is-medium media-link">
              <i className={`${el.icon}`}></i>
            </a>
          )
        })}
        </div>
    );
}