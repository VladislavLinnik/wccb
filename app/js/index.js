"use strict"



var googleMap;

function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    googleMap = new google.maps.Map(document.getElementById('map'), {
        // Убираем навигацию
        disableDefaultUI: true, 
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: -34.397, lng: 150.644},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 16
    });
}

(function($) {
    $(function() {
 
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
 
    });
})(jQuery);