const questions = [
    'What have i learned today',
    'What bothered me? and what can i do to be better',
    'What made me happy today',
    'How many people did i help today?'
]

const askOneQuestionAtATime = (currentQuestionIndex = 0) => {
    const question = questions[currentQuestionIndex]
    const notReallyAQuestion = typeof question !== 'string'
    if (notReallyAQuestion) return
    console.log(question)
}

function printAllQuestionsAndAnswers() {
    const questionsAndAnswersMap = questions.reduce((questionsAndAnswersMap, question, indexOfQuestion) => {
        questionsAndAnswersMap[question] = answers[indexOfQuestion]
        return questionsAndAnswersMap
    }, {})

    console.clear()
    for (question in questionsAndAnswersMap) {
        console.log(`\n${question}\nR: ${questionsAndAnswersMap[question]}`)
    }
}

const answers = []

askOneQuestionAtATime()
process.stdin.on('data', answer => {
    const formatedAnswer = answer.toString().trim()
    const currentQuestionIndex = answers.push(formatedAnswer) // i'm pushing a new item on the array and getting the new element index at same time, since its returned by the push method
    const notAllQuestionsHaveBeenAsked = answers.length < questions.length

    if (notAllQuestionsHaveBeenAsked) {
        askOneQuestionAtATime(currentQuestionIndex)
    } else {
        process.exit()
    }
})


