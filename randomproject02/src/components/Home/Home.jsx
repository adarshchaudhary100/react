import React from 'react';

export default function Home() {
    const profiles = [
        {
            platform: 'CodeChef',
            description: '5 Star Rating',
            link: 'https://www.codechef.com/users/adarshch18',
            logo: 'https://i.ibb.co/svPSX1y/Screenshot-2024-12-13-170232-removebg-preview.png',
            size: 'h-32 w-41', // Increased size for CodeChef
        },
        {
            platform: 'CodeForces',
            description: 'Problem Practice',
            link: 'https://codeforces.com/profile/Adarsh_Chaudhary',
            logo: 'https://i.ibb.co/J5qtQm1/Screenshot-2024-12-13-170639-removebg-preview.png',
            size: 'h-32 w-41', // Increased size for CodeForces
        },
        {
            platform: 'LeetCode',
            description: 'Daily Practice',
            link: 'https://leetcode.com/u/akulchaudhary786/',
            logo: 'https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png',
            size: 'h-24 w-24', // Normal size for LeetCode
        },
        {
            platform: 'Code360',
            description: 'MCQ Practice',
            link: 'https://www.naukri.com/code360/profile/ce30ddda-a443-4624-ae6f-29bd8911c5e5',
            logo: 'https://i.ibb.co/YNs1sjC/Screenshot-2024-12-13-170911-removebg-preview.png',
            size: 'h-32 w-41', // Increased size for Code360
        },
        {
            platform: 'GeeksForGeeks',
            description: 'Problem Practice',
            link: 'https://www.geeksforgeeks.org/user/akulchaudhary786/',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
            size: 'h-24 w-24', // Normal size for GeeksForGeeks
        },
        {
            platform: 'Today Best Problem',
            description: 'Daily Update',
            link: 'https://codeforces.com/problemset/problem/2046/A',
            logo: 'https://i.ibb.co/ZN7VLgn/IMG-3318-removebg.png',
            size: 'h-24 w-30', // Normal size for Today Best Problem
        },
    ];

    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section with Gray Background */}
            <aside className="relative bg-gray-500 text-white rounded-lg sm:mx-16 mx-4 sm:py-20 py-12 overflow-hidden shadow-lg">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>

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
                        <a
                            className="inline-flex items-center px-6 py-3 font-semibold text-lg bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
                            href="https://www.linkedin.com/in/adarsh-chaudhary-912329173/"
                            target="_blank"
                            rel="noopener noreferrer"
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
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Visit Here
                        </a>
                    </div>

                    {/* Hero Image */}
                    <div className="relative sm:max-w-md lg:max-w-lg">
                        <img
                            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            src="https://i.ibb.co/P99nFb2/pencil-sketch-image.jpg"
                            alt="Download Illustration"
                        />
                    </div>
                </div>
            </aside>

            {/* Coding Profiles Section */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:mt-20 mt-12 px-6">
                {profiles.map((profile, index) => (
                    <div
                        key={index}
                        className="p-6 bg-gray-100 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-between"
                    >
                        <div className="flex items-center justify-center space-x-4 mb-4">
                            {/* Description on the left and Logo on the right */}
                            <div className="flex flex-col items-start text-left">
                                <h3 className="text-xl font-bold text-gray-800">{profile.platform}</h3>
                                <p className="text-gray-600">{profile.description}</p>
                            </div>
                            <img
                                className={`${profile.size} object-contain`}
                                src={profile.logo}
                                alt={`${profile.platform} logo`}
                            />
                        </div>

                        <a
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <h1 className="text-center text-2xl sm:text-4xl py-10 font-extrabold text-gray-800">
                <span className="text-indigo-600">Code Daily </span>
                <span className="block text-gray-600 text-lg sm:text-xl mt-2">
                    Redefining how you work remotely.
                </span>
            </h1>
        </div>
    );
}
