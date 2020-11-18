// Load jQuery from NPM
// import $ from 'jquery';

// window.jQuery = $;
// // window.$ = $;
// 'use strict';
// const jsdom = require("jsdom").jsdom;
// global.$ = require('jquery/dist/jquery')(jsdom().createWindow());


(function () {
    var type_mapping = [
        { "L1": "State has identified in-demand digital skill needs using Statewide data? " },
        { "L2": "State has comprehensive plan to address digital skills needs?" },
        { "L3": "State has a plan for addressing digital divide (broadband)?" },
        { "L4": "Digital Skilling Mentioned in State of State:" },
        { "R1": "State has community college efforts promoting digital skills?" },
        { "R2": "State has technology-related apprenticeship program planned or in place?" },
        { "R3": "Online skilling tool offered by State?" },
        { "R4": "State has additional dedicated digital skills initiatives?" },
    ]
    var link_mapping = [
        { "L1": "Identified in-demand skills using statewide data links" },
        { "L2": "Comprehensive plan links" },
        { "L3": "Digital Divide Links" },
        { "L4": "State of State Links" },
        { "R1": "Community College Links" },
        { "R2": "Apprenticeship Links" },
        { "R3": "Skilling tool links" },
        { "R4": "Other initiatives links" }
    ]
    var statement_mapping = [
        { "L1-yes": "State <span class = 'strong-yes'> does identify in-demand digital skill needs </span> using statewide data." },
        { "L2-yes": "State <span class = 'strong-yes'> has a comprehensive plan </span> to address need for digital skills." },
        { "L3-yes": "State <span class = 'strong-yes'> has a plan for addressing digital divide </span> (broadband)." },
        { "L4-yes": "<span class = 'strong-yes'> 2020 state of the state speech addressed need </span> for digital skills training." },
        { "R1-yes": "State <span class = 'strong-yes'> has community college efforts </span> promoting digital skills." },
        { "R2-yes": "State <span class = 'strong-yes'> does have technology-related apprenticeship program </span> planned or in place." },
        { "R3-yes": "There <span class = 'strong-yes'> is an online skilling tool </span> offered by the state." },
        { "R4-yes": "State <span class = 'strong-yes'> has additional dedicated digital skills initiative(s) </span>." },

        { "L1-no": "State <span class = 'strong-no'> does not identify in-demand digital skill needs </span> using statewide data." },
        { "L2-no": "State <span class = 'strong-no'> does not have a comprehensive plan </span> to address need for digital skills." },
        { "L3-no": "State <span class = 'strong-no'> does not have a plan for addressing digital divide </span> (broadband)." },
        { "L4-no": "<span class = 'strong-no'> 2020 state of the state speech did not address need </span> for digital skills training." },
        { "R1-no": "State <span class = 'strong-no'> does not have community college efforts </span> promoting digital skills." },
        { "R2-no": "State <span class = 'strong-no'> does not have technology-related apprenticeship program </span> planned or in place." },
        { "R3-no": "There <span class = 'strong-no'> is not an online skilling tool </span> offered by the state." },
        { "R4-no": "State <span class = 'strong-no'> does not have additional dedicated digital skills initiative(s) </span>." }
    ]
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

    var active_map = 'US';
    var state_selected = false; 
    var element_state_id = '';

    // Plan vs Program controller
    var category = 'plan';


    // $('.data_tab').click(function () {
    //     if (this.id == 'plan') {
    //         $('#programs').attr('class', 'data_tab');
    //         $(this).attr('class', 'data_tab active');
    //         category = 'plan';

    //         if ($('#data_buttons').length != 0) {
    //             $('#data_buttons').empty();
    //         }
    //         $('#data_buttons').append(`
    //                 <button class='button-box' id='L1'>
    //                     <p class='category-text'>Identificaiton of digital skills</p>
    //                 </button>
    //                 <button class='button-box' id='L2'>
    //                     <p class='category-text'>Comprehensive plan for digital skills</p>
    //                 </button>
    //                 <button class='button-box' id='L3'>
    //                     <p class='category-text'>Plan for digital divide </p>
    //                 </button>
    //                 <button class='button-box' id='L4'>
    //                     <p class='category-text'>Digital skills mention in 2020 State of State </p>
    //             `);
    //         if(state_selected){
    //             colorBoxes(element_state_id);
    //         }
    //     } else { //if text == 'Programs'
    //         $('#plan').attr('class', 'data_tab');
    //         $(this).attr('class', 'data_tab active');
    //         category = 'programs';

    //         if ($('#data_buttons').length != 0) {
    //             $('#data_buttons').empty();
    //         }
    //         $('#data_buttons').append(`
    //                 <button class='button-box' id='R1'>
    //                     <p class='category-text'>Community college efforts</p>
    //                 </button>
    //                 <button class='button-box' id='R2'>
    //                     <p class='category-text'>Apprenticeship programs</p>
    //                 </button>
    //                 <button class='button-box' id='R3'>
    //                     <p class='category-text'>Online skilling tool</p>
    //                 </button>
    //                 <button class='button-box' id='R4'>
    //                     <p class='category-text'>Additional initiative(s)</p>
    //             `);
    //         if (state_selected) {
    //             colorBoxes(element_state_id);
    //         }
    //     }
    // });

    $('#plan_data_buttons').append(`
                <button class='button-box nuetral' id='L1'>
                    <p class='category-text'>Identification of digital skills</p>
                </button>
                <button class='button-box nuetral' id='L2'>
                    <p class='category-text'>Comprehensive plan for digital skills</p>
                </button>
                <button class='button-box nuetral' id='L3'>
                    <p class='category-text'>Plan for digital divide </p>
                </button>
                <button class='button-box nuetral' id='L4'>
                    <p class='category-text'>Digital skills mention in 2020 State of State </p>
                </button>
            `);

    var plan_height = $('#plan_data_buttons').height(); 
    $('#program_data_buttons').append(`
                <button class='button-box' id='R1'>
                    <p class='category-text'>Community college efforts</p>
                </button>
                <button class='button-box' id='R2'>
                    <p class='category-text'>Apprenticeship programs</p>
                </button>
                <button class='button-box' id='R3'>
                    <p class='category-text'>Online skilling tool</p>
                </button>
                <button class='button-box' id='R4'>
                    <p class='category-text'>Additional initiative(s)</p>
                </button>
                <button class="print-out">
                <a type="button" id="pdf"> <h3>Print Out</h3> </a>
                </button>   
            `);
    $('#program_data_buttons').attr('style',  `height: ${plan_height}`)
    

    // Don't know if necessary??? Maybe make a seperate nav script
    // $('.nav-link').click(function () {
    //     // TODO: if nav link is clicked, change active map 
    //     // alert($(this).text())
    // })

    $(document.body).on("click", '.state', function () {

        // Once a state has been selected, set global variables 
        state_selected = true;
        element_state_id = this.id;

        colorBoxes(element_state_id);

        if ($(`#data_content`).length) {
            $(`#data_content`).empty();
        }
        if ($(`#data_content_header`).length) {
            $(`#data_content_header`).empty();
        }
        // if ($(`#data_links`).length) {
        //     $(`#data_links`).empty();
        // }

        var state_name = state_names[element_state_id];
        $('.cover-heading').html(`${state_name} `);


        // Don't think this is necessary at this point ?
        // if (active_map == 'US') {
            // WIOA dollars
        $.getJSON("../data/wioa_dollars_20.json", function (dollars) {
            state_wioa_dollars = dollars.find(d => {
                return d.State === element_state_id
            });
            $('#dollars').html(`
                    $${state_wioa_dollars['PY 2020']}
                `);
            $('#dollar-type').html(`
                    Workforce Innovation and Opportunity Act For Adults and Dislocated Workers dollars
                `);
        });
        // $.getJSON("../data/it_jobs.json", function (jobs) {
        //     open_jobs = jobs.find(d => {
        //         return d.State === element_state_id
        //     });
        //     $('#demand').html(`
        //             ${open_jobs['jobs']}
        //         `);
        //     $('#demand-type').html(`
        //             Current Job Opening in IT
        //         `);
        // });
        // TODO: put in GSI data 

        // } //end if active_map == US
    });

    $(document.body).on("click", '.button-box', function () {

        // Find button-box id 
        var clicked_type = this.id; 

        if(state_selected){
            $.getJSON("../data/digital_skills.json", function (data) {

                var state_yes_types = [];

                // Find statename value based on type-code key
                var state_name = state_names[element_state_id];

                var state_data = data.find(d => {
                    return d.State === element_state_id
                });

                // Insead of loading all data into card-bodies, wait for click on 
                // button box, and find correlating info and display 

                // Need to atomize box coloring ... needs to happen when state is clicked, 
                // or when there is switch between plan/program && state has been clicked

                $.each(type_mapping, function (i, type) {
                    var code = Object.keys(type)[0];

                    if(clicked_type == code){
                        var data_type = type[code]
                        var note = state_data[data_type].split(";");
                        var notes_heading = []
                        var notes_html = []
                        var yes = ""
                        var no = ""
                        if (note[0].toUpperCase() == "YES") {
                            if ($(`#data_content`).length) {
                                $(`#data_content`).empty();
                            }
                            if ($(`#data_content_header`).length) {
                                $(`#data_content_header`).empty();
                            }

                            yes = `${code}-yes`;
                            notes_heading.push(`
                                <!--<img class="note-icon" id="${code}-icon" src="./img/success.png" height=".25rem" width=".25rem"/>-->
                                <h5>${statement_mapping[i][yes]}</h5></br>
                            `);
                        } else {
                            if ($(`#data_content`).length) {
                                $(`#data_content`).empty();
                            }
                            no = `${code}-no`;
                            notes_heading.push(`
                                <!-- <img class="note-icon" id="${code}-icon" src="./img/error.png" height=".25rem" width=".25rem"/>-->
                                <h5>${statement_mapping[i + 8][no]}</h5></br>
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
                        // links_html = []
                        link_type = link_mapping[i][code];
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

                        //     $(`#data_links`).html(`
                        //     <div>
                        //         ${links_html.join("")}
                        //     </div>
                        // `);
                    };
                })
            });
        }
    });



    // remove duplicates:
    function unique(list) {
        var result = [];
        $.each(list, function (i, e) {
            var trimmed = $.trim(e);
            if ($.inArray(trimmed, result) == -1) {
                result.push(trimmed);
            }
        });
        return result;
    }

    function getDifference(a, b) {
        var i = 0;
        var j = 0;
        var result = "";

        while (j < b.length) {
            if (a[i] != b[j] || i == a.length)
                result += b[j];
            else
                i++;
            j++;
        }
        return result;
    }

    function colorBoxes(element_state_id){
        $.getJSON("../data/digital_skills.json", function (data) {

            var state_data = data.find(d => {
                return d.State === element_state_id
            });

            $.each(type_mapping, function (i, type) {
                var code = Object.keys(type)[0];
                var data_type = type[code];
                var note = state_data[data_type].split(";");
         
                if (note[0].toUpperCase() == "YES") {
                    $(`#${code}`).attr('style', 'background-color: #17B890');
                } else {
                    $(`#${code}`).attr('style', 'background-color: #CF1259');
                }
            })
        });
    }

})(jQuery);
