const questions = [
    {
      question: "What is the largest planet in our Solar System?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Thailand", "Japan"],
      answer: "Japan"
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Atom", "Molecule", "Cell", "Organ"],
      answer: "Cell"
    },
    {
      question: "What is the main ingredient in traditional Japanese miso soup?",
      options: ["Soybeans", "Rice", "Chicken", "Tofu"],
      answer: "Soybeans"
    },
    {
      question: "What does DNA stand for?",
      options: [
        "Deoxyribonucleic Acid",
        "Deoxyribose Natural Acid",
        "Dextrose Nucleic Acid",
        "Dextrose Nitric Acid"
      ],
      answer: "Deoxyribonucleic Acid"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Osmium", "Zinc"],
      answer: "Oxygen"
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
      answer: "Albert Einstein"
    },
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra"
    },
    {
      question: "In which continent is the Sahara Desert located?",
      options: ["Asia", "South America", "Africa", "Australia"],
      answer: "Africa"
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
      answer: "Pound Sterling"
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      options: ["Jane Austen", "Charles Dickens", "Mark Twain", "Virginia Woolf"],
      answer: "Jane Austen"
    },
    {
      question: "Which language is the most spoken worldwide?",
      options: ["Spanish", "English", "Mandarin Chinese", "Hindi"],
      answer: "Mandarin Chinese"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const resultElement = document.getElementById("result");
  
    resultElement.textContent = "";  // Clear result
    nextButton.style.display = "none";  // Hide next button
  
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = "";  // Clear previous options
    question.options.forEach(option => {
      const optionButton = document.createElement("button");
      optionButton.className = "list-group-item list-group-item-action";
      optionButton.textContent = option;
      optionButton.onclick = () => checkAnswer(option, optionButton);
      optionsElement.appendChild(optionButton);
    });
  }
  
  function checkAnswer(selectedOption, optionButton) {
    const question = questions[currentQuestionIndex];
    const nextButton = document.getElementById("next-button");
  
    if (selectedOption === question.answer) {
      optionButton.classList.add("correct");
      score++;
    } else {
      optionButton.classList.add("incorrect");
    }
  
    // Disable all options
    document.querySelectorAll("#options button").forEach(button => {
      button.onclick = null;
      if (button.textContent === question.answer) {
        button.classList.add("correct");
      }
    });
  
    nextButton.style.display = "block";  // Show next button
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
  
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    quizContainer.style.display = "none";  // Hide quiz content
    nextButton.style.display = "none";  // Hide next button
  
    // Create "Start Again" button
    const restartButton = document.createElement("button");
    restartButton.textContent = "Start Again";
    restartButton.className = "btn btn-secondary mt-4";
    restartButton.onclick = restartQuiz;
  
    // Add the button to the result display
    resultElement.appendChild(restartButton);
  }
  
  function restartQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
  
    // Show the quiz container and load the first question
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result").textContent = "";  // Clear result display
  
    loadQuestion();
  }
  
  window.onload = loadQuestion;