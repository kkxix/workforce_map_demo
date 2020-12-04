
(function (){
    $("figure").hoverIntent(function () {
        $("figcaption", this).fadeTo(400, 1);
    }, function () {
        $("figcaption", this).fadeTo(400, 0);
    });

    // Sample that worked: 
    // <figure>
    //     <img src="image.jpg" alt="cool image">
    //         <figcaption>
    //             <h3>Cool Image</h3>
    //             <a href="http://coolplace.com">http://coolplace.com</a>
    //         </figcaption>
    // </figure>
    

    // var li_cache, over = false;

    // $("figure")
    //     .delegate("figcaption", "mouseenter", function (e) {
    //         var $li = $(this), speed;

    //         if (li_cache === this && over) {
    //             $.doTimeout("hoverOut");
    //             return;
    //         }

    //         if (over) {
    //             $.doTimeout("hoverOut", true);
    //             speed = 0;
    //         } else {
    //             $.doTimeout("hoverOut");
    //             speed = 500;
    //         }

    //         $.doTimeout("hoverIn", speed, function () {
    //             over = true;
    //             $li.find("div").fadeTo(200, 1.0);
    //         });
    //     })
    //     .delegate("figcaption", "mouseleave", function (e) {
    //         var $li = $(this);

    //         $.doTimeout("hoverIn");
    //         $.doTimeout("hoverOut", 500, function () {
    //             over = false;
    //             $li.find("div").stop(true).fadeOut();
    //         });
    //     });
})(jQuery); 