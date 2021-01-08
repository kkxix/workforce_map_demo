(function(){

    $(document.body).on('click', '.indicator', function(){
        var indicator_index = this.id
        $.getJSON("/data/skills_data_toy.json", function(data){
            $.each(data, function(i, d){
                var state = d['State']
                if(d[`${indicator_index}_YN`].toUpperCase() === 'YES'){
                    $(`#${state}`).attr('class', 'state-yes')
                } else {
                    $(`#${state}`).attr('class', 'state-no')
                }
            })
        })
    })

})(jQuery);