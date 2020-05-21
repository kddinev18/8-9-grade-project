var userAnswers = [];
var qIndex = 0;
var questions = [
    {
        questionText: "Who Invented the mechanical Computer?",
        answers: [
            {
                answerText: "Charles Babbage",
                isCorrect: true
            },
            {
                answerText: "James Gosling",
                isCorrect: false
            },
            {
                answerText: "Douglas Crockford",
                isCorrect: false
            },
            {
                answerText: "Bill Gates",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "The first partially successful photograph of a camera was in which year:",
        answers: [
            {
                answerText: "1945",
                isCorrect: false
            },
            {
                answerText: "1670",
                isCorrect: false
            },
            {
                answerText: "1816",
                isCorrect: true
            },
            {
                answerText: "1870",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "Created in 1990, what was the name of the first internet search engine?",
        answers: [
            {
                answerText: "Opera",
                isCorrect: false
            },
            {
                answerText: "MidasWWW",
                isCorrect: false
            },
            {
                answerText: "NCSA Mosaic",
                isCorrect: false
            },
            {
                answerText: "Archie",
                isCorrect: true
            }
        ]
    },
    {
        questionText: "In what year was the first transatlantic radio broadcast?",
        answers: [
            {
                answerText: "2004",
                isCorrect: false
            },
            {
                answerText: "1901",
                isCorrect: true
            },
            {
                answerText: "1999",
                isCorrect: false
            },
            {
                answerText: "1970",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "The oldest video game console is:",
        answers: [
            {
                answerText: "Magnavox Odyssey",
                isCorrect: true
            },
            {
                answerText: "Atari Pong",
                isCorrect: false
            },
            {
                answerText: "PlayStation",
                isCorrect: false
            },
            {
                answerText: "Nintendo 64",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "The First Electronic Television was Invented in which year",
        answers: [
            {
                answerText: "1927",
                isCorrect: true
            },
            {
                answerText: "1899",
                isCorrect: false
            },
            {
                answerText: "1990",
                isCorrect: false
            },
            {
                answerText: "1900",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "What the First Video Game was?",
        answers: [
            {
                answerText: "Pong",
                isCorrect: false
            },
            {
                answerText: "Minecraft",
                isCorrect: false
            },
            {
                answerText: "Tetris",
                isCorrect: false
            },
            {
                answerText: "Bertie the Brain",
                isCorrect: true
            }
        ]
    },
    {
        questionText: "When Apple Computer Company was founded?",
        answers: [
            {
                answerText: "April 1, 1976",
                isCorrect: true
            },
            {
                answerText: "May 1, 1967",
                isCorrect: false
            },
            {
                answerText: "April 17, 1976",
                isCorrect: false
            },
            {
                answerText: "May 17, 1967",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "When Microsoft Corporation was founded?",
        answers: [
            {
                answerText: "January 1, 1953",
                isCorrect: false
            },
            {
                answerText: "May 1, 1967",
                isCorrect: false
            },
            {
                answerText: "April 4, 1975",
                isCorrect: true
            },
            {
                answerText: "June 17, 1975",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "Who invented the first printer ever?",
        answers: [
            {
                answerText: "Chester Carlson",
                isCorrect: true
            },
            {
                answerText: "Douglas Crockford",
                isCorrect: false
            },
            {
                answerText: "Johannes Gutenberg",
                isCorrect: false
            },
            {
                answerText: "Andreas Dritzehns",
                isCorrect: false
            }
        ]
    },
    {
        questionText: "When was the first telephone invented?",
        answers: [
            {
                answerText: "1800",
                isCorrect: false
            },
            {
                answerText: "1956",
                isCorrect: false
            },
            {
                answerText: "1777",
                isCorrect: false
            },
            {
                answerText: "1876",
                isCorrect: true
            }
        ]
    },
    {
        questionText: "Which is the first windows?",
        answers: [
            {
                answerText: "Windows vista",
                isCorrect: true
            },
            {
                answerText: "Windows 95",
                isCorrect: false
            },
            {
                answerText: "Windows xp",
                isCorrect: false
            },
            {
                answerText: "Windows 1.0",
                isCorrect: true
            }
        ]
    }

];

function getNextQuestion(){
    if (qIndex < questions.length)
        return questions[qIndex++];
    else {
        return null;
    }
}