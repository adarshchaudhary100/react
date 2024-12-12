import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 shadow-lg">
            <nav className="bg-white text-gray-800 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
                            <img
                                src="https://files.oaiusercontent.com/file-McvAY8EKYpjJ9dbQPFesPa?se=2024-12-12T14%3A02%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De2a07126-eb3e-4070-aeb1-fe82ce0eaffa.webp&sig=Stn1yXx4LBrl5I4gBoOxRJDyep97EyoELebbokHm1GU%3D"
                                alt="Logo"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="text-3xl font-extrabold text-gray-800 tracking-wide">
                            KingZord
                        </span>
                    </Link>

                    <div className="flex items-center lg:order-2 space-x-4">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300 transform hover:scale-105"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300 transform hover:scale-105"
                        >
                            Get started
                        </Link>
                    </div>

                    <div
                        className="hidden lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `py-2 px-4 duration-200 transform ${isActive ? 'text-blue-600 scale-105' : 'text-gray-700'} hover:bg-gray-100 hover:text-blue-600 transition-all`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `py-2 px-4 duration-200 transform ${isActive ? 'text-blue-600 scale-105' : 'text-gray-700'} hover:bg-gray-100 hover:text-blue-600 transition-all`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `py-2 px-4 duration-200 transform ${isActive ? 'text-blue-600 scale-105' : 'text-gray-700'} hover:bg-gray-100 hover:text-blue-600 transition-all`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Github"
                                    className={({ isActive }) =>
                                        `py-2 px-4 duration-200 transform ${isActive ? 'text-blue-600 scale-105' : 'text-gray-700'} hover:bg-gray-100 hover:text-blue-600 transition-all`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
