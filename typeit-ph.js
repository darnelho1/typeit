var randomWords = require('random-words');

module.exports = function(idSelector, wordsArray) {
  // If no words are passed in, use the random word package to generate
  // some word
  if (!wordsArray) {
    var wordsArray = randomWords({min:5, max:50});
  }
  var timeOut;
  // var counter =0;
  var char = 0;
  var num=0;
  var time=0;
  // flag=true;
  $(idSelector).attr('placeholder', '|');
  var humanize = Math.round(Math.random() * (230 - 30)) + 30;
  function typeIt(x) {
          timeOut = setTimeout(function () {
          char++;
          var type = x.substring(0, char);
          $(idSelector).attr('placeholder', type + '|');
          typeIt(x);
        },humanize);
        if ((char === x.length)&&(num<=wordsArray.length-2)) {
          clearTimeout(timeOut);
          removeIt();
        }
    }
  function removeIt(){
    timeOut = setTimeout(function () {
        char--;
        $(idSelector).attr('placeholder', $(idSelector).attr('placeholder').slice(0, -1));
        removeIt();
      },humanize);
      if(char<0){
        clearTimeout(timeOut);
        num++;
        time++;
        console.log(num);
        typeOut();
      }
     console.log('test');
  }
  function typeOut(){
    while((num === time)&&(num<=wordsArray.length-1)){
      typeIt(wordsArray[num]);
      break;
    }
  }
  typeOut();


  // typeIt(wordsArray[0]);

}

