// Load jQuery from NPM
// import $ from 'jquery';

// window.jQuery = $;
// // window.$ = $;
// 'use strict';
// const jsdom = require("jsdom").jsdom;
// global.$ = require('jquery/dist/jquery')(jsdom().createWindow());


(function(){
    var active_map = 'US';
    $('.nav-link').click(function() {
        // TODO: if nav link is clicked, change active map 
        // alert($(this).text())
    })
        $(document.body).on("click", '.state', function () {
            // $("#notesModal").modal()
            var element_state_id = this.id;
         
            if(active_map == 'US'){
                // WIOA dollars
                $.getJSON("../data/wioa_dollars_20.json", function (dollars) {
                    state_wioa_dollars = dollars.find(d => {
                        return d.State === element_state_id
                    });
                    $('#dollars').html(`
                        $${state_wioa_dollars['PY 2020']}
                    `);
                    $('#dollar-type').html(`
                        Workforce Innovation and Opportunity Act dollars
                    `);
                });
                $.getJSON("../data/it_jobs.json", function (jobs) {
                    open_jobs = jobs.find(d => {
                        return d.State === element_state_id
                    });
                    $('#demand').html(`
                        ${open_jobs['jobs']}
                    `);
                    $('#demand-type').html(`
                        Current Job Opening in IT
                    `);
                });



                // State data for cards
                // $.getJSON("../data/us_state_data_static.json", function (data) {
                $.getJSON("../data/digital_skills.json", function (data) {
                // DS --> L4
                // PF --> L3
                // LM --> L1
                // AN --> L2
                // HC --> R1
                // HT --> R2
                // EO --> R3
                // SI --> R4
                var type_mapping = [
                    { "L1": "State has identified in-demand digital skill needs using Statewide data? "}, 
                    { "L2": "State has comprehensive plan to address digital skills needs?"}, 
                    { "L3": "State has a plan for addressing digital divide (broadband)?"}, 
                    { "L4": "Digital Skilling Mentioned in State of State:"}, 
                    { "R1": "State has community college efforts promoting digital skills?"}, 
                    { "R2": "State has technology-related apprenticeship program planned or in place?"},
                    // { "SF": "Stimulus funds prioritizes digital skills?"}, 
                    { "R3": "Online skilling tool offered by State?"}, 
                    // { "HM": "Microsoft Partnerships?"},
                    // { "SW": "State Workforce Funding"}, 
                    { "R4": "State has additional dedicated digital skills initiatives?"},
                ]
                var link_mapping = [
                    { "L1": "Identified in-demand skills using statewide data links" },
                    { "L2": "Comprehensive plan links" },
                    { "L3": "Digital Divide Links" },
                    { "L4": "State of State Links" },
                    { "R1": "Community College Links" },
                    { "R2": "Apprenticeship Links" },
                    // { "SF": "Stimulus funds link" }, 
                    { "R3": "Skilling tool links" },
                    // { "HM": "Microsoft Partnership Links" },
                    // { "SW": "Workforce Funding Links" },
                    { "R4": "Other initiatives links" }
                ]
                var statement_mapping = [
                    { "L1-yes": "State <strong> does identify in-demand digital skill needs </strong> using statewide data." },
                    { "L2-yes": "State <strong> has a comprehensive plan </strong> to address need for digital skills." },
                    { "L3-yes": "State <strong> has a plan for addressing digital divide </strong> (broadband)." },
                    { "L4-yes": "<strong> 2020 state of the state speech addressed need </strong> for digital skills training." },
                    { "R1-yes": "State <strong> has community college efforts </strong> promoting digital skills." },
                    { "R2-yes": "State <strong> does have technology-related apprenticeship program </strong> planned or in place." },
                    // { "SF-yes": "Does leverage federal stimulus funds to support digital skills training." },
                    { "R3-yes": "There <strong> is an online skilling tool </strong> offered by the state." },
                    // { "SW-yes": "There is state funding for digital skills training." },
                    { "R4-yes": "State <strong> has additional dedicated digital skills initiative(s) </strong>." },
                 
                    { "L1-no": "State <strong> does not identify in-demand digital skill needs </strong> using statewide data." },
                    { "L2-no": "State <strong> does not have a comprehensive plan </strong> to address need for digital skills." },
                    { "L3-no": "State <strong> does not have a plan for addressing digital divide </strong> (broadband)." },
                    { "L4-no": "<strong> 2020 state of the state speech did not address need </strong> for digital skills training." },
                    { "R1-no": "State <strong> does not have community college efforts </strong> promoting digital skills." },
                    { "R2-no": "State <strong> does not have technology-related apprenticeship program </strong> planned or in place." },
                    // { "SF-no": "Does not leverage federal stimulus funds to support digital skills training." },
                    { "R3-no": "There <strong> is not an online skilling tool </strong> offered by the state." },
                    // { "SW-no": "There is not state funding for digital skills training." },
                    { "R4-no": "State <strong> does not have additional dedicated digital skills initiative(s) </strong>." }
                ]
                var state_yes_types = [];
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
                // Find statename value based on type-code key
                var state_name = state_names[element_state_id];

                var state_data = data.find(d => {
                    return d.State === element_state_id
                });

                // $('.modal-title').html(`<h5 class="modal-title" id="exampleModalLabel">${state_name}</h5> `);
                $('.cover-heading').html(`${state_name} `);
                if($('#pdf').length == 0){
                    $('.pdf-holder').append(`
                        <a type="button" id="pdf"> <h3>Factsheet</h3> </a>
                    `)
                }

                $('#state_plan').html(`
                    <a style="color: white;" target='_blank' href='${state_data['State WIOA Plan']}' >
                    State WIOA Five-Year Workforce Plan:</a >
                `);
                    $.each(type_mapping, function(i, type){
                    var code = Object.keys(type)[0];
                    var data_type = type[code];
                    console.log(data_type in state_data);
                    console.log(getDifference(data_type, Object.keys(state_data)[10]));

                    var note = state_data[data_type].split(";");
                    var notes_html = []
                    var yes = ""
                    var no = ""

                    if(note[0].toUpperCase() == "YES"){
                        if ($(`#${code}`).length) {
                            $(`#${code}`).empty();
                        }
                        yes = `${code}-yes`;
                        console.log(yes);
                        console.log(statement_mapping[i][yes]);
                        $(`#${code}`).html(`
                            <img class="note-icon" id="${code}-icon" src="./img/success.png" height=".25rem" width=".25rem"/>
                            ${statement_mapping[i][yes]}
                        `);
                        $(`#${code}`).attr('style', 'background-color: rgba(104, 182, 111, 0.3)');
                    } else {
                        if ($(`#${code}`).length) {
                            $(`#${code}`).empty();
                        }
                        no = `${code}-no`;
                        console.log(no);
                        console.log(statement_mapping[i+8][no])
                        $(`#${code}`).html(`
                            <img class="note-icon" id="${code}-icon" src="./img/error.png" height=".25rem" width=".25rem"/>
                            ${statement_mapping[i+8][no]}
                        `);
                        $(`#${code}`).attr('style', 'background-color: rgba(223, 127, 124, 0.31)');
                    }
                    $.each(note, function (j, n) {
                        if(j>0){
                            notes_html.push(`
                                <li>
                                    ${n}
                                </li>
                            `)
                        }
                    });

                    // id=code    background - color: rgba(104, 182, 111, 0.3); green
                    //     background-color: rgba(223, 127, 124, 0.31); red
                    // Links
                    link_type = link_mapping[i][code];
                    if(link_type in state_data){
                        var links = state_data[link_type].split(";");
                        $.each(links, function (j, l) {
                            if(j % 2 == 1) {
                                notes_html.push(`
                                    <li>
                                        <a href="${l}" target="_blank">${links[j-1]}</a>
                                    </li>
                                `)
                            };
                            // if (j > 0) {
                            //     notes_html.push(`
                            //         <li>
                            //             <a href="${l}">More Information</a>
                            //         </li>
                            //     `)
                            // }
                        });
                    }
                    $(`#${code}-body`).html(`
                            <ul>
                                ${notes_html.join("")}
                            </ul>
                        `);

                    // console.log($(`#${code}`));

                })

                // $.each(data, function (idx, obj) {
                    // if (element_state_id === obj.STATE_ID) {
                    //     var type = obj.TYPE;
                    //     var types = type.split(";");
                    //     var note_type_codes = []
                    //     $.each(types, function(i, t){
                    //         t = $.trim(t);
                    //         var words = t.split(" ");
                    //         var type_code = words[0][0].toUpperCase() + words[1][0].toUpperCase();
                    //         note_type_codes.push(type_code);
                    //         state_yes_types.push(type_code);
                    //     });
                    //     if(obj.SUB_TYPE){
                    //         $.each(obj.SUB_TYPE, function (i, t) {
                    //             t = $.trim(t);
                    //             var words = t.split(" ");
                    //             var type_code = words[0][0].toUpperCase() + words[1][0].toUpperCase();
                    //             note_type_codes.push(type_code);
                    //             state_yes_types.push(type_code);
                    //         });
                    //     }

                    //     note_type_codes = unique(note_type_codes);
                    //     $.each(note_type_codes, function(i, n){
                    //         if(notes[n]){
                    //             notes[n].push(`
                    //                 <p class='note' id='${n}${obj.UNIQUE_ID}'>${obj.NOTE}</p>
                    //             `)
                    //         }
                    //     })


                        // this will be irrelevant soon
                        // var first_type = types[0]
                        // var first_type_words = first_type.split(" ")
                        // var type_code = first_type_words[0][0].toUpperCase() + first_type_words[1][0].toUpperCase()
                        // type_codes = unique(type_codes);
                        // var data_filters = type_codes.join();


                        // Add text, link 
                        // if(obj.LINK){
                            // notes.push(`<p class='note' id='${obj.UNIQUE_ID}' data-filters='${data_filters}'>${obj.NOTE} </br> <a href='${obj.LINK}'> More information </a> </p>`); 
                            // notes.push(`<p id="note-link${idx}">${obj.LINK}</p>`)
                        // } else {
                            // notes.push(`<p class='note' id='${obj.UNIQUE_ID}' data-filters='${data_filters}'>${obj.NOTE} </p>`); 
                        // }

                        // TODO
                        // notes.push({obj.NOTE: note_type_codes})

                    // }
                // });

                // First, Y/Ns for the whole state 
                // state_yes_types = unique(state_yes_types);
                // $.each($('.btn'), function () {
                //     if ($.inArray(this.id, state_yes_types) !== -1) {
                //         $(this).attr('style', 'color:#00CC66');
                //     } else {
                //         $(this).attr('style', 'color:red');
                //     }
                // })

                // $.each($('.card-body'), function () {
                //     card_type = this.id.substring(0,2);

                // });
                
                // Create Dropdown out of relevant filter types
                // all_types = unique(all_types);
                // types_html = []
                // $.each(all_types, function(i, t){
                //     // add codes as data filters^^^
                //     var words = t.split(" ");
                //     var type_code = words[0][0].toUpperCase() + words[1][0].toUpperCase();
                //     types_html.push(`<a class='dropdown-item' data-filters='${type_code}' href='#'>${t}</a>`)
                // })
                // $(".dropdown-menu").html(types_html.join(''));
                // $(".modal-body").html(notes)
            });
            }
        });


        // remove duplicates:
    function unique(list) {
        var result = [];
        $.each(list, function (i, e) {
            var trimmed = $.trim(e);
            if($.inArray(trimmed, result) == -1){
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
})(jQuery);
