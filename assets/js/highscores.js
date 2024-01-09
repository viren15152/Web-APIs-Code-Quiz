// This section of my code will retrieve scores from local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// This section of my code is my DOM elements
const scoresList = document.getElementById("scores-list");
const goBackBtn = document.getElementById("go-back");
const clearScoresBtn = document.getElementById("clear-scores");

// This section of my code is my event listeners
goBackBtn.addEventListener("click", goBack);
clearScoresBtn.addEventListener("click", clearScores);

// This function will allow me to display high scores
displayScores();

function displayScores() {
  scoresList.innerHTML = "";
  highScores.forEach(score => {
    const listItem = document.createElement("li");
    listItem.textContent = `${score.initials}: ${score.score}`;
    scoresList.appendChild(listItem);
  });
}

function goBack() {
  // Redirect to the main quiz page or home page
  window.location.href = "index.html";
}

function clearScores() {
  // Clear high scores (remove from local storage)
  localStorage.removeItem("highScores");
  // Refresh the displayed scores
  displayScores();
}
