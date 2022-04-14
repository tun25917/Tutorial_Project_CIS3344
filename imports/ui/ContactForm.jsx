import React, { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveContact = () => {
        ContactsCollection.insert({ name, email, password });
        setName("");
        setEmail("");
        setPassword("");
    }
    return (
    <form>
        <div>
            <label htmlFor="name">Name</label>
                <input id="name"
                    value={name}
                    onChange={e => setName( e.target.value )}
                    type="text" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
                <input id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
                <input id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text" />
        </div>
        <div>
            <button type="button" onClick={saveContact}>Submit</button>
        </div>
        </form>
    )
}