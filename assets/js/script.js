var textInput = "";
var id = "";

//get the current moment
var time = moment().format("dddd, MMMM Do");

//append text to the #currentDay id
$("#currentDay").text(time);

//load all todo items in localstorage
var loadTasks = function () {

  //set the text of the time blocks from saved todo items
  for (i = 9; i <= 17; i++) {
    var schedulerHour = "#hour" + i;
    var savedTaskHour = "hour" + i;
    var savedTask = localStorage.getItem(savedTaskHour);
    $(schedulerHour).append(savedTask);
  }
}

//load all the saved todo items
loadTasks();

//function to set the time block colors based on the current time
var colors = function () {
  //get the current hour
  var hour = moment().hour();

  //set the colors for time blocks
  for (i = 9; i <= 17; i++) {
    var currentHour = "#hour" + i;
    if (hour < i) {
      $(currentHour).css('background-color', '#77dd77');
    } else if (hour == i) {
      $(currentHour).css('background-color', '#ff6961');
    } else if (hour > i) {
      $(currentHour).css('background-color', '#d3d3d3');
    }
  }

}

//set the colors for the timeblocks
colors();

// time block was clicked
$(".textarea").on("click", function () {
  // get current text of time block element clicked
  var text = $(this)
    .text()
    .trim();

  //get id of clicked time block element to use to save for localstorage
  id = $(this).attr('id');

  // replace time block element clicked with a new textarea
  textInput = $("<textarea>").addClass("col-10").addClass("textarea").attr('id', id).val(text);
  $(this).replaceWith(textInput);


  // auto focus on clicked time block element
  textInput.trigger("focus");
});


 $("id").on("blur", function () {
  colors();
 });

//save button is clicked
$(".saveBtn").on("click", function () {
  //save todo item to localstorage with id of clicked element
  localStorage.setItem(id, textInput.val());
  colors();
});



