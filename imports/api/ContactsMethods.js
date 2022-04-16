import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ContactsCollection } from "./ContactsCollection";

Meteor.methods({
    'contacts.insert'({ name, email, comment }) {
        check(name, String);
        check(email, String);
        check(comment, String);
        if (!name) {
            throw new Meteor.Error("Name is required.");
        }
        return ContactsCollection.insert({ name, email, comment, createdAt: new Date() });
    },
    'contacts.remove'({ contactId }) {
        check(contactId, String);
        ContactsCollection.remove(contactId);
    }
})