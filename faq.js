const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
createFaq();

function createFaq() {
  for (ele of faqData) {
    let question = ele.question;
    let answer = ele.answer;
    let id = ele.id;
    showFaq(question, answer, id);
  }
}

function showFaq(question, answer, id) {
  const faq = document.createElement("DIV");
  faq.classList.add("faq");
  faq.innerHTML = `
    <div class="faq_header">
      <h3>${question}</h3>
      <div class="show_btn" onclick="handleClick(this.parentElement.parentElement)"></div>
    </div>
    <p class="answer hidden"> ${answer}
    </p>
  `;
  accordianBody.appendChild(faq);
}

function handleClick(faqBody) {
  const answer = faqBody.querySelector(".answer");
  let isOpen = btnStatusUpdate(answer);
  if (!isOpen) {
    answer.classList.remove("hidden");
  } else {
    answer.classList.add("hidden");
  }
}

function btnStatusUpdate(answer) {
  return !answer.classList.contains("hidden");
}


