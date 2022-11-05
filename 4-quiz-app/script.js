const questionData = [
    {
        question: "What is the fundamental language?",
        a: "C",
        b: "Python", 
        c: "JavaScript",
        d: "Java", 
        correct: "a"
    },
    {
        question: "What is the dynamic language",
        a: "C",
        b: "Java", 
        c: "C#",
        d: "Python", 
        correct: "d"
    },
    {
        question: "What does HTML stand for?",
        a: "Htae Tin Moe Linn",
        b: "Hypertext Markup Language", 
        c: "How to move legs",
        d: "Hi There Mr.Luwis", 
        correct: "b"
    },
    {
        question: "What is the universal natural language?",
        a: "Chinese",
        b: "Japanese", 
        c: "English",
        d: "Latin", 
        correct: "c"
    },
    {
        question: "Who is the prime minister of United Kingdom?",
        a: "Boris Johnsin",
        b: "Lis Trus", 
        c: "Rishi Sunak",
        d: "Joe Biden", 
        correct: "c"
    }
]

const containerEl = document.querySelector('.question-container');
const questionEl = document.getElementById('question');
const optionEls = document.querySelectorAll('.answer');
const aEl = document.getElementById('a_text');
const bEl = document.getElementById('b_text');
const cEl = document.getElementById('c_text');
const dEl = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deleteChecked();
    const currentQuizData = questionData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    aEl.textContent = currentQuizData.a;
    bEl.textContent = currentQuizData.b;
    cEl.textContent = currentQuizData.c;
    dEl.textContent = currentQuizData.d;
}

function deleteChecked(){
    optionEls.forEach(optionEl => {
        optionEl.checked = false;
    })
}

function getSelected() {
    let answer;

    optionEls.forEach(optionEl => {
        if (optionEl.checked) {
            answer = optionEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected();

    if (answer) {
        if (answer === questionData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < questionData.length) {
            loadQuiz();
        } else {
            containerEl.innerHTML = `
                <h2>You scored ${score}/${questionData.length}!</h2>
                <button onclick="location.reload()">Reload</button>`
        }
    }
})