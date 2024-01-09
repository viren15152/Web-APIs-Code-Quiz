// This is my questions array; it contains multiple questions, each representing a question in my quiz.
const questions = [
    {
      question: "What does HTML stand for?",
      choices: ["Home Tool Mark Up Language", "Hyper Text Markup Language", "Hyperlinks and Text Mark up Language", "Hyper Traffic Makeup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which programming language makes web pages interactive",
      choices: ["Java", "Python", "JavaScript", "C++"],
      correctAnswer: "JavaScript"
    },
    {
      question: "Who is making the Web Standards?",
      choices: ["Apple", "Google", "Microsoft", "The World Wide Web Consortium"],
      correctAnswer: "The World Wide Web Consortium"
    },
    {
      question: "Who is making the Web Standards?",
      choices: ["Apple", "Google", "Microsoft", "The World Wide Web Consortium"],
      correctAnswer: "The World Wide Web Consortium"
    },
    {
      question: "Choose the correct HTML element for the largest heading?",
      choices: ["<h6></h6>", "<h1></h1>", "<head></head>", "<header></header>"],
      correctAnswer: "<h1></h1>"
    },
    {
      question: "What is the correct element for inserting a line break?",
      choices: ["<lb>", "<br>", "<div>", "<break>"],
      correctAnswer: "<br>"
    },
    {
      question: "What Does CSS stand for?",
      choices: ["Cascading Style Sheets", "Colourful Style Simulator", "Creative Style Sheets", "Computer Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Inside which element do we put the JavaScript",
      choices: ["<JavaScript>", "<scripting>", "<script>", "<js>"],
      correctAnswer: "<script>"
    },
    {
      question: "In HTML which character is used to define an end tag?",
      choices: ["<!>", "<^>", "</>", "<$>"],
      correctAnswer: "</>"
    },
    {
      question: "How can you make a numbered list in HTML",
      choices: ["<list>", "<ol>", "li>", "<ul>"],
      correctAnswer: "<ol>"
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeLimit = 60;
  
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz");
  const endScreen = document.getElementById("end-screen");
  const questionContainer = document.getElementById("question-container");
  const choicesContainer = document.getElementById("choices-container");
  const submitBtn = document.getElementById("submit-btn");
  const finalScore = document.getElementById("final-score");
  const initialsInput = document.getElementById("initials");
  const submitScoreBtn = document.getElementById("submit-score");
  
  document.getElementById("start-btn").addEventListener("click", startQuiz);
  submitBtn.addEventListener("click", selectAnswer);
  submitScoreBtn.addEventListener("click", submitScore);
  
  // This is my function to start the quiz
  function startQuiz() {
    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");
    loadQuestion();
    startTimer();
  }
  
  // This is my function to load questions
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
  
    currentQuestion.choices.forEach(choice => {
      const choiceBtn = document.createElement("button");
      choiceBtn.textContent = choice;
      choiceBtn.addEventListener("click", () => selectAnswer(choice, currentQuestion.correctAnswer));
      choicesContainer.appendChild(choiceBtn);
    });
  }
  
  
  // This is my function to select an answer
  function selectAnswer(selected, correct) {
    if (selected === correct) {
      score++;
    } else {
      timeLimit -= 10;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      // Move to the next question
      loadQuestion();
    } else {
      // End the quiz if there are no more questions
      endQuiz();
    }
  }
  
  // This is my function to end the quiz
  function endQuiz() {
    clearInterval(timer);
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = score;
  }
  
  // This is my function that starts the timer
  function startTimer() {
    let timeRemaining = timeLimit;
    timer = setInterval(() => {
      timeRemaining--;
      if (timeRemaining <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // This is my function to submit the score
  function submitScore() {
    clearInterval(timer);
    const initials = initialsInput.value.toUpperCase();
  
    if (initials) {
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      highScores.push({ initials, score });
      highScores.sort((a, b) => b.score - a.score);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      window.location.href = "highscores.html";
    } else {
      alert("Please enter your initials before submitting.");
    }
  }
  // This section of my code is my function that starts my timer
  function startTimer() {
    let timeRemaining = timeLimit;
    timer = setInterval(() => {
      document.getElementById("timer-value").textContent = timeRemaining; // Update the timer value
      timeRemaining--;
  
      if (timeRemaining <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  
  

