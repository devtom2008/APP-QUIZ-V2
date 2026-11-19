
type CircularProgressProps = {
    score: number;
    maxScore: number;
};

function CircularProgress({
    score,
    maxScore
}: CircularProgressProps) {

    const radius = 45;

    // Calcul de la circonférence
    const circumference = 2 * Math.PI * radius;

    // Pourcentage de progression
    const progress = maxScore > 0
        ? Math.min(Math.max(score / maxScore, 0), 1)
        : 0;

    // Partie du cercle à masquer
    const offset = circumference * (1 - progress);

    return (
        <div className="score-div">

            <svg viewBox="0 0 120 120">

                {/* Cercle de fond */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke="#DCE5EF"
                    strokeWidth="9"
                />

                {/* Cercle de progression */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 60 60)"
                />

                {/* Score au centre */}
                <text
                    x="60"
                    y="65"
                    textAnchor="middle"
                    fontSize="23"
                    fill="currentColor"
                    fontWeight="bold"
                >
                    {score}/{maxScore}
                </text>

            </svg>

        </div>
    );
}

export default CircularProgress;
