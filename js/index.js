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
                    console.log(state_wioa_dollars);
                    console.log(state_wioa_dollars['PY 2020']);
                    $('#wioa_dollars').html(`
                        $${state_wioa_dollars['PY 2020']}
                    `)
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
                    { "L1": "Uses Statewide labor market data to identifly in-demand digital skills? "}, 
                    { "L2": "Addresses needs for digtial skills "}, 
                    { "R1": "Highlights community college efforts promoting digital skills?"}, 
                    { "R2": "Has technology-related apprenticeship program planned or in place?"},
                    // { "SF": "Stimulus funds prioritizes digital skills?"}, 
                    { "R3": "Existing online skilling tool offered and promoted by State?"}, 
                    { "L3": "Plan for addressing digital divide (broadband)?"}, 
                    { "L4": "Digital Skilling Mentioned in State of State?"}, 
                    // { "HM": "Microsoft Partnerships?"},
                    // { "SW": "State Workforce Funding"}, 
                    { "R4": "Statewide Initiatives Promoting Digital Skills"},
                ]
                var link_mapping = [
                    { "L1": "Labor market Links" },
                    { "L2": "Digital Skills Links" },
                    { "R1": "Community College Links" },
                    { "R2": "Apprenticeship Links" },
                    // { "SF": "Stimulus funds link" }, 
                    { "R3": "Skilling tool links" },
                    { "L3": "Digital Divide Links" },
                    { "L4": "State of State Links" },
                    // { "HM": "Microsoft Partnership Links" },
                    // { "SW": "Workforce Funding Links" },
                    { "R4": "Statewide initiatives links" }
                ]
                var statement_mapping = [
                    { "L1-yes": "State does identify in-demand digital skill needs using statewide data." },
                    { "L2-yes": "State has a plan to address need for digital skills." },
                    { "R1-yes": "State has community college efforts promoting digital skills." },
                    { "R2-yes": "State does have technology-related apprenticeship program planned or in place." },
                    // { "SF-yes": "Does leverage federal stimulus funds to support digital skills training." },
                    { "R3-yes": "There is an online skilling tool offered by the state." },
                    { "L3-yes": "State has a plan for addressing digital divide (broadband)." },
                    { "L4-yes": "2020 state of the state speech addressed need for digital skills training." },
                    // { "SW-yes": "There is state funding for digital skills training." },
                    { "R4-yes": "State has additional dedicated digital skills initiative(s)." },
                    { "L1-no": "State does not identify in-demand digital skill needs using statewide data." },
                    { "L2-no": "State does not have a plan to address need for digital skills." },
                    { "R1-no": "State does not have community college efforts promoting digital skills." },
                    { "R2-no": "State does not have technology-related apprenticeship program planned or in place." },
                    // { "SF-no": "Does not leverage federal stimulus funds to support digital skills training." },
                    { "R3-no": "There is not an online skilling tool offered by the state." },
                    { "L3-no": "State does not have a plan for addressing digital divide (broadband)." },
                    { "L4-no": "2020 state of the state speech did not address need for digital skills training." },
                    // { "SW-no": "There is not state funding for digital skills training." },
                    { "R4-no": "State does not have additional dedicated digital skills initiative(s)." }
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

                $('#state_plan').html(`
                    <a style="color: white;" target='_blank' href='${state_data['State WIOA Plan']}' >
                    State WIOA Five-Year Workforce Plan:</a >
                `);
                    $.each(type_mapping, function(i, type){
                    var code = Object.keys(type)[0];
                    var data_type = type[code];
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
                            if (j > 0) {
                                notes_html.push(`
                                    <li>
                                        <a href="${l}">More Information</a>
                                    </li>
                                `)
                            }
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
})(jQuery);
