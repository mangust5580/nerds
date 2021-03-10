ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
      center: [59.939056, 30.323226],
      zoom: 17,
      controls: []
    },{
      suppressMapOpenBlock: true
    },{
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(([59.938631, 30.323055]), {

    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [220, 190],
      iconImageOffset: [-110, -200]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("routeEditor");
});