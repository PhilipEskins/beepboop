function beepboop(inputNum) {
  return inputNum;
}

$(document).ready(function(){
  $("form#project3").submit(function(event){
    event.preventDefault();
    $(".result").text(beepboop(parseInt($("input").val())));
  });
});
