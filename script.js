let taskCount = document.querySelectorAll("ul li").length;
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//click on the button to delete todo
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
      taskCount--;
      if (taskCount === 0) {
        alert("All done for the day !");
      }
    });
  e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    let val = $(this).val();
    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${val}</li>`);
    $(this).val("");
  }
});

$(".fa-pencil").on("click", function () {
  $("input").fadeToggle();
});
