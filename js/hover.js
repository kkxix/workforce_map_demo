
(function (){
    var li_cache, over = false;

    $(".number")
    .delegate(".number-definition", "mouseenter", function (e) {
        var $li = $(this), speed;

        if (li_cache === this && over) {
            $.doTimeout("hoverOut");
            return;
        }

        if (over) {
            $.doTimeout("hoverOut", true);
            speed = 0;
        } else {
            $.doTimeout("hoverOut");
            speed = 500;
        }

        $.doTimeout("hoverIn", speed, function () {
            over = true;
            $li.find("div").fadeTo(200, 1.0);
        });
    })
    .delegate(".number-definitions", "mouseleave", function (e) {
        var $li = $(this);

        $.doTimeout("hoverIn");
        $.doTimeout("hoverOut", 500, function () {
            over = false;
            $li.find("div").stop(true).fadeOut();
        });
    });
})(jQuery); 