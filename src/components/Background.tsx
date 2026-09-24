
function Background() {
    return (

        <div className='background'>
            <svg
                width="100%"
                height="99vh"
                viewBox="0 0 1100 1500"
                fill="#09090F"
                xmlns="http://www.w3.org/2000/svg"
            >




                <circle
                    cx="180"
                    cy="900"
                    r="350"
                    fill="url(#blueGlow)"
                    opacity="0.25"
                />

                <circle
                    cx="1250"
                    cy="750"
                    r="300"
                    fill="url(#purpleGlow)"
                    opacity="0.18"
                />

                <circle
                    cx="200"
                    cy="700"
                    r="120"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    opacity="0.15"
                />

                <circle
                    cx="1200"
                    cy="180"
                    r="100"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    opacity="0.08"
                />

                <circle
                    cx="1200"
                    cy="180"
                    r="100"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="1"
                    opacity="0.15"
                />

                <path
                    d="M0 250 L500 0"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    opacity="0.05"
                />

                <path
                    d="M900 900 L1440 600"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    opacity="0.05"
                />

                <circle
                    cx="300"
                    cy="200"
                    r="3"
                    fill="#60A5FA"
                />

                <circle
                    cx="1100"
                    cy="300"
                    r="2"
                    fill="#A78BFA"
                />

                <circle
                    cx="1280"
                    cy="650"
                    r="3"
                    fill="60A5FA"
                />

                <path
                    d="M720 120
           L726 136
           L742 142
           L726 148
           L720 164
           L714 148
           L698 142
           L714 136
           Z"
                    fill="#FFFFFF"
                    opacity="0.35"
                />

                <defs>
                    <radialGradient id="blueGlow">
                        <stop
                            offset="0%"
                            stopColor="#2563EB"
                            stopOpacity="0.7"
                        />

                        <stop
                            offset="100%"
                            stopColor="#2563EB"
                            stopOpacity="0"
                        />
                    </radialGradient>

                    <radialGradient id="purpleGlow">
                        <stop
                            offset="0%"
                            stopColor="#7C3AED"
                            stopOpacity="0.6"
                        />

                        <stop
                            offset="0%"
                            stopColor="#7C3AED"
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}


export default Background;