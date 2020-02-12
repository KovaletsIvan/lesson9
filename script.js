// Task 1

$("a[href^='https://']").attr("target", "_blank");

// Task 2

$el = $("h2.head*").css("background", "green");
$($el)
  .find(".inner")
  .css("fontSize", "35px");

// Task 3

$div = $("h3+div:first");
$("h3:first").before($div);
$div = $("h3+div:last");
$("h3:last").before($div);

// Task 4

/*$("input").on("click", function() {
  $("input").each(function() {
    if ($(this).prop("checked") == !true) {
      $(this).prop("disabled", "true");
    }
  });
});
*/
function checkIn() {
  let $n = $("input:checked").length;
  if ($n == 3) {
    $("input").prop("disabled", "true");
  }
  console.log($n);
}

$("input").on("click", checkIn);
