$(document).ready(function() {
    $(".nav-btn").click(function() {
        $(this).toggleClass(".active");
        $(".menu").toggleClass("show-menu");

    });

});

/* awl ceresol slider */

$(document).ready(function() {
    $('.banner.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        // margin:20,
        nav:true,
        dots:false,
        nav:false,
        navText:[">","<"],
        mouseDrag:true,
        TouchDrag:true,

        autoplay:true,
        autoplayTimeout:4000,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:4
        //     }
        // }
    });
});

/* product categeory slidet */
$(document).ready(function() {

    $('.product-container.owl-carousel').owlCarousel({
        // items:8,
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        nav:false,
        navText:[">","<"],
        mouseDrag:true,
        TouchDrag:true,

        autoplay:false,
        // autoplayTimeout:3500,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:8
            }
        }
    });
});

/* card container */

$(document).ready(function() {

    $('.card-container.owl-carousel').owlCarousel({
        // items:8,
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        nav:false,
        navText:[">","<"],
        mouseDrag:true,
        TouchDrag:true,

        autoplay:false,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});

