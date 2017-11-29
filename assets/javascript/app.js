//declare variables
var number = 60;
var correct = 0;
var unanswered = 0;
var incorrect = 0;
var intervalId;
$(".card").hide();
$("#jumboAnswers").hide();


$(document).ready(function() {

    // questions for quiz check
    function timeOut() {
        var questions1 = $('input:radio[name= "usPresident"]:checked').val();
        var questions2 = $('input:radio[name= "assassinated"]:checked').val();
        var questions3 = $('input:radio[name= "presidents"]:checked').val();
        var questions4 = $('input:radio[name= "terms"]:checked').val();
        var questions5 = $('input:radio[name= "bill"]:checked').val();
        var questions6 = $('input:radio[name= "flagStripes"]:checked').val();
        var questions7 = $('input:radio[name= "twoDollarBill"]:checked').val();
        var questions8 = $('input:radio[name= "wwIIend"]:checked').val();
        $("#jumboAnswers").show();
        $(".card").hide();
        $("#start").hide();

        //create if statement to check if answered or correct  and add to html
        if (questions1 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions1 == "George Washington") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);
        }
        if (questions2 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions2 == "John Wilkes Booth") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);
        }

        if (questions3 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions3 == "45") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);

        }
        if (questions4 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions4 === "Franklin D. Roosevelt") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);
        }
        if (questions5 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions5 === "Grover Cleveland") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);

        }

        if (questions6 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions6 == "13") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);

        }
        if (questions7 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions7 == "2003") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);

        }
        if (questions8 === undefined) {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
        } else if (questions8 == "1945") {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);

        }
    }



    function run() {
        if (intervalId !== undefined) {
            return;
        }
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        //  Decrease number by one.
        number--;
        //  Show the number in the #timer tag.
        $("#timer").html("<h1> Time Left: " + "<br>" + number + "</h1>");

        // Once number hits zero...
        if (number === 0) {
            //  ...run the stop function.
            $("#jumboAnswers").show();
            timeOut();
            stop();
            //  Alert the user that time is up.
            alert("Time Up!");
        }
    }
    //The stop function
    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        intervalId = undefined;
    }



    function reset() {
        //   $(".form-check-input").attr('checked',false);
        //   $('input[name=usPresident]').attr('checked',false);
        $('input:radio[name= "usPresident"]').attr('checked', false); //this is not working
        $(".card").show();
        $("#start").hide();
        $("#jumboAnswers").hide();
        correct = 0;
        unanswered = 0;
        incorrect = 0;
    }

    $("#start").on("click", function() {
        $("#start").hide();
        run();
        reset();
    });



    //click button will run function and decrement by 1 from 60 seconds
    $("#done").on("click", function() {
        timeOut();
        stop();
        $("#start").hide();
        number = 60;
    });


}); //ready function