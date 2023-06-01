// Good Luck! You got this 💪🏾
// Write your code here.
function calculatePoints(wins, draws, losses) {
    let winPoints = 3;
   let drawPoints = 1;
    let lossPoints = 0;
  
    let totalPoints = (wins * winPoints) + (draws * drawPoints) + (losses * lossPoints);
    
    return totalPoints;
  }
  
  
  let teamWins = 5;
  let teamDraws = 3;
  let teamLosses = 2;
  
  let teamPoints = calculatePoints(teamWins, teamDraws, teamLosses);
  console.log("Total points: " + teamPoints);