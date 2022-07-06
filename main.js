//index.html not uploaded for key safety reasons.

/* here the index.html code

<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>My First Map</title>
    <style>
       #map {
        height: 500px;
        width: 100%;
       }
    </style>
  </head>
  <body>
    <h3>My First Map</h3>
    <div id="map"></div>

    <script src="https://maps.googleapis.com/maps/api/js?key=putYourOwnKey"></script>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>



*/









/* // main.js

1era parte

function startMap() {
    const ironhackBCN = {
        lat: -12.093797,
            lng: -77.053541};

    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN,
        backgroundColor:"blue"
      }
    )

    const myMarker = new google.maps.Marker({
        position: {
            lat: -12.093797,
            lng: -77.053541
        },
        map: map,
        title: "I'm here"
      });


      
// Try to get a geolocation object from the web browser
if (navigator.geolocation) {

  // Get current position
  // The permissions dialog will pop up
  navigator.geolocation.getCurrentPosition(function (position) {
    // Create an object to match Google's Lat-Lng object format
    const center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    console.log('center: ', center)
    // User granted permission
    // Center the map in the position we got
  }, function () {
    // If something goes wrong
    console.log('Error in the geolocation service.');
  });
} else {
  // Browser says: Nah! I do not support this.
  console.log('Browser does not support geolocation.');
}

  }
  
  startMap(); */

 
  //2nda parte
/* 
  function startMap() {
 
    // Store Ironhack's coordinates
    const ironhackBCN = { lat: 41.3977381,  lng: 2.190471916 };
   
    // Initialize the map
    const map = new google.maps.Map(document.getElementById('map'), 
      {
        zoom: 5,
        center: ironhackBCN
      }
    );
   
    // Add a marker for Ironhack Barcelona
    const IronhackBCNMarker = new google.maps.Marker({
      position: {
        lat: ironhackBCN.lat,
        lng: ironhackBCN.lng
      },
      map: map,
      title: "Barcelona Campus"
    });
   
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const user_location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        console.log(user_location)
   
        // Center map with user location
        map.setCenter(user_location);
   
        // Add a marker for your user location
        const ironhackBCNMarker = new google.maps.Marker({
          position: {
            lat: user_location.lat,
            lng: user_location.lng
          },
          map: map,
          title: "You are here."
        });
   
      }, function () {
        console.log('Error in the geolocation service.');
      });
    } else {
      console.log('Browser does not support geolocation.');
    }
  }

  startMap();
    */


  //entonces,
  //la función se llama startMap


  function startMap() {

    const ironhackBCN = {
        lat: 41.3977381,
        lng: 2.190471916};
        

//lo primero que debo hacer es inicializar el mapa con el siguiente código
 const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackBCN
    }
  );

  //para colocar un marker
  const myMarker = new google.maps.Marker({
    position: {
        lat: 41.3977381,
        lng: 2.190471916
    },
    map: map,
    title: "I'm here"
  });




//para dibujar una ruta
//primero instanciamos los métodos/objetos de google.maps
  const directionsService = new google.maps.DirectionsService;
  const directionsDisplay = new google.maps.DirectionsRenderer;
 
//armamos el directionRequest

  const directionRequest = {
    origin: { 
    
        lat: 19.414402,
        lng: -99.166364
        
    
    },
    destination: 'CDMX, MX',
    travelMode: 'DRIVING'
  };

  /*   //Lista de lugares:

  'Lima, PE'
  'Warsaw, PL'
  'Madrid, ES' 
  'Paris, FR' 
  'CDMX, MX'
  */


   
  directionsService.route(
    directionRequest,
    function(response, status) {
      if (status === 'OK') {
        // everything is ok
        directionsDisplay.setDirections(response);
   
      } else {
        // something went wrong
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
   
  directionsDisplay.setMap(map);

  }


   
  startMap();

  //hola




  
  


  
  