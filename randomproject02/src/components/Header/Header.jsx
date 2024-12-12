import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Github', path: '/github' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 shadow-xl">
            <nav className="px-6 py-4">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="https://files.oaiusercontent.com/file-McvAY8EKYpjJ9dbQPFesPa?se=2024-12-12T14%3A02%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De2a07126-eb3e-4070-aeb1-fe82ce0eaffa.webp&sig=Stn1yXx4LBrl5I4gBoOxRJDyep97EyoELebbokHm1GU%3D"
                            className="h-12 mr-3 rounded-full transition-transform duration-300 hover:scale-110"
                            alt="Logo"
                        />
                        <span className="text-2xl font-bold text-white">
                            KingZord
                        </span>
                    </Link>

                    {/* Menu and Buttons */}
                    <div className="flex items-center space-x-4 lg:order-2">
                        <Link
                            to="#"
                            className="text-white hover:text-indigo-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-300 transform hover:scale-105"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-300 transform hover:scale-105"
                        >
                            Get started
                        </Link>
                        <button
                            className="lg:hidden p-2 ml-1 text-white bg-teal-500 hover:bg-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } w-full lg:flex lg:w-auto lg:order-1`}
                    >
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out ${
                                                isActive
                                                    ? 'text-white bg-indigo-500 shadow-md'
                                                    : 'text-gray-100 hover:text-indigo-100 hover:bg-indigo-700'
                                            } lg:hover:bg-transparent lg:border-0 lg:px-8 lg:py-2 lg:rounded-lg lg:text-base`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
