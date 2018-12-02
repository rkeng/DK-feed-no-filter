$(function () {

   let post;

   if (sessionStorage.getItem('post')) {
      post = sessionStorage.getItem('post');
      sessionStorage.removeItem('post');

      var myLatLng = post.position;

      var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: myLatLng
      });

      var image = '../img/purple.png';
      var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         icon: image
      });

      var contentString = post.content;
      console.log(contentString);
      var infowindow = new google.maps.InfoWindow({
         content: contentString
      });

      marker.addListener('click', function () {
         infowindow.open(map, marker);
      })
   }
})