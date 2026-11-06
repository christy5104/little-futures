const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const questionOutput = document.querySelector("#generated-question");
const questionButton = document.querySelector("#new-question");
const yearOutput = document.querySelector("#current-year");

const questions = [
    "What is something you would love to understand better?",
    "How could we find out if our guess is right?",
    "What might happen if we tried it a different way?",
    "What did you notice today that you had never noticed before?",
    "If you could improve one small thing around us, what would you change?",
    "What makes you think that? What else could be true?"
];

let previousQuestionIndex = 0;

menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
        menuToggle.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
    }
});

questionButton.addEventListener("click", () => {
    let nextQuestionIndex = Math.floor(Math.random() * questions.length);

    while (questions.length > 1 && nextQuestionIndex === previousQuestionIndex) {
        nextQuestionIndex = Math.floor(Math.random() * questions.length);
    }

    previousQuestionIndex = nextQuestionIndex;
    questionOutput.textContent = questions[nextQuestionIndex];
});

yearOutput.textContent = String(new Date().getFullYear());
