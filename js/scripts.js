function beepboop(inputNum, name) {
  numArr = [];

  for (var i = 0; i < inputNum+1; i++) {
    var string = i.toString();
    var checkOne = string.indexOf("1");
    var checkTwo = string.indexOf("2");
    var checkThree = string.indexOf("3");
    if (checkThree > -1) {
      if (!!name) {
        numArr.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
      } else {
        numArr.push("I'm sorry, Dave. I'm afraid I can't do that.");
      }
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
    var name = $("#name").val();
    var number = parseInt($("#number").val());
    console.log(name);
    console.log(beepboop(number, name));
    $(".result").text(beepboop(number, name));
  });
});
