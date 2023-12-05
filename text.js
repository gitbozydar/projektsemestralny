function submitQuiz() {
  const answerQ1 = document.querySelector('input[name="q1"]:checked');

  if (answerQ1) {
    const resultDiv = document.getElementById("result");
    const jobType = answerQ1.value;

    resultDiv.innerHTML = `Based on your preferences, you might enjoy a ${jobType} IT job!`;
  } else {
    alert("Please answer all questions before submitting.");
  }
}
