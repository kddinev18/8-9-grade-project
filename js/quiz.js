
$(function () {
    let question = getNextQuestion();
    if (question) {
        //console.log(question);
        $("#question").text(question.questionText);

        for (let i = 0; i < question.answers.length; i++) {
            console.log(question.answers[i]);
            $("#a" + i).text(question.answers[i].answerText);
        }

    }

    $("#btnNext").on("click", function () {
        if ($(this).text() != "Finish") {
            let question = getNextQuestion();
            if (question) {
                console.log(question);
                $("#question").text(question.questionText);

                for (let i = 0; i < question.answers.length; i++) {
                    console.log(question.answers[i]);
                    $("#a" + i).text(question.answers[i].answerText);
                }

            } else {
                $(this).text("Finish");
            }
        } else {
            console.log("Checking test");

        }

    });

});

