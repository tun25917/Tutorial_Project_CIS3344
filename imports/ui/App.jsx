import React from 'react';
import { ContactForm } from "./ContactForm";
import { ContactList } from './ContactList';

export const App = () => (
  <div>
        <h1>Manly Stanleys</h1>
        <p>Its where you want to be</p>
        <ContactForm />
        <ContactList />
    </div>
);
