import React from "react";
import { Meteor } from "meteor/meteor";
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/SuccessAlert";

export const Menu = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    const showError = ({ message }) => {
        setError(message);
        setTimeout(() => {
            setError("");
        }, 5000);
    }

    const showSuccess = ({ message }) => {
        setSuccess(message);
        setTimeout(() => {
            setSuccess("");
        }, 5000);
    }

    const saveComment = () => {
        Meteor.call('contacts.insert', { name, email, comment }, (errorResponse) => {
            if (errorResponse) {
                showError({ message: errorResponse.error });
            } else {
                setName("");
                setEmail("");
                setComment("");
                showSuccess({ message: "Comment submitted." });
            }
        });
    }

    return (
        <form className="mt-6">
            <h3>Contact Form</h3>
            <br />
            <br />
            {error && <ErrorAlert message={error} />}
            {success && <SuccessAlert message={success} />}
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Comment
                    </label>
                    <input
                        type="text"
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="px-2 py-3 text-right">
                <button
                    type="button"
                    onClick={saveComment}
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                    Submit Comment
                </button>
            </div>
        </form>
    )
}