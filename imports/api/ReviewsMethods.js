import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ReviewsCollection } from "./ReviewsCollection";

Meteor.methods({
    'reviews.insert'({ name, email, comment }) {
        check(name, String);
        check(email, String);
        check(comment, String);
        if (!name) {
            throw new Meteor.Error("Name is required.");
        }
        return ReviewsCollection.insert({ name, email, comment, createdAt: new Date() });
    },
    'reviews.remove'({ reviewId }) {
        check(reviewId, String);
        ReviewsCollection.remove(reviewId);
    }
})