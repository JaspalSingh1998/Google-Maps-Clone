const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZ29sZHlraW5nMTkwNyIsImEiOiJja3J0OGE4b3MwenUyMm5xY3ZodTdxNWV6In0.XE1Rqpr4LYSp4zEJLXaf2w";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 10,
  });
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([-2.24, 53.48]);
}
