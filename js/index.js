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
                $.getJSON("../data/workforce_notes_updated.json", function (data) {
                var notes = [];
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

                // $('.modal-title').html(`<h5 class="modal-title" id="exampleModalLabel">${state_name}</h5> `);
                $('.cover-heading').html(`${state_name}`);

                $.each(data, function (idx, obj) {
                    if (element_state_id === obj.STATE_ID) {
                        var type = obj.TYPE;
                        var types = type.split(";");
                        var note_type_codes = []
                        $.each(types, function(i, t){
                            t = $.trim(t);
                            var words = t.split(" ");
                            var type_code = words[0][0].toUpperCase() + words[1][0].toUpperCase();
                            note_type_codes.push(type_code);
                            state_yes_types.push(type_code);
                        });
                        if(obj.SUB_TYPE){
                            $.each(obj.SUB_TYPE, function (i, t) {
                                t = $.trim(t);
                                var words = t.split(" ");
                                var type_code = words[0][0].toUpperCase() + words[1][0].toUpperCase();
                                note_type_codes.push(type_code);
                                state_yes_types.push(type_code);
                            });
                        }


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

                    }
                });

                // First, Y/Ns for the whole state 
                state_yes_types = unique(state_yes_types);
                $.each($('.btn'), function () {
                    if ($.inArray(this.id, state_yes_types) !== -1) {
                        $(this).attr('style', 'color:#00CC66');
                    } else {
                        $(this).attr('style', 'color:red');
                    }
                })

                $.each($('.card-body'), function () {
                    card_type = this.id.substring(0,2);

                });
                
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
