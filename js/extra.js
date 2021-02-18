$.getJSON('/data/digital_skills.json', function (data) {
    var full_rows = []
    var full_heading = '';

    var state_data = data.find(d => {
        return d.State === element_state_id
    })

    // For all indicators except IWT funds
    for (var i = 0; i < number_of_indicators - 2; i++) {
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