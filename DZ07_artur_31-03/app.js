const zagadka = document.querySelectorAll(".zagadka")

zagadka.forEach(zagadka => {
    const viewAnswer = zagadka.querySelector(".viewAnswer")
    const answer = zagadka.querySelector(".answer")


    viewAnswer.addEventListener("click", function () {
        answer.classList.toggle("hidden")
        viewAnswer.textContent = viewAnswer.textContent === "Показать ответ" ? "Скрыть ответ" : "Показать ответ";
    })
})
