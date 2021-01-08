(function () {
    var type_mapping = [
        "digital_skills_note",
        "broadband_note",
        "unemployment",
        "ICT_rank",
        "internet_users",
        "internet_access",
        "unemployment_type",
        "ICT_rank_type",
        "internet_users_type",
        "internet_access_type"
    ]

    var state_selected = false; 
    var state_name = '';

    $(document.body).on('click', '.state', function(){
        state_is_selected = true;
        var state_name = $(this).attr('data-name');

        $('#country_name').html(`${state_name}`)

        $.getJSON("/data/world_skills.json", function(data){
            var state_data = data.find(d => {
                return d.country === state_name
            })

            $.each(type_mapping, function(i, t){
                $(`#${t}`).html(`
                    ${state_data[t]}
                `)
            })

        })
    })

})(jQuery);
