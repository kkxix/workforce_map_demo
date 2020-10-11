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
                // $.getJSON("../data/us_state_data_static.json", function (data) {
                $.getJSON("../data/digital_skills.json", function (data) {
                // var notes = [
                //     {'AN': []},
                //     {'ID': []},
                //     {'HT': []},
                //     {'SD': []},
                //     {'VP': []},
                //     {'PP': []},
                //     {'DA': []},
                //     {'SDO': []},
                //     {'SF': []},
                //     {'EO': []},
                //     {'PF': []},
                //     {'DS': []},
                //     {'HM': []},
                //     {'IA': []},
                //     {'SG': []},
                //     {'AP': []},
                //     {'HMO': []}
                // ];
                var type_mapping = [
                    { "LM": "Uses Statewide labor market data to identifly in-demand digital skills? "}, 
                    { "AN": "Addresses needs for digtial skills "}, 
                    { "HC": "Highlights community college efforts promoting digital skills?"}, 
                    { "HT": "Has technology-related apprenticeship program planned or in place?"},
                    { "SF": "Stimulus funds prioritizes digital skills?"}, 
                    { "EO": "Existing online skilling tool offered and promoted by State?"}, 
                    { "PF": "Plan for addressing digital divide (broadband)?"}, 
                    { "DS": "Digital Skilling Mentioned in State of State?"}, 
                    { "HM": "Microsoft Partnerships?"},
                    { "SW": "State Workforce Funding"}, 
                    { "SI": "Statewide Initiatives Promoting Digital Skills"},
                ]
                var link_mapping = [
                    { "LM": "Labor market Links" },
                    { "AN": "Digital Skills Links" },
                    { "HC": "Community College Links" },
                    { "HT": "Apprenticeship Links" },
                    { "SF": "Stimulus funds link" }, 
                    { "EO": "Skilling tool links" },
                    { "PF": "Digital Divide Links" },
                    { "DS": "State of State Links" },
                    { "HM": "Microsoft Partnership Links" },
                    { "SW": "Workforce Funding Links" },
                    { "SI": "Statewide initiatives links" }
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
                console.log(state_data);

                // $('.modal-title').html(`<h5 class="modal-title" id="exampleModalLabel">${state_name}</h5> `);
                $('.cover-heading').html(`<a style="color: white;" target='_blank' href='${state_data['State WIOA Plan']}'>${state_name} State Plan</a>`);

                $.each(type_mapping, function(i, type){
                    var code = Object.keys(type)[0];
                    var data_type = type[code];
                    var note = state_data[data_type].split(";");
                    var notes_html = []

                    if(note[0].toUpperCase() == "YES"){
                        $(`#${code}`).attr('style', 'color:#00CC66');
                    } else {
                        $(`#${code}`).attr('style', 'color: red');
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

                    // Links
                    link_type = link_mapping[i][code];
                    console.log(link_type);
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
                                ${notes_html.join()}
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
