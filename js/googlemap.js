var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.497675, lng: 31.287754},
        zoom: 16
    });
        var marker = new google.maps.Marker({
            position: {lat: 51.497675, lng: 31.287754},
            map: map,
            title:"BeetRoot Academy",
            icon: "img/cat.png"
        })
        var infowindow = new google.maps.InfoWindow({
            content: "Beetroot Academy"
        });
        infowindow.open(map, marker);
    }