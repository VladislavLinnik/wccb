    (function($) {
    $(function() {
 
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
 
    });
})(jQuery);

var googleMap;

function initMap() {

   googleMap = new google.maps.Map(document.getElementById('map'), {
        // disable ui navigation
        disableDefaultUI: true, 
        center: {lat: -34.397, lng: 150.644},
        zoom: 16
    });
}