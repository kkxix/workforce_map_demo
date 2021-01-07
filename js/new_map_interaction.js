(function(){
    var state_names = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    };
    var yes_headings =[
        '<span class="strong-yes">Tracks data </span>on digital skills needs.',
        '<span class="strong-yes">Developed comprehensive plan </span>to address digital skills needs.', 
        '<span class="strong-yes">Provides direct access to free virtual digital skills training</span> through State workforce website.',
        // '<span class="strong-yes">Governor prioritizes digital skills </span>training.', 
        '<span class="strong-yes">Allows incumbent worker training funds</span> to be used for digital skills.',
        '<span class="strong-yes">Provides technology-related apprenticeship</span> opportunities.',
        '<span class="strong-yes">Community colleges driving digital skills</span>.',
        '<span class="strong-yes">Developed broadband plan</span>.',
    ]
    var no_headings = [
        '<span class="strong-no">Does not track data </span>on digital skills needs.',
        '<span class="strong-no">Has not developed comprehensive plan </span>to address digital skills needs.',
        '<span class="strong-no">Does not provide direct access to free virtual digital skills training</span> through State workforce website.',
        // '<span class="strong-no">Governor does not prioritize digital skills</span> training.',
        '<span class="strong-no">Does not allow incumbent worker training funds</span> to be used for digital skills.',
        '<span class="strong-no">Does not provide technology-related apprenticeship</span> opportunities.',
        '<span class="strong-no">Community colleges are not driving digital skills</span>.',
        '<span class="strong-no">Has not developed broadband plan</span>.',
    ]
    var number_of_indicators = 8;

    var state_is_selected = false; 
    var element_state_id = '';

    $(document.body).on('click', '.state', function(){
        state_is_selected = true;
        element_state_id = this.id;
        var state_name = state_names[element_state_id];
        icons = []
        notes = []
        rows = []

        if($('#indicators').length){
            $(`#indicators`).empty();
        }

        $('#opportunity-gap').attr('style', 'display: block;')
        $('.state-name').html(`${state_name}`)
        $('.cover-heading').html(`${state_name}`)
        

        $.getJSON("/data/skills_data_toy.json", function(data){
            var state_data = data.find(d => {
                return d.State === element_state_id
            })

            $('#supply').html(`${state_data['unemployed_without_ds']}`)
            $('#demand').html(`${state_data['jobs_with_ds']}`)
            $('#dollars').html(`${state_data['funding']}`)


            var rows = []
            var full_rows = []

            for(var i = 1; i <= number_of_indicators; i++){

                var YN_val = ''
                var yn_type = `${i}_YN`;
                var note_type = `${i}_note`;
                var full_note_type = `${i}_full_note`;
                var link_type = `${i}_links`;
                
                if(note_type in state_data){
                    var icon = ''; 
                    var heading = '';
                    var text = ''; 
                    var full_text = [];
                    var all_links = [];
                    if(yn_type in state_data){
                        if (state_data[yn_type].toUpperCase() == 'YES') {
                            // icon = `<img src="/img/success.png" style="width:2rem">`
                            icon =`
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path id="check" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                            `
                            YN_val = "YES"
                        } else {
                            // icon = `<img src="/img/error.png" style="width:2rem">`
                            icon = `
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path  id="cross" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                </svg>
                            `
                            YN_val = "NO"
                        }
                    } 
                    // else icon = nothing 
                    if (YN_val == "YES") {
                        heading = `${yes_headings[i - 1]}`
                        text = `${state_data[note_type]}`
                    } else if (YN_val == 'NO') {
                        heading = `${no_headings[i - 1]}`
                        text = `${state_data[note_type]}`
                    } else {
                        heading = `Additional Dedicated Digital Skills Activities`
                        text = `${state_data[note_type]}`
                    }

                    var note = state_data[full_note_type].split(";");
                    $.each(note, function (j, n) {
                        full_text.push(`
                            <p class="indicator-text">
                                ${n}
                            </p>
                        `)
                    })
                    if (link_type in state_data) {
                        var links = state_data[link_type].split(";");
                        $.each(links, function (j, l) {
                            if (j % 2 == 1) {
                                all_links.push(`
                                    <a class="indicator-link" href="${l}" target="_blank">${links[j - 1]}</a>,                                     
                                `)
                            };
                        });
                    }

                    rows.push(`
                        <tr>
                            <td>${icon}</td>
                            <td>
                                <h5 class="indicator-heading">${heading}<h5>
                                <p class="indicator-text">${text}<p>
                            </td>
                        </tr>
                    `)
                    full_rows.push(`
                        <div class="${i} box">
                            </br></br>
                            <h5 class="indicator-heading">${heading}<h5>
                                ${full_text.join("")}
                            <span class="indicator-text">More resources: </span>
                                ${all_links.join("")}
                        </div>
                    `)
                }
            }

            $(`#indicators`).html(`
                ${rows.join("")}
            `)
            $('#full_indicator_analysis').html(`
                ${full_rows.join('')}
            `)
        })

    })
})(jQuery)