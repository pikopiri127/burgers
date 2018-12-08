// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  console.log("we are here!")
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log("newDevoured:" + newDevoured);
    var newDevouredStatus = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredStatus
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    console.log("clicked!!!")
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log($(this));

    var newDevoured = {
      name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newDevoured
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-devoured").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
