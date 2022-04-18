import React from 'react';

export const MenuPreview = () => {
    return (
        <header className="bg-red-100">
            <nav className="max-w-5x1 mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <h2>Menu:</h2>
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <span className="sr-only">Pizza</span>
                    <img
                        className="menuPreview"
                        src="/images/pizza.png"
                        alt=""
                    />

                    <span className="sr-only">Wings</span>
                    <img
                        className="menuPreview"
                        src="/images/wings.png"
                        alt=""
                    />

                    <span className="sr-only">Beer</span>
                    <img
                        className="menuPreview"
                        src="/images/beer.png"
                        alt=""
                    />
                </div>

                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <a href="#">
                        <h6>Pizza</h6>
                        <p>$8.99 - Small</p>
                        <p>$10.99 - Medium</p>
                        <p>$12.99 - Large</p>
                    </a>

                    <a href="#">
                        <h6>Chicken Wings</h6>
                        <p>$6.99 for 6</p>
                        <p>$11.99 for 12</p>
                        <p>$19.99 for 25</p>
                    </a>

                    <a href="#">
                        <h6>Burgers</h6>
                        <p>$8.99 - Hamburger</p>
                        <p>$9.99 - Cheeseburger</p>
                        <p>$11.99 - Bacon Cheeseburger</p>
                    </a>

                    <a href="#">
                        <h6>Beer</h6>
                        <p>$4.99 Yuengling</p>
                        <p>$4.99 Bud Light</p>
                        <p>$5.99 Corona</p>
                    </a>
                </div>
            </nav>
        </header>
    )
}