import * as React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactData from '../data/contact';
import ContactList from '../components/ContactList';

const Contact = () => (
  <React.Fragment>
    <SectionHeader title="Contact" icon="fa-mobile-alt" />
    <ContactList data={ContactData} />
  </React.Fragment>
);

export default Contact;
