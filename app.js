    
                $(function() {
                    $('a[href*=#]:not([href=#])').click(function() {
                        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&          location.hostname == this.hostname) {
                          var target = $(this.hash);
                          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                              if (target.length) {
                                $('html,body').animate({
                                  scrollTop: target.offset().top - 85
                                }, 1000);
                                return false;
                              }
                            }
                        });
                    });
           
                if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $(document).ready(function(){
                        $(window).bind('scroll',function(e){
                            parallaxScroll();
                        });
                        function parallaxScroll(){
                            var scrolledY = $(window).scrollTop();
                            $('#banner').css('background-position','center -'+(scrolledY*0.5)+'px');
                        }
                    });
                }
            
                $(document).ready(function(){
                    $(window).bind('scroll',function(e){
                        headerTransparent();
                    });
                    function headerTransparent(){
                        var scrolledY = $(window).scrollTop();
                            $('header').css('background-color', 'rgba(0, 0, 0,' + (scrolledY*0.002) + ')');
                            if(scrolledY*0.002 >= 1){
                                $('header').css('box-shadow', '0px 0px 10px #222');
                            }else{
                                $('header').css('box-shadow', '0px 0px 0px #222');
                            }
                    }
                });
            
                if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $(document).ready(function(){
                        $(window).bind('scroll',function(e){
                            footerDisplay();
                        });
                        function footerDisplay(){
                            var scrolledY = $(window).scrollTop();
                            if(scrolledY > 4700){
                                $('footer').css('display', 'block');
                            }else{
                                $('footer').css('display', 'none');
                            }
                        }
                    });
                }
            
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $(document).ready(function(){
                        $(window).bind('scroll',function(e){
                            changesForMobile();
                        });
                        function changesForMobile(){
                            $('footer').css('display', 'block');
                            $('footer').css('position', 'relative');
                            $('#contact').css('height', '1170px');
                            $('.section-header').css('background-attachment', 'scroll');
                        }
                    });
                }
            
            
// Encore Coord:
// lat: 47.622893
// lng: -122.155314

var mapOptions = {
    center: {lat: 47.622893, lng: -122.155314},
    zoom: 14 // 0 = earth to 21 = max zoom
}

// add our map to the page in the 'map' div
var mapElem = document.getElementById('map-canvas');

//create the map
var map = new google.maps.Map(mapElem, mapOptions);

//marker positions
//values must be numbers and not strings
var position =  {
    lat: 47.622893,
    lng: -122.155314
}

//create a marker on the map
var marker = new google.maps.Marker({position: position, map: map});


//readd the marker, from memory
//marker.setMap(map); 

var infoWin  =  new google.maps.InfoWindow();

function onGeoPos(position) {
    console.log("Lat" + position.coords.latitude);
    console.log("Lng" + position.coords.longitude);

    var myLocPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    var myLocation = new google.maps.Marker({
        position: myLocPos,
        map: map
    });

    //create a new InfoWindow
    var infoWin = new google.maps.InfoWindow();

    //set the content (may contain html tags)
    infoWin.setContent('<p>Encore Bellevue' + position.coords.latitude + 
             + position.coords.longitude + '</p>');

    //listen for click event on marker
    google.maps.event.addListener(myLocation, 'click', onMarkerClick)
}

function onGeoErr(error){
    //error code goes here potentioally
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeoPos, onGeoErr, {enableHighAccuracy: true, maximumAge: 30000});
} else {
    console.log("geolocation not supported");
}

function onMarkerClick() {
    //'this' keyword will refer to the marker object
    //pan the map so that the marker is at the center
    map.panTo(this.getPosition());
    infoWin.open(map, this);
}

$.getJSON('http://data.seattle.gov/resource/65fc-btcc.json');
    /*
    .done(function(data) {
        //success
        console.log(data);
    })
    .fail(function(data) {
        //error contains error info     
    })
    .always(function() {
        //called on either success or error cases
    })

*/       
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            