const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', function() {
        let dropDown = question.nextElementSibling;
        dropDown.classList.add('collapsing');
        if(question.classList.contains('opened')) {
            dropDown.classList.add('collapse');
            dropDown.classList.remove('show');
        }
        else {
            dropDown.classList.add('show');
            dropDown.classList.remove('collapse');
        }
        setTimeout(() => {
            dropDown.classList.remove('collapsing');
        }, 500);
        question.classList.toggle('opened');
    })
})