// objects to store the questions and answers in
var trivia = [
    {
        question: "Who was the world's first computer programmer?",
        answers: ["Steve Jobs", "Charles Babbage", "Ada Lovelace", "Robert E. Kahn"],
        correct: 2,
        correctGif: "<img src='./assets/images/ada-lovelace.gif' alt='Ada Lovelace'>",
        correctResponse: "Correct! Her work was 'overlooked' until 1953.  But her notes on the 'Analytical Machine' make her the world's first computer programmer.",
        wrongGif: "<img src='./assets/images/ada-lovelace.gif' alt='Ada Lovelace'>",
        wrongResponse: "Wrong!  Who runs the world? Girls!  Who first ran the code?  Ada Lovelace."
    },
    {
        question: "Who was the first woman to win a nobel prize?",
        answers: ["Marie Curie", "Beyonce", "Ann Perkins", "Michelle Obama"],
        correct: 0,
        correctGif: "<img src='assets/images/marie-curie.gif' alt='Marie Curie'>",
        correctResponse: "Yep!  Not only was Marie Curie the first women to win a Nobel prize, but she is the ONLY person - to date- that won TWO nobel prizes in TWO different science fields.  Marie Curie, the Queen of Physics and Radiation.  Bow down!",
        wrongGif: "<img src='assets/images/marie-curie.gif' alt='marie curie'>",
        wrongResponse: "Incorrect!  While all women are strong and intelligent, Marie Curie was the first woman to win a nobel prize.  She is also the first and only person - to date - to win TWO nobel prizes in TWO different scientific fields."
    },
    {
        question: "Which woman was an ancient STEM goddess?",
        answers: ["Cleopatra", "Cinderella", "Queen Elizabeth", "Hypatia"],
        correct: 3,
        correctGif: "<img src='assets/images/hypatia.gif' alt='Hypatia'>",
        correctResponse: "Yes! Hypotia innovated math an astronomy sometime before 400ce.  Take that, patriarchy!",
        wrongGif: "<img src='assets/images/hypatia.gif' alt='Hypatia'>",
        wrongResponse: "Nope.  It was Hypotia who innovated math and astronomy before 400ce.  She paved a path for modern female scientists."
    },
    {
        question: "Which field did Ynes Mexia thrive in?",
        answers: ["Laundry", "Cooking", "Botany", "Sewing"],
        correct: 2,
        correctGif: "<img src='assets/images/ynes-mexia.gif' alt ='Ynes Mexia'>",
        correctResponse: "Correct!  Move over Darwin, this Ynes Mexia was a leading creative field scientist and an explorer.",
        wrongGif: "<img src='assets/images/ynes-mexia.gif' alt ='Ynes Mexia' alt='Ynes Mexia'>",
        wrongResponse: "Sorry, but no.  Domestic roles are hard work and deserve honor, but Ynes Mexia made her legend as a creative field scientist and explorer.  Her work in Botany is on par with Darwin's."
    },
    {
        question: "Which brilliant woman first photographed the helix shape of DNA?",
        answers: ["Mother Theresa", "No Woman", "Katy Perry", "Rosalind Franklin"],
        correct: 3,
        correctGif: "<img src='assets/images/rosalind-franklin.gif' alt='Rosalind Franklin'>",
        correctResponse: "Correct.  In 1953 she took a DNA pic, turns out she's 100% that b*%^!.  Her work provided evidence that led to advances in medicine, pop lyrics, and so much more.",
        wrongGif: "<img ssrc='assets/images/rosalind-franklin.gif' alt='Rosalind Franklin'>",
        wrongResponse: "Incorrect!  Rosalind Franklin took a DNA pic, turns out she's 100% that b$%*&.  Her work was provided evidence that led to advances in medicine, pop lyrics, and so much more."
    },
    {
        question: "Who was the Australian actress and inventor who helped defeat Nazi's during WW2?",
        answers: ["Marilyn Monroe", "Hedy Lamarr", "Nicole Kidman", "Princess Dianna"],
        correct: 1,
        correctGif: "<img src='assets/images/hedy-lamar.gif' alt='Hedy Lamarr'>",
        correctResponse: "Yes!  Many only remember her for her glamour and style, but she helped to invent a 'Secret Communication System' which was used in the fight against Nazi's.",
        wrongGif: "<img src='assets/images/hedy-lamar.gif' alt='Hedy Lamarr'>",
        wrongResponse: "Nice try, but nope!  Hedy Lamarr is remembered for her beauty, but somewhat unknown for her brain.  With no college-education, she helped to invent a 'Secret Communication System' that helped defeat the Nazi's."
    },
    {
        question: "Which feminist icon triumphed at NASA, despite social barriers such as Jim Crow Law?",
        answers: ["Annie Easley", "Rosa Parks", "Mary Church Terrell", "Ida B. Wells"],
        correct: 0,
        correctGif: "<img src='assets/images/annie-easley.gif' alt='Annie Easley>",
        correctResponse: "Yes!  While all of the choices were heroic women, Annie Easley was another hidden figure who rose above injustice to work at NASA for over 30 years. ",
        wrongGif: "<img src='assets/images/annie-easley.gif' alt='Annie Easley'>",
        wrongResponse: "Wrong- though all the options were heroic and historic women.  Annie Easley broke barries at Nasa for over 30 years.  She rose above injustice and made important contributions as a mathematician and rocket-scientist."
    },
    {
        question: "What field did Katsuko Saruhashi dominate in?",
        answers: ["Poetry", "Nuclear Geochemistry", "Caregiving", "Painting"],
        correct: 1,
        correctGif: "<img src='assets/images/katsuko.gif' alt='Katsuko Saruhashi'>",
        correctResponse: "Oh, yes she did!  Katsuko was a geochemist who conducted groundbreaking research and served on goverment councils regaurding radiation and nuclear fallout.",
        wrongGif: "<img ssrc='assets/images/katsuko.gif' alt='Katsuko Saruhashi'>",
        wrongResponse: "No.  She was a brilliant geochemist who conducted groundbreaking research in radiation and nuclear fallout.  She also served government councils and was an expert speaker on this serious issue."
    },
    {
        question: "In which field did Marie Tharp 'seamlessly integrate science and art'?",
        answers: ["cosmotology", "cartography", "marketing", "robotics"],
        correct: 1,
        correctGif: "<img src='assets/images/marie-tharp.gif' alt='Marie Tharp'>",
        correctResponse: "Correct! If you've seen a world map, you've probably seen her work.",
        wrongGif: "<img ssrc='assets/images/marie-tharp.gif' alt='Marie Tharp'>",
        wrongResponse: "Wrong... but if you've seen a world map, you've seen her work.  She was key-player in mapping the oceans of our world."
    },
    {
        question: "Who was the first woman in space?",
        answers: ["Sally Ride", "Neil Armstrong", "Sandra Bullock", "Valentina Tershkova"],
        correct: 3,
        correctGif: "<img src='assets/images/valentina.gif' alt='Valentina Tereshkova'>",
        correctResponse: "Yes! At 26 years old, she was the Soviet born Valentina Tereshkova spent three days in space.  Rocket woman!",
        wrongGif: "<img src='assets/images/valentina.gif' alt='Valentina Tereshkova'>",
        wrongResponse: "Incorrect.  Valentina Tereshkova was out of this world!  She was the first woman cosmonaut and spent 3 days in space at the young age of 26."
    }
];

// variables: correct answers, incorrect answers, question number
var correct = 0;
var incorrect = 0;
var questionNum = 0;
var correctNum = 0;
var userChoice;
var correctIndex;

//  press start game, then the timer begins going down. if timer reaches zero, then the round is over.
// function to have the question generated and then put on the page
function roundQuestion() {
    $(".answer-div").empty().hide();
    $("#timer, #current-question").show();
    //questions on the page
    var currentQuestion = trivia[questionNum];
    var answers = trivia[questionNum].answers;
    correctIndex = trivia[questionNum].correct;
    var timer = 30;
    // change the question number
    $("#time-remaining").text(timer);
    $("#question-num").text(questionNum + 1);

    // put the question in a h4 tag
    var questionText = $("<h4>").text(currentQuestion.question);
    $("#question").append(questionText);
    for (var i = 0; i < answers.length; i++) {
        var answersText = $("<p>").addClass("row flex-row justify-content-center answer-choice").attr("data-index", answers.indexOf(answers[i])).text(answers[i]);
        $("#question").append(answersText);
    }

    // change the number of the timer counter
    function timerDecrease() {
        if (timer > 0) {
            timer--;
            $("#time-remaining").text(timer);
        } else {
            clearInterval(runTimer);
            userChoice = -1;
            answer();
        }
    }
    // every second, run the timerDecrese function
    var runTimer = setInterval(timerDecrease, 1000);

    // when the user clicks an answer choice...
    $(".answer-choice").on("click", function () {
        // store the index number as the user's choice...
        userChoice = parseInt($(this).attr("data-index"));
        // stop running the question timer
        clearInterval(runTimer);
        // compare and show the appropriate div
        answer();
    });

}

function answer() {
    $("#question, .answer-div").empty();
    $("#timer, #current-question").hide();
    var answerDiv = $("<div>").addClass("answer-div");
    var gifDiv = $("<div>").addClass("row");
    var textDiv = $("<div>").addClass("row flex-row justify-content-center")
    if (userChoice === correctIndex) {
        correct++;
        // show the answer div with a timer, and then go to the next question
        var answerText = $("<p>").text(trivia[questionNum].correctResponse);
        textDiv.append(answerText);
        gifDiv.html(trivia[questionNum].correctGif);
    } else if (userChoice !== correctIndex) {
        incorrect++;
        // show the answer div with the correct answer, with a timer
        gifDiv.html(trivia[questionNum].wrongGif);
        textDiv.text(trivia[questionNum].wrongResponse)
    } else if (userChoice === -1) {

    }
    answerDiv.append(textDiv, gifDiv);
    $("#game").append(answerDiv);
    questionNum++;

    // if it isn't the last question, then go to the next round
    if (questionNum + 1 <= trivia.length) {
        setTimeout(roundQuestion, 9000);
    }
    // if it is the last question, then display the end game div
    else if (questionNum + 1 > trivia.length) {
        setTimeout(endGame, 9000);
    }
}

function endGame() {
    $(".answer-div").empty().hide();
    var results = $("<div>").addClass("results");
    var tryAgainBtn = $("<button>").addClass("btn btn-primary mx-auto d-block").attr("id", "play-again");
    var gameOver = $("<h3>").addClass("text-center").text("Game Over!");
    var resultsText = $("<p>").addClass("row flex-row justify-content-center");
    var gif = $("<div>").addClass("row flex-row justifiy-content-center");
    if (correct > 6) {
        gif.append($("<img>").attr("src", "./assets/images/women.gif"));
        resultsText.text(`Wow, you know your ladies! You got ${correct} right and only ${incorrect} wrong. Great job!`);
        tryAgainBtn.text("Play Again")
    } else if (correct < 7) {
        resultsText.text(`You only got ${correct} right and ${incorrect} wrong. Why don't you try again?`);
        gif.append($("<img>").attr("src", "./assets/images/women.gif"));
        tryAgainBtn.text("Try Again");
    }

    results.append(gameOver, resultsText, gif, tryAgainBtn);
    $("#game").append(results);
    $("#play-again").on("click", playGame);
}

function playGame() {
    // resetting variables when the player choses to play again
    questionNum = 0;
    correct = 0;
    incorrect = 0;
    $(".welcome-content, .results, #play").hide();
    $(".results").empty();
    $("#game").show();
    roundQuestion();
}

// hide the game until the user choses to play
$("#game").hide();
// when the user clicks the button to play the game, triggers starting all of the functions
$("#play").on("click", playGame);
