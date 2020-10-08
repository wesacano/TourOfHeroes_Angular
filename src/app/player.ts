export interface Player {
    id: number;
    name: string;
    experience: number;
    team: string;
    position: string;
    teamNumber: number;
    overallRecord: string;
    stats: {
        season: number;
        gamesStarted: number;
        gamesPlayed: number;
        passingStats: {
            completions: number;
            passesAttempted: number;
            completionPercentage: number;
            yards: number;
            touchdowns: number;
            interceptions: number;
            touchdownInterceptionRatio: number;
            yardsPerAttempt: number;
            sacks: number;
        },
        rushingStats: {
            rushesAttempted: number;
            yards: number;
            firstDowns: number;
            touchdowns: number;
            yardsPerAttempt: number;
            yardsPerGame: number;
            attemptsPerGame: number;
        },
        receivingStats: {
            targets: number;
            receptions: number;
            yards: number;
            firstDowns: number;
            touchdowns: number;
            yardsPerReception: number;
            yardsPerGame: number;
            receptionsPerGame: number;
        }
    }
}