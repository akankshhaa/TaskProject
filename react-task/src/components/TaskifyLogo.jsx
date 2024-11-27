import React from 'react';

const TaskifyLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" className="w-64 h-60">
        <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#34D399' }} />
                <stop offset="100%" style={{ stopColor: '#059669' }} />
            </linearGradient>

            <mask id="text-mask">
                <rect x="80" y="40" width="140" height="120" fill="white" />
                <text x="150" y="105" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="black">
                    TASKIFY
                </text>
            </mask>
        </defs>

        {/* Main circle with gradient */}
        <circle cx="150" cy="100" r="90" fill="url(#greenGradient)" />

        {/* White card with text cutout */}
        <rect x="80" y="40" width="140" height="120" rx="15" fill="white" mask="url(#text-mask)" />

        {/* Friendly checkmark with bouncy style */}
        <path d="M110 95 Q115 100 120 105 T140 85" stroke="#059669" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <animate attributeName="d"
                dur="1s"
                repeatCount="indefinite"
                values="M110 95 Q115 100 120 105 T140 85;
                        M110 93 Q115 98 120 103 T140 83;
                        M110 95 Q115 100 120 105 T140 85" />
        </path>

        {/* Task lines with varying lengths */}
        <line x1="110" y1="120" x2="190" y2="120" stroke="#059669" strokeWidth="4" strokeLinecap="round">
            <animate attributeName="x2"
                values="190;185;190"
                dur="2s"
                repeatCount="indefinite" />
        </line>
        <line x1="110" y1="135" x2="170" y2="135" stroke="#059669" strokeWidth="4" strokeLinecap="round">
            <animate attributeName="x2"
                values="170;165;170"
                dur="2s"
                repeatCount="indefinite" />
        </line>

        {/* Friendly person icon */}
        <circle cx="190" cy="70" r="10" fill="#059669">
            <animate attributeName="r"
                values="10;9.5;10"
                dur="2s"
                repeatCount="indefinite" />
        </circle>
        <path d="M180 90 Q190 80 200 90" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Small decorative dots */}
        <circle cx="95" cy="55" r="3" fill="#34D399" />
        <circle cx="205" cy="145" r="3" fill="#34D399" />
    </svg>
);

export default TaskifyLogo;
