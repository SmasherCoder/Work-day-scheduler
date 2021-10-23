var textInput = "";
var id = "";

var time = moment();
console.log(time);


var hour = moment().hour();

loadTasks();

//load all todo items in localstorage
var loadTasks = function () {
  var hour9 = localStorage.getItem("hour9");
  $("#hour9").append(hour9);
  
  var hour10 =localStorage.getItem("hour10");
  $("#hour10").append(hour10);
  
  var hour11 =localStorage.getItem("hour11");
  $("#hour11").append(hour11);
  
  var hour12 =localStorage.getItem("hour12");
  $("#hour12").append(hour12);
  
  var hour13 =localStorage.getItem("hour13");
  $("#hour13").append(hour13);
  
  var hour14 =localStorage.getItem("hour14");
  $("#hour14").append(hour14);
  
  var hour15 =localStorage.getItem("hour15");
  $("#hour15").append(hour15);
  
  var hour16 =localStorage.getItem("hour16");
  $("#hour16").append(hour16);
  
  var hour17 =localStorage.getItem("hour17");
  $("#hour17").append(hour17);
  }
  

if (hour = 9){
  $('hour9').addClass('present');
  $('hour10').addClass('future');
  $('hour11').addClass('future');
  $('hour12').addClass('future');
  $('hour13').addClass('future');
  $('hour14').addClass('future');
  $('hour15').addClass('future');
  $('hour16').addClass('future');
  $('hour17').addClass('future');
} else if (hour = 10) {

}



// task text was clicked
$(".textarea").on("click", function () {

  // get current text of element clicked
  var text = $(this)
   .text()
   .trim();

   //get id of clicked element to use to save for localstorage
   id = $(this).attr('id');

  // replace element clicked with a new textarea
  textInput = $("<textarea>").addClass("col-10").addClass("textarea").val(text);
  $(this).replaceWith(textInput);

  // auto focus on clicked element
  textInput.trigger("focus");
});

//save button is clicked
$(".saveBtn").on("click", function () {

//save todo item to localstorage with id of clicked element
localStorage.setItem(id, textInput.val());
});

