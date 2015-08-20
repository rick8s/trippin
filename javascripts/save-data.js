define (function (require){
  //dependencies
  var $ = require("jquery");

  //modulelevel variables
  var visited = false;

  //event handlers for determining which 
  // list item goes on
  $("#visited").click(function(){
    visited = true;
  });

  $("#wish-list").click(function(){
    visited = false;
  });


  $("#add-location").click(function(e){
    e.preventDefault();
    var newLocation = {
      location: $("#locationName").val(),
      location_type: $("#locationType").val() || "city",
      visited: visited,
      reviews: {
        date: $("#tripDate").val(),
        text: $("#tripReview").val(),
        title: $("#tripTitle").val() 
      }
    };
    console.log("newLocation", newLocation);
 
    $.ajax({
      url: "https://trippin-nss-rick8s.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    }).done(function(newData){

    }).fail(function(xhr, status, error){

    });
    console.log("newLocation", newLocation);
  });

  $('#add-location').on('click', function () {
    $('#addNewTrip').trigger("reset");
    $('#tripReview').val('');
    $('#tripTitle').val('');
  });

});