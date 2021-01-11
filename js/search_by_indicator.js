(function(){
    var blue_ribbons = [
        {   "index": "1",
            "data": ["Georgia", "Arkansas", "Ohio"]
        },
        {
            "index": "2",
            "data": ["Washington", "Iowa", "New Jersey"]
        },
        {
            "index": "3",
            "data": ["Arizona", "Colorado", "Indiana"]
        },
        {
            "index": "5",
            "data": ["California", "New York"]
        }
    ]
    $(document.body).on('click', '.indicator', function(){
        if($('#blue-ribbons').length){
            $('#blue-ribbons').empty();
        }
        var indicator_index = this.id
        $.getJSON("/data/skills_data_toy.json", function(data){
            $.each(data, function(i, d){
                var state = d['State']
                if(d[`${indicator_index}_YN`].toUpperCase().trim() === 'YES'){
                    $(`#${state}`).attr('class', 'state-yes')
                } else {
                    $(`#${state}`).attr('class', 'state-no')
                }
            })
        })

        var ribbon_states = blue_ribbons.find(d => {
            return d.index === indicator_index
        })
        ribbons_html = []
        $.each(ribbon_states.data, function(j,state){
            ribbons_html.push(`
                <a class="btn btn-outline-secondary ribbon-state" href="/pages/us_map.html" id="${state}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path id="ribbon" d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                    </svg>
                    ${state}
                </a>
            `)
        })
        $('#blue-ribbons').html(`
            <h5>Blue Ribbon States: </h5>
            ${ribbons_html.join("")}
        `)
    })

    $(document.body).on('click', '.ribbon-state', function () {
        localStorage.setItem('objectToPass', `${this.id}`);
    })

})(jQuery);