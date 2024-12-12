import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 text-white rounded-lg sm:mx-16 mx-4 sm:py-20 py-12 overflow-hidden shadow-lg">
                <div className="relative z-10 max-w-screen-xl px-6 sm:px-12 lg:px-16 flex flex-col-reverse sm:flex-row items-center justify-between">
                    {/* Text Content */}
                    <div className="max-w-xl text-center sm:text-left space-y-6">
                        <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
                            Adarsh Chaudhary
                            <span className="block text-yellow-300">Your Productivity Boost Awaits</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-200">
                            Discover the ultimate tools for seamless remote collaboration and enhance your workflow with ease.
                        </p>
                        <Link
                            className="inline-flex items-center px-6 py-3 font-semibold text-lg bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
                            to="/"
                        >
                            <svg
                                fill="currentColor"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download Now
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className="relative sm:max-w-md lg:max-w-lg">
                        <img
                            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            src="https://files.oaiusercontent.com/file-Np7ZRuV8tLkdmKvetkg3VN?se=2024-12-12T14%3A22%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3DIMG_2847.JPG&sig=xgDxLwMNkNcbcw1E8ofsxU3af9bUKvwgLYgAIViKh8U%3D"
                            alt="Download Illustration"
                        />
                    </div>
                </div>
            </aside>

            {/* Centered Image Section */}
            <div className="grid place-items-center sm:mt-20 mt-12">
                <img
                    className="sm:w-96 w-48 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    src="https://i.ibb.co/2M7rtLk/Remote1.png"
                    alt="Additional Illustration"
                />
            </div>

            {/* Footer Section */}
            <h1 className="text-center text-2xl sm:text-4xl py-10 font-extrabold text-gray-800">
                <span className="text-indigo-600">Lorem Ipsum Yojo</span>
                <span className="block text-gray-600 text-lg sm:text-xl mt-2">
                    Redefining how you work remotely.
                </span>
            </h1>
        </div>
    );
}
