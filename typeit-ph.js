var txt = ["Queen Anne","Pioneer Square","Sushi", "Cheap", "GET ME DRUNK!!!"];
var timeOut;
// var counter =0;
var char = 0;
var num=0;
var time=0;
// flag=true;
$('#searchBox').attr('placeholder', '|');
var humanize = Math.round(Math.random() * (230 - 30)) + 30;
function typeIt(x) {
        timeOut = setTimeout(function () {
        char++;
        var type = x.substring(0, char);
        $('#searchBox').attr('placeholder', type + '|');
        typeIt(x);
      },humanize);
      if ((char === x.length)&&(num<=txt.length-2)) {
        clearTimeout(timeOut);
        removeIt();
      }
  }
function removeIt(){
  timeOut = setTimeout(function () {
      char--;
      $('#searchBox').attr('placeholder', $('#searchBox').attr('placeholder').slice(0, -1));
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
  while((num === time)&&(num<=txt.length-1)){
    typeIt(txt[num]);
    break;
  }
}
typeOut();


// typeIt(txt[0]);
