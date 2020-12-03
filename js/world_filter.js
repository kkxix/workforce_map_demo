(function() {
    $(document.body).on("click", 'path', function(e){
        $.each($('path'), function(i, element){
            $(this).attr('class', 'state');
        });
        $(this).attr('class', 'state-active')
    });
})(jQuery)