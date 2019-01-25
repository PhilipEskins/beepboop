function beepboop(inputNum, name) {
  var numArr = [];
  var output = "";

  for (var i = 0; i < inputNum+1; i++) {
    var string = i.toString();
    var checkOne = string.indexOf("1");
    var checkTwo = string.indexOf("2");
    var checkThree = string.indexOf("3");
    if (checkThree > -1) {
      if (!!name) {
        numArr.push(i + " = I'm sorry, " + name + ". I'm afraid I can't do that.");
      } else {
        numArr.push(i + " = I'm sorry, Dave. I'm afraid I can't do that.");
      }
    } else if (checkTwo > -1) {
      numArr.push(i + " = Boop!");
    } else if (checkOne > -1) {
      numArr.push(i + " = Beep!");
    } else {
    numArr.push(i); }
  }
  return output = numArr;
}

$(document).ready(function(){
  $("form#project3").submit(function(event){
    event.preventDefault();
    var name = $("#name").val()
    var nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    var number = parseInt($("#number").val());
    var numArr = beepboop(number, nameUpper);
    var itemList = [];
    $(".result").html("");
    for (var k = 0; k < numArr.length; k++) {
      var displayList = "<li>" + numArr[k] + "</li>";
      $(".result").append($.parseHTML(displayList));
    }
    // $(".result").text(testItem);
    // $(".result").text(beepboop(number, nameUpper));
  });
});
