$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var concern1Input = $("input#concern1").val();
    var cONCERNINPUT = concern1Input.toUpperCase();


    $(".person1").text(person1Input);
    $(".concern1").text(cONCERNINPUT);

    $("#story").show();

    event.preventDefault();
  });
});
