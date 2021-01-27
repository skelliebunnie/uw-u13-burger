// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var status = $(this).data("devoured");

    var hamburgerStatus = {
      sleepy: status
    };

    // Send the PUT request.
    $.ajax("/api/hamburgers/" + id, {
      type: "PUT",
      data: hamburgerStatus
    }).then(
      function() {
        console.log("changed sleep to", status);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log($("#newBurger").val());

    var newHamburger = {
      name: $("#newBurger").val().trim(),
      devoured: $("#devoured").val().trim()
      //devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/hamburgers", {
      type: "POST",
      data: newHamburger
    }).then(
      function() {
        console.log("created new hamburger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
