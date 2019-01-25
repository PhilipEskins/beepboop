function beepboop(inputNum) {
  numArr = [];

  for (var i = 0; i < inputNum+1; i++) {
    // var numAdd = inputNum + 1;
    numArr.push(i);
  }
  return numArr;
}

$(document).ready(function(){
  $("form#project3").submit(function(event){
    event.preventDefault();
    $(".result").text(beepboop(parseInt($("input").val())));
  });
});
