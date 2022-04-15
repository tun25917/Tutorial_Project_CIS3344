import React from 'react';

export const Menu = () => {
    return (
        <header className="bg-yellow-600">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <a href="#">
                        <span className="sr-only">Manly Stanleys</span>
                        <img
                            className="h-10 w-auto"
                            src="/images/logo.png"
                            alt=""
                        />
                    </a>
                </div>
            </nav>
        </header>
    )
}

export const Header = () => {
    return (
        <header className="bg-red-600">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">Manly Stanlys</span>
                            <img
                                className="h-10 w-auto"
                                src="/images/bicep.png"
                                alt=""
                            />
                        </a>textete
                    </div>
                    <Link to="/Menu"> Menu </Link>
                </div>
            </nav>
        </header>
    )
}