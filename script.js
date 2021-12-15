
let animations = (function() {
    let recentlyOpenedAnswer = null;
    let questions = document.querySelectorAll('.question');
    questions.forEach(question => question.addEventListener('click', decideToOpenQuestion));
    // This function decides whether to open a question or not.
    function decideToOpenQuestion(e) {
        if(e.target === recentlyOpenedAnswer) {
            closeAnswer(recentlyOpenedAnswer);
            recentlyOpenedAnswer = null;
        }
        else if(recentlyOpenedAnswer) {
            closeAnswer(recentlyOpenedAnswer);
            openAnswer(e);
            recentlyOpenedAnswer = e.target;
        }
        else {
            openAnswer(e);
            recentlyOpenedAnswer = e.target;
        }
    }
    //this function opens the question the was clicked
    function openAnswer(e) {
        const accordion = e.target.nextElementSibling;
        accordion.style.height = "auto";
    }
    // this function closes the specified accordion
    function closeAnswer(question) {
        const accordion = question.nextElementSibling;
        accordion.style.height = "0";

    }
})();