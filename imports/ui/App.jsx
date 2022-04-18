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

{/*const [view, setView] = React.useState(1);

export const App = () => {
        <div>
            <Header />
            <button onClick={() => setView(1)}>View 1</button>
            <button onClick={() => setView(2)}>View 2</button>
            {
                {
                    1: (
                        <div>
                            <MenuPreview key={1}/>
                        </div>
                    ),
                    2: (
                        <div>
                            <ReviewForm key={2}/>
                        </div>
                    )
                }[view]
            }
        </div>
}
*/}