import React, { memo } from "react";
import { ReviewsCollection } from "../api/ReviewsCollection";
import { useSubscribe, useFind } from 'meteor/react-meteor-data';

export const ReviewList = () => {
    const isLoading = useSubscribe('allReviews');
    const reviews = useFind(() => ReviewsCollection.find({}, { sort: { createdAt: -1 } }));

    const removeReview = (event, _id) => {
        event.preventDefault();
        Meteor.call('reviews.remove', { reviewId: _id });
    }

    if (isLoading()) {
        return (
            <div>
                <div className="mt-10">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Loading...
                    </h3>
                </div>
            </div>
        )
    }

    const ReviewItem = memo(({ review }) => {
        return (
            <li className="py-4 flex items-center justify-between space-x-3">
                <div className="min-w-0 flex-1 flex items-center space-x-3">
                    <div className="min-w-0 flex-1">
                        <p className="text-m font-medium text-gray-900 truncate">{review.name}</p>
                        <p className="text-sm font-medium text-gray-500 truncate">{review.email}</p>
                        <p className="text-sm font-medium text-gray-700 truncate">{review.comment}</p>
                    </div>
                    {/*<div>
                        <a
                            href="#"
                            onClick={(event) => removeReview(event, review._id)}
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Remove
                        </a>
                    </div>*/}
                </div>
            </li>
        )
    });

    return (
        <div>
            <div className="mt-10">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Left Reviews:
                </h3>
                <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                    {reviews.map((review) => (
                        <ReviewItem key={review._id} review={review} />
                    ))}
                </ul>
            </div>
        </div>
    )
}