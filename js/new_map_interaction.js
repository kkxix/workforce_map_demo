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
    // URGENT TODO -- fix the order / generally fix the way the 'full content' is generated
    // it's currently a maaaassssive mess 
    var type_mappings = [
        "State has identified in-demand digital skill needs using Statewide data? ",
        "State has comprehensive plan to address digital skills needs?",
        "Online skilling tool offered by State?",
        "Digital Skilling Mentioned in State of State:",
        "State has technology-related apprenticeship program planned or in place?",
        "State has community college efforts promoting digital skills?",
        "State has a plan for addressing digital divide (broadband)?",
        "iwt_note",
        "State has additional dedicated digital skills initiatives?"
    ]
    var link_mappings = [
        "Identified in-demand skills using statewide data links",
        "Comprehensive plan links",
        "Skilling tool links",
        "State of State Links",
        "Apprenticeship Links",
        "Community College Links",
        "Digital Divide Links",
        "iwt_links",
        "Other initiatives links"
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

        state_data_iwt = {};
        $.getJSON("/data/iwt_funding.json", function (data) {
            state_data_iwt = data.find(d => {
                return d.State === element_state_id
            });
            $('#iwt-dollars').html(`
                    ${state_data_iwt['iwt_number']}
                `);
            $('#iwt-dollar-type').html(`
                    Annual state funding for incumbent worker training in ${state_names[element_state_id]}. 
                    <a target="_blank" href="https://www.nationalskillscoalition.org/resources/publications/file/Funding-Resilience-National-Skills-Coalition-digital-August-2020.pdf">
                        Source
                    </a>
                `);
        })
        $.getJSON("../data/workforce_numbers.json", function (data) {
            var state_data = data.find(d => {
                return d.State === element_state_id
            });
            $('#dollars').html(`
                    ${state_data['dollars']}
                `);
            $('#dollar-type').html(`
                    Federal dislocated worker funding per unemployed person in ${state_names[element_state_id]}. 
                `);
            $('#demand').html(`
                    ${state_data['demand']}
                `);
            $('#demand-type').html(`
                    Open digital skills jobs. 
                `);
            $('#supply').html(`
                    ${state_data['supply-PIACC']}
                `);
            $('#supply-type').html(`
                    Unemployed lacking digital skills. 
                `);
            $('#EL').html(`
                    ${state_data['Engaged Learners']}
                `);
            $('#LP').html(`
                    ${state_data['LPs complete']}
                `);
        });
        $.getJSON('/data/digital_skills.json', function (data){
            var full_rows = []
            var full_heading = '';

            var state_data = data.find(d => {
                return d.State === element_state_id
            })

            // For all indicators except IWT funds
            for(var i = 0; i < number_of_indicators-2; i++){
                var data_type = type_mappings[i]
                var link_type = link_mappings[i]
                var note = state_data[data_type].split(";");
                var full_notes = []
                var full_links = []

                if (note[0].toUpperCase() == "YES") {
                    full_heading = yes_headings[i]
                } else {
                    full_heading = no_headings[i]
                }
                $.each(note, function (j, n) {
                    if (j > 0) {
                        full_notes.push(`
                                <p class="indicator-text">
                                    ${n}
                                </p>
                            `)
                    }
                });
                if (link_type in state_data) {
                    var links = state_data[link_type].split(";");
                    $.each(links, function (j, l) {
                        if (j % 2 == 1) {
                            full_links.push(`
                                    <a class="indicator-link" href="${l}" target="_blank">${links[j - 1]}</a>,                                     
                                `)
                        };
                    });
                }
                
                full_rows.push(`
                    </br></br>
                    <h5 class="indicator-heading">${full_heading}<h5>
                    ${full_notes.join("")}
                    <span class="indicator-text">More resources: </span>${full_links.join("")}
                `)
            }

            // IWT hard-coded :/
            var full_notes_iwt = []
            var full_links_iwt = []
            var full_rows_iwt = []
            var yn_val = state_data_iwt['iwt_YN']
            var data_type = type_mappings[7]
            var link_type = link_mappings[7]
            var note_iwt = state_data_iwt[data_type].split(";");

            if (yn_val == "YES") {
                full_heading = yes_headings[7]
            } else {
                full_heading = no_headings[7]
            }
            $.each(note_iwt, function (j, n) {
                if (j > 0) {
                    full_notes_iwt.push(`
                                <p class="indicator-text">
                                    ${n}
                                </p>
                            `)
                }
            });
            if (link_type in state_data_iwt) {
                var links = state_data_iwt[link_type].split(";");
                $.each(links, function (j, l) {
                    if (j % 2 == 1) {
                        full_links_iwt.push(`
                                    <a class="indicator-link" href="${l}" target="_blank">${links[j - 1]}</a>,
                                `)
                    };
                });
            }
            full_rows_iwt.push(`
                    </br></br>
                    <h5 class="indicator-heading">${full_heading}<h5>
                    ${full_notes_iwt.join("")}
                    <span class="indicator-text">More resources: </span>${full_links_iwt.join("")}
                `)

            // Additional Initiatives hard-coded :/ :/ not cool
            var full_notes_9 = []
            var full_links_9 = []
            var full_rows_9 = []
            var data_type = type_mappings[8]
            var link_type = type_mappings[8]
            var note_9 = state_data[data_type].split(";");

            full_heading = `Additional Dedicated Digital Skills Activities`
            $.each(note_9, function (j, n) {
                if (j > 0) {
                    full_notes_9.push(`
                                <p class="indicator-text">
                                    ${n}
                                </p>
                            `)
                }
            });
            if (link_type in state_data) {
                var links = state_data[link_type].split(";");
                $.each(links, function (j, l) {
                    if (j % 2 == 1) {
                        full_links_9.push(`
                                    <a class="indicator-link" href="${l}" target="_blank">${links[j - 1]}</a>
                                `)
                    };
                });
            }
            full_rows_9.push(`
                    </br></br>
                    <h5 class="indicator-heading">${full_heading}<h5>
                    ${full_notes_9.join("")}
                    <span class="indicator-text">More resources: </span>${full_links_9.join("")}
                `)
            
            $('#full_indicator_analysis').html(`
                ${full_rows.join('')}
                ${full_rows_iwt.join('')}
                ${full_rows_9.join('')}
            `)
        })

        $.getJSON("/data/skills_data_toy.json", function(data){
            var state_data = data.find(d => {
                return d.State === element_state_id
            })
            var rows = []

            for(var i = 1; i <= number_of_indicators; i++){

                var YN_val = ''
                var yn_type = `${i}_YN`;
                var note_type = `${i}_note`;
                
                if(note_type in state_data){
                    var icon = ''; 
                    var heading = '';
                    var text = ''; 
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

                    rows.push(`
                        <tr>
                            <td>${icon}</td>
                            <td>
                                <h5 class="indicator-heading">${heading}<h5>
                                <p class="indicator-text">${text}<p>
                            </td>
                        </tr>
                    `)
                }
            }

            $(`#indicators`).html(`
                ${rows.join("")}
            `)
        })

    })
})(jQuery)