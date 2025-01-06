document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelector('.questions')
    const questionsCollection = document.getElementsByClassName('question')
    const titleELement = document.querySelector('.title')

    function deactivateOtherActiveElements(activeElem) {
        for (let i = 0; i < questionsCollection.length; i++) {
            const element = questionsCollection[i];

            if (element.classList.contains('active') && (element != activeElem)) {
                element.classList.remove('active');
            }
        }
    }

    questions.addEventListener('click', (event) => {
        const activeElement = event.target.closest('.question')

        deactivateOtherActiveElements(activeElement)

        if (event.target.classList.contains('question__content')) {
            activeElement.classList.toggle('active')
        }
    })

    titleELement.addEventListener('dblclick', (event) => {
        const activeElement = event.target.closest('.question')

        let randomNumberOfQuestion = Math.floor(Math.random() * 3)

        deactivateOtherActiveElements(activeElement)

        const randomQuestion = questionsCollection[randomNumberOfQuestion]
        randomQuestion.classList.toggle('active')

        setTimeout(() => {
            const activeElement = event.target.closest('.question')
            deactivateOtherActiveElements(activeElement)
        }, 2000)
    })
})