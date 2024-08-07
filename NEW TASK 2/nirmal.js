const quizData = [
    {
        question:"What is the direction of flow of energy in an ecosystem?",
        a:"Unidirectional",
        b:"Bidirectional",
        c:"Multidirectional",
        d:"None of these",
        correct:"a"
    },
    {
        question:"Which among the following is the unit of measurement of the “Ecological Footprint”?",
        a:"Global Hectare",
        b:"Gallon Per Capita",
        c:"Cubic meter",
        d:"Man Hour",
        correct:"a"

    },
    {
        question:"“Nagoya Protocol ” is related to which among the following?",
        a:"International Finance",
        b:"Biodiversity",
        c:"Pharmaceutical Industry",
        d:"Global Warming",
        correct:"b"
    },
    {
        question:"Parambikkulam wildlife sanctuary is located in which among the following states?",
        a:"Kerala",
        b:"Karnataka",
        c:"Tamil Nadu",
        d:" Andhra Pradesh",
        correct:"a"
    },
    {
        question:"Earth Hour is organized by ___?",
        a:"UNESCO",
        b:"Earth Hour Foundation",
        c:"World Wildlife Fund",
        d:"United Nations Environment Programme",
        correct:"c"
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer ===quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button oneclick="location.reload()">Reload</button>
            `
        }
    }

})