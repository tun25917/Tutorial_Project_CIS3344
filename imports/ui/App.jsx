import React from 'react';
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";
import { Header } from "./Header";
import { MenuPreview } from "./MenuPreview";

export const App = () => (
    <div>
        <Header />
        <div className="min-h-full">
            <MenuPreview />
            <div className="max-w-4xl mx-auto p-2">
                <ReviewForm />
                <ReviewList />
            </div>
        </div>
    </div>
);