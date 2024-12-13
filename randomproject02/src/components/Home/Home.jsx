import React from 'react';
import { Star, Code, Brain, Trophy, Target, ExternalLink } from 'lucide-react';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative bg-gray-500 text-white rounded-lg sm:mx-16 mx-4 sm:py-20 py-12 overflow-hidden shadow-lg">
                <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
                <div className="relative z-10 max-w-screen-xl px-6 sm:px-12 lg:px-16 flex flex-col-reverse sm:flex-row items-center justify-between">
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
                            <LinkedInIcon />
                            Visit Here
                        </a>
                    </div>
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
            <div className="px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Coding <span className="text-indigo-600">Profiles</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profiles.map((profile, index) => (
                        <ProfileCard key={index} profile={profile} />
                    ))}
                </div>
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

// Profile Card Component
function ProfileCard({ profile }) {
    const Icon = profile.icon;
    
    return (
        <div
            className={`relative group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${profile.bgColor} border ${profile.borderColor} overflow-hidden cursor-pointer`}
            onClick={() => window.open(profile.link, '_blank', 'noopener,noreferrer')}
        >
            <div className="absolute top-4 right-4">
                <Icon className={`w-6 h-6 ${profile.iconColor}`} />
            </div>
            
            <div className="p-6">
                <div className="flex items-start space-x-4">
                    <img
                        className="w-16 h-16 object-contain"
                        src={profile.logo}
                        alt={`${profile.platform} logo`}
                    />
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {profile.platform}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {profile.description}
                        </p>
                        <div className="mt-2 text-sm font-semibold text-indigo-600">
                            {profile.stats}
                        </div>
                    </div>
                </div>
                
                <div className="mt-6">
                    <span className="inline-flex items-center space-x-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                        <span>View Profile</span>
                        <ExternalLink className="w-4 h-4" />
                    </span>
                </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
}

// LinkedIn Icon Component
function LinkedInIcon() {
    return (
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
    );
}

// Profile Data
const profiles = [
    {
        platform: 'CodeChef',
        description: '5 Star Rating',
        stats: '2000+ Rating',
        link: 'https://www.codechef.com/users/adarshch18',
        logo: 'https://i.ibb.co/svPSX1y/Screenshot-2024-12-13-170232-removebg-preview.png',
        icon: Star,
        bgColor: 'bg-gradient-to-br from-brown-100 to-brown-50',
        borderColor: 'border-brown-200',
        iconColor: 'text-yellow-600'
    },
    {
        platform: 'CodeForces',
        description: 'Problem Practice',
        stats: '1400+ Problems',
        link: 'https://codeforces.com/profile/Adarsh_Chaudhary',
        logo: 'https://i.ibb.co/J5qtQm1/Screenshot-2024-12-13-170639-removebg-preview.png',
        icon: Code,
        bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
        borderColor: 'border-blue-200',
        iconColor: 'text-blue-600'
    },
    {
        platform: 'LeetCode',
        description: 'Daily Practice',
        stats: '500+ Problems',
        link: 'https://leetcode.com/u/akulchaudhary786/',
        logo: 'https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png',
        icon: Brain,
        bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
        borderColor: 'border-orange-200',
        iconColor: 'text-orange-600'
    },
    {
        platform: 'Code360',
        description: 'MCQ Practice',
        stats: '90% Success Rate',
        link: 'https://www.naukri.com/code360/profile/ce30ddda-a443-4624-ae6f-29bd8911c5e5',
        logo: 'https://i.ibb.co/YNs1sjC/Screenshot-2024-12-13-170911-removebg-preview.png',
        icon: Target,
        bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
        borderColor: 'border-purple-200',
        iconColor: 'text-purple-600'
    },
    {
        platform: 'GeeksForGeeks',
        description: 'Problem Practice',
        stats: '300+ Problems',
        link: 'https://www.geeksforgeeks.org/user/akulchaudhary786/',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
        icon: Code,
        bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
        borderColor: 'border-green-200',
        iconColor: 'text-green-600'
    },
    {
        platform: 'Today Best Problem',
        description: 'Daily Update',
        stats: 'Updated Daily',
        link: 'https://codeforces.com/problemset/problem/2046/A',
        logo: 'https://i.ibb.co/ZN7VLgn/IMG-3318-removebg.png',
        icon: Trophy,
        bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
        borderColor: 'border-yellow-200',
        iconColor: 'text-yellow-600'
    }
];