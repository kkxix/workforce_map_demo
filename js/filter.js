(function () {
    $(document.body).on("click", '.dropdown-item', function (e) {
        e.preventDefault();
        var toFilter = $(this).attr('data-filters').split(',');
        console.log(toFilter);
        $('.note').hide().filter(function () {
            var filter = $(this).attr('data-filters').split(',');
            return toFilter.some(function (value) {
                return filter.indexOf(value) > -1;
            });
        }).show();
    });
})(jQuery);