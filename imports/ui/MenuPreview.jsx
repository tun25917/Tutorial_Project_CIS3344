import React from 'react';

export const MenuPreview = () => {
    return (
        <header className="bg-white-600">
            <nav className="max-w-5x1 mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <h2>Menu:</h2>
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                        <a href="#">
                            <span className="sr-only">Pizza</span>
                            <img
                                className="menuPreview"
                                src="/images/pizza.png"
                                alt=""
                            />
                    </a>
                    <a href="#">
                        <span className="sr-only">Wings</span>
                        <img
                            className="menuPreview"
                            src="/images/wings.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <span className="sr-only">Beer</span>
                        <img
                            className="menuPreview"
                            src="/images/beer.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <a href="#">
                        <span className="sr-only">Pizza</span>
                        <img
                            className="menuPreview"
                            src="/images/pizza.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <span className="sr-only">Wings</span>
                        <img
                            className="menuPreview"
                            src="/images/wings.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <span className="sr-only">Beer</span>
                        <img
                            className="menuPreview"
                            src="/images/beer.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <a href="#">
                        <span className="sr-only">Pizza</span>
                        <img
                            className="menuPreview"
                            src="/images/pizza.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <span className="sr-only">Wings</span>
                        <img
                            className="menuPreview"
                            src="/images/wings.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <span className="sr-only">Beer</span>
                        <img
                            className="menuPreview"
                            src="/images/beer.png"
                            alt=""
                        />
                    </a>
                </div>
            </nav>
        </header>
    )
}