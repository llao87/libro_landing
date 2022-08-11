jQuery(function() {

    jQuery('.variant').on('click', function(e) {
            e.preventDefault();
            let currValue = jQuery(this).find('.variant-text').text();

            jQuery('.variant').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.js-investment-amount').text(currValue);
        })
        // $('.single-slider').jRange({
        //     from: -2.0,
        //     to: 2.0,
        //     step: 0.5,
        //     scale: ["до 500 тыс. руб."-2.0,-1.0,0.0,1.0,2.0],
        //     // format: '%s',
        //     width: 1000,
        //     showLabels: true,
        //     snap: true
        // });
});