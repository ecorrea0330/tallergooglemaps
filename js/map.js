var mapDiv = document.getElementById('map');
var catalunya = new google.maps.LatLng(41.652393,1.691895);
var options = {
center: new google.maps.LatLng(41.652393,1.691895),
zoom: 8,
mapTypeId: google.maps.MapTypeId.ROADMAP
};

var mapa = new google.maps.Map(mapDiv, options);
window.onload = function() {
// Aquí el código que deseamos cargar
}