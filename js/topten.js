function Player(myName, myDate, myScore) {
  this.name = myName;
  this.date = myDate;
  this.score = myScore;
}

const players = [
];

function displayLeaderboard() {
  const leaderboardBody = document.getElementById("leaderboard-table-body");

  if (!leaderboardBody) {
    return;
  }

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  if (!sortedPlayers.length) {
    leaderboardBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 24px; color: #333; font-weight: 700;">
          Leaderboard Empty or Failed To Connect
        </td>
      </tr>
    `;
    return;
  }

  leaderboardBody.innerHTML = sortedPlayers
    .map((player, index) => `
      <tr>
        <td>#${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.date}</td>
        <td>${player.score}</td>
      </tr>
    `)
    .join("");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", displayLeaderboard);
} else {
  displayLeaderboard();
}