define(function (require){
  var firebase = require("firebase");
  var $ = require("jquery");
  var templates = require("get-templates");

  console.log("templates", templates);

  var myFirebaseRef = new Firebase("https://trippin-nss-rick8s.firebaseio.com/");

    myFirebaseRef.child("location_types").on("value", function(snapshot) {
      var location_types = snapshot.val();
      console.log("location_types", location_types);

      var populatedTemplate = templates.locTypeTpl(location_types);

      $("#location-type").html(populatedTemplate);
    });  

      // Listen for when any changes occur to the "trips" key
    myFirebaseRef.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();
      console.log("trips", trips); 

      

      //This will hold the complete DOM string of trips
      var populatedTemplate = templates.tripTpl(trips);

      //Insert the DOM into the proper element
      $("#list-of-trips").html(populatedTemplate);
      
    });  
});