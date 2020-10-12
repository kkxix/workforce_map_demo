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
    $(document.body).on("click", 'svg path', function (e){
        $.each($('svg path'), function (i, element){
            $(this).attr('class', 'state');
        });
        $(this).attr('class', 'state-active')
        // $(this).attr('style', 'fill: #cc9c58');
    })
})(jQuery);