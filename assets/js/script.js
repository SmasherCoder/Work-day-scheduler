var time = moment();
console.log(time);

function getHour() {
  var hour = moment().hour();
  return hour;
}

var dailyHour = getHour();
console.log(dailyHour);

// task text was clicked
$(".textarea").on("click", function () {

  // get current text of p element
  console.log("<p> was clicked");
  var text = $(this)
   .text()
   .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("col-10").addClass("textarea").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");

  $(".saveBtn").on("click", function () {
    console.log(text);
    localStorage.setItem("task", text);
    console.log(localStorage);

    
  });

});

