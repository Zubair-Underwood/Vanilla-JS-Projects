const quizData = [
    {
        question: "How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c"
    }, {
        question: "What is the most used programming language?",
        a: "java",
        b: "C",
        c: "python",
        d: "javascript",
        correct: "d"
    }, {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "donald trump",
        c: "john Mccain",
        d: "Joe Biden",
        correct: "d"
    }, {
        question: "What does HTML stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "JavaScript Object Notation",
        d: "Application Programming Interface",
        correct: "a"
    }, {
        question: "What year was JavaScript Launched?",
        a: "2020",
        b: "2001",
        c: "1998",
        d: "1995",
        correct: "d"

    }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answersEls.forEach((answerEl) => {

        if (answerEl.checked) {

            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {

    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {

    // check to see the answer
    const answer = getSelected();

    console.log(answer);


    if (answer) {

        if (answer === quizData[currentQuiz].correct) {

            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {

            loadQuiz();

        } else {

            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onClick="location.reload()">Reload</button>`;
        }
    }
});