const quizData = [
    {
        q: 'How old is Tejas?',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correct: "b"
    },

    {
        q: "What is the standard distance between the target and archer in Olympics?",
        a: "50 meters",
        b: "70 meters",
        c: "100 meters",
        d: "120 meters",
        correct: "a" // arrays start with 0, so answer is 70 meters
    },

    {
        q: "Which is the highest number on a standard roulette wheel?",
        a: "22",
        b: "24",
        c: "32",
        d: "36",
        correct: "c"
    },

    {
        q: "How much wood could a woodchuck chuck if a woodchuck would chuck wood?",
        a: "400 pounds",
        b: "550 pounds",
        c: "700 pounds",
        d: "750 pounds",
        correct: "b"
    },

    {
        q: "Which is the seventh planet from the sun?",
        a: "Uranus",
        b: "Earth",
        c: "Pluto",
        d: "Mars",
        correct: "a"
    },

    {
        q: "Which is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"


    }
];
const quiz = document.getElementById("quiz");

const answerEls = document.querySelectorAll('.answer');

const quesionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    quesionEl.innerText = currentQuizData.q;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}


submitBtn.addEventListener('click', () => {

    // Check to see the answer
    const answer = getSelected();
    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2> You answered correctly at ${score}/${quizData.length} questions. </h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
})
