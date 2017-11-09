var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
  posicionCentral = new google.maps.LatLng({
    lat: -34.603739,
    lng: -58.38157
  });

  mapa = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 15
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
