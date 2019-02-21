import * as React from 'react';

const ContactList = ({ data }: any[]) => (
  <React.Fragment>
    {data.map(el => (
      <div key={`contact-${el.icon}`}>
        <span>
          <i style={{ paddingRight: '1rem' }} className={el.icon} />
          <i>{el.field}</i>
        </span>
      </div>
    ))}
  </React.Fragment>
);

export default ContactList;
