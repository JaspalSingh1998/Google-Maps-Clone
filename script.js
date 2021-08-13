const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZ29sZHlraW5nMTkwNyIsImEiOiJja3J0OGE4b3MwenUyMm5xY3ZodTdxNWV6In0.XE1Rqpr4LYSp4zEJLXaf2w";

var map = new mapboxgl.Map({
  accessToken: MAPBOX_ACCESS_TOKEN,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});
