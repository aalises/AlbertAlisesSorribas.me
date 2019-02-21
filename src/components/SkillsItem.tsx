import React from 'react';

export default ({ title, data, color }: any) => (
  <div className="column is-half">
    <div className="card">
      <div className="card-content skills-content">
        <h3 className="title is-5">{title}</h3>
        <div className="content">
          {data.map((el, idx) => (
            <article key={`${el.name}-${idx}`} className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{el.label}:</strong>
                    <br />
                    <progress className={`progress is-${color} is-small`} value={el.value} max="100" />
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
);
