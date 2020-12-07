(function () {
    var type_mapping = [
        { "R1": "plan_digital_skills" },
        { "R2": "broadband_plan" },
        { "R3": "programs_digital_skills" }
    ]
    var link_mapping = [
        { "R1": "plan_links" },
        { "R2": "broadband_links" },
        { "R3": "programs_links" }
    ]
    var statement_mapping = [
        { "R1-yes": "Country <span class = 'strong-yes'> has a plan to address digital skills.</span>" },
        { "R2-yes": "Country <span class = 'strong-yes'> has a broadband plan.</span>" },
        { "R3-yes": "Country <span class = 'strong-yes'> has program(s) in place </span> to address digital skills." },

        { "R1-no": "Country <span class = 'strong-no'> does not have a plan to address digital skills.</span>" },
        { "R2-no": "Country <span class = 'strong-no'> does not have a broadband plan.</span>" },
        { "R3-no": "Country <span class = 'strong-no'> does not have any program in place </span> to address digital skills." }
    ]

    var state_selected = false; 
    var state_name = '';

    $('#program_data_buttons').append(`
                <button class='button-box' id='R1'>
                    <p class='category-text'>Plan for digital skills</p>
                </button>
                <button class='button-box' id='R2'>
                    <p class='category-text'>Plan for digital divide</p>
                </button>
                <button class='button-box' id='R3'>
                    <p class='category-text'>Programs in place</p>
                </button>
            `);

    $(document.body).on("click", '.state', function () {

        state_selected = true;
        state_name = $(this).attr('data-name');

        colorBoxes(state_name);

        if ($(`#data_content`).length) {
            $(`#data_content`).empty();
        }
        if ($(`#data_content_header`).length) {
            $(`#data_content_header`).empty();
        }

        $('.cover-heading').html(`${state_name}`);

        $.getJSON('/data/world_skills.json', function(data){
            var state_data = data.find(d => {
                return d.country === state_name
            });

            $('#individuals_have_digital_skills').html(`
                ${state_data['individuals_have_digital_skills']}
            `)
            $('#individuals_have_digital_skills_type').html(`
                ${state_data['individuals_have_digital_skills_type']}. 
                <a target="_blank" href=${state_data['individuals_have_digital_skills_source']}> Source </a>
            `)

            $('#jobs_use_computer').html(`
                ${state_data['jobs_use_computer']}
            `)
            $('#jobs_use_computer_type').html(`
                ${state_data['jobs_use_computer_type']}. 
                <a target="_blank" href=${state_data['jobs_use_computer_source']}> Source </a>
            `)

            $('#individuals_self_improve_cities').html(`
                ${state_data['individuals_self_improve_cities']}
            `)
            $('#individuals_self_improve_type').html(`
                ${state_data['individuals_self_improve_type']} in cities. 
                <a target="_blank" href=${state_data['individuals_self_improve_source']}> Source </a>
            `)

            $('#individuals_self_improve_suburbs').html(`
                ${state_data['individuals_self_improve_suburbs']}
            `)
            $('#individuals_self_improve_suburbs_type').html(`
                ${state_data['individuals_self_improve_type']} in the suburbs. 
                <a target="_blank" href=${state_data['individuals_self_improve_source']}> Source </a>
            `)

            $('#individuals_self_improve_rural').html(`
                ${state_data['individuals_self_improve_rural']}
            `)
            $('#individuals_self_improve_rural_type').html(`
                ${state_data['individuals_self_improve_type']} in rural areas. 
                <a target="_blank" href=${state_data['individuals_self_improve_source']}> Source </a>
            `)

            // Load first indicator 
            var data_type = type_mapping[0]['R1']
            var note = state_data[data_type].split(";");
            var notes_heading = []
            var notes_html = []
            if ($(`#data_content`).length) {
                $(`#data_content`).empty();
            }
            if ($(`#data_content_header`).length) {
                $(`#data_content_header`).empty();
            }
            if (note[0].toUpperCase() == "YES") {
                notes_heading.push(`
                                <h5>${statement_mapping[0][`R1-yes`]}</h5></br>
                            `);
            } else {
                notes_heading.push(`
                                <h5>${statement_mapping[3][`R1-no`]}</h5></br>
                            `);
            }

            $.each(note, function (j, n) {
                if (j > 0) {
                    notes_html.push(`
                                <p>
                                    ${n}
                                </p>
                            `)
                }
            });

            // Links
            link_type = link_mapping[0]['R1'];
            if (link_type in state_data) {
                var links = state_data[link_type].split(";");
                $.each(links, function (j, l) {
                    if (j % 2 == 1) {
                        notes_html.push(`
                                <p>
                                    <a href="${l}" target="_blank">${links[j - 1]}</a>
                                </p>
                            `)
                    };
                });
            }
            $(`#data_content_header`).html(`
                        <div>
                            ${notes_heading.join("")}
                        </div>
                        `);

            $(`#data_content`).html(`
                        <div>
                            ${notes_html.join("")}
                        </div>
                        `);
        })
    });


    $(document.body).on('click', '.button-box', function(){

        // Find button-box id 
        var clicked_type = this.id

        if(state_selected){
            $.getJSON('/data/world_skills.json', function(data){
                var state_data = data.find( d => {
                    return d.country === state_name
                });

                $.each(type_mapping, function(i, type){
                    var code = Object.keys(type)[0];

                    if(clicked_type === code){
                        var data_type = type[code]

                        var note = state_data[data_type].split(';');
                        var notes_heading = [];
                        var notes_html = [];
                        var yes = "";
                        var no = "";

                        if ($(`#data_content`).length) {
                            $(`#data_content`).empty();
                        }
                        if ($(`#data_content_header`).length) {
                            $(`#data_content_header`).empty();
                        }

                        if (note[0].toUpperCase() == "YES"){
                            yes = `${code}-yes`;
                            notes_heading.push(`
                                <!--<img class="note-icon" id="${code}-icon" src="./img/success.png" height=".25rem" width=".25rem"/>-->
                                <h5>${statement_mapping[i][yes]}</h5></br>
                            `);
                        } else {
                            no = `${code}-no`;
                            notes_heading.push(`
                                <!-- <img class="note-icon" id="${code}-icon" src="./img/error.png" height=".25rem" width=".25rem"/>-->
                                <h5>${statement_mapping[i + 3][no]}</h5></br>
                            `);
                        }

                        $.each(note, function (j, n) {
                            if (j > 0) {
                                notes_html.push(`
                                <p>
                                    ${n}
                                </p>
                            `)
                            }
                        });

                        if (link_type in state_data) {
                            if ($(`#data_links`).length) {
                                $(`#data_links`).empty();
                            }
                            var links = state_data[link_type].split(";");
                            $.each(links, function (j, l) {
                                if (j % 2 == 1) {
                                    notes_html.push(`
                                    <p>
                                        <a href="${l}" target="_blank">${links[j - 1]}</a>
                                    </p>
                                `)
                                };
                            });
                        }

                        $(`#data_content_header`).html(`
                        <div>
                            ${notes_heading.join("")}
                        </div>
                        `);

                        $(`#data_content`).html(`
                        <div>
                            ${notes_html.join("")}
                        </div>
                        `);
                    }
                })
            });
        }

    })

    function colorBoxes(state_name) {

        $.getJSON("/data/world_skills.json", function (data) {

            var state_data = data.find(d => {
                return d.country === state_name
            });

            $.each(type_mapping, function (i, type) {
                var code = Object.keys(type)[0];
                var data_type = type[code];
    
                var note = state_data[data_type].split(";");

                if (note[0].toUpperCase() == "YES") {
                    $(`#${code}`).attr('style', 'background-color: #7FBC00');
                } else {
                    $(`#${code}`).attr('style', 'background-color: #F34F1C');
                }
            })
        });
    }

})(jQuery);
