import { baseurl } from "./baseurl.js";

let form = document.getElementById("form");



form.addEventListener("submit", function (event) {
  console.log("clicked");
  event.preventDefault();
  let title = form.question.value;
  let optionA = form.optionA.value;
  let optionB = form.optionB.value;
  let optionC = form.optionC.value;
  let optionD = form.optionD.value;
  let correctoption = form.correct.value;
  let quesObj = {
    title,
    optionA,
    optionB,
    optionC,
    optionD,
    correctoption,
    reviewStatus,
  };

  fetch(`${baseurl}/questions`)
  .then((res)=res.json())
  .then((data) => {
    data.map((el, i) => {
let card = document.createElement("div");
      let title = document.createElement("h3");
      let optionA = document.createElement("h2")
      let optionB = document.createElement("h2")
        let optionC = document.createElement("h2")
        let optionD = document.createElement("h2")
    let correctOption = document.createElement("h2")

    title.textContent=`Title: ${el.title}`;
    optionA.textContent=`Option A: ${el.optionA}`;
    optionB.textContent=`Option B: ${el.optionB}`;
    optionC.textContent=`Option C: ${el.optionC}`;
    optionD.textContent=`Option D: ${el.optionD}`;
    correctOption.textContent=`Correct Option: ${el.correctoption}`;

    card.append(title,optionA,optionB,optionC,optionD,correctOption);

    let maincont = document.getElementById("maincont");
    maincont.append(card);
    });

  fetch(`${baseurl}/questions`)
    .then((res) => res.json())
    .then((data) => {
      let question = data.map((el, i) => {
        return el.title === title;
      });

      if (question.length > 0) {
        alert("Question already exists");
        window.location.href = "questions.html";
      } else {
        fetch(`${baseurl}/questions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(quesObj),
        }).then(() => {
          alert("Question Created");
        });
      }
    })
    .catch((err) => {
      alert("Error in creating question");
      console.log(err);
    });
});
