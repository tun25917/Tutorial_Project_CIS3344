import { ReviewsCollection } from "./ReviewsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish('allReviews', function publishAllReviews() {
    return ReviewsCollection.find();
});