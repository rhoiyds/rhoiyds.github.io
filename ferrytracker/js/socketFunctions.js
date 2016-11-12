      var socket = io();
      socket.on('update', function (data) {
        console.log("Received ", data);
        var latitude = JSON.parse(data).latitude;
        var longitude = JSON.parse(data).longitude;

       var newLatLong = new google.maps.LatLng(latitude, longitude);

   		marker.setPosition(newLatLong);


      });
  