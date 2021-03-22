var competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]];
var results = [0, 0, 1];

function tournamentWinner(competitions, results) {
    // Write your code here.
    let teamScores = {};
    let bestScore = '';
    let currentScore = '';
    let bestTeam= '';
    let currentTeam = '';
    for (i = 0; i < competitions.length; i++) {
        if(results[i] === 0){
            teamScores[competitions[i][1]] = teamScores[competitions[i][1]] ? teamScores[competitions[i][1]] + 3 : 3;
            currentScore = teamScores[competitions[i][1]];
            currentTeam = competitions[i][1];
        } else{
            teamScores[competitions[i][0]] = teamScores[competitions[i][0]] ? teamScores[competitions[i][0]] + 3 : 3;
            currentScore = teamScores[competitions[i][0]];
            currentTeam = competitions[i][0];
        }
        if(currentScore > bestScore){
            bestScore = currentScore;
            bestTeam = currentTeam;
        }
    }
    return bestTeam;
}

console.log(tournamentWinner(competitions, results));