(function() 
 {
  var allQuestions = [{
    question: "The word is 내일, what is the correct translation?",
    options: ["woman", "time", "tomorrow", "yesterday"],
    answer: 2
  }, {
    question: "The word is 다음, what is the correct translation?",
    options: ["next", "number", "family", "tomorrow"],
    answer: 0
  }, {
    question: "The word is 빨리, what is the correct translation?",
    options: ["conversation", "time", "school", "quickly"],
    answer: 3
  }, {
    question: "The word is 가족, what is the correct translation?",
    options: ["restaurant", "family", "and", "name"],
    answer: 1
  },{
    question: "The word is 다시, what is the correct translation?",
    options: ["book", "family", "my", "again"],
    answer: 3
  }, {
    question: "The word is 학교, what is the correct translation?",
    options: ["why", "article", "school", "we"],
    answer: 2
  },{
    question: "The word is 그리고, what is the correct translation?",
    options: ["person", "woman", "school", "and"],
    answer: 3
  },{
    question: "The word is 시간, what is the correct translation?",
    options: ["read", "understand", "time", "hospital"],
    answer: 2
  },{
    question: "The word is 오늘, what is the correct translation?",
    options: ["today", "that", "very", "person"],
    answer: 0
  },{
    question: "The word is 수, what is the correct translation??",
    options: ["number", "why", "I", "yesterday"],
    answer: 0
  },{
    question: "The word is 아니요, what is the correct translation?",
    options: ["school", "no", "next", "quickly"],
    answer: 1
  },{
    question: "The word is 알맞은, what is the correct translation?",
    options: ["woman", "why", "today", "appropriate"],
    answer: 3
  },{
    question: "The word is 이름, what is the correct translation?",
    options: ["choose", "listening", "name", "next"],
    answer: 2
  },{
    question: "The word is 남자, what is the correct translation?",
    options: ["contents", "I", "today", "man"],
    answer: 3
  },{
    question: "The word is 대화, what is the correct translation?",
    options: ["and", "why", "one", "conversation"],
    answer: 3
  },{
    question: "The word is 식당, what is the correct translation?",
    options: ["this", "restaurant", "family", "listening"],
    answer: 1
  },{
    question: "The word is 잘, what is the correct translation?",
    options: ["one", "well", "many", "together"],
    answer: 1
  },{
    question: "The word is 왜, what is the correct translation?",
    options: ["yesterday", "school", "why", "book"],
    answer: 2
  },{
    question: "The word is 우리, what is the correct translation?",
    options: ["answer", "article", "house", "we"],
    answer: 3
  },{
    question: "The word is 이, what is the correct translation?",
    options: ["this", "that", "appropriate", "store"],
    answer: 0
  },{
    question: "The word is 아주, what is the correct translation?",
    options: ["movie", "very", "well", "store"],
    answer: 1
  },{
    question: "The word is 한, what is the correct translation?",
    options: ["listening", "man", "woman", "one"],
    answer: 3
  },{
    question: "The word is 초급, what is the correct translation?",
    options: ["beginner", "hospital", "restaurant", "person"],
    answer: 0
  },{
    question: "The word is 두, what is the correct translation?",
    options: ["store", "movie", "two", "time"],
    answer: 2
  },{
    question: "The word is 고르십시오, what is the correct translation?",
    options: ["choose", "listening", "why", "Korea"],
    answer: 0
  },{
    question: "The word is 책, what is the correct translation?",
    options: ["yesterday", "book", "appropriate", "hospital"],
    answer: 1
  },{
    question: "The word is 듣기, what is the correct translation?",
    options: ["different", "we", "listening", "school"],
    answer: 2
  },{
    question: "The word is 나, what is the correct translation?",
    options: ["movie", "I", "listening", "now"],
    answer: 1
  },{
    question: "The word is 같은, what is the correct translation?",
    options: ["together", "why", "same", "school"],
    answer: 2
  },{
    question: "The word is 제, what is the correct translation?",
    options: ["today", "contents", "hospital", "my"],
    answer: 3
  },{
    question: "The word is 어제, what is the correct translation?",
    options: ["no", "again", "two", "yesterday"],
    answer: 3
  },{
    question: "The word is 답하십시오, what is the correct translation?",
    options: ["and", "together", "book ", "answer"],
    answer: 3
  },{
    question: "The word is 사람, what is the correct translation?",
    options: ["same", "person", "that", "time"],
    answer: 1
  },{
    question: "The word is 집, what is the correct translation?",
    options: ["house", "appropriate", "next", "different"],
    answer: 0
  },{
    question: "The word is 많은, what is the correct translation?",
    options: ["many", "person", "house", "together"],
    answer: 0
  },{
    question: "The word is 이해, what is the correct translation?",
    options: ["restaurant", "store", "contents", "understand"],
    answer: 3
  },{
    question: "The word is 읽고, what is the correct translation?",
    options: ["read", "no", "article", "beginner"],
    answer: 0
  },{
    question: "The word is 병원, what is the correct translation?",
    options: ["hospital", "we", "why", "again"],
    answer: 0
  },{
    question: " The word is 글의, what is the correct translation?",
    options: ["movie", "house", "man", "article"],
    answer: 3
  },{
    question: "The word is 저, what is the correct translation?",
    options: ["that", "appropriate", "one", "again"],
    answer: 0
  },{
    question: "The word is 지금, what is the correct translation?",
    options: ["now", "I", "food", "read"],
    answer: 0
  },{
    question: "The word is 한국, what is the correct translation?",
    options: ["food", "Korea", "woman", "restaurant"],
    answer: 1
  },{
    question: "The word is 음식, what is the correct translation?",
    options: ["hospital", "answer", "again", "food"],
    answer: 3
  },{
    question: "The word is 영화, what is the correct translation?",
    options: ["yesterday", "movie", "why", "listening"],
    answer: 1
  },{
    question: "The word is 다른, what is the correct translation?",
    options: ["appropriate", "different", "contents", "school"],
    answer: 1
  },{
    question: "The word is 가게, what is the correct translation?",
    options: ["quickly", "store", "school", "beginner"],
    answer: 1
  },{
    question: "The word is 함께, what is the correct translation?",
    options: ["together", "listening", "family", "answer"],
    answer: 0
  },{
    question: "The word is 네, what is the correct translation?",
    options: ["school", "understand", "answer", "yes"],
    answer: 3
  },{
    question: "The word is 여자, what is the correct translation?",
    options: ["beginner", "woman", "Korea", "tomorrow"],
    answer: 1
  },{
    question: "The word is 내용, what is the correct translation?",
    options: ["time", "contents", "name", "tomorrow"],
    answer: 0
    }];
    
    
    
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
        score.append('Congratulations!!! You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();
