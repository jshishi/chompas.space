function initMap() {
  var latitude = (Math.random()*0.50)+ 40.541;
  var longitude = (Math.random()*0.50)+ -74
  var myLatLng = {lat: latitude, lng: longitude};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var pic ={
    url:'https://lh3.googleusercontent.com/proxy/_TDYCB6EFifI0R3AVrfQGJhNZJN2Ew7liRIcxkm2uJgQGeg9ojccOW5dJuQV2USGoWCMRpuG8Ral6jSfhPSuz8lrQyG8vfKZRGCBUQ_nsg6aNKQWERWLQw',
    scaledSize: new google.maps.Size(50, 50)
  }; 
}
