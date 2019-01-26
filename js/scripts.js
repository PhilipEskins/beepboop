// var score = 0;
//
// function bgselector() {
//   score ++;
// }

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

function boopbeep(inputNum, name) {
  var numArr = [];
  var output = "";

  for (var i = inputNum; i > 0; i--) {
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
    // bgselector();
    var submit = 0;
    var name = $("#name").val()
    var nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    var number = parseInt($("#number").val());
    var order = $("input:radio[name=operation]:checked").val();
    var itemList = [];
    $(".result").html("");
    if (order === "small") {
      var numArrSmall = beepboop(number, nameUpper);
      for (var k = 0; k < numArrSmall.length; k++) {
        var convert = numArrSmall[k];
        var stringCheck = convert.toString();
        var halCheck = stringCheck.indexOf("sorry");
        if (halCheck > -1) {
          var displayList = '<li><a href ="https://en.wikipedia.org/wiki/HAL_9000" target="_blank">' + numArrSmall[k] + "</a></li>"
          $(".result").append($.parseHTML(displayList));
        } else {
          var displayList = "<li>" + numArrSmall[k] + "</li>";
          $(".result").append($.parseHTML(displayList));
        }
      }
    }
    if (order === "large") {
      var numArrLarge = boopbeep(number, nameUpper);
      for (var l = 0; l < numArrLarge.length; l++) {
        var convert = numArrLarge[l];
        var stringCheck = convert.toString();
        var halCheck = stringCheck.indexOf("sorry");
        if (halCheck > -1) {
          var displayList = '<li><a href ="https://en.wikipedia.org/wiki/HAL_9000" target="_blank">' + numArrLarge[l] + "</a></li>"
          $(".result").append($.parseHTML(displayList));
        } else {
          var displayList = "<li>" + numArrLarge[l] + "</li>";
          $(".result").append($.parseHTML(displayList));
        }
      }
    }
    var random = Math.floor(Math.random() * 4)
    if (random === 0) {
      $("body").removeClass();
      $("body").addClass("creative");
    } else if (random === 1) {
      $("body").removeClass();
      $("body").addClass("striking");
    } else if (random === 2) {
      $("body").removeClass();
      $("body").addClass("earthy");
    } else if (random === 3) {
      $("body").removeClass();
    }
    console.log(random);
  });
});
