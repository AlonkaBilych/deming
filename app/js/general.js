$(document).ready(function() {
    $('.promo-gallery-wrapper').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false
        // mobileFirst: true,
        // responsive: [
        //     {
        //         breakpoint: 640,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });

    $(".js-example-basic-single").select2({
        minimumResultsForSearch: Infinity
    });



    $("#menu").mmenu({
        "slidingSubmenus": false
    });


});
