(function () {
    // $(document.body).on("click", '.dropdown-item', function (e) {
    //     e.preventDefault();
    //     var toFilter = $(this).attr('data-filters').split(',');
    //     console.log(toFilter);
    //     $('.note').hide().filter(function () {
    //         var filter = $(this).attr('data-filters').split(',');
    //         return toFilter.some(function (value) {
    //             return filter.indexOf(value) > -1;
    //         });
    //     }).show();
    // });
    $(document.body).on("click", '.state', function (e) {
        $.each($('.state-active'), function (i, element) {
            $(this).attr('class', 'state');
        });
        $(this).attr('class', 'state-active')
    });
    $("select").change(function () {
        $(this).find("option:selected").each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".box").hide();
            }
        });
    }).change();
    // $(document.body).on("click", 'svg path', function (e){
    //     $.each($('svg').children(), function (i, element){
    //         $(this).attr('class', 'state');
    //     });
    //     $(this).attr('class', 'state-active')
    //     // $(this).attr('style', 'fill: #cc9c58');
    // });
    // $(document.body).on("click", 'svg rect', function (e) {
    //     $.each($('svg').children(), function (i, element) {
    //         $(this).attr('class', 'state');
    //     });
    //     $(this).attr('class', 'state-active')
    //     // $(this).attr('style', 'fill: #cc9c58');
    // });
})(jQuery);