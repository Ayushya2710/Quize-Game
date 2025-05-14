  const questions = [
      {
        question: "What is the capital of France?",
        answers: [
          { text: "Paris", correct: true },
          { text: "London", correct: false },
          { text: "Rome", correct: false },
          { text: "Berlin", correct: false }
        ]
      },
      {
        question: "Who wrote 'Hamlet'?",
        answers: [
          { text: "Charles Dickens", correct: false },
          { text: "William Shakespeare", correct: true },
          { text: "Mark Twain", correct: false },
          { text: "Leo Tolstoy", correct: false }
        ]
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: [
          { text: "Earth", correct: false },
          { text: "Mars", correct: true },
          { text: "Venus", correct: false },
          { text: "Jupiter", correct: false }
        ]
      },
      {
        question: "What is the largest ocean on Earth?",
        answers: [
          { text: "Atlantic Ocean", correct: false },
          { text: "Indian Ocean", correct: false },
          { text: "Pacific Ocean", correct: true },
          { text: "Arctic Ocean", correct: false }
        ]
      },
      {
        question: "Which language is used to style web pages?",
        answers: [
          { text: "HTML", correct: false },
          { text: "JQuery", correct: false },
          { text: "CSS", correct: true },
          { text: "XML", correct: false }
        ]
      },
      {
        question: "What is the smallest prime number?",
        answers: [
          { text: "0", correct: false },
          { text: "1", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false }
        ]
      },
      {
        question: "Which country hosted the 2020 Summer Olympics?",
        answers: [
          { text: "China", correct: false },
          { text: "Japan", correct: true },
          { text: "Brazil", correct: false },
          { text: "UK", correct: false }
        ]
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
          { text: "Oxygen", correct: false },
          { text: "Carbon Dioxide", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Helium", correct: false }
        ]
      },
      {
        question: "What does HTTP stand for?",
        answers: [
          { text: "HyperText Transfer Protocol", correct: true },
          { text: "HighText Transfer Protocol", correct: false },
          { text: "HyperText Transmission Protocol", correct: false },
          { text: "Hyperlink Transfer Text Protocol", correct: false }
        ]
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
          { text: "Gold", correct: false },
          { text: "Oxygen", correct: true },
          { text: "Osmium", correct: false },
          { text: "Hydrogen", correct: false }
        ]
      }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }

    function showQuestion() {
      resetState();
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
      });
    }

    function resetState() {
      nextButton.style.display = "none";
      answerButtons.innerHTML = "";
    }

    function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("wrong");
      }

      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });

      nextButton.style.display = "block";
    }

    function showScore() {
      resetState();
      questionElement.innerText = `🎉 You scored ${score} out of ${questions.length}!`;
      nextButton.innerText = "Play Again";
      nextButton.style.display = "block";
    }

    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }

    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });

    startQuiz();