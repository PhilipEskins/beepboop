function beepboop(inputNum) {
  numArr = [];

  for (var i = 0; i < inputNum+1; i++) {
    var string = i.toString();
    var checkOne = string.indexOf("1");
    var checkTwo = string.indexOf("2");
    var checkThree = string.indexOf("3");
    if (checkThree > -1) {
      numArr.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (checkTwo > -1) {
      numArr.push("Boop!");
    } else if (checkOne > -1) {
      numArr.push("Beep!");
    } else {
    numArr.push(i); }
  // for (var j=0; j<numArr.length+1; j++) {
  //    numArr[j].toString().indexOf('1') > -1;
  //    numArr[j].push("Beep!");
  }
  return numArr;
}

$(document).ready(function(){
  $("form#project3").submit(function(event){
    event.preventDefault();
    $(".result").text(beepboop(parseInt($("input").val())));
  });
});
