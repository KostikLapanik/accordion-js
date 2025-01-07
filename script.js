document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelector('.questions')
    const questionsCollection = document.getElementsByClassName('question')
    const titleELement = document.querySelector('.title')

    function deactivateOtherActiveElements(activeElem) {
        for (let i = 0; i < questionsCollection.length; i++) {
            const element = questionsCollection[i];

            if (element.classList.contains('active') && !element.isEqualNode(activeElem)) {
                element.classList.remove('active');
            }
        }
    }

    questions.addEventListener('click', (event) => {
        const activeElement = event.target.closest('.question')

        if (activeElement) {
            deactivateOtherActiveElements(activeElement)

            activeElement.classList.toggle('active')
        }
    })

    titleELement.addEventListener('dblclick', (event) => {
        let randomNumberOfQuestion = Math.floor(Math.random() * 3)

        deactivateOtherActiveElements()

        const randomQuestion = questionsCollection[randomNumberOfQuestion]
        randomQuestion.classList.toggle('active')

        const id = setTimeout(() => {
            deactivateOtherActiveElements();

            clearTimeout(id);
        }, 2000);
    })
})