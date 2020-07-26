function initMap() {
  var latitude = (Math.random() * 21) + 30;
  var longitude = ((Math.random() * 51) + 70) * -1
  var myLatLng = { lat: latitude, lng: longitude };


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var icons = {
    carb: {
      icon: 'https://media3.giphy.com/media/AmCy8Uj0XhmJcXccEG/source.gif'
    },
    redMeat: {
      icon: 'https://i.pinimg.com/originals/b7/49/d8/b749d84a2fc93fbd72eda7b384cf5ef5.gif'
    },
    poultry: {
      icon: 'https://i.ya-webdesign.com/images/transparent-bone-animated-15.gif'
    },
    veg: {
      icon: 'https://media1.giphy.com/media/eusQ5lQG4P9uQEMFnB/source.gif'
    },
    bev: {
      icon: 'https://thumbs.gfycat.com/PeriodicUnluckyElephantseal-max-1mb.gif'
    },
    soup: {
      icon: 'https://i.pinimg.com/originals/86/cb/c8/86cbc8700f9d027f961d5af302318ab5.gif'
    },
    dessert: {
      icon: 'https://media2.giphy.com/media/BDmA6uIJ87DA4/giphy.gif?cid=6c09b9526f21a8cca59a2b1ed49bb8afceeea46a1bf25610&rid=giphy.gif'
    },
    bake: {
      icon: 'https://media2.giphy.com/media/WRXNJYnmTfaCUsU4Sw/giphy.gif'
    },
    snack: {
      icon: 'https://24.media.tumblr.com/ceb6634f80ee576d89447a600d7e1bbc/tumblr_mlep8vEtSp1sor55qo1_400.gif'
    },
    other: {
      icon: 'https://lh3.googleusercontent.com/proxy/_TDYCB6EFifI0R3AVrfQGJhNZJN2Ew7liRIcxkm2uJgQGeg9ojccOW5dJuQV2USGoWCMRpuG8Ral6jSfhPSuz8lrQyG8vfKZRGCBUQ_nsg6aNKQWERWLQw'
    }
  };

  var features = [{
    position: new google.maps.LatLng(40.6971494, -74.2598649),
    type: 'carb'
  }, {
    position: new google.maps.LatLng(37.7576793, -122.50764),
    type: 'redMeat'
  }, {
    position: new google.maps.LatLng(38.6530169, -90.3835461),
    type: 'poultry'
  }, {
    position: new google.maps.LatLng(33.7676338, -84.5606887),
    type: 'veg'
  }, {
    position: new google.maps.LatLng(29.8168824, -95.6814807),
    type: 'bev'
  }, {
    position: new google.maps.LatLng(47.6129432, -122.4821474),
    type: 'soup'
  }];
// added button is for the heart icon
  var descriptions = [
    { content: '<p style="color:red;">Ramen<br></p>'+'<a href="https://docs.google.com/document/d/1BnJQFak0opnU0WLj2MsX3IyBlzrlP_rvwHhcEgx3fcE/edit?usp=sharing" target="_blank">Recipe</a>'+'<a href="https://youtu.be/YpTFk5X18Y4" target="_blank"> Video</a>'+'<center><button id="myBtn"></button></center>'},
    { content: '<p style="color:red;">Pepper Steak<br></p>'+'<a href="https://docs.google.com/document/d/1w1oIkFFslhl88KRfwgXlxN8D8FnciypzCacOYjcP-Kw/edit?usp=sharing" target="_blank">Recipe</a>'+'<a href="https://youtu.be/nRgaabtAlms" target="_blank"> Video</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:red;">Kungpao Chicken<br></p>' +'<a href="https://docs.google.com/document/d/1EuHBiPWt1t7CKbJlMlrKyKBEbYt7GgTqZuRR7rBaxLI/edit?usp=sharing" target="_blank">Recipe</a>'+'<a href="https://youtu.be/MJ-leAFd-mY" target="_blank"> Video</a>'+'<center><button id="myBtn"></button></center>'},
    { content: '<p style="color:red;">Caesar Salad<br></p>'+'<a href="https://docs.google.com/document/d/12XqNyjSuo7H3IMky9uZnOwI4Da4G4tIcUp_JTkv_wG8/edit?usp=sharing" target="_blank">Recipe</a>'+'<a href="https://youtu.be/ta62syygWO8"target="_blank"> Video</a>'+'<center><button id="myBtn"></button></center>'},
    { content: '<p style="color:red;">Mango Smoothie<br></p>'+'<a href="https://docs.google.com/document/d/1UBJ1_yrrpD-jmM4046CNsTNo73dTX91LZaSmdtyMMQs/edit?usp=sharing" target="_blank">Recipe</a>'+'<a href=" https://youtu.be/kv9Qux0IEno"target="_blank"> Video</a>'+'<center><button id="myBtn"></button></center>' },
    { content: '<p style="color:red;">Clam Chowder<br></p>'+'<a href="https://docs.google.com/document/d/1NxeintHoooHNJAbCot2DF_vrGRrFkHniYnw2_muHt_8/edit?usp=sharing">Recipe</a>'+'<a href=" https://youtu.be/sZ2NyyKVf7A"target="_blank"> Video</a>'+'<center><button id="myBtn"></button></center>' }
  ];


  var infowindow0 = new google.maps.InfoWindow({
    content: descriptions[0].content
  });
  var pic = {
    url: icons[features[0].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker0 = new google.maps.Marker({
    position: features[0].position,
    icon: pic,
    map: map
  });
  marker0.addListener('click', function () {
    infowindow0.open(map, marker0);
  });

  var infowindow1 = new google.maps.InfoWindow({
    content: descriptions[1].content
  });
  var pic = {
    url: icons[features[1].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker1 = new google.maps.Marker({
    position: features[1].position,
    icon: pic,
    map: map
  });
  marker1.addListener('click', function () {
    infowindow1.open(map, marker1);
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: descriptions[2].content
  });
  var pic = {
    url: icons[features[2].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker2 = new google.maps.Marker({
    position: features[2].position,
    icon: pic,
    map: map
  });
  marker2.addListener('click', function () {
    infowindow2.open(map, marker2);
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: descriptions[3].content
  });
  var pic = {
    url: icons[features[3].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker3 = new google.maps.Marker({
    position: features[3].position,
    icon: pic,
    map: map
  });
  marker3.addListener('click', function () {
    infowindow3.open(map, marker3);
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: descriptions[4].content
  });
  var pic = {
    url: icons[features[4].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker4 = new google.maps.Marker({
    position: features[4].position,
    icon: pic,
    map: map
  });
  marker4.addListener('click', function () {
    infowindow4.open(map, marker4);
  });

  var infowindow5 = new google.maps.InfoWindow({
    content: descriptions[5].content
  });
  var pic = {
    url: icons[features[5].type].icon,
    scaledSize: new google.maps.Size(50, 50)
  };
  var marker5 = new google.maps.Marker({
    position: features[5].position,
    icon: pic,
    map: map
  });
  marker5.addListener('click', function () {
    infowindow5.open(map, marker5);
  });

}

