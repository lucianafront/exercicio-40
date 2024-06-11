function mostrarPosicion(posicion) {
    console.log(posicion);
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;

    var url = `https://maps.google.com/maps?q=${latitud},${longitud}&output=embed&t=&z=13&ie=UTF8&iwloc=&hl=en&output=embed`;
    window.open(url, 'maps');
}

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicion);
}
