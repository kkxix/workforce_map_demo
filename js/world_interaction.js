(function () {
    $(document.body).on("click", '.state', function () {
        var state_name = $(this).attr('data-name');
        $('.cover-heading').html(`${state_name}`);
    });
})(jQuery);
