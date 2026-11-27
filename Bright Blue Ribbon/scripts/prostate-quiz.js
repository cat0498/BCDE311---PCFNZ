(() => {
    const quizQuestions = [
    {
        question: "Where is the Prostate?",
        answers: ["Between the bladder and in front of the rectum", "Above the stomach and behind the lungs", "Between the sternum and the heart", "On the left side behind the kidneys"],
        correctIndex: 0
    },
    {
        question: "Approximately how many New Zealanders are diagnosed with Prostate Cancer each year?",
        answers: ["3000", "4000", "5000", "6000"],
        correctIndex: 1
    },
    {
        question: "Which of the following are benign conditions that have similar symptoms to Prostate Cancer",
        answers: ["Common Cold & Flu", "Scoliosis & Lumbar Injuries", "BPH & Prostatis", "RSI & Arthritis"],
        correctIndex: 2
    }
    ];

    const quiz = document.querySelector("[data-quiz]");

    const progress = quiz.querySelector("[data-quiz-progress]");
    const questionHeading = quiz.querySelector("[data-quiz-question]");
    const answersContainer = quiz.querySelector("[data-quiz-answers]");
    const feedback = quiz.querySelector("[data-quiz-feedback]");
    const nextButton = quiz.querySelector("[data-quiz-next]");
    const results = quiz.querySelector("[data-quiz-results]");
    const scoreText = quiz.querySelector("[data-quiz-score]");
    const restartButton = quiz.querySelector("[data-quiz-restart]");

    let questionIndex = 0;
    let score = 0;
    let answered = false;

    function showQuestion() {
        const currentQuestion = quizQuestions[questionIndex];

        answered = false;
        progress.textContent = `Question ${questionIndex + 1} of ${quizQuestions.length}`;
        questionHeading.textContent = currentQuestion.question;
        feedback.textContent = "";
        answersContainer.replaceChildren();
        results.hidden = true;
        nextButton.hidden = true;

        currentQuestion.answers.forEach((answer, answerIndex) => {
            const answerButton = document.createElement("button");
            answerButton.className = "quiz-answer";
            answerButton.type = "button";
            answerButton.textContent = answer;
            answerButton.addEventListener("click", () => selectAnswer(answerIndex));
            answersContainer.append(answerButton);
        });
    }

    function selectAnswer(selectedIndex) {
        if (answered) {
            return;
        }

        answered = true;
        const currentQuestion = quizQuestions[questionIndex];
        const answerButtons = Array.from(answersContainer.querySelectorAll(".quiz-answer"));
        const isCorrect = selectedIndex === currentQuestion.correctIndex;

        answerButtons.forEach((button, index) => {
            button.disabled = true;
            if (index === currentQuestion.correctIndex) {
                button.classList.add("is-correct");
            } else if (index === selectedIndex) {
                button.classList.add("is-incorrect");
            }
        });

        if (isCorrect) {
            score += 1;
            feedback.textContent = "Correct!";
        } else {
            feedback.textContent = "Not quite. The correct answer is highlighted.";
        }

        nextButton.hidden = false;
        nextButton.textContent = questionIndex === quizQuestions.length - 1
            ? "See your score"
            : "Next question";
    }

    function finishQuiz() {
        progress.textContent = "Quiz complete";
        questionHeading.textContent = "";
        answersContainer.replaceChildren();
        feedback.textContent = "";
        nextButton.hidden = true;
        scoreText.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
        results.hidden = false;
    }

    nextButton.addEventListener("click", () => {
        if (!answered) {
            return;
        }

        questionIndex += 1;
        if (questionIndex === quizQuestions.length) {
            finishQuiz();
        } else {
            showQuestion();
        }
    });

    restartButton.addEventListener("click", () => {
        questionIndex = 0;
        score = 0;
        showQuestion();
    });

    showQuestion();
})();
