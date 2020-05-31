(function() 
 {
  var allQuestions = [{
    question: "Кой е изобретил компютъра",
    options: ["Чарлз Бабидж", "Джеймс Гослинг", "Дъглас Крокфорд", "Бил Гейтс"],
    answer: 0
  }, {
    question: "Кога е направена първата снимка",
    options: ["1945", "1670", "1826", "1870"],
    answer: 2
  }, {
    question: "Как се е казвала първата интернет търсачка създадена през 1990",
    options: ["Opera", "MidasWWW", "NCSA Mosaic","Archie"],
    answer: 3
  },{
    question: "През коя година е било първото трансатлантическо радио излъчване",
    options: ["2004", "1901", "1999", "1970"],
    answer: 1
  }, {
    question: "Коя е първата игрална конзола",
    options: ["Magnavox Odyssey", "Atari Pong", "PlayStation", "Nintendo 64"],
    answer: 0
  },{
    question: "Кога е изобретен първият телевизор",
    options: ["1927", "1899", "1990", "1900"],
    answer: 0
  },{
    question: "Коя е била първата видео игра",
    options: ["Pong", "Minecraft", "Tetris", "Tennis for Twо"],
    answer: 3
  },{
    question: "Кога е създадена компанията Apple",
    options: ["1.1.1976", "1.5.1967", "17.4.1976", "17.5.1967"],
    answer: 0
  },{
    question: "Кога е създадена компанията Microsoft",
    options: ["1.1.1953", "1.5.1967", "4.4.1975", "17.6.1975"],
    answer: 2
  },{
    question: "Кой е изобретил първият принтер",
    options: ["Честър Карлсон", "Дъглас Крокфорд", "Йоханес Гутенберг", "Андреас Дритзен"],
    answer: 2
    },{
      question: "Кога е бил изобретен първият телефон",
      options: ["1800", "1956", "1777", "1876"],
      answer: 3
    },{
      question: "Кой от изброените е първият Windows",
      options: ["windows vista", "windows 95", "windows xp", "windows 1.0"],
      answer: 3
      },];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();