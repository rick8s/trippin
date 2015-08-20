define(function(require){
  var $ = require("jquery");

    var selectedTripId;

  $(document).on("click", "button[id^='addReview#']", function(){
    selectedTripId = $(this).attr("id").split("#")[1];
    console.log("selectedTripId", selectedTripId);
    $(".review-container").toggle();
    

  });

  $("#save-review").click(function(){
    var tripRef = new Firebase('https://trippin-nss-rick8s.firebaseio.com/trips/' + selectedTripId);
    
    var newReview = {
      date: Date.now(),
      text: $('.review-entry').val(),
      title: "Title"
    };


     tripRef.child("reviews").push(newReview);
     $('.review-entry').val('');
     $(".review-container").toggle();

  });

});