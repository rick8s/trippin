define(function (require){
  var firebase = require("firebase");
  var myFirebaseRef = new Firebase("https://trippin-nss-rick8s.firebaseio.com/");

      // Listen for when any changes occur to the "trips" key
    myFirebaseRef.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();
      console.log("trips", trips); 

    });  
});